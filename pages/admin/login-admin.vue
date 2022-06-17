<template>
  <div class="w-full h-screen mx-auto flex flex-row max-w-screen-2xl bg-[#145374]">


      <!-- Start Content -->
      <div class="w-full h-full basis-1/2" >
        <div class="h-full font-semibold bg-gray-100"></div>   
        </div>

        <div class="w-full basis-1/2 block h-full flex items-center justify-center">
            
        
            <div class="flex flex-col py-12 gap-10 w-96">
              <div class="font-semibold w-96">
                <span class="text-2xl text-white">Welcome Admin! <br> LogIn to continue</span>
              </div>

              <div class="flex flex-col w-96">
                <label class="text-white">No Telepon</label>
                <input type="text" class="bg-gray-200 rounded-lg w-full py-2 px-4 text-gray-700">
              </div>
              
              <div class="flex flex-col w-96">
                <label class="text-white">Password</label>
                <input type="text" class="bg-gray-200 rounded-lg w-full py-2 px-4 text-gray-700">
              </div>

              <button class="text-slate-100 font-bold bg-[#EE6F57] text-xl w-96 py-2 px-4 rounded-lg">Login</button>

            </div>
      
        </div>  
              
    </div>

      <!-- End Fitur Tersedia -->
      </div>
      <!-- End Content -->
  </div>
  
</template>

<script>
export default {
  // layout: 'admin',
}
</script>

<style></style>
