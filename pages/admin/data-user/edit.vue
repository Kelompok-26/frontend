<template>
  <div class="w-full px-10 flex flex-col gap-4">
    <span class="text-2xl font-bold">Data User</span>

    <div class="flex items-center justify-end gap-5">
      <p class="text-[#00334E]">Beranda</p>
      <svg
        class="bi bi-chevron-right"
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
        />
      </svg>
      <p class="text-[#00334E]">Users</p>
    </div>

    <form
      action=""
      class="w-full px-10 flex flex-col bg-white border-t-[10px] border-[#145374] rounded-md"
    >
      <div class="flex flex-col w-1/2 py-10 gap-6">
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
          <label class="text-black">Alamat</label>
          <input
            type="text"
            class="w-96 border border-gray-400 rounded-md py-2 px-4 text-black"
          />
        </div>

        <div class="flex justify-between items-center">
          <label class="text-black">No Telepon</label>
          <input
            type="text"
            class="w-96 border border-gray-400 rounded-md py-2 px-4 text-black"
          />
        </div>
      </div>

      <!-- Button -->
      <div class="w-1/2 flex pb-5 justify-end">
        <div class="w-96 flex justify-between">
          <button class="bg-[#145374] text-white px-5 py-3 rounded-md">
            Simpan
          </button>
          <button class="bg-[#145374] text-white px-8 py-3 rounded-md">
            Batal
          </button>
        </div>
      </div>
      <!-- End of Button -->
    </form>
  </div>
</template>
<script>
export default {
  layout: 'admin',
}
</script>
