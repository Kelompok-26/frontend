<template>
    <!-- Start Content -->
      <div class="w-full px-10 flex flex-col gap-6" >

        <span class="text-2xl font-semibold">Riwayat Transaksi dan Poin</span>

          <div class=" items-center justify-evenly gap-6">
            <NuxtLink to="/User/riwayat-transaksi">
              <button class="inline-block bg-white-100 border-2 w-72 border-[#EE6F57] px-4 py-4 gap-3 rounded-md">
                <h4 class="text-2xl text-center text-[#EE6F57]">Transaksi</h4>
              </button>
            </NuxtLink>

              <button class="inline-block bg-[#EE6F57] w-72 px-4 py-4 gap-2 rounded-md">
                <h4 class="text-2xl text-white text-center">Poin</h4>
                </button>
          </div>

          <div class="w-full bg-white block shadow-md py-2 px-5">
              <div class="">
                <span class="text-lg">1 Mei 2022</span>
              </div>

              <div class="flex justify-between text-xl py-4">
                <div class="justify-evenly">
                  <span class="">Transaksi Cashout BRI 10K</span>
                </div>

                <div class="justify-evenly">
                  <span class="">- 10 Poin</span>
                  
                </div>

              </div>
          </div>    
    </div>
      <!-- End Content -->

</template>