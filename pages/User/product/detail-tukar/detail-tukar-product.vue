<template>
  <div class="w-full flex flex-col px-10 rounded-md gap-6">
    <!-- Tukar poin -->
    <div class="flex flex-col gap-6 mb-3">
      <p class="text-xl font-bold">Tukarkan poin ke Paket Data</p>

      <div class="w-full flex bg-[#145374] items-center gap-4">
        <div class="w-full flex items-center font-semibold">
          <div class="">
            <div
              class="w-44 aspect-[1.2/1] bg-center bg-cover relative"
              :style="{
                'background-image': `url(https://ik.imagekit.io/drigoalexander/paketdata__pyAZJU4et.png?ik-sdk-version=javascript-1.4.3&updatedAt=1655375508716)`,
              }"
            ></div>
          </div>

          <div class="flex flex-col flex-1 items-end text-white px-10">
            <div><h4 class="font-bold text-5xl">Paket Data</h4></div>
            <div><h4 class="font-bold text-5xl">1 GB</h4></div>
          </div>
        </div>
      </div>
    </div>
    <!-- End of Tukar poin -->

    <!-- Paket Data 1 GB -->
    <div class="w-full flex flex-col gap-6">
      <p class="flex justify-center text-2xl font-bold">Paket Data 1 GB</p>

      <!-- Poin -->
      <div class="flex flex-col bg-white px-5 py-5 rounded-2xl">
        <div class="w-full flex flex-col gap-4 font-semibold">
          <div class="flex justify-between">
            <div>Poin</div>
            <div>10 Poin</div>
          </div>

          <div class="flex justify-between font-bold">
            <div>Berlaku sampai dengan</div>
            <div>30 Juli 2022</div>
          </div>
        </div>
      </div>

      <!-- Detail -->
      <div class="flex flex-col bg-white px-5 py-5 rounded-2xl">
        <p class="font-semibold py-3">Detail</p>
        <p>
          Paket Data 1GB ini merupakan salah satu penawaran untuk kamu dapat
          tukarkan dengan poin yang kamu milliki. Klik konfirmasi untuk mengisi
          form penukaran Paket Data 1GB ini.
        </p>
      </div>

      <!-- Syarat dan ketentuan -->
      <div class="flex flex-col bg-white px-5 py-5 rounded-2xl">
        <p class="font-semibold py-3">Syarat & Ketentuan</p>
        <ul>
          <li>
            1. Pengguna C-Loyal dapat menukarkan poin maksimal 2 kali dalam 7
            hari
          </li>
          <li>
            2. Pastikan penawaran yang kamu pilih sesuai dengan apa yang ingin
            kamu tukar
          </li>
          <li>3. Cek kembali detail untuk informasi yang lebih lengkap</li>
          <li>
            4. Isi form untuk melakukan penukaran karena penawaran ini akan
            menyesuaikan operator yang anda gunakan
          </li>
          <li>
            5. Jika sudah yakin, konfirmasi halaman ini untuk ke tahap
            selanjutnya.
          </li>
        </ul>
      </div>
    </div>
    <!-- End of Paket Data 1 GB -->
    <div class="flex justify-center">
      <button
        class="bg-[#145374] text-white items-center px-10 py-3 my-6 rounded-md"
      >
        Konfirmasi Tukar Poin
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      paketData: [
        {
          nominal: '1 GB',
          productType: 'Paket Data',
          poin: '10 Poin',
        },
        {
          nominal: '1 GB',
          productType: 'Paket Data',
          poin: '10 Poin',
        },
        {
          nominal: '1 GB',
          productType: 'Paket Data',
          poin: '10 Poin',
        },
        {
          nominal: '1 GB',
          productType: 'Paket Data',
          poin: '10 Poin',
        },
        {
          nominal: '1 GB',
          productType: 'Paket Data',
          poin: '10 Poin',
        },
        {
          nominal: '1 GB',
          productType: 'Paket Data',
          poin: '10 Poin',
        },
      ],
    }
  },

  methods: {
    redirectBenefit(objBenefit) {
      this.$router.push({
        name: 'User-produtType',
        params: { objBft: objBenefit },
      })

      console.log(objBenefit)
    },
  },
}
</script>

<style></style>
