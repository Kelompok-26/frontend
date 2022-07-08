<template>
  <div class="w-full px-10 flex flex-col gap-4">
    <div class="flex items-center gap-6 mt-8">
      <svg class="cursor-pointer" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path 
          fill-rule="evenodd" 
          clip-rule="evenodd" 
          d="M20 40C25.3043 40 30.3914 37.8929 34.1421 34.1421C37.8929 30.3914 40 25.3043 40 20C40 14.6957 37.8929 9.60859 34.1421 5.85786C30.3914 2.10714 25.3043 0 20 0C14.6957 0 9.60859 2.10714 5.85786 5.85786C2.10714 9.60859 0 14.6957 0 20C0 25.3043 2.10714 30.3914 5.85786 34.1421C9.60859 37.8929 14.6957 40 20 40ZM21.7675 14.2675C22.2229 13.796 22.4749 13.1645 22.4692 12.509C22.4635 11.8535 22.2006 11.2265 21.737 10.763C21.2735 10.2994 20.6465 10.0365 19.991 10.0308C19.3355 10.0251 18.704 10.2771 18.2325 10.7325L10.7325 18.2325C10.2638 18.7013 10.0005 19.3371 10.0005 20C10.0005 20.6629 10.2638 21.2987 10.7325 21.7675L18.2325 29.2675C18.704 29.7229 19.3355 29.9749 19.991 29.9692C20.6465 29.9635 21.2735 29.7006 21.737 29.237C22.2006 28.7735 22.4635 28.1465 22.4692 27.491C22.4749 26.8355 22.2229 26.204 21.7675 25.7325L18.535 22.5H27.5C28.163 22.5 28.7989 22.2366 29.2678 21.7678C29.7366 21.2989 30 20.663 30 20C30 19.337 29.7366 18.7011 29.2678 18.2322C28.7989 17.7634 28.163 17.5 27.5 17.5H18.535L21.7675 14.2675Z" 
          fill="black"
        />
      </svg>
 
      <span class="text-2xl font-bold">Input Paket Data</span>
    </div>

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

    <div
      class="w-full px-10 flex flex-col bg-white border-t-[10px] border-[#145374] rounded-md"
    >
    <form action="">
      <div class="flex flex-col w-1/2 py-10 gap-6">
        <div class="flex justify-between items-center">
          <label class="text-black">Provider</label>

          <!-- Provider -->
          <div class="flex flex-col">
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
        </div>

        <div class="flex justify-between items-center">
          <label class="text-black">Paket Data</label>
          
          <!-- Paket Data -->
          <div class="flex flex-col">
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
        </div>

        <div class="flex justify-between items-center">
          <label class="text-black">Harga</label>
          <input
            type="text"
            class="w-96 border border-gray-400 rounded-md py-2 px-4 text-black"
          />
        </div>

        <div class="flex justify-between items-center">
          <label class="text-black">Stok</label>
          <input
            type="text"
            class="w-96 border border-gray-400 rounded-md py-2 px-4 text-black"
          />
        </div>
      </div>

      <!-- Button -->
      <div class="w-1/2 flex pb-5 justify-end">
        <div class="w-96 flex justify-between">
          <button class="bg-[#145374] text-white px-5 py-3 rounded-md">
            Simpan
          </button>
          <button class="bg-[#145374] text-white px-8 py-3 rounded-md">
            Batal
          </button>
        </div>
      </div>
      </form>
      <!-- End of Button -->
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  layout: 'admin',
  data() {
    return {
      isVisible: false,
      isVisible1: false,
      pilih: 'TELKOMSEL',
      pilih1: '1 GB',
      index: null,
      index1: null,
      provider: [{name: 'TELKOMSEL'}, {name: 'TRI'}, {name: 'INDOSAT'}, {name: 'XL'}],
      paketData: [{paket: '1 GB'}, {paket: '2 GB'}, {paket: '5 GB'}, {paket: '10 GB'}, {paket: '20 GB'}],
      harga: '',
      stok: '',
    }
  },
  watch:{
    index(){
      this.pilih = this.provider[this.index].name;
    },
    index1(){
      this.pilih1 = this.paketData[this.index1].paket;
    },
  },
  methods: {
    async addStock(){
      const api = await axios.post('https://virtserver.swaggerhub.com/Dzaakk/C-loyal/1.0.0/products', {
        provider: this.provider,
        paketData: this.paketData,
        harga: this.harga,
        stok: this.stok
      });
      console.warn("function called", this.provider, this.paketData, this.harga, this.stok);
      console.warn(api);
    },
  choose(idx){
    this.index=idx;
    this.isVisible =false
  },
  choosePaketData(idx1){
    this.index1=idx1;
    this.isVisible1 =false
  }
  },
}
</script>
