<template>
  <div class="w-full px-10 flex flex-col gap-6">
    <span class="text-2xl font-bold">Data Users</span>
    <div class="w-full flex justify-between gap-5">
      <div class="flex justify-evenly relative rounded">
        <button class="absolute inset-y-0 left-2">
          <svg
            class="h-6 w-6 stroke stroke-black"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
          >
            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
        </button>
        <input
          type="search"
          class="rounded-xl form-control inline-block min-w-0 pl-10 px-3 py-1.5 text-base font-normal w-96 text-gray-700 bg-white bg-clip-padding transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          placeholder="Cari Pengguna"
          aria-label="Search"
          aria-describedby="button-addon2"
        />
      </div>

      <button
        @click="refresh"
        class="bg-[#145374] flex items-center gap-2 text-white px-5 py-3 rounded-md"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          fill="currentColor"
          class="bi bi-arrow-clockwise stroke-white"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"
          />
          <path
            d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"
          />
        </svg>
        <p>Refresh</p>
      </button>
    </div>

    <!-- Start success card -->

    <div
      class="w-full px-4 flex flex-col gap-6 py-3 bg-[#145374] rounded-md"
      v-if="getMes"
    >
      <div class="flex justify-between">
        <div class="flex items-center gap-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="#EE6F57"
            class="bi bi-check-circle-fill"
            viewBox="0 0 16 16"
          >
            <path
              d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"
            />
          </svg>
          <span class="text-white">Success!</span>
        </div>

        <svg
          @click="closeMes"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          class="bi bi-x fill-white cursor-pointer"
          viewBox="0 0 16 16"
        >
          <path
            d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
          />
        </svg>
      </div>

      <p class="text-white font-light">{{ getIsiMes }}</p>
    </div>
    <!-- End Of success card -->

    <!-- Start Pagination -->
    <div
      class="w-full px-10 flex flex-col border-t-[10px] border-[#145374] rounded-md"
    >
      <Pagination :User="getUser" :tokens="tokens" />
    </div>
    <!-- End of Pagination -->
  </div>
</template>
<script>
export default {
  layout: 'admin',
  data() {
    return {
      tokens: '',
    }
  },

  computed: {
    getMes() {
      return this.$store.state.adminUser.mes
    },
    getIsiMes() {
      return this.$store.state.adminUser.Isimes
    },
    getUser() {
      return this.$store.state.adminUser.adminUser
    },
  },
  async created() {
    this.$nuxt.refresh()
    this.tokens = this.$store.state.adminAuth.token
    const tokens = this.$store.state.adminAuth.token
    await this.$store.dispatch('adminUser/getAllUser', {
      token: tokens,
    })
  },

  methods: {
    async closeMes() {
      await this.$store.dispatch('adminUser/closeMes')
    },
    refresh() {
      this.$nuxt.refresh()
    },
  },
}
</script>
