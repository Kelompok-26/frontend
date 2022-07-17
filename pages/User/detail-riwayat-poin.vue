<template>
  <div class="w-full px-10 flex flex-col gap-6">
      <span class="text-2xl font-bold">Detail Riwayat Transaksi</span>

    <div class="w-60 cursor-pointer flex rounded-full shadow-lg gap-4 px-5 bg-white py-3">
      <svg width="10" height="20" viewBox="0 0 12 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.6663 1.83252L1.33301 11.1659L10.6663 20.4992" stroke="#00334E" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>

      <span class="text-md text-[#00334E]">Kembali ke Riwayat</span> 
    </div>

    <div class="flex flex-col gap-4">
      <div class="w-full aspect-[7/1] bg-[#145374] rounded-md">
        <div class="flex flex-col gap-2 px-8 py-6 text-white text-xl">
          <div class="flex gap-[4px]">
            Status <span>:</span> <span>Berhasil</span>
          </div>

          <div class="flex gap-[4px]">
            Transaksi ID <span>:</span> <span>ABC123</span>
          </div>

          <div class="flex gap-[4px]">Penukaran poin ke pulsa <span>10K</span></div>

          <div class="flex gap-[4px]">
            Tanggal <span>:</span> <span>30 Mei 2022, 18:30 WIB</span>
          </div>
        </div>
      </div>
      <div class="w-full aspect-[7] rounded-md bg-[#145374] px-8 py-6">
        <div class="flex flex-col gap-8 text-white text-xl">
          <p class="font-semibold">Detail Transaksi</p>
          <div class="flex flex-col w-1/2 gap-2">
            <div class="flex justify-between">
              <p>Harga</p>
              <p>10 Poin</p>
            </div>
            <div class="flex justify-between">
              <p>Biaya Admin</p>
              <p>10 Poin</p>
            </div>
            <div class="flex justify-between">
              <p>Total</p>
              <p>10 Poin</p>
            </div>
          </div>
        </div>
      </div>
    </div>


    <div class="flex justify-center">
      <button
        class="bg-[#00334E] text-white items-center px-10 py-3 rounded-md"
      >
        Butuh Bantuan?
      </button>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
