<template>
    <!-- Start Content -->


      <div class="w-full px-10 flex flex-col gap-6" >
          <div class="flex justify-between items-center gap-6">
            <div class="flex justify-evenly">
              <span class="text-2xl font-bold">Frequently Ask Question</span>
            </div>

            <div class="flex justify-evenly relative rounded">
              <button class="absolute inset-y-0 left-2">
                <svg class="h-6 w-6 stroke-2 stroke-gray-500" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" ><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
              </button>
              <input type="search" class="rounded-full form-control inline-block min-w-0 block pl-10 px-3 py-1.5 text-base font-normal w-96 text-gray-700 bg-white bg-clip-padding rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Apa yang bisa kami bantu?" aria-label="Search" aria-describedby="button-addon2">
              
            </div>
          </div>

      <!-- Start Bar Question -->

          <!-- Umum -->

          <div class="w-full rounded-lg rounded-lg bg-white block px-4 py-4">
            <div class="flex flex-col gap-2">
              <span class="font-bold">Umum</span>

              <button class="flex justify-between items-center  hover:bg-gray-100">
                <span class="justify-evenly">Transaksi apa saja yang bisa dilakukan?</span>
                <svg class="bi bi-chevron-right justify-evenly stroke-black stroke" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                </svg>
              </button>

              <div class="flex justify-between">
                <span class="justify-evenly">Berapa harga pulsa dan paket data yang dijual?</span>
                <svg class="bi bi-chevron-right justify-evenly stroke-black stroke" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                </svg>
              </div>
              
              <div class="flex justify-between">
                <span class="justify-evenly">Metode pembayaran apa saja yang tersedia?</span>
                <svg class="bi bi-chevron-right justify-evenly stroke-black stroke" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                </svg>
              </div>
            </div>  
          </div>

          <!-- End of Umum -->


          <!-- Akun -->
          <div class="w-full rounded-lg bg-white block px-4 py-4">
            <div class="flex flex-col gap-2">
              <span class="font-bold">Akun</span>

              <div class="flex justify-between">
                <span class="justify-evenly">Transaksi apa saja yang bisa dilakukan?</span>
                <svg class="bi bi-chevron-right justify-evenly stroke-black stroke" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                </svg>
              </div>

              <div class="flex justify-between">
                <span class="justify-evenly">Berapa harga pulsa dan paket data yang dijual?</span>
                <svg class="bi bi-chevron-right justify-evenly stroke-black stroke" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                </svg>
              </div>
              
              <div class="flex justify-between">
                <span class="justify-evenly">Metode pembayaran apa saja yang tersedia?</span>
                <svg class="bi bi-chevron-right justify-evenly stroke-black stroke" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                </svg>
              </div>
            </div>  
          </div>
          <!-- End Of Akun -->

          <!-- Transaksi -->
          <div class="w-full rounded-lg bg-white block px-4 py-4">
            <div class="flex flex-col gap-2">
              <span class="font-bold">Transaksi</span>

              <div class="flex justify-between">
                <span class="justify-evenly">Transaksi apa saja yang bisa dilakukan?</span>
                <svg class="bi bi-chevron-right justify-evenly stroke-black stroke" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                </svg>
              </div>

              <div class="flex justify-between">
                <span class="justify-evenly">Berapa harga pulsa dan paket data yang dijual?</span>
                <svg class="bi bi-chevron-right justify-evenly stroke-black stroke" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                </svg>
              </div>
              
              <div class="flex justify-between">
                <span class="justify-evenly">Metode pembayaran apa saja yang tersedia?</span>
                <svg class="bi bi-chevron-right justify-evenly stroke-black stroke" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                </svg>
              </div>
            </div>  
          </div>
          <!-- End of Transaksi -->

          <div class="w-full rounded-lg bg-white block px-4 py-4">
            <div class="flex flex-col gap-2">
              <span class="font-bold">Pengembalian Dana</span>

              <div class="flex justify-between">
                <span class="justify-evenly">Transaksi apa saja yang bisa dilakukan?</span>
                <svg class="bi bi-chevron-right justify-evenly stroke-black stroke" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                </svg>
              </div>

              <div class="flex justify-between">
                <span class="justify-evenly">Berapa harga pulsa dan paket data yang dijual?</span>
                <svg class="bi bi-chevron-right justify-evenly stroke-black stroke" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                </svg>
              </div>
              
              <div class="flex justify-between">
                <span class="justify-evenly">Metode pembayaran apa saja yang tersedia?</span>
                <svg class="bi bi-chevron-right justify-evenly stroke-black stroke" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                </svg>
              </div>
            </div>  
          </div>

          <div class="w-full rounded-lg bg-white block px-4 py-4">
            <div class="flex flex-col gap-2">
              <span class="font-bold">Pembayaran</span>

              <div class="flex justify-between">
                <span class="justify-evenly">Transaksi apa saja yang bisa dilakukan?</span>
                <svg class="bi bi-chevron-right justify-evenly stroke-black stroke" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                </svg>
              </div>

              <div class="flex justify-between">
                <span class="justify-evenly">Berapa harga pulsa dan paket data yang dijual?</span>
                <svg class="bi bi-chevron-right justify-evenly stroke-black stroke" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                </svg>
              </div>
              
              <div class="flex justify-between">
                <span class="justify-evenly">Metode pembayaran apa saja yang tersedia?</span>
                <svg class="bi bi-chevron-right justify-evenly stroke-black stroke" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                </svg>
              </div>
            </div>  
          </div>              

      </div>

      <!-- End of Bar Question -->
</template>