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
    <span class="text-2xl font-bold"
      >Input <span>{{ type_product }}</span>
    </span>

    <form
      action=""
      method="post"
      class="w-full px-10 flex flex-col bg-white border-t-[10px] border-[#145374] rounded-md"
    >
      <div class="flex flex-col w-1/2 py-10 gap-6">
        <!-- 1 -->
        <div class="flex justify-between items-center">
          <label class="text-black" v-if="type_product === 'Paket Data'"
            >Provider</label
          >
          <label class="text-black" v-if="type_product === 'Pulsa'"
            >Provider</label
          >
          <label class="text-black" v-if="type_product === 'Cashout'"
            >Provider</label
          >
          <label class="text-black" v-if="type_product === 'E-Money'"
            >Provider</label
          >

          <div class="flex flex-col" v-if="type_product === 'Paket Data'">
            <div
              class="flex justify-between items-start w-96 border border-gray-400 rounded-md py-2 px-4 text-black cursor-pointer"
              @click="isVisible = true"
            >
              <p>{{ pilih }}</p>

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
                v-for="(value, idx) in provider"
                :key="idx"
                class="py-1 text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownDefault"
              >
                <li @click="choose(idx)">
                  <a
                    href="#"
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >{{ value.name }}</a
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
              <p>{{ pilih }}</p>

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
                v-for="(value, idx) in provider"
                :key="idx"
                class="py-1 text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownDefault"
              >
                <li @click="choose(idx)">
                  <a
                    href="#"
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >{{ value.name }}</a
                  >
                </li>
              </ul>
            </div>
          </div>

          <input
            v-if="type_product === 'Cashout'"
            v-model="cashoutName"
            type="text"
            class="w-96 border border-gray-400 rounded-md py-2 px-4 text-black"
          />

          <input
            v-if="type_product === 'E-Money'"
            v-model="emoneyName"
            type="text"
            class="w-96 border border-gray-400 rounded-md py-2 px-4 text-black"
          />
        </div>

        <!-- 2 -->
        <div class="flex justify-between items-center">
          <label class="text-black" v-if="type_product === 'Paket Data'"
            >Paket Data</label
          >
          <label class="text-black" v-if="type_product === 'Cashout'"
            >Cashout</label
          >
          <label class="text-black" v-if="type_product === 'E-Money'"
            >Voucher</label
          >
          <label class="text-black" v-if="type_product === 'Pulsa'"
            >Voucher</label
          >

          <div class="flex flex-col" v-if="type_product === 'Paket Data'">
            <div
              class="flex justify-between items-start w-96 border border-gray-400 rounded-md py-2 px-4 text-black cursor-pointer"
              @click="isVisible1 = true"
            >
              <p>{{ pilih1 }}</p>

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
                v-for="(value, idx1) in paketData"
                :key="idx1"
                class="py-1 text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownDefault"
              >
                <li @click="choosePaketData(idx1)">
                  <a
                    href="#"
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >{{ value.paket }}</a
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
              <p>{{ pilih2 }}</p>

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
                v-for="(value, idx2) in pulsa"
                :key="idx2"
                class="py-1 text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownDefault"
              >
                <li @click="choosePulsa(idx2)">
                  <a
                    href="#"
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >{{ value.nominal }}</a
                  >
                </li>
              </ul>
            </div>
          </div>

          <input
            v-if="type_product === 'Cashout'"
            v-model="voucher"
            type="text"
            class="w-96 border border-gray-400 rounded-md py-2 px-4 text-black"
          />

          <input
            v-if="type_product === 'E-Money'"
            v-model="voucher"
            type="text"
            class="w-96 border border-gray-400 rounded-md py-2 px-4 text-black"
          />
        </div>

        <!-- Harga -->
        <div
          class="flex justify-between items-center"
          v-if="type_product === 'Paket Data'"
        >
          <label class="text-black">Harga</label>
          <input
            v-model.number="harga"
            type="text"
            class="w-96 border border-gray-400 rounded-md py-2 px-4 text-black"
          />
        </div>

        <div
          class="flex justify-between items-center"
          v-if="type_product === 'Pulsa'"
        >
          <label class="text-black">Harga</label>
          <input
            v-model.number="harga"
            type="text"
            class="w-96 border border-gray-400 rounded-md py-2 px-4 text-black"
          />
        </div>

        <div
          class="flex justify-between items-center"
          v-if="type_product === 'Cashout'"
        >
          <label class="text-black">Nominal</label>
          <input
            v-model.number="nominal"
            type="text"
            class="w-96 border border-gray-400 rounded-md py-2 px-4 text-black"
          />
        </div>

        <div
          class="flex justify-between items-center"
          v-if="type_product === 'E-Money'"
        >
          <label class="text-black">Nominal</label>
          <input
            v-model.number="nominal"
            type="text"
            class="w-96 border border-gray-400 rounded-md py-2 px-4 text-black"
          />
        </div>
        <!-- End of Harga -->

        <!-- Stok -->
        <div
          class="flex justify-between items-center"
          v-if="type_product === 'Paket Data'"
        >
          <label class="text-black">Stok</label>
          <input
            v-model.number="stok"
            type="text"
            class="w-96 border border-gray-400 rounded-md py-2 px-4 text-black"
          />
        </div>

        <div
          class="flex justify-between items-center"
          v-if="type_product === 'Pulsa'"
        >
          <label class="text-black">Stok</label>
          <input
            v-model.number="stok"
            type="text"
            class="w-96 border border-gray-400 rounded-md py-2 px-4 text-black"
          />
        </div>

        <div
          class="flex justify-between items-center"
          v-if="type_product === 'Cashout'"
        >
          <label class="text-black">Stok</label>
          <input
            v-model.number="stok"
            type="text"
            class="w-96 border border-gray-400 rounded-md py-2 px-4 text-black"
          />
        </div>

        <div
          class="flex justify-between items-center"
          v-if="type_product === 'E-Money'"
        >
          <label class="text-black">Stok</label>
          <input
            v-model.number="stok"
            type="text"
            class="w-96 border border-gray-400 rounded-md py-2 px-4 text-black"
          />
        </div>
        <!-- End of Stok -->

        <!-- Poin -->
        <div
          class="flex justify-between items-center"
          v-if="type_product === 'Paket Data'"
        >
          <label class="text-black">Poin</label>
          <input
            v-model.number="poin"
            type="text"
            class="w-96 border border-gray-400 rounded-md py-2 px-4 text-black"
          />
        </div>

        <div
          class="flex justify-between items-center"
          v-if="type_product === 'Pulsa'"
        >
          <label class="text-black">Poin</label>
          <input
            v-model.number="poin"
            type="text"
            class="w-96 border border-gray-400 rounded-md py-2 px-4 text-black"
          />
        </div>

        <div
          class="flex justify-between items-center"
          v-if="type_product === 'Cashout'"
        >
          <label class="text-black">Poin</label>
          <input
            v-model.number="poin"
            type="text"
            class="w-96 border border-gray-400 rounded-md py-2 px-4 text-black"
          />
        </div>

        <div
          class="flex justify-between items-center"
          v-if="type_product === 'E-Money'"
        >
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
        <div
          v-if="type_product === 'Paket Data'"
          class="w-96 flex justify-between"
        >
          <div
            @click.prevent="postProductPaketData"
            class="cursor-pointer bg-[#145374] text-white px-5 py-3 rounded-md"
          >
            Simpan
          </div>
          <button class="bg-[#145374] text-white px-8 py-3 rounded-md">
            Batal
          </button>
        </div>

        <div v-if="type_product === 'Pulsa'" class="w-96 flex justify-between">
          <div
            @click.prevent="postProductPulsa"
            class="bg-[#145374] cursor-pointer text-white px-5 py-3 rounded-md"
          >
            Simpan
          </div>
          <button class="bg-[#145374] text-white px-8 py-3 rounded-md">
            Batal
          </button>
        </div>
        <div
          v-if="type_product === 'Cashout'"
          class="w-96 flex justify-between"
        >
          <div
            @click.prevent="postProductCashout"
            class="bg-[#145374] cursor-pointer text-white px-5 py-3 rounded-md"
          >
            Simpan
          </div>
          <button class="bg-[#145374] text-white px-8 py-3 rounded-md">
            Batal
          </button>
        </div>
        <div
          v-if="type_product === 'E-Money'"
          class="w-96 flex justify-between"
        >
          <div
            @click.prevent="postProductEmoney"
            class="bg-[#145374] cursor-pointer text-white px-5 py-3 rounded-md"
          >
            Simpan
          </div>
          <button
            @click="this.$router.back()"
            class="bg-[#145374] text-white px-8 py-3 rounded-md"
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
      provider: [
        { name: 'TELKOMSEL' },
        { name: 'TRI' },
        { name: 'INDOSAT' },
        { name: 'XL' },
      ],
      paketData: [
        { paket: '1 GB' },
        { paket: '2 GB' },
        { paket: '5 GB' },
        { paket: '10 GB' },
        { paket: '20 GB' },
      ],
      pulsa: [
        { nominal: 'Rp 10.000' },
        { nominal: 'Rp 15.000' },
        { nominal: 'Rp 50.000' },
        { nominal: 'Rp 100.000' },
        { nominal: 'Rp 200.000' },
      ],
      harga: null,
      nominal: null,
      voucher: '',
      id: '',
      stok: null,
      type_product: '',
      poin: null,
      tokens: '',
      loading: null,
    }
  },
  watch: {
    index() {
      this.pilih = this.provider[this.index].name
    },
    index1() {
      this.pilih1 = this.paketData[this.index1].paket
    },
    index2() {
      this.pilih2 = this.pulsa[this.index2].nominal
    },
  },
  created() {
    this.tokens = this.$store.state.adminAuth.token
    this.type_product = this.$store.state.adminProduct.type
  },
  methods: {
    postProductPaketData() {
      this.loading = true
      this.$store.dispatch('adminProduct/createProduct', {
        tipe: this.type_product,
        name: this.pilih1,
        provider: this.pilih,
        nominal: this.harga,
        poin: this.poin,
        stok: this.stok,
        token: this.tokens,
      })

      setTimeout(() => {
        this.loading = false
      }, 60000)
      this.$router.push({
        name: 'admin-typeProduct',
        params: {
          typeProduct: this.type_product,
        },
      })
    },
    async postProductPulsa() {
      this.loading = true
      await this.$store.dispatch('adminProduct/createProduct', {
        tipe: this.type_product,
        name: this.pilih2,
        provider: this.pilih,
        nominal: this.harga,
        poin: this.poin,
        stok: this.stok,
        token: this.tokens,
      })
      setTimeout(() => {
        this.loading = false
      }, 60000)
      this.$router.push({
        name: 'admin-typeProduct',
        params: {
          typeProduct: this.type_product,
        },
      })
    },
    async postProductCashout() {
      this.loading = true
      await this.$store.dispatch('adminProduct/createProduct', {
        tipe: this.type_product,
        name: this.voucher,
        provider: this.cashoutName,
        nominal: this.nominal,
        poin: this.poin,
        stok: this.stok,
        token: this.tokens,
      })
      setTimeout(() => {
        this.loading = false
      }, 60000)
      this.$router.push({
        name: 'admin-typeProduct',
        params: {
          typeProduct: this.type_product,
        },
      })
    },
    async postProductEmoney() {
      this.loading = true
      await this.$store.dispatch('adminProduct/createProduct', {
        tipe: this.type_product,
        name: this.voucher,
        provider: this.emoneyName,
        nominal: this.nominal,
        poin: this.poin,
        stok: this.stok,
        token: this.tokens,
      })
      setTimeout(() => {
        this.loading = false
      }, 60000)
      this.$router.push({
        name: 'admin-typeProduct',
        params: {
          typeProduct: this.type_product,
        },
      })
    },

    choose(idx) {
      this.index = idx
      this.isVisible = false
    },
    choosePaketData(idx1) {
      this.index1 = idx1
      this.isVisible1 = false
    },
    choosePulsa(idx2) {
      this.index2 = idx2
      this.isVisible1 = false
    },
  },
}
</script>
