<template>
  <!-- Start Content -->

  <div class="w-full px-10 flex flex-col gap-6">
    <div class="flex justify-between items-center gap-6">
      <div class="flex justify-evenly">
        <span class="text-2xl font-bold">Frequently Ask Question</span>
      </div>
    </div>

    <!-- Start Bar Question -->

    <!-- Umum -->

    <div class="w-full rounded-lg rounded-lg bg-white block px-4 py-4">
      <div class="flex flex-col gap-2">
        <span class="font-bold">Umum</span>

        <button class="flex justify-between items-center hover:bg-gray-100">
          <span class="justify-evenly"
            >Transaksi apa saja yang bisa dilakukan?</span
          >
          <svg
            class="bi bi-chevron-right justify-evenly stroke-black stroke"
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
        </button>

        <div class="flex justify-between relative">
          <div
            :class="{
              'opacity-100': isHovering,
              'opacity-0': !isHovering,
              'translate-y-0': isHovering,
              'translate-y-10': !isHovering,
            }"
            class="absolute rounded-md justify-center items-center -bottom-8 left-0 w-auto delay-75 duration-200 flex px-2 aspect-[16/1] bg-[#f6f5f5] shadow-md"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
          </div>
          <span
            class="justify-evenly"
            @mouseover="isHovering = true"
            @mouseleave="isHovering = false"
            >Berapa harga pulsa dan paket data yang dijual?</span
          >
          <svg
            class="bi bi-chevron-right justify-evenly stroke-black stroke"
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
        </div>

        <div class="flex justify-between">
          <span class="justify-evenly"
            >Metode pembayaran apa saja yang tersedia?</span
          >
          <svg
            class="bi bi-chevron-right justify-evenly stroke-black stroke"
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
        </div>
      </div>
    </div>

    <!-- End of Umum -->

    <!-- Akun -->
    <div class="w-full rounded-lg bg-white block px-4 py-4">
      <div class="flex flex-col gap-2">
        <span class="font-bold">Akun</span>

        <div class="flex justify-between">
          <span class="justify-evenly"
            >Transaksi apa saja yang bisa dilakukan?</span
          >
          <svg
            class="bi bi-chevron-right justify-evenly stroke-black stroke"
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
        </div>

        <div class="flex justify-between">
          <span class="justify-evenly"
            >Berapa harga pulsa dan paket data yang dijual?</span
          >
          <svg
            class="bi bi-chevron-right justify-evenly stroke-black stroke"
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
        </div>

        <div class="flex justify-between">
          <span class="justify-evenly"
            >Metode pembayaran apa saja yang tersedia?</span
          >
          <svg
            class="bi bi-chevron-right justify-evenly stroke-black stroke"
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
        </div>
      </div>
    </div>
    <!-- End Of Akun -->

    <!-- Transaksi -->
    <div class="w-full rounded-lg bg-white block px-4 py-4">
      <div class="flex flex-col gap-2">
        <span class="font-bold">Transaksi</span>

        <div class="flex justify-between">
          <span class="justify-evenly"
            >Transaksi apa saja yang bisa dilakukan?</span
          >
          <svg
            class="bi bi-chevron-right justify-evenly stroke-black stroke"
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
        </div>

        <div class="flex justify-between">
          <span class="justify-evenly"
            >Berapa harga pulsa dan paket data yang dijual?</span
          >
          <svg
            class="bi bi-chevron-right justify-evenly stroke-black stroke"
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
        </div>

        <div class="flex justify-between">
          <span class="justify-evenly"
            >Metode pembayaran apa saja yang tersedia?</span
          >
          <svg
            class="bi bi-chevron-right justify-evenly stroke-black stroke"
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
        </div>
      </div>
    </div>
    <!-- End of Transaksi -->

    <div class="w-full rounded-lg bg-white block px-4 py-4">
      <div class="flex flex-col gap-2">
        <span class="font-bold">Pengembalian Dana</span>

        <div class="flex justify-between">
          <span class="justify-evenly"
            >Transaksi apa saja yang bisa dilakukan?</span
          >
          <svg
            class="bi bi-chevron-right justify-evenly stroke-black stroke"
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
        </div>

        <div class="flex justify-between">
          <span class="justify-evenly"
            >Berapa harga pulsa dan paket data yang dijual?</span
          >
          <svg
            class="bi bi-chevron-right justify-evenly stroke-black stroke"
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
        </div>

        <div class="flex justify-between">
          <span class="justify-evenly"
            >Metode pembayaran apa saja yang tersedia?</span
          >
          <svg
            class="bi bi-chevron-right justify-evenly stroke-black stroke"
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
        </div>
      </div>
    </div>

    <div class="w-full rounded-lg bg-white block px-4 py-4">
      <div class="flex flex-col gap-2">
        <span class="font-bold">Pembayaran</span>

        <div class="flex justify-between">
          <span class="justify-evenly"
            >Transaksi apa saja yang bisa dilakukan?</span
          >
          <svg
            class="bi bi-chevron-right justify-evenly stroke-black stroke"
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
        </div>

        <div class="flex justify-between">
          <span class="justify-evenly"
            >Berapa harga pulsa dan paket data yang dijual?</span
          >
          <svg
            class="bi bi-chevron-right justify-evenly stroke-black stroke"
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
        </div>

        <div class="flex justify-between">
          <span class="justify-evenly"
            >Metode pembayaran apa saja yang tersedia?</span
          >
          <svg
            class="bi bi-chevron-right justify-evenly stroke-black stroke"
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
        </div>
      </div>
    </div>
  </div>

  <!-- End of Bar Question -->
</template>

<script>
export default {
  data() {
    return {
      isHovering: false,
    }
  },
}
</script>
