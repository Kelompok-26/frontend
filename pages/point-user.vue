<template>
  <div class="bg-[#F6F6F6] w-full h-auto mx-auto flex flex-col gap-6 max-w-screen-2xl">
      <Navbar/>
      <div class="w-full px-10 flex flex-col gap-6">
        <div class="flex w-full items-center bg-white px-14 py-4 gap-10">
            <h1 class="text-2xl font-bold"> IMG</h1>
            <div class="flex flex-col justify-start gap-6">
            <p class="font-light">Halo,</p>
            <h1 class="text-xl font-bold">Nama User</h1>

             </div>
          </div>

          <div class="flex w-full items-center bg-gray-500 px-14 py-14 gap-10">
            <div class="w-36 h-36 bg-red-500">

        </div>
          <div class="flex flex-col justify-start gap-4">
          <p class="font-medium text-2xl">Point Anda saat ini</p>
          <h1 class="text-7xl font-bold">300 <span class="text-4xl">Poin</span></h1>

          </div>
      </div>


      <div class="flex justify-between items-center gap-4">
        <div class="w-full px-20 py-4 flex items-center justify-center bg-gray-500">
          <p>Tukar Ke Pulsa</p>
        </div>

        <div class="w-full px-20 py-4 flex items-center justify-center bg-gray-500">
          <p>Tukar Ke Paket Data</p>
        </div>

        <div class="w-full px-20 py-4 flex items-center justify-center bg-gray-500">
          <p>Cek Benefit Tukar Point</p>
        </div>
      </div>

<div class="flex w-full items-center bg-gray-500 px-14 py-6 gap-10 cursor-pointer">
            <div class="w-24 h-24 bg-red-500">

        </div>
          <div class="flex flex-col justify-start gap-2 ">
          <p class="font-semibold text-xl">Masih bingung cara tukar poin?</p>
          <h1 class="text-lg font-light ">Baca Disini!</h1>

          </div>
      </div>

      <div class="flex flex-col gap-16 my-10">
          <!-- Start Benefit Terpopuler-->
          <div class="flex flex-col gap-6">
              <div class="flex flex-row justify-between items-center">
                  <p class="text-xl font-bold">Tukarkan Poin ke pulsa</p>
                  <p class="text-lg font-light">Semua<span class="pl-2">></span></p>
              </div>

              <Card class="cursor-pointer"/>
          </div>
                    <!-- End Benefit Terpopuler-->

                    

                    
            <!-- Start Redeem Terpopuler-->
          <div class="flex flex-col gap-6">
            <div class="flex flex-row justify-between items-center">
                <p class="text-xl font-bold">Tukarkan Poin ke paket data</p>
                <p class="text-lg font-light">Semua<span class="pl-2">></span></p>
            </div>

            <Card class="cursor-pointer"/>
        </div>
                  <!-- End Redeem Terpopuler-->
                </div>


      <h1>test</h1>
      </div>

     
  </div>
</template>

<script>
import Navbar from '../components/navbar.vue';
export default {
    name: "PointUser",
    components: { Navbar }
}
</script>

<style>

</style>