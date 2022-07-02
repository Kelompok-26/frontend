<template>
  <!-- Start Content -->
  <div class="w-full px-10 flex flex-col gap-6">
    <span class="text-[33px] font-semibold">Riwayat Transaksi dan Poin</span>
    <div class="items-center justify-evenly gap-6">
      <button
        @click="pageTransaksi = true"
        :class="{ 'bg-[#00334E]': pageTransaksi }"
        class="inline-block bg-white-100 border-2 w-72 border-[#00334E] px-4 py-4 gap-3 rounded-md"
      >
        <h4
          class="text-2xl text-center"
          :class="{
            'text-white': pageTransaksi,
            'text-[#00334E]': !pageTransaksi,
          }"
        >
          Transaksi
        </h4>
      </button>

      <button
        :class="{
          'bg-[#00334E]': !pageTransaksi,
          'border-[#00334E]': pageTransaksi,
        }"
        class="inline-block w-72 px-4 py-4 gap-2 rounded-md border-2"
        @click="pageTransaksi = false"
      >
        <h4
          class="text-2xl text-center"
          :class="{
            'text-white': !pageTransaksi,
            'text-[#00334E]': pageTransaksi,
          }"
        >
          Poin
        </h4>
      </button>
    </div>
    <!-- Start Riwayat Transaksi -->
    <div v-if="!pageTransaksi">
      <div class="flex flex-col gap-4">
        <div v-for="pnt in poin" :key="pnt" class="flex flex-col gap-4">
          <div
            class="w-full aspect-[8.06/1] bg-white border-b-[1px] border-black px-5 py-6"
          >
            <div class="">
              <span class="text-lg">1 Mei 2022</span>
            </div>

            <div class="flex justify-between text-xl py-4">
              <div class="flex flex-col justify-evenly gap-2">
                <span class="">Transaksi Cashout BRI 10K</span>
                <button  
                  v-if="pnt.status === 'Sukses'" 
                  class="w-44 border border-[#D88203] bg-[#FEE59A] text-[#783A00] px-3 rounded-md">
                    Dalam Proses
                </button>

                <button 
                  v-else 
                  class="w-24 border border-[#037857] bg-[#CAFAD0] text-[#01504A] px-3 rounded-md">
                    Sukses
                </button>
              </div>

              <div class="flex flex-col items-end justify-end">
                <span class=""><span>-</span>{{ pnt.poin }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End Riwayat Transaksi -->

    <!-- Start Riwayat Poin -->
    <div v-if="pageTransaksi">
      <div class="flex flex-col gap-4">
        <div class="flex flex-col-gap-4" v-for="trk in transaksi" :key="trk">
          <div
            class="w-full aspect-[8.06/1] flex flex-col bg-white gap-4 border-b-[1px] border-black py-6 px-5"
          >
            <span class="text-lg">31 Mei 2022</span>

            <div class="flex justify-between text-xl">
              <div  class="flex flex-col items-start justify-start gap-2">
                <span class="">Transaksi Cashout BRI 10K</span>
                <button v-if="trk.status === 'Dalam Proses'" class="w-auto border border-[#D88203] bg-[#FEE59A] text-[#783A00] px-3 rounded-md">
                    Dalam Proses
                </button>

                <button v-else class="w-auto border border-[#037857] bg-[#CAFAD0] text-[#01504A] px-3 rounded-md">
                    Sukses
                </button>

              </div>
              

              <div class="flex flex-col items-end justify-start gap-2">
                <span>{{ trk.duit }}</span>
                <span class=""><span>+</span>{{ trk.poin }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End Riwayat Poin -->
  </div>
  <!-- End Content -->
</template>

<script>
export default {
  name: 'riwayat-user',
  data() {
    return {
      pageTransaksi: true,
      transaksi: [
        {
          duit: 'Rp 10.000,00',
          poin: '10 Poin',
          status: 'Dalam Proses'
        },
        {
          duit: 'Rp 16.000,00',
          poin: '10 Poin',
          status: 'Sukses'
        },
        {
          duit: 'Rp 11.000,00',
          poin: '10 Poin',
          status: 'Sukses'
        },
        {
          duit: 'Rp 13.000,00',
          poin: '10 Poin',
          status: 'Sukses'
        },
        {
          duit: 'Rp 17.000,00',
          poin: '10 Poin',
          status: 'Sukses'
        },
      ],
      poin: [
        {
          poin: '10 poin',
          status: 'Sukses'
        },
        {
          poin: '10 poin',
          status: 'Sukses'
        },
        {
          poin: '10 poin',
          status: 'Sukses'
        },
        {
          poin: '10 poin',
          status: 'Sukses'
        },
        {
          poin: '10 poin',
          status: 'Sukses'
        },
        {
          poin: '10 poin',
          status: 'Sukses'
        },
        {
          poin: '10 poin',
          status: 'Sukses'
        },
      ],
    }
  },
}
</script>
