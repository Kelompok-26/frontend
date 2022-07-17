<template>
  <div class="w-full h-full flex flex-col gap-6 mx-auto px-6 py-8">
    <div
      class="w-full rounded-md flex items-center justify-between bg-white px-4 py-1"
    >
      <div class="flex flex-col justify-start items-start gap-2 pl-4">
        <h1 class="text-3xl font-bold">Hello Brooklyn</h1>
        <p class="opacity-75 text-xl">Welcome Back</p>
      </div>
      <img src="../../static/welcome.png" alt="" />
    </div>
    <div class="flex justify-evenly gap-8">
      <div
        class="flex w-full px-6 py-6 justify-center items-start bg-white rounded-md shadow-sm gap-10"
      >
        <div
          class="w-24 aspect-square bg-[#145374] flex items-center justify-center rounded-lg"
        >
          <img src="../../static/Workspace.png" alt="" />
        </div>

        <div class="flex-flex-col gap-4">
          <h1 class="text-4xl font-bold">{{ getAllUser }}</h1>
          <p class="font-light text-xl">
            Total Pengguna <br />
            C-Loyal
          </p>
        </div>
      </div>

      <div
        class="flex w-full px-6 py-6 justify-center items-start bg-white rounded-md shadow-sm gap-10"
      >
        <div
          class="w-24 aspect-square bg-[#145374] flex items-center justify-center rounded-lg"
        >
          <img src="../../static/Data-Pending.png" alt="" />
        </div>

        <div class="flex-flex-col gap-4">
          <h1 class="text-4xl font-bold">{{ getAllTransaction }}</h1>
          <p class="font-light text-xl">Total Transaksi</p>
        </div>
      </div>
    </div>

    <div class="flex gap-8">
      <div class="w-1/3 flex flex-col gap-4">
        <div class="flex flex-col gap-2">
          <h1 class="text-3xl font-bold">Stok</h1>

          <p class="font-light">Jumlah produk yang tersedia</p>
        </div>
        <div class="flex flex-col w-full py-6 bg-white gap-4">
          <div class="flex flex-col gap-4">
            <div class="flex items-center gap-4 pl-6 pr-2">
              <img
                class="object-left-bottom rounded-3xl w-28"
                src="https://ik.imagekit.io/drigoalexander/paketdata__pyAZJU4et.png?ik-sdk-version=javascript-1.4.3&updatedAt=1655375508716"
                alt=""
              />

              <div class="flex flex-col items-start w-full">
                <h1 class="font-bold text-2xl">Paket Data</h1>
                <p class="text-xl">{{ paket }} Stok</p>
                <div class="w-full justify-end items-end flex">
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="30" height="30" rx="10" fill="#E9E9E9" />
                    <path
                      d="M13.5 8.25L21 15.75L13.5 23.25"
                      stroke="black"
                      stroke-width="2.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <hr class="w-full" />
          </div>

          <div class="flex flex-col gap-4">
            <div class="flex items-center gap-4 pl-6 pr-2">
              <img
                class="object-left-bottom rounded-3xl w-28"
                src="https://ik.imagekit.io/drigoalexander/pulsa_Dgic1XZnM.png?ik-sdk-version=javascript-1.4.3&updatedAt=1655300119237"
                alt=""
              />

              <div class="flex flex-col items-start w-full">
                <h1 class="font-bold text-2xl">Pulsa</h1>
                <p class="text-xl">{{ pulsa }} Stok</p>
                <div class="w-full justify-end items-end flex">
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="30" height="30" rx="10" fill="#E9E9E9" />
                    <path
                      d="M13.5 8.25L21 15.75L13.5 23.25"
                      stroke="black"
                      stroke-width="2.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <hr class="w-full" />
          </div>

          <div class="flex flex-col gap-4">
            <div class="flex items-center gap-4 pl-6 pr-2">
              <img
                class="object-left-bottom rounded-3xl w-28"
                src="https://ik.imagekit.io/drigoalexander/cashout_UhMhjSBXXV.png?ik-sdk-version=javascript-1.4.3&updatedAt=1655375554772"
                alt=""
              />

              <div class="flex flex-col items-start w-full">
                <h1 class="font-bold text-2xl">Cashout</h1>
                <p class="text-xl">{{ cash }} Stok</p>
                <div class="w-full justify-end items-end flex">
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="30" height="30" rx="10" fill="#E9E9E9" />
                    <path
                      d="M13.5 8.25L21 15.75L13.5 23.25"
                      stroke="black"
                      stroke-width="2.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <hr class="w-full" />
          </div>

          <div class="flex flex-col gap-4">
            <div class="flex items-center gap-4 pl-6 pr-2">
              <img
                class="object-left-bottom rounded-3xl w-28"
                src="https://ik.imagekit.io/drigoalexander/emoney_LVf6ujW1Q.png?ik-sdk-version=javascript-1.4.3&updatedAt=1655375609772"
                alt=""
              />

              <div class="flex flex-col items-start w-full">
                <h1 class="font-bold text-2xl">E-Money</h1>
                <p class="text-xl">{{ emoney }} Stok</p>
                <div class="w-full justify-end items-end flex">
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="30" height="30" rx="10" fill="#E9E9E9" />
                    <path
                      d="M13.5 8.25L21 15.75L13.5 23.25"
                      stroke="black"
                      stroke-width="2.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-2/3">
        <div class="flex flex-col gap-4">
          <div class="flex flex-col gap-2">
            <h1 class="text-3xl font-bold">History</h1>
            <div class="flex justify-between">
              <p>Riwayat transaksi terakhir</p>
              <Nuxtlink to="/admin/history">
                <p class="font-light cursor-pointer">Semua</p>
              </Nuxtlink>
            </div>
          </div>

          <div class="flex flex-col w-full gap-4">
            <CardAdmin
              v-for="isi in getTrans"
              :key="isi.id"
              :nominal="isi.product.product_name"
              :Name="isi.user.name"
              :productType="isi.product.type_product"
              :TheDate="isi.created_at.substring(0, 9)"
              :point="isi.product.point"
              :id="isi.id"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CardAdmin from '../../components/CardAdmin.vue'
export default {
  components: { CardAdmin },
  layout: 'admin',
  data() {
    return {
      Notelephone: '',
      username: '',
      password: '',
      Trans: null,
    }
  },

  computed: {
    getAllTransaction() {
      return this.$store.state.adminDashboard.AllTran
    },
    getAllUser() {
      return this.$store.state.adminDashboard.User
    },
    getTrans() {
      return this.$store.state.adminTrasanctions.Tran
    },
    paket() {
      return this.$store.state.adminDashboard.paket
    },
    pulsa() {
      return this.$store.state.adminDashboard.pulsa
    },
    cash() {
      return this.$store.state.adminDashboard.cash
    },
    emoney() {
      return this.$store.state.adminDashboard.em
    },
  },

  mounted() {
    this.$store.dispatch('adminDashboard/getAllProductLength')
  },
  created() {
    const tokens = this.$store.state.adminAuth.token
    this.type_product = this.$store.state.adminProduct.type
    this.$store.dispatch('adminDashboard/getAllTransaction', {
      token: tokens,
    })
    this.$store.dispatch('adminDashboard/getAllUser', {
      token: tokens,
    })
    this.$store.dispatch('adminTrasanctions/getAllTransaction', {
      token: tokens,
    })
  },

  methods: {},
}
</script>

<style></style>
