<template>
  <div class="w-full px-10 flex flex-col gap-6">
    <div class="flex justify-between items-center gap-6">
      <div class="flex justify-evenly">
        <span class="text-2xl font-bold">Detail Riwayat Transaksi</span>
      </div>
    </div>
    <!-- Koreksi Drigo
    Line 3,4,6,7 gaperlu rahmaa, itu bisa dihapus aja.  kita gaperlu nge flexin tulisan Detail riwayat transaksi karena 
    gaada item yang bisa mempengaruhi dia. untuk dia ke susun kebawah udah di bikin oleh flex-col di line 2. jadi struktur nya
    seperti ini aja
     ______________
    |Detail Riwayat|
    |Card 1        |  <- Kiri ini bentuk yang dibuat oleh flex col di line 2
    |Card 2        |   
    |______________|
    -->

    <!-- Card 1-->
    <div class="flex flex-col bg-[#145374] px-5 py-5 gap-6 rounded-2xl">
      <div class="flex flex-col text-white gap-2">
        <div><span>Status: Berhasil</span></div>
        <div><span>Transaksi ID: Pulsa_123123</span></div>
        <div><span>Telkomsel 10.000</span></div>
        <div><span>Tanggal: 30 Mei 2022, 18.30 WIB</span></div>
      </div>
    </div>

    <!-- Card 2 -->
    <div class="flex flex-col bg-[#145374] px-5 py-5 gap-2 rounded-2xl">
      <span class="font-semibold text-white">Detail Transaksi</span>

      <div class="w-1/2 flex justify-between text-white gap-6">
        <div class="flex flex-col justify-evenly">
          <div>Harga</div>
          <div>Biaya Admin</div>
          <div>Total</div>
        </div>

        <div class="flex flex-col justify-evenly">
          <div>Rp 10.500</div>
          <div>Rp 0,00</div>
          <div>Rp 10.500</div>
        </div>
      </div>
    </div>

    <!-- Koreksi Drigo -->
    <!-- <div class="flex flex-col gap-4">
      <div class="w-full aspect-[7/1] bg-[#145374] rounded-md">
        <div class="flex flex-col gap-2 px-8 py-6 text-white text-xl">
          <div class="flex gap-[4px]">
            Status <span>:</span> <span>Berhasil</span>
          </div>

          <div class="flex gap-[4px]">
            Transaksi ID <span>:</span> <span>Pulsa_123123</span>
          </div>

          <div class="flex gap-[4px]">Telkomsel <span>10.000</span></div>

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
              <p>Rp. 10.500</p>
            </div>
            <div class="flex justify-between">
              <p>Biaya Admin</p>
              <p>Rp.0,00</p>
            </div>
            <div class="flex justify-between">
              <p>Total</p>
              <p>Rp. 10.500</p>
            </div>
          </div>
        </div>
      </div>
    </div> -->

    <!-- End Koreksi Drigo -->
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
