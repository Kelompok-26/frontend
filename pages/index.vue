<template>
  <!-- Start Content -->
  <div class="w-full px-10 flex flex-col gap-6">
    <!-- <div class="" v-for="paket in paketData" :key="paket">
      {{ paket }}
    </div> -->
    <div
      class="w-full bg-[#F6F5F5] aspect-[2.5/1] bg-cover bg-center rounded-md"
      style="
        background-image: url('https://ik.imagekit.io/drigoalexander/BG_h42TN09T8.png?ik-sdk-version=javascript-1.4.3&updatedAt=1655291828395');
      "
    >
      <div class="flex flex-col items-start justify-start py-20 gap-10 px-10">
        <h1 class="text-7xl font-extrabold text-[#EE6F57]">C-Loyal</h1>
        <h3 class="text-5xl font-bold text-black leading-normal">
          Fast and simple <br />digital payment <br />
          solution
        </h3>
        <button
          class="w-auto px-4 aspect-[3/1] rounded-md border-2 border-black"
        >
          Explore Now!
        </button>
      </div>
    </div>
    <div class="flex items-center justify-evenly gap-6">
      <div
        class="bg-[#F6F5F5] rounded-lg border-[0.1px] border-black flex-1 flex items-center justify-center py-4 gap-6 shadow-lg"
      >
        <svg
          width="100"
          height="100"
          viewBox="0 0 121 121"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M83.5381 87.1668H109.738C107.538 58.1335 95.0381 40.1002 79.0048 29.4335L86.3048 13.5002C86.5254 12.9946 86.6172 12.4421 86.5718 11.8923C86.5264 11.3426 86.3452 10.8127 86.0446 10.3501C85.7439 9.8876 85.3332 9.50692 84.8492 9.24223C84.3652 8.97753 83.8231 8.83709 83.2714 8.8335H37.5715C37.0198 8.83709 36.4777 8.97753 35.9937 9.24223C35.5097 9.50692 35.099 9.8876 34.7983 10.3501C34.4977 10.8127 34.3165 11.3426 34.2711 11.8923C34.2257 12.4421 34.3174 12.9946 34.5381 13.5002L38.5381 22.1668H72.2714L69.2714 28.8335H63.1048C64.9881 33.8977 66.3725 39.1336 67.2381 44.4668C67.7988 47.7751 68.1551 51.1147 68.3048 54.4668L63.0381 58.1668C63.0524 53.8553 62.6955 49.5505 61.9715 45.3002C61.0504 39.6434 59.4615 34.1159 57.2381 28.8335H53.9048C50.8286 32.7204 48.0644 36.8443 45.6381 41.1668C43.6818 44.8747 42.0211 48.7311 40.6714 52.7002L36.1048 49.6668C37.4378 45.8307 39.0764 42.1076 41.0048 38.5335C42.9533 35.182 45.0901 31.9434 47.4048 28.8335H41.5715L41.8381 29.4002C24.1715 41.1668 10.7381 61.8335 10.7381 96.3335C10.6931 97.0587 10.7922 97.7857 11.0297 98.4724C11.2672 99.1591 11.6385 99.7919 12.122 100.334C12.6055 100.877 13.1917 101.318 13.8467 101.632C14.5017 101.947 15.2125 102.129 15.9381 102.167H42.6048C41.4597 100.975 40.6691 99.4881 40.3215 97.8724C39.9739 96.2567 40.0831 94.5761 40.6368 93.0189C41.1904 91.4618 42.1667 90.0895 43.4563 89.0559C44.7459 88.0223 46.2978 87.3682 47.9381 87.1668C47.1398 85.813 46.7143 84.2718 46.7048 82.7002C46.7048 80.3132 47.653 78.024 49.3408 76.3362C51.0286 74.6484 53.3178 73.7002 55.7048 73.7002H75.7048C78.0917 73.7002 80.3809 74.6484 82.0687 76.3362C83.7566 78.024 84.7048 80.3132 84.7048 82.7002C84.7219 84.2665 84.3191 85.8089 83.5381 87.1668V87.1668Z"
            fill="#00334E"
          />
          <path
            d="M72.5715 95.4998C72.5715 94.6158 72.2203 93.7679 71.5951 93.1428C70.97 92.5177 70.1222 92.1665 69.2381 92.1665H49.2381C48.3541 92.1665 47.5062 92.5177 46.8811 93.1428C46.256 93.7679 45.9048 94.6158 45.9048 95.4998C45.9048 96.3839 46.256 97.2317 46.8811 97.8569C47.5062 98.482 48.3541 98.8332 49.2381 98.8332H69.2381C70.1222 98.8332 70.97 98.482 71.5951 97.8569C72.2203 97.2317 72.5715 96.3839 72.5715 95.4998Z"
            fill="#00334E"
          />
          <path
            d="M75.7049 78.8335H55.7049C54.8209 78.8335 53.973 79.1847 53.3479 79.8098C52.7228 80.4349 52.3716 81.2828 52.3716 82.1668C52.3716 83.0509 52.7228 83.8987 53.3479 84.5239C53.973 85.149 54.8209 85.5002 55.7049 85.5002H75.7049C76.589 85.5002 77.4368 85.149 78.0619 84.5239C78.6871 83.8987 79.0383 83.0509 79.0383 82.1668C79.0383 81.2828 78.6871 80.4349 78.0619 79.8098C77.4368 79.1847 76.589 78.8335 75.7049 78.8335Z"
            fill="#00334E"
          />
          <path
            d="M73.9049 105.5H53.9049C53.0208 105.5 52.173 105.851 51.5478 106.476C50.9227 107.101 50.5715 107.949 50.5715 108.833C50.5715 109.717 50.9227 110.565 51.5478 111.19C52.173 111.815 53.0208 112.167 53.9049 112.167H73.9049C74.7889 112.167 75.6368 111.815 76.2619 111.19C76.887 110.565 77.2382 109.717 77.2382 108.833C77.2382 107.949 76.887 107.101 76.2619 106.476C75.6368 105.851 74.7889 105.5 73.9049 105.5Z"
            fill="#00334E"
          />
          <path
            d="M109.571 105.5H86.2381C85.3541 105.5 84.5062 105.851 83.8811 106.476C83.256 107.101 82.9048 107.949 82.9048 108.833C82.9048 109.717 83.256 110.565 83.8811 111.19C84.5062 111.815 85.3541 112.167 86.2381 112.167H109.571C110.456 112.167 111.303 111.815 111.928 111.19C112.554 110.565 112.905 109.717 112.905 108.833C112.905 107.949 112.554 107.101 111.928 106.476C111.303 105.851 110.456 105.5 109.571 105.5Z"
            fill="#00334E"
          />
          <path
            d="M112.905 92.1665H89.5716C88.6876 92.1665 87.8397 92.5177 87.2146 93.1428C86.5895 93.7679 86.2383 94.6158 86.2383 95.4998C86.2383 96.3839 86.5895 97.2317 87.2146 97.8569C87.8397 98.482 88.6876 98.8332 89.5716 98.8332H112.905C113.789 98.8332 114.637 98.482 115.262 97.8569C115.887 97.2317 116.238 96.3839 116.238 95.4998C116.238 94.6158 115.887 93.7679 115.262 93.1428C114.637 92.5177 113.789 92.1665 112.905 92.1665Z"
            fill="#00334E"
          />
        </svg>

        <div class="flex flex-col items-center justify-center gap-2">
          <p class="font-light text-2xl">POIN KAMU</p>
          <h4 class="text-4xl font-bold">200 Poin</h4>
        </div>
      </div>
      <div
        class="bg-[#F6F5F5] rounded-lg border-[0.1px] border-black flex-1 flex items-center justify-center py-4 gap-6 shadow-lg"
      >
        <svg
          width="100"
          height="100"
          viewBox="0 0 121 121"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M23.7994 76.85V100.95C23.8125 102.161 24.303 103.319 25.1642 104.17C26.0255 105.022 27.188 105.5 28.3994 105.5H56.4994V76.85H23.7994ZM64.6994 105.5H92.7994C94.0107 105.5 95.1733 105.022 96.0345 104.17C96.8958 103.319 97.3862 102.161 97.3994 100.95V76.85H64.6994V105.5ZM101.099 35.95H91.8994C92.8417 34.0361 93.3375 31.9333 93.3494 29.8C93.3361 26.0028 91.8184 22.3657 89.1287 19.6853C86.439 17.005 82.7966 15.5 78.9994 15.5C75.0326 15.6881 71.1999 16.9945 67.944 19.2683C64.6882 21.5421 62.1419 24.6906 60.5994 28.35C59.0568 24.6906 56.5106 21.5421 53.2547 19.2683C49.9988 16.9945 46.1662 15.6881 42.1994 15.5C38.4022 15.5 34.7597 17.005 32.07 19.6853C29.3803 22.3657 27.8626 26.0028 27.8494 29.8C27.8612 31.9333 28.357 34.0361 29.2994 35.95H20.0994C17.5994 35.95 15.5994 38.9 15.5994 42.5V62.15C15.5994 65.75 17.5994 68.7 20.0994 68.7H56.4994V35.95H64.6994V68.7H101.099C103.599 68.7 105.599 65.75 105.599 62.15V42.5C105.599 38.9 103.599 35.95 101.099 35.95ZM42.1994 35.95C41.3485 36.027 40.4909 35.9258 39.6814 35.653C38.8718 35.3801 38.1279 34.9416 37.4972 34.3653C36.8664 33.7891 36.3627 33.0877 36.0181 32.306C35.6734 31.5243 35.4954 30.6793 35.4954 29.825C35.4954 28.9707 35.6734 28.1257 36.0181 27.344C36.3627 26.5623 36.8664 25.8609 37.4972 25.2847C38.1279 24.7084 38.8718 24.2699 39.6814 23.997C40.4909 23.7242 41.3485 23.623 42.1994 23.7C49.1994 23.7 53.1494 30.9 55.0994 35.95H42.1994ZM78.9994 35.95H66.0994C68.0494 30.95 71.9994 23.7 78.9994 23.7C79.8502 23.623 80.7078 23.7242 81.5174 23.997C82.327 24.2699 83.0708 24.7084 83.7016 25.2847C84.3323 25.8609 84.836 26.5623 85.1807 27.344C85.5253 28.1257 85.7033 28.9707 85.7033 29.825C85.7033 30.6793 85.5253 31.5243 85.1807 32.306C84.836 33.0877 84.3323 33.7891 83.7016 34.3653C83.0708 34.9416 82.327 35.3801 81.5174 35.653C80.7078 35.9258 79.8502 36.027 78.9994 35.95Z"
            fill="#00334E"
          />
        </svg>

        <div class="flex flex-col items-center justify-center gap-2">
          <p class="text-2xl">Cari Tahu</p>
          <h4 class="text-3xl">Benefitmu</h4>
        </div>
      </div>
    </div>

    <div
      class="w-full flex items-center gap-20 aspect-[10/1] px-20 bg-[#00334E] rounded-lg cursor-pointer"
    >
      <svg
        width="80"
        height="79"
        viewBox="0 0 111 110"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M37.2722 64.1665C52.46 64.1665 64.7722 51.8543 64.7722 36.6665C64.7722 21.4787 52.46 9.1665 37.2722 9.1665C22.0844 9.1665 9.77222 21.4787 9.77222 36.6665C9.77222 51.8543 22.0844 64.1665 37.2722 64.1665Z"
          stroke="#F6F5F5"
          stroke-width="5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M32.689 27.5H37.2723V45.8333M83.5181 47.5292C87.8508 49.1445 91.7062 51.8262 94.7278 55.3263C97.7494 58.8265 99.8397 63.032 100.805 67.5541C101.771 72.0761 101.581 76.7686 100.252 81.1976C98.9236 85.6267 96.4997 89.6492 93.2047 92.8932C89.9096 96.1373 85.8498 98.4981 81.4006 99.7573C76.9513 101.017 72.2564 101.134 67.75 100.098C63.2436 99.0615 59.0712 96.9059 55.6186 93.83C52.166 90.7541 49.5448 86.8573 47.9973 82.5L83.5181 47.5292Z"
          stroke="#F6F5F5"
          stroke-width="5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M77.193 63.6167L80.4013 66.8709L67.4763 79.7959"
          stroke="#F6F5F5"
          stroke-width="5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>

      <div class="flex flex-col justify-start gap-1 text-white">
        <h4 class="text-xl font-semibold">Tahukah cara menggunakan poin?</h4>
        <p class="font-light text-lg">Ketuk banner ini!</p>
      </div>
    </div>

    <!-- Start Benefit & Redeem -->
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
            v-for="paket in paketData"
            :key="paket"
            :nominal="paket.nominal"
            :productType="paket.productType"
            :poin="paket.poin"
            :backgroundImage="'https://ik.imagekit.io/drigoalexander/paketdata__pyAZJU4et.png?ik-sdk-version=javascript-1.4.3&updatedAt=1655375508716'"
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
            
            v-for="paket in pulsa"
            :key="paket"
            :nominal="paket.nominal"
            :productType="paket.productType"
            :poin="paket.poin"
            :backgroundImage="'https://ik.imagekit.io/drigoalexander/pulsa_Dgic1XZnM.png?ik-sdk-version=javascript-1.4.3&updatedAt=1655300119237'"
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
            v-for="paket in cashout"
            :key="paket"
            :nominal="paket.nominal"
            :productType="paket.productType"
            :poin="paket.poin"
            :backgroundImage="'https://ik.imagekit.io/drigoalexander/cashout_UhMhjSBXXV.png?ik-sdk-version=javascript-1.4.3&updatedAt=1655375554772'"
          />
        </div>
      </div>
      <!-- End Cashout -->

      <!-- Start E-Money -->
      <div class="flex flex-col gap-6">
        <div class="flex flex-row justify-between items-center">
          <p class="text-xl font-bold">Rekomendasi E-Money</p>
          <p
            @click="showAllBenefit(emoneyParam)"
            class="text-lg font-semibold text-[#145374] cursor-pointer"
          >
            Semua
          </p>
        </div>

        <div
          class="flex gap-4 pb-4 overscroll-x-contain overflow-x-scroll w-auto scrollbar-hide"
        >
          <Card
            v-for="paket in emoney"
            :key="paket"
            :nominal="paket.nominal"
            :productType="paket.productType"
            :poin="paket.poin"
            :backgroundImage="'https://ik.imagekit.io/drigoalexander/emoney_LVf6ujW1Q.png?ik-sdk-version=javascript-1.4.3&updatedAt=1655375609772'"
          />
        </div>
      </div>
      <!-- End E-Money -->
    </div>
    <!-- End Benefit & Redeem-->

    <!-- Start Fitur Tersedia -->

    <layanan />
    <!-- End Fitur Tersedia -->
  </div>
</template>

<script>
import Card from '../components/Card.vue'
import Layanan from '../components/layanan.vue'

export default {
  name: 'IndexPage',
  data() {
    return {
      paketDataParam: 'paketData',
      pulsaParam: 'pulsa',
      cashoutParam: 'cashout',
      emoneyParam: 'emoney',
    }
  },

  computed: {
    paketData() {
      return this.$store.state.product.paketData
    },

    pulsa() {
      return this.$store.state.product.pulsa
    },
    cashout() {
      return this.$store.state.product.cashout
    },
    emoney() {
      return this.$store.state.product.emoney
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
  },

  components: { Card, Layanan },
}
</script>
