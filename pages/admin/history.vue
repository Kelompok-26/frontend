<template>
  <div class="w-full px-10 flex flex-col gap-6">
    <span class="text-2xl font-bold">Riwayat Transaksi</span>
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
    </div>

    <!-- Start Pagination -->
    <div
      class="w-full px-10 flex flex-col bg-white border-t-[10px] border-[#145374] rounded-md"
    >
      <PaginationHistory :User="getTrans" />
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
    getTrans() {
      return this.$store.state.adminTrasanctions.Tran
    },
  },
  created() {
    this.tokens = this.$store.state.adminAuth.token
    const tokens = this.$store.state.adminAuth.token
    this.$store.dispatch('adminTrasanctions/getAllTransaction', {
      token: tokens,
    })
  },
}
</script>
