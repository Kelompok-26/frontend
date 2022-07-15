<template>
  <div class="px-10 flex flex-col gap-6">
    <div
      class="w-full aspect[10.15/1] py-4 flex items-center gap-10 px-10 bg-[#FFFFFF] rounded-md"
    >
      <div class="w-16 h-16 rounded-full overflow-hidden bg-gray-500"></div>
      <div class="flex flex-col gap-2">
        <p class="font-light">Halo,</p>
        <h1 class="font-bold text-xl">{{ getUser.name }}</h1>
      </div>
    </div>
    <!-- Start Content untuk router link -->
    <!-- Start Header Poin -->
    <div
      class="w-full aspect-[8/1] px-8 py-6 flex gap-8 items-center bg-white rounded-md"
    >
      <svg
        width="130"
        height="131"
        viewBox="0 0 130 131"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M89.8806 94.3889H118.264C115.881 62.9362 102.339 43.4001 84.9695 31.8445L92.8778 14.5834C93.1168 14.0357 93.2162 13.4372 93.167 12.8416C93.1178 12.246 92.9216 11.6719 92.5959 11.1709C92.2702 10.6698 91.8252 10.2574 91.3009 9.97062C90.7766 9.68386 90.1893 9.53172 89.5917 9.52783H40.0833C39.4857 9.53172 38.8984 9.68386 38.3741 9.97062C37.8498 10.2574 37.4048 10.6698 37.0791 11.1709C36.7534 11.6719 36.5572 12.246 36.508 12.8416C36.4588 13.4372 36.5582 14.0357 36.7972 14.5834L41.1306 23.9723H77.675L74.425 31.1945H67.7445C69.7847 36.6807 71.2844 42.3529 72.2222 48.1306C72.8297 51.7145 73.2156 55.3325 73.3778 58.9639L67.6722 62.9723C67.6877 58.3014 67.3011 53.6379 66.5167 49.0334C65.5189 42.9052 63.7976 36.9171 61.3889 31.1945H57.7778C54.4452 35.4053 51.4507 39.8729 48.8222 44.5556C46.7029 48.5724 44.9038 52.7502 43.4417 57.05L38.4945 53.7639C39.9385 49.6081 41.7137 45.5748 43.8028 41.7028C45.9137 38.072 48.2285 34.5636 50.7361 31.1945H44.4167L44.7056 31.8084C25.5667 44.5556 11.0139 66.9445 11.0139 104.319C10.9651 105.105 11.0725 105.893 11.3298 106.637C11.5871 107.381 11.9893 108.066 12.5131 108.654C13.0369 109.241 13.6719 109.719 14.3815 110.06C15.0911 110.401 15.8612 110.598 16.6472 110.639H45.5361C44.2957 109.348 43.4392 107.737 43.0626 105.987C42.6861 104.236 42.8043 102.416 43.4041 100.729C44.0039 99.0418 45.0616 97.5552 46.4586 96.4354C47.8556 95.3157 49.5368 94.6071 51.3139 94.3889C50.4491 92.9222 49.9881 91.2527 49.9778 89.55C49.9778 86.9642 51.005 84.4842 52.8335 82.6558C54.662 80.8273 57.1419 79.8 59.7278 79.8H81.3945C83.9803 79.8 86.4603 80.8273 88.2887 82.6558C90.1172 84.4842 91.1444 86.9642 91.1444 89.55C91.163 91.247 90.7266 92.9179 89.8806 94.3889Z"
          fill="#00334E"
        />
        <path
          d="M78 103.417C78 102.459 77.6195 101.541 76.9423 100.863C76.2651 100.186 75.3466 99.8057 74.3889 99.8057H52.7222C51.7645 99.8057 50.846 100.186 50.1688 100.863C49.4915 101.541 49.1111 102.459 49.1111 103.417C49.1111 104.375 49.4915 105.293 50.1688 105.97C50.846 106.647 51.7645 107.028 52.7222 107.028H74.3889C75.3466 107.028 76.2651 106.647 76.9423 105.97C77.6195 105.293 78 104.375 78 103.417Z"
          fill="#00334E"
        />
        <path
          d="M81.3945 85.3613H59.7278C58.7701 85.3613 57.8516 85.7418 57.1744 86.419C56.4972 87.0962 56.1167 88.0147 56.1167 88.9724C56.1167 89.9302 56.4972 90.8487 57.1744 91.5259C57.8516 92.2031 58.7701 92.5836 59.7278 92.5836H81.3945C82.3522 92.5836 83.2707 92.2031 83.9479 91.5259C84.6251 90.8487 85.0056 89.9302 85.0056 88.9724C85.0056 88.0147 84.6251 87.0962 83.9479 86.419C83.2707 85.7418 82.3522 85.3613 81.3945 85.3613Z"
          fill="#00334E"
        />
        <path
          d="M79.4444 114.25H57.7777C56.82 114.25 55.9015 114.63 55.2243 115.308C54.5471 115.985 54.1666 116.903 54.1666 117.861C54.1666 118.819 54.5471 119.737 55.2243 120.415C55.9015 121.092 56.82 121.472 57.7777 121.472H79.4444C80.4021 121.472 81.3206 121.092 81.9979 120.415C82.6751 119.737 83.0555 118.819 83.0555 117.861C83.0555 116.903 82.6751 115.985 81.9979 115.308C81.3206 114.63 80.4021 114.25 79.4444 114.25Z"
          fill="#00334E"
        />
        <path
          d="M118.083 114.25H92.8056C91.8478 114.25 90.9293 114.63 90.2521 115.308C89.5749 115.985 89.1945 116.903 89.1945 117.861C89.1945 118.819 89.5749 119.737 90.2521 120.415C90.9293 121.092 91.8478 121.472 92.8056 121.472H118.083C119.041 121.472 119.96 121.092 120.637 120.415C121.314 119.737 121.694 118.819 121.694 117.861C121.694 116.903 121.314 115.985 120.637 115.308C119.96 114.63 119.041 114.25 118.083 114.25Z"
          fill="#00334E"
        />
        <path
          d="M121.694 99.8057H96.4167C95.4589 99.8057 94.5404 100.186 93.8632 100.863C93.186 101.541 92.8055 102.459 92.8055 103.417C92.8055 104.375 93.186 105.293 93.8632 105.97C94.5404 106.647 95.4589 107.028 96.4167 107.028H121.694C122.652 107.028 123.571 106.647 124.248 105.97C124.925 105.293 125.306 104.375 125.306 103.417C125.306 102.459 124.925 101.541 124.248 100.863C123.571 100.186 122.652 99.8057 121.694 99.8057Z"
          fill="#00334E"
        />
      </svg>

      <div class="flex flex-col gap-4">
        <p class="text-xl font-medium">Poin Anda saat ini</p>
        <h1 class="text-5xl font-bold">
          <span>{{ getUser.point }}</span> Poin
        </h1>
      </div>
    </div>
    <!-- End Header Poin -->

    <div
      v-if="dialog"
      class="w-full fixed h-screen left-0 top-0 bg-black opacity-50 z-10"
    ></div>

    <!-- Dialog -->
    <div
      :class="{
        '-translate-y-1/2': dialog,
        '-translate-y-full': !dialog,
        'opacity-100': dialog,
        'opacity-0': !dialog,
        '-z-10': !dialog,
        'z-20': dialog,
      }"
      class="w-[52rem] aspect-video fixed flex flex-col -translate-x-1/2 left-1/2 top-1/2 bg-white gap-5 pb-8 rounded-md duration-300 ease-in-out"
    >
      <div class="flex items-center justify-between px-6 py-6 shadow-md">
        <h1 class="text-2xl font-bold">Benefit yang kamu dapatkan</h1>
        <svg
          class="cursor-pointer"
          width="22"
          height="21"
          viewBox="0 0 28 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          @click="dialog = false"
        >
          <path
            d="M16.991 13.4545L26.5373 3.929C26.9554 3.51089 27.1902 2.94382 27.1902 2.35252C27.1902 1.76123 26.9554 1.19415 26.5373 0.776046C26.1193 0.357938 25.5523 0.123047 24.9611 0.123047C24.3698 0.123047 23.8029 0.357938 23.3848 0.776046L13.8607 10.3237L4.33655 0.776046C3.9185 0.357938 3.3515 0.123047 2.76029 0.123047C2.16908 0.123047 1.60209 0.357938 1.18404 0.776046C0.76599 1.19415 0.531133 1.76123 0.531133 2.35252C0.531133 2.94382 0.76599 3.51089 1.18404 3.929L10.7304 13.4545L1.18404 22.98C0.975954 23.1864 0.810794 23.432 0.698084 23.7025C0.585373 23.9731 0.527344 24.2633 0.527344 24.5564C0.527344 24.8496 0.585373 25.1398 0.698084 25.4104C0.810794 25.6809 0.975954 25.9265 1.18404 26.1329C1.39042 26.341 1.63597 26.5062 1.9065 26.6189C2.17704 26.7317 2.46722 26.7897 2.76029 26.7897C3.05337 26.7897 3.34355 26.7317 3.61408 26.6189C3.88462 26.5062 4.13016 26.341 4.33655 26.1329L13.8607 16.5852L23.3848 26.1329C23.5912 26.341 23.8367 26.5062 24.1073 26.6189C24.3778 26.7317 24.668 26.7897 24.9611 26.7897C25.2541 26.7897 25.5443 26.7317 25.8148 26.6189C26.0854 26.5062 26.3309 26.341 26.5373 26.1329C26.7454 25.9265 26.9106 25.6809 27.0233 25.4104C27.136 25.1398 27.194 24.8496 27.194 24.5564C27.194 24.2633 27.136 23.9731 27.0233 23.7025C26.9106 23.432 26.7454 23.1864 26.5373 22.98L16.991 13.4545Z"
            fill="black"
            fill-opacity="0.7"
          />
        </svg>
      </div>

      <div class="flex flex-col justify-start rounded-lg px-8 gap-3">
        <span class="bg-[#F6F5F5] rounded-md px-5 py-5">
          Kamu dapat melakukan penukaran poin dengan berbagai macam penawaran
          sejak <br />
          bergabung menjadi member C-Loyal</span
        >

        <span class="bg-gray-100 rounded-md px-5 py-5">
          Dapatkan lebih banyak penawaran yang menarik dengan mengumpulkan poin
          <br />
          yang sebanyak-banyaknya</span
        >

        <span class="bg-gray-100 rounded-md px-5 py-5">
          Kamu dapat mengumpulkan poin melalui pembelian yang dilakukan pada
          halaman <br />
          redeem dan dapat kamu tukarkan secara langsung pada aplikasi
          C-Loyal</span
        >

        <span class="bg-gray-100 rounded-md px-5 py-5">
          C-Loyal poin memberikanmu kemudahan untuk melakukan berbagai transaksi
          <br />
          degan cepat</span
        >
      </div>
    </div>
    <!-- End Dialog -->

    <div
      class="w-full py-4 flex items-center justify-center rounded-md gap-10 px-10 bg-[#00334E] text-white font-semibold text-xl cursor-pointer"
      @click="dialog = true"
    >
      Cek benefit tukar poin
    </div>

    <!-- Start poin ke pulsa-->
    <div class="flex flex-col gap-16 my-10">
      <!-- Start Benefit Terpopuler-->
      <div class="flex flex-col gap-6">
        <div class="flex flex-row justify-between items-center">
          <p class="text-xl font-bold">Rekomendasi Paket Data</p>
          <p
            class="text-lg font-semibold text-[#145374] cursor-pointer"
            @click="showAllBenefit(paketDataParam)"
          >
            Semua
          </p>
        </div>
        <div
          class="flex gap-4 pb-4 overscroll-x-contain overflow-x-scroll w-auto scrollbar-hide"
        >
          <Card
            v-for="(paket, idx) in product"
            :key="idx"
            :nominal="paket.product_name"
            :productType="paket.type_product"
            :index="idx"
            :poin="paket.point"
            :backgroundImage="'https://ik.imagekit.io/drigoalexander/paketdata__pyAZJU4et.png?ik-sdk-version=javascript-1.4.3&updatedAt=1655375508716'"
            v-on:toDetail="toDetail(paket.id)"
          />
        </div>
      </div>
      <!-- End Benefit Terpopuler-->

      <!-- Start Redeem Terpopuler-->
      <div class="flex flex-col gap-6">
        <div class="flex flex-row justify-between items-center">
          <p class="text-xl font-bold">Rekomendasi Pulsa</p>
          <p
            class="text-lg font-semibold text-[#145374] cursor-pointer"
            @click="showAllBenefit(pulsaParam)"
          >
            Semua
          </p>
        </div>

        <div
          class="flex gap-4 pb-4 overscroll-x-contain overflow-x-scroll w-auto scrollbar-hide"
        >
          <Card
            v-for="(paket, idx) in pulsa"
            :key="idx"
            :nominal="paket.product_name"
            :productType="paket.type_product"
            :index="idx"
            :poin="paket.point"
            :backgroundImage="'https://ik.imagekit.io/drigoalexander/pulsa_Dgic1XZnM.png?ik-sdk-version=javascript-1.4.3&updatedAt=1655300119237'"
            v-on:toDetail="toDetail(paket.id)"
          />
        </div>
      </div>
      <!-- End Redeem Terpopuler-->

      <!-- Start Cashout -->
      <div class="flex flex-col gap-6">
        <div class="flex flex-row justify-between items-center">
          <p class="text-xl font-bold">Rekomendasi Cashout</p>
          <p
            class="text-lg font-semibold text-[#145374] cursor-pointer"
            @click="showAllBenefit(cashoutParam)"
          >
            Semua
          </p>
        </div>

        <div
          class="flex gap-4 pb-4 overscroll-x-contain overflow-x-scroll w-auto scrollbar-hide"
        >
          <Card
            v-for="(paket, idx) in cashout"
            :key="idx"
            :nominal="paket.product_name"
            :productType="paket.type_product"
            :index="idx"
            :poin="paket.point"
            :backgroundImage="'https://ik.imagekit.io/drigoalexander/cashout_UhMhjSBXXV.png?ik-sdk-version=javascript-1.4.3&updatedAt=1655375554772'"
            v-on:toDetail="toDetail(paket.id)"
          />
        </div>
      </div>
      <!-- End Cashout -->

      <!-- Start E-Money -->
      <div class="flex flex-col gap-6">
        <div class="flex flex-row justify-between items-center">
          <p class="text-xl font-bold">Rekomendasi E-Money</p>
          <p
            class="text-lg font-semibold text-[#145374] cursor-pointer"
            @click="showAllBenefit(emoneyParam)"
          >
            Semua
          </p>
        </div>

        <div
          class="flex gap-4 pb-4 overscroll-x-contain overflow-x-scroll w-auto scrollbar-hide"
        >
          <Card
            v-for="(paket, idx) in emoney"
            :key="idx"
            :nominal="paket.product_name"
            :productType="paket.type_product"
            :index="idx"
            :poin="paket.point"
            :backgroundImage="'https://ik.imagekit.io/drigoalexander/emoney_LVf6ujW1Q.png?ik-sdk-version=javascript-1.4.3&updatedAt=1655375609772'"
            v-on:toDetail="toDetail(paket.id)"
          />
        </div>
      </div>
      <!-- End E-Money -->
    </div>
    <!-- End poin ke paket data-->

    <!-- End Content untuk router link -->
  </div>
</template>

<script>
import Card from '~/components/Card.vue'
export default {
  data() {
    return {
      dialog: false,
      paketDataParam: 'Paket Data',
      pulsaParam: 'Pulsa',
      cashoutParam: 'Cashout',
      emoneyParam: 'E-Money',
    }
  },
  computed: {
    getUser() {
      return this.$store.state.userAuth.User
    },
    getLevel() {
      return this.$store.state.userAuth.id
    },

    pulsa() {
      return this.$store.state.product.product.filter((el) => {
        return el.type_product === 'Pulsa'
      })
    },
    cashout() {
      return this.$store.state.product.product.filter((el) => {
        return el.type_product === 'Cashout'
      })
    },
    emoney() {
      return this.$store.state.product.product.filter((el) => {
        return el.type_product === 'E-Money'
      })
    },

    product() {
      return this.$store.state.product.product.filter((el) => {
        return el.type_product === 'Paket Data'
      })
    },
  },
  methods: {
    showAllBenefit(prodType) {
      this.$router.push({
        name: 'User-product-productType',
        params: {
          productType: prodType,
        },
      })
    },
    toDetail(idx) {
      this.$router.push({
        name: 'User-product-detail-tukar',
        params: {
          index: idx,
        },
      })
    },
  },
  components: { Card },
}
</script>

<style></style>
