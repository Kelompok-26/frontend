<template>
    <!-- Start Content -->
      <div class="w-full px-10 flex flex-col gap-6" >

        <span class="text-2xl font-semibold">Riwayat Transaksi dan Poin</span>

          <div class=" items-center justify-evenly gap-6">
              <button class="inline-block w-72 bg-[#EE6F57] rounded-md px-4 py-4 gap-3">
                  <h4 class="text-2xl text-center text-white">Transaksi</h4>
              </button>
               
              <NuxtLink to="/User/riwayat-poin">
                <button class="inline-block border-2 border-[#EE6F57] rounded-md w-72 px-4 py-4 gap-2">
                  <h4 class="text-2xl text-center text-[#EE6F57]">Poin</h4>
                </button>
              </NuxtLink>
          </div>

          <div class="w-full aspect-[6.2/1] flex flex-col bg-white gap-4 shadow-md py-2 px-5">
       
                <span class="text-lg">1 Mei 2022</span>
              

              <div class="flex justify-between text-xl">
                  <span class="">Transaksi Cashout BRI 10K</span>
                

                <div class="flex flex-col items-end justify-start gap-2 ">
                  <span>Rp 11.000,00</span>
                  <span class="">+ 5 Poin</span>
                  
                </div>

              </div>
          </div>

            
        </div> 
      <!-- End Content -->

</template>