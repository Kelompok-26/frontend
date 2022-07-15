<template>
  <!-- Start Content -->
  <div class="w-full px-10 flex flex-col gap-6">
    <span class="text-[33px] font-semibold">Riwayat Penggunaan Poin</span>
    <div class="items-center justify-evenly gap-6"></div>

    <!-- Start Riwayat Poin -->
    <div>
      <div class="flex flex-col gap-4">
        <div class="flex flex-col-gap-4" v-for="trk in transaksi" :key="trk">
          <div
            class="w-full aspect-[8.06/1] flex flex-col bg-white gap-4 border-b-[1px] border-black py-6 px-5"
          >
            <span class="text-lg">31 Mei 2022</span>

            <div class="flex justify-between text-xl">
              <div class="flex flex-col items-start justify-start gap-2">
                <span class="">Transaksi Cashout BRI 10K</span>

                <button
                  class="w-auto border border-[#037857] bg-[#CAFAD0] text-[#01504A] px-3 rounded-md"
                >
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
          status: 'Dalam Proses',
        },
        {
          duit: 'Rp 16.000,00',
          poin: '10 Poin',
          status: 'Sukses',
        },
        {
          duit: 'Rp 11.000,00',
          poin: '10 Poin',
          status: 'Sukses',
        },
        {
          duit: 'Rp 13.000,00',
          poin: '10 Poin',
          status: 'Sukses',
        },
        {
          duit: 'Rp 17.000,00',
          poin: '10 Poin',
          status: 'Sukses',
        },
      ],
      poin: [
        {
          poin: '10 poin',
          status: 'Sukses',
        },
        {
          poin: '10 poin',
          status: 'Sukses',
        },
        {
          poin: '10 poin',
          status: 'Sukses',
        },
        {
          poin: '10 poin',
          status: 'Sukses',
        },
        {
          poin: '10 poin',
          status: 'Sukses',
        },
        {
          poin: '10 poin',
          status: 'Sukses',
        },
        {
          poin: '10 poin',
          status: 'Sukses',
        },
      ],
    }
  },

  created() {
    const tokens = this.$store.state.userAuth.token
    const id = this.$store.state.userAuth.id
    const config = {
      method: 'get',
      url: `http://ec2-54-160-45-255.compute-1.amazonaws.com:8080/v1/user/transaction/${id}`,
      headers: {
        Authorization: `Bearer ${tokens}`,
      },
    }

    this.$axios(config).then((res) => console.log(res))
  },
}
</script>
