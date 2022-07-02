<template>
    <div class="w-full px-10 flex flex-col gap-4">
        <span class="text-2xl font-bold">Delete User Poin</span>
        
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
                    <label class="text-black">ID Transaksi</label>
                    <input
                    type="text"
                    class="w-96 border border-gray-400 rounded-md py-2 px-4 text-black"
                    />
                </div>
                
                <div class="flex justify-between items-center">
                    <label class="text-black">Nama Pengguna</label>
                    <input
                    type="text"
                    class="w-96 border border-gray-400 rounded-md py-2 px-4 text-black"
                    />
                </div>

                <div class="flex justify-between items-center">
                    <label class="text-black">Poin</label>
                    <input
                    type="text"
                    class="w-96 border border-gray-400 rounded-md py-2 px-4 text-black"
                    />
                </div>
                
            </div>

            <!-- Button -->
                <div class="w-1/2 flex pb-5 justify-end">
                    <div class="w-96 flex justify-between">

                        <button class="bg-[#145374] flex items-center gap-2 text-white px-4 py-3 rounded-md">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                            <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
                            </svg>
                            Delete </button>
                        <button class="bg-[#145374] text-white px-8 py-3 rounded-md">Batal</button>
                    </div>
                </div>
            <!-- End of Button -->
            
        </div>
        
    </div>
</template>