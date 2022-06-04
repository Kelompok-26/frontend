<template>
<div class="w-full h-auto mx-auto flex flex-col gap-6 max-w-screen-2xl font-poppins">
    <Navbar/>

    <!-- Start Content -->
      <div class="w-full px-10 flex flex-col gap-6">
          <div class="flex items-center justify-evenly gap-6">
              <div class="bg-gray-500 flex-1 flex flex-col items-center justify-center py-4 gap-2">
                  <p class="font-light">POIN KAMU</p>
                  <h4 class="text-2xl font-bold">200 Poin</h4>
              </div>
              <div class="bg-gray-500 flex-1 flex flex-col items-center justify-center py-4 gap-2">
                <p class="font-light">Cari Tahu</p>
                <h4 class="text-2xl font-medium">Benefitmu</h4>
            </div>
          </div>

          <div class="w-full bg-gray-500 h-72 block" ></div>

          <div class="w-full flex items-center gap-20 py-4 px-20 bg-gray-500 cursor-pointer">
              <h1 class="text-2xl font-bold">IMG</h1>
              <div class="flex flex-col justify-start  gap-1">
                  <h4 class="text-xl font-semibold">Tahukah cara menggunakan poin?</h4>
                  <p class="font-light text-lg">Tap Here!</p>
              </div>
          </div>

          <!-- Start Benefit & Redeem -->
          <div class="flex flex-col gap-16 my-10">
          <!-- Start Benefit Terpopuler-->
          <div class="flex flex-col gap-6">
              <div class="flex flex-row justify-between items-center">
                  <p class="text-xl font-bold">Benefit Terpopuler</p>
                  <p class="text-lg font-light">Semua<span class="pl-2">></span></p>
              </div>

              <Card/>
          </div>
                    <!-- End Benefit Terpopuler-->

                    

                    
            <!-- Start Redeem Terpopuler-->
          <div class="flex flex-col gap-6">
            <div class="flex flex-row justify-between items-center">
                <p class="text-xl font-bold">Redeem Terpopuler</p>
                <p class="text-lg font-light">Semua<span class="pl-2">></span></p>
            </div>

            <Card/>
        </div>
                  <!-- End Redeem Terpopuler-->
                </div>
                <!-- End Benefit & Redeem-->

                 <!-- Start Fitur Tersedia -->
      <div class="flex flex-col gap-4 bg-gray-500 items-center justify-center py-6">
        <div class="flex w-full items-center justify-evenly ">
            <h4 class="text-lg">A</h4>
            <h4 class="text-lg">A</h4>
            <h4 class="text-lg">A</h4>
            <h4 class="text-lg">A</h4>
            <h4 class="text-lg">A</h4>
        </div>

        <p class="font-bold">Fitur-Fitur yang disediakan di aplikasi</p>
      </div>
      
      <!-- End Fitur Tersedia -->
      </div>

  </div>
</template>

<script>
import Navbar from '../components/navbar.vue';
import Card from '../components/card.vue';
export default {
    name: "IndexPage",
    components: { Navbar, Card }
}
</script>
