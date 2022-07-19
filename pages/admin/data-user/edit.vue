<template>
  <div class="w-full px-10 flex flex-col gap-4">
    <div
      class="fixed bg-black/50 w-full min-h-screen h-full left-0 top-0"
      v-if="loading"
    >
      <div class="flex items-center justify-center h-screen">
        <button
          :class="{
            'scale-0': !loading,
            'scale-100': loading,
          }"
          type="button"
          class="inline-flex items-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md text-white bg-[#145374] transition ease-in-out duration-300"
        >
          <svg
            class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              class="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              stroke-width="4"
            ></circle>
            <path
              class="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          Processing...
        </button>
      </div>
    </div>
    <span class="text-2xl font-bold">Data User</span>
    <div class="flex items-center justify-end gap-5">
      <p class="text-[#00334E]">Beranda</p>
      <svg
        class="bi bi-chevron-right"
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
        />
      </svg>
      <p class="text-[#00334E]"></p>
    </div>

    <form
      action=""
      class="w-full px-10 flex flex-col bg-white border-t-[10px] border-[#145374] rounded-md"
    >
      <div class="flex flex-col items-center justify-center py-10 gap-6">
        <div class="flex gap-4 justify-between items-center">
          <label class="text-black">Point</label>
          <input
            v-model.number="point"
            type="text"
            class="w-96 border border-gray-400 rounded-md py-2 px-4 text-black"
          />
        </div>
      </div>

      <!-- Button -->
      <div class="w-1/2 flex pb-5 justify-end">
        <div class="w-96 flex justify-between">
          <button
            class="bg-[#145374] text-white px-5 py-3 rounded-md"
            @click.prevent="editPoint"
          >
            Simpan
          </button>
          <button
            class="bg-[#145374] text-white px-8 py-3 rounded-md"
            @click="backPage"
          >
            Batal
          </button>
        </div>
      </div>
      <!-- End of Button -->
    </form>
  </div>
</template>
<script>
export default {
  layout: 'admin',
  data() {
    return {
      User: [],
      Id: null,
      tokens: '',
      point: Number,
      loading: false,
    }
  },

  computed: {},

  methods: {
    async editPoint() {
      this.loading = true
      const point = {
        point: this.point,
      }
      const config = {
        method: 'PUT',
        url: `http://ec2-54-160-45-255.compute-1.amazonaws.com:8080/v1/users/${this.Id}/point
`,
        headers: {
          Authorization: `Bearer ${this.tokens}`,
        },
        data: point,
      }

      await this.$axios(config)
        .then((res) =>
          this.$store.dispatch('adminUser/messageUser', {
            message: res.data.message,
          })
        )
        .catch((error) => console.log(error))
        .finally(() => (this.loading = false))

      await this.$store.dispatch('adminUser/getAllUser', {
        token: this.tokens,
      })
      this.$router.push('/admin/data-user/')
    },

    backPage() {
      this.$router.push('/admin/data-user/')
    },
  },
  created() {
    this.tokens = this.$store.state.adminAuth.token
    this.Id = this.$store.state.adminUser.Id
    this.tokens = this.$store.state.adminUser.token
    this.User = this.$store.state.adminUser.adminUser
    this.point = this.$store.state.adminUser.point
  },
}
</script>
