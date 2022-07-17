<template>
  <div class="w-full px-10 flex flex-col gap-4">
    <span class="text-2xl font-bold">Edit {{ type_product }}</span>

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
      <p class="text-[#00334E]">Cashout</p>

      <button
        class="bg-[#EE6F57] flex items-center gap-2 text-white px-4 py-3 rounded-md"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-plus-lg stroke-white stroke"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
          />
        </svg>
        <p>Tambah</p>
      </button>
    </div>

    <form
      action=""
      class="w-full px-10 flex flex-col bg-white border-t-[10px] border-[#145374] rounded-md"
    >
      <div class="flex flex-col w-1/2 py-10 gap-6">
        <div class="flex justify-between items-center">
          <label class="text-black">Tipe Produk</label>
          <input
            disabled
            v-model="type_product"
            type="text"
            class="w-96 border border-gray-400 rounded-md py-2 px-4 text-black"
          />
        </div>

        <div class="flex justify-between items-center">
          <label class="text-black">Nama Produk</label>
          <input
            v-model="product_name"
            type="text"
            class="w-96 border border-gray-400 rounded-md py-2 px-4 text-black"
          />
        </div>

        <div class="flex justify-between items-center">
          <label class="text-black">Provider</label>
          <input
            v-model="provider_name"
            type="text"
            class="w-96 border border-gray-400 rounded-md py-2 px-4 text-black"
          />
        </div>

        <div class="flex justify-between items-center">
          <label class="text-black">Nominal</label>
          <input
            v-model="nominal"
            type="text"
            class="w-96 border border-gray-400 rounded-md py-2 px-4 text-black"
          />
        </div>

        <div class="flex justify-between items-center">
          <label class="text-black">Point</label>
          <input
            v-model="point"
            type="text"
            class="w-96 border border-gray-400 rounded-md py-2 px-4 text-black"
          />
        </div>

        <div class="flex justify-between items-center">
          <label class="text-black">Stock</label>
          <input
            v-model="stock"
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
            @click.prevent="editData"
          >
            Simpan
          </button>
          <button class="bg-[#145374] text-white px-8 py-3 rounded-md">
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
  name: 'input-add',
  layout: 'admin',
  data() {
    return {
      tokens: '',
      type_product: null,
      product_name: null,
      provider_name: null,
      nominal: null,
      point: null,
      stock: null,
    }
  },

  created() {
    this.tokens = this.$store.state.adminUser.token
    this.type_product = this.$store.state.adminProduct.tipeProd
    this.product_name = this.$store.state.adminProduct.name
    this.provider_name = this.$store.state.adminProduct.provider
    this.nominal = this.$store.state.adminProduct.nominal
    this.point = this.$store.state.adminProduct.poin
    this.stock = this.$store.state.adminProduct.stok
    this.id = this.$store.state.adminProduct.id
  },
  methods: {
    editData() {
      const produk = {
        type_product: this.type_product,
        product_name: this.product_name,
        provider_name: this.provider_name,
        nominal: this.nominal,
        point: this.point,
        stock: this.stock,
      }
      const config = {
        method: 'PUT',
        url: `http://ec2-54-160-45-255.compute-1.amazonaws.com:8080/v1/products/update/${this.id}
`,
        headers: {
          Authorization: `Bearer ${this.tokens}`,
        },
        data: produk,
      }

      this.$axios(config).then((res) => console.log(res))

      //   this.$router.push({
      //     name: 'admin-typeProduct',
      //     params: {
      //       typeProduct: this.type_product,
      //     },
      //   })
    },
  },
}
</script>
