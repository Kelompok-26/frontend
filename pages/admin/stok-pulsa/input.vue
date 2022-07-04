<template>
    <div class="w-full px-10 flex flex-col gap-4">
        <span class="text-2xl font-bold">Input Pulsa</span>
        
        <div class="flex items-center justify-end gap-5">
            <p class="text-[#00334E]">Beranda</p>
            <svg class="bi bi-chevron-right"  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
            </svg>
            <p class="text-[#00334E]">Users</p>
            
            <button class="bg-[#EE6F57] flex items-center gap-2 text-white px-4 py-3 rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg stroke-white stroke" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
                </svg>
                <p> Tambah</p>
            </button>
        </div>
    
        <div class="w-full px-10 flex flex-col bg-white border-t-[10px] border-[#145374] rounded-md">
            <div class="flex flex-col w-1/2 py-10 gap-6" >
                <div class="flex justify-between items-center">
                    <label class="text-black">Provider</label> 

                    <!-- Provider -->
                    <div class="flex flex-col">

                        <button
                            class="flex justify-between items-start w-96 border border-gray-400 rounded-md py-2 px-4 text-black"
                            @click="isVisible = !isVisible"
                        >
                            <p>pilih provider</p> 

                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill fill-gray-500" viewBox="0 0 16 16">
                                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                            </svg>
                        </button>

                        <div 
                            v-if="isVisible"
                            class="mt-11 z-10 absolute bg-white divide-y divide-gray-100 rounded shadow w-96 dark:bg-gray-700"
                        >
                            <ul class="py-1 text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefault">
                            <li>
                                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">TELKOMSEL</a>
                            </li>
                            <li>
                                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">TRI</a>
                            </li>
                            <li>
                                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">INDOSAT</a>
                            </li>
                            <li>
                                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">XL</a>
                            </li>
                            </ul>
                        </div>
                    </div>
                    
                </div>
                
                <div class="flex justify-between items-center">
                    <label class="text-black">Pulsa</label>
                    <div class="flex flex-col">

                        <button
                            class="flex justify-between items-start w-96 border border-gray-400 rounded-md py-2 px-4 text-black"
                            @click="isVisible1=!isVisible1"
                        >
                            <p>pilih pulsa</p> 

                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill fill-gray-500" viewBox="0 0 16 16">
                                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                            </svg>
                        </button>

                        <div 
                            v-if="isVisible1"
                            class="mt-11 z-10 absolute bg-white divide-y divide-gray-100 rounded shadow w-96 dark:bg-gray-700"
                        >
                            <ul class="py-1 text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefault">
                            <li>
                                <a href="" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Rp 10.000</a>
                            </li>
                            <li>
                                <a href="" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Rp 20.000</a>
                            </li>
                            <li>
                                <a href="" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Rp 25.000</a>
                            </li>
                            <li>
                                <a href="" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Rp 50.000</a>
                            </li>
                            <li>
                                <a href="" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Rp 100.000</a>
                            </li>
                            <li>
                                <a href="" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Rp 200.000</a>
                            </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="flex justify-between items-center">
                    <label class="text-black">Harga</label>
                    <input
                    type="text"
                    class="w-96 border border-gray-400 rounded-md py-2 px-4 text-black"
                    />
                </div>

                <div class="flex justify-between items-center">
                    <label class="text-black">Stok</label>
                    <input
                    type="text"
                    class="w-96 border border-gray-400 rounded-md py-2 px-4 text-black"
                    />
                </div>
                
            </div>

            <!-- Button -->
                <div class="w-1/2 flex pb-5 justify-end">
                    <div class="w-96 flex justify-between">

                        <button class="bg-[#145374] text-white px-5 py-3 rounded-md">Simpan </button>
                        <button class="bg-[#145374] text-white px-8 py-3 rounded-md">Batal</button>
                    </div>
                </div>
            <!-- End of Button -->
            
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            isVisible: false,
            isVisible1: false
        }
    },
    methods:{
        toggleVisbility(){
            // this.isVisible = !this.isVisible;
        }
    }
    
}
</script>
