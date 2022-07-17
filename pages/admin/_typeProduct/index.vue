<template>
  <div class="w-full px-10 flex flex-col gap-6">
    <span class="text-2xl font-bold">{{ product }}</span>

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

      <button @click="inputContext
      "
        class="bg-[#ee6f57] flex items-center gap-2 text-white px-5 py-3 rounded-md"
      >
        <svg
          width="28"
          height="29"
          viewBox="0 0 28 29"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.0756 23.8333V14.6503M14.0756 14.6503V5.46729M14.0756 14.6503H23.2586M14.0756 14.6503H4.89258"
            stroke="white"
            stroke-width="4.5915"
            stroke-linecap="round"
          />
        </svg>

        <p>Tambah</p>
      </button>
    </div>

    <!-- Start success card -->

    <div class="w-full px-4 flex flex-col gap-6 py-3 bg-[#145374] rounded-md">
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
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          class="bi bi-x fill-white"
          viewBox="0 0 16 16"
        >
          <path
            d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
          />
        </svg>
      </div>

      <p class="text-white font-light">Data user berhasil disimpan.</p>
    </div>
    <!-- End Of success card -->

    <!-- Start Pagination -->
    <div
      class="w-full px-10 flex flex-col bg-white border-t-[10px] border-[#145374] rounded-md"
    >
      <PaginationPoin :User="getStok" />
    </div>
    <!-- End of Pagination -->
  </div>
</template>
<script>
export default {
  layout: 'admin',
  data() {
    return {
      product: '',
      tokens: ''
    }
  },

  computed:{
    getStok(){
      return this.$store.state.adminStock.Stok
    }
  },

  created() {
    this.tokens = this.$store.state.adminAuth.token
    const tokens = this.$store.state.adminAuth.token
    this.product = this.$route.params.typeProduct
    this.$store.dispatch('adminStock/getAllStok', {
      token: tokens,
    })
    
  },


  methods: {
    inputContext(){
      this.$router.push({
        name: 'admin-typeProduct-input',
        params: {
          typeProduct: this.product
        }
      })
    }
  },

}
</script>
