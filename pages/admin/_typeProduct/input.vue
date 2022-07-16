<template>
  <div class="w-full px-10 flex flex-col gap-4">
    <span class="text-2xl font-bold">Input <span>{{type_product}}</span> </span>

    <div class="flex items-center justify-end gap-5">
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
      method="post"
      class="w-full px-10 flex flex-col bg-white border-t-[10px] border-[#145374] rounded-md"
    >
      <div class="flex flex-col w-1/2 py-10 gap-6">

      <!-- 1 -->
        <div class="flex justify-between items-center">
          <label class="text-black" v-if="type_product === 'Paket Data'">Provider</label>
          <label class="text-black" v-if="type_product === 'Pulsa'">Provider</label>
          <label class="text-black" v-if="type_product === 'Cashout'">Provider</label>
          <label class="text-black" v-if="type_product === 'E-Money'">Provider</label>
          
          <div class="flex flex-col" v-if="type_product === 'Paket Data'">
            <div
              class="flex justify-between items-start w-96 border border-gray-400 rounded-md py-2 px-4 text-black cursor-pointer"
              @click="isVisible = true"
            >
              <p>{{pilih}}</p>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-caret-down-fill fill-gray-500"
                viewBox="0 0 16 16"
              >
                <path
                  d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"
                />
              </svg>
            </div>

            <div
              v-if="isVisible"
              class="mt-11 z-10 absolute bg-white divide-y divide-gray-100 rounded shadow w-96 dark:bg-gray-700"
            >
              <ul
                v-for="(value,idx) in provider" :key="idx"
                class="py-1 text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownDefault"
              >
                <li 
                  @click="choose(idx)"
                >
                  <a
                    href="#"
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >{{value.name}}</a
                  >
                </li>
                
              </ul>
            </div>
          </div>

          <div class="flex flex-col" v-if="type_product === 'Pulsa'">
            <div
              class="flex justify-between items-start w-96 border border-gray-400 rounded-md py-2 px-4 text-black cursor-pointer"
              @click="isVisible = true"
            >
              <p>{{pilih}}</p>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-caret-down-fill fill-gray-500"
                viewBox="0 0 16 16"
              >
                <path
                  d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"
                />
              </svg>
            </div>

            <div
              v-if="isVisible"
              class="mt-11 z-10 absolute bg-white divide-y divide-gray-100 rounded shadow w-96 dark:bg-gray-700"
            >
              <ul
                v-for="(value,idx) in provider" :key="idx"
                class="py-1 text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownDefault"
              >
                <li 
                  @click="choose(idx)"
                >
                  <a
                    href="#"
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >{{value.name}}</a
                  >
                </li>
                
              </ul>
            </div>
          </div>
          
          <input v-if="type_product === 'Cashout'"
            v-model="cashoutName"
            type="text"
            class="w-96 border border-gray-400 rounded-md py-2 px-4 text-black"
          />

          <input v-if="type_product === 'E-Money'"
            v-model="emoneyName"
            type="text"
            class="w-96 border border-gray-400 rounded-md py-2 px-4 text-black"
          />

        </div>

        <!-- 2 -->
        <div class="flex justify-between items-center">
          <label class="text-black" v-if="type_product === 'Paket Data'">Paket Data</label>
          <label class="text-black" v-if="type_product === 'Cashout'">Cashout</label>
          <label class="text-black" v-if="type_product === 'E-Money'">Voucher</label>
          <label class="text-black" v-if="type_product === 'Pulsa'">Voucher</label>
          
          

          <div class="flex flex-col" v-if="type_product === 'Paket Data'">
            <div
              class="flex justify-between items-start w-96 border border-gray-400 rounded-md py-2 px-4 text-black cursor-pointer"
              @click="isVisible1 = true"
            >
              <p>{{pilih1}}</p>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-caret-down-fill fill-gray-500"
                viewBox="0 0 16 16"
              >
                <path
                  d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"
                />
              </svg>
            </div>

            <div
              v-if="isVisible1"
              class="mt-11 z-10 absolute bg-white divide-y divide-gray-100 rounded shadow w-96 dark:bg-gray-700"
            >
              <ul
                v-for="(value,idx1) in paketData" :key="idx1"
                class="py-1 text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownDefault"
              >
                <li 
                  @click="choosePaketData(idx1)"
                >
                  <a
                    href="#"
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >{{value.paket}}</a
                  >
                </li>
              </ul>
            </div>
          </div>
          
          <div class="flex flex-col" v-if="type_product === 'Pulsa'">
            <div
              class="flex justify-between items-start w-96 border border-gray-400 rounded-md py-2 px-4 text-black cursor-pointer"
              @click="isVisible1 = true"
            >
              <p>{{pilih2}}</p>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-caret-down-fill fill-gray-500"
                viewBox="0 0 16 16"
              >
                <path
                  d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"
                />
              </svg>
            </div>

            <div
              v-if="isVisible1"
              class="mt-11 z-10 absolute bg-white divide-y divide-gray-100 rounded shadow w-96 dark:bg-gray-700"
            >
              <ul
                v-for="(value,idx2) in pulsa" :key="idx2"
                class="py-1 text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownDefault"
              >
                <li 
                  @click="choosePulsa(idx2)"
                >
                  <a
                    href="#"
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >{{value.nominal}}</a
                  >
                </li>
              </ul>
            </div>
          </div>

          <input v-if="type_product === 'Cashout'"
            v-model="voucher"
            type="text"
            class="w-96 border border-gray-400 rounded-md py-2 px-4 text-black"
          />

          <input v-if="type_product === 'E-Money'"
            v-model="voucher"
            type="text"
            class="w-96 border border-gray-400 rounded-md py-2 px-4 text-black"
          />
        </div>



        <!-- Harga -->
        <div class="flex justify-between items-center" v-if="type_product === 'Paket Data' ">
          <label class="text-black">Harga</label>
          <input
            v-model.number="harga"
            type="text"
            class="w-96 border border-gray-400 rounded-md py-2 px-4 text-black"
          />
        </div>

        <div class="flex justify-between items-center" v-if="type_product === 'Pulsa' ">
          <label class="text-black">Harga</label>
          <input
            v-model.number="harga"
            type="text"
            class="w-96 border border-gray-400 rounded-md py-2 px-4 text-black"
          />
        </div>

        <div class="flex justify-between items-center" v-if="type_product === 'Cashout' ">
          <label class="text-black">Nominal</label>
          <input
            v-model.number="nominal"
            type="text"
            class="w-96 border border-gray-400 rounded-md py-2 px-4 text-black"
          />
        </div>

          <div class="flex justify-between items-center" v-if="type_product === 'E-Money' ">
          <label class="text-black">Nominal</label>
          <input
            v-model.number="nominal"
            type="text"
            class="w-96 border border-gray-400 rounded-md py-2 px-4 text-black"
          />
        </div>
        <!-- End of Harga -->

        <!-- Stok -->
        <div class="flex justify-between items-center" v-if="type_product === 'Paket Data'">
            <label class="text-black">Stok</label>
            <input 
              v-model.number="stok"
              type="text"
              class="w-96 border border-gray-400 rounded-md py-2 px-4 text-black"
            />
        </div>

        <div class="flex justify-between items-center" v-if="type_product === 'Pulsa'">
            <label class="text-black">Stok</label>
            <input
              v-model.number="stok"
              type="text"
              class="w-96 border border-gray-400 rounded-md py-2 px-4 text-black"
            />
        </div>

        <div class="flex justify-between items-center"  v-if="type_product === 'Cashout'">
          <label class="text-black">Stok</label>
          <input
            v-model.number="stok"
            type="text"
            class="w-96 border border-gray-400 rounded-md py-2 px-4 text-black"
          />
        </div>

        <div class="flex justify-between items-center"  v-if="type_product === 'E-Money'">
          <label class="text-black">Stok</label>
          <input
            v-model.number="stok"
            type="text"
            class="w-96 border border-gray-400 rounded-md py-2 px-4 text-black"
          />
        </div>
        <!-- End of Stok -->

        <!-- Poin -->
        <div class="flex justify-between items-center" v-if="type_product === 'Paket Data'">
            <label class="text-black">Poin</label>
            <input 
              v-model.number="poin"
              type="text"
              class="w-96 border border-gray-400 rounded-md py-2 px-4 text-black"
            />
        </div>

        <div class="flex justify-between items-center" v-if="type_product === 'Pulsa'">
            <label class="text-black">Poin</label>
            <input
              v-model.number="poin"
              type="text"
              class="w-96 border border-gray-400 rounded-md py-2 px-4 text-black"
            />
        </div>

        <div class="flex justify-between items-center"  v-if="type_product === 'Cashout'">
          <label class="text-black">Poin</label>
          <input
            v-model.number="poin"
            type="text"
            class="w-96 border border-gray-400 rounded-md py-2 px-4 text-black"
          />
        </div>

        <div class="flex justify-between items-center"  v-if="type_product === 'E-Money'">
          <label class="text-black">Poin</label>
          <input
            v-model.number="poin"
            type="text"
            class="w-96 border border-gray-400 rounded-md py-2 px-4 text-black"
          />
        </div>
        <!-- End of Poin -->


      </div>

      <!-- Button -->
      <div class="w-1/2 flex pb-5 justify-end">
        <div v-if="type_product === 'Paket Data'" class="w-96 flex justify-between">
          <div @click.prevent="postProductPaketData" class="cursor-pointer bg-[#145374] text-white px-5 py-3 rounded-md">
            Simpan
          </div>
          <button class="bg-[#145374] text-white px-8 py-3 rounded-md">
            Batal
          </button>
        </div>

        <div v-if="type_product === 'Pulsa'" class="w-96 flex justify-between">
          <div @click.prevent="postProductPulsa" class="bg-[#145374] cursor-pointer text-white px-5 py-3 rounded-md">
            Simpan
          </div>
          <button class="bg-[#145374] text-white px-8 py-3 rounded-md">
            Batal
          </button>
        </div>
        <div v-if="type_product === 'Cashout'" class="w-96 flex justify-between">
          <div @click.prevent="postProductCashout" class="bg-[#145374] cursor-pointer text-white px-5 py-3 rounded-md">
            Simpan
          </div>
          <button class="bg-[#145374] text-white px-8 py-3 rounded-md">
            Batal
          </button>
        </div>
        <div v-if="type_product === 'E-Money'" class="w-96 flex justify-between">
          <div @click.prevent="postProductEmoney" class="bg-[#145374] cursor-pointer text-white px-5 py-3 rounded-md">
            Simpan
          </div>
          <button @click="this.$router.back()" class="bg-[#145374] text-white px-8 py-3 rounded-md">
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
      isVisible: false,
      isVisible1: false,
      isActive: false,
      isActive1: false,
      product: '',
      pilih: 'TELKOMSEL',
      pilih1: '1 GB',
      pilih2: 'Rp 10.000',
      cashoutName: '',
      emoneyName: '',
      index: null,
      index1: null,
      index2: null,
      provider: [{name: 'TELKOMSEL'}, {name: 'TRI'}, {name: 'INDOSAT'}, {name: 'XL'}],
      paketData: [{paket: '1 GB'}, {paket: '2 GB'}, {paket: '5 GB'}, {paket: '10 GB'}, {paket: '20 GB'}],
      pulsa: [{nominal: 'Rp 10.000'}, {nominal: 'Rp 15.000'}, {nominal: 'Rp 50.000'}, {nominal: 'Rp 100.000'}, {nominal: 'Rp 200.000'}],
      harga: null,
      nominal: null,
      voucher: '',
      id: '',
      stok: null,
      type_product: '',
      poin: null,
      tokens: ''
      
    }
  },
  watch:{
    index(){
      this.pilih = this.provider[this.index].name;
    },
    index1(){
      this.pilih1 = this.paketData[this.index1].paket;
    },
    index2(){
      this.pilih2 = this.pulsa[this.index2].nominal;
    },
  },
  created(){
    this.tokens = this.$store.state.adminAuth.token
    this.type_product = this.$store.state.adminProduct.type

  },
  methods: {
    postProductPaketData(){
      this.$store.dispatch('adminProduct/createProduct', {
         tipe: this.type_product,
         name: this.pilih1,
         provider: this.pilih,
         nominal: this.harga,
         poin: this.poin,
         stok: this.stok,
         token: this.tokens

      })
    },
    postProductPulsa(){
      this.$store.dispatch('adminProduct/createProduct', {
        tipe: this.type_product,
         name: this.pilih2,
         provider: this.pilih,
         nominal: this.harga,
         poin: this.poin,
         stok: this.stok,
         token: this.tokens
      })
    },
    postProductCashout(){
      this.$store.dispatch('adminProduct/createProduct', {
        tipe: this.type_product,
        name: this.voucher,
        provider: this.cashoutName,
        nominal: this.nominal,
        poin: this.poin,
        stok: this.stok,
        token: this.tokens
      })
    },
    postProductEmoney(){
      this.$store.dispatch('adminProduct/createProduct', {
        tipe: this.type_product,
        name: this.voucher,
        provider: this.emoneyName,
        nominal: this.nominal,
        poin: this.poin,
        stok: this.stok,
        token: this.tokens
      })
    },



    async addStockPaketData(){
      await this.$axios.post('ec2-54-160-45-255.compute-1.amazonaws.com:8080/v1/products', {
        type_product: this.type_product,
        provider_name: this.pilih,
        product_name: this.pilih1,
        nominal: this.harga,
        point: this.poin,
        stock: this.stok
      }).then(response => console.log(response))
    },
    async addStockPulsa(){
      const api = await this.$axios.post('ec2-54-160-45-255.compute-1.amazonaws.com:8080/v1/products', {
        type_product: this.type_product,
        provider_name: this.pilih,
        product_name: this.pilih2,
        harga: this.harga,
        point: this.poin,
        stock: this.stok
      }).then(response => console.log(response))
      console.warn("function called", this.provider, this.pulsa, this.harga, this.stok, this.poin);
      console.warn(api);
    },
    async addStockCashout(){
      const api = await this.$axios.post('ec2-54-160-45-255.compute-1.amazonaws.com:8080/v1/products', {
        type_product: this.type_product,
        nominal: this.nominal,
        id: this.id,
        stock: this.stok,
        point: this.poin,
      }).then(response => console.log(response))
      console.warn("function called", this.nominal, this.harga, this.stok, this.poin);
      console.warn(api);
    },
    async addStockEmoney(){
      const api = await this.$axios.post('ec2-54-160-45-255.compute-1.amazonaws.com:8080/v1/products', {
        type_product: this.type_product,
        nominal: this.nominal,
        id: this.id,
        stock: this.stok,
        point: this.poin,
        
      }).then(response => console.log(response))
      console.warn("function called", this.nominal, this.harga, this.stok, this.poin);
      console.warn(api);
    },
    toggleVisbility() {
      // this.isVisible = !this.isVisible;
    },
   
    choose(idx){
    this.index=idx;
    this.isVisible =false
  },
    choosePaketData(idx1){
      this.index1=idx1;
      this.isVisible1 =false
  },
    choosePulsa(idx2){
    this.index2=idx2;
    this.isVisible1 =false
  }
  },

}
</script>
