<template>
    <div class="w-full px-10 flex flex-col gap-6">
        <div class="flex justify-between items-center gap-6">
            <div class="flex justify-evenly">
                <span class="text-2xl font-bold">Detail Riwayat Transaksi</span>
            </div>
        </div>

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

        <div class="flex justify-center">
            <button class="bg-[#00334E] text-white items-center px-10 py-3 rounded-md">Butuh Bantuan?</button>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>