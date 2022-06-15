<template>
  <div
    class="w-full h-auto mx-auto relative max-w-screen-2xl font-poppins bg-gray-200 backdrop-blur-md"
  >
    <div class="px-10 flex flex-col gap-6 relative">
      <div class="w-full py-4 flex items-center gap-10 px-10 bg-[#FFFFFF]">
        <svg
          width="60"
          height="60"
          viewBox="0 0 77 77"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_118_1871)">
            <path
              d="M67.5756 8.44678H8.44684C7.3267 8.44678 6.25244 8.89175 5.46039 9.68381C4.66833 10.4759 4.22336 11.5501 4.22336 12.6703V63.3521C4.22336 64.4722 4.66833 65.5465 5.46039 66.3385C6.25244 67.1306 7.3267 67.5756 8.44684 67.5756H67.5756C68.6958 67.5756 69.77 67.1306 70.5621 66.3385C71.3541 65.5465 71.7991 64.4722 71.7991 63.3521V12.6703C71.7991 11.5501 71.3541 10.4759 70.5621 9.68381C69.77 8.89175 68.6958 8.44678 67.5756 8.44678ZM8.44684 63.3521V12.6703H67.5756V63.3521H8.44684Z"
              fill="black"
            />
            <path
              d="M18.8368 29.5647C20.0897 29.5647 21.3146 29.1932 22.3564 28.4971C23.3982 27.8009 24.2102 26.8115 24.6897 25.6539C25.1692 24.4963 25.2947 23.2225 25.0503 21.9936C24.8058 20.7647 24.2024 19.6358 23.3164 18.7498C22.4304 17.8638 21.3016 17.2605 20.0727 17.016C18.8438 16.7716 17.57 16.897 16.4124 17.3765C15.2548 17.856 14.2653 18.668 13.5692 19.7099C12.8731 20.7517 12.5015 21.9765 12.5015 23.2295C12.5015 24.9097 13.169 26.5211 14.3571 27.7092C15.5452 28.8973 17.1565 29.5647 18.8368 29.5647ZM18.8368 19.8507C19.5059 19.8465 20.1612 20.0411 20.7196 20.4099C21.278 20.7786 21.7144 21.3048 21.9734 21.9218C22.2323 22.5388 22.3023 23.2188 22.1743 23.8756C22.0463 24.5325 21.7262 25.1365 21.2545 25.6111C20.7828 26.0858 20.1808 26.4097 19.5248 26.5418C18.8689 26.6738 18.1884 26.6082 17.5698 26.3531C16.9512 26.098 16.4222 25.6649 16.05 25.1088C15.6778 24.5528 15.4791 23.8987 15.4791 23.2295C15.4846 22.3407 15.8402 21.4899 16.4686 20.8614C17.0971 20.2329 17.948 19.8774 18.8368 19.8718V19.8507Z"
              fill="black"
            />
            <path
              d="M48.1055 32.4573L36.7021 43.8608L28.2551 35.4138C27.8595 35.0205 27.3242 34.7997 26.7663 34.7997C26.2085 34.7997 25.6732 35.0205 25.2776 35.4138L12.5015 48.3588V54.335L26.8403 39.9963L33.7879 46.8383L25.8689 54.7573H31.6761L49.5204 36.9131L63.3523 50.6817V44.7266L51.0831 32.4573C50.6874 32.064 50.1522 31.8433 49.5943 31.8433C49.0364 31.8433 48.5012 32.064 48.1055 32.4573Z"
              fill="black"
            />
          </g>
          <defs>
            <clipPath id="clip0_118_1871">
              <rect width="76.0227" height="76.0227" fill="white" />
            </clipPath>
          </defs>
        </svg>

        <div class="flex flex-col gap-2">
          <p class="font-light">Halo,</p>
          <h1 class="font-bold text-xl">Nama User</h1>
        </div>
      </div>

      <div class="flex flex-col gap-8">
        <h3 class="text-xl font-bold">Redeem Menu</h3>
        <div class="w-full px-2 py-1 bg-white rounded-md shadow-md">
          Untuk melakukan redeem yang kamu inginkan, yuk isi form dibawah ini
        </div>
      </div>

      <form action="">
        <div
          class="flex flex-col gap-10 bg-white w-full pl-28 pr-6 py-4 shadow-md rounded-lg"
        >
          <div class="flex items-center justify-center">
            <h4 class="text-lg font-bold">Form Pengisian Redeem</h4>
          </div>
          <!-- Nama -->
          <div class="flex gap-4 w-full items-center justify-evenly">
            <label for="Nama" class="w-1/5 text-xl">Nama</label>
            <input type="text" class="bg-gray-100 w-full px-2 py-2" />
          </div>
          <!-- End Nama -->

          <!-- Start Type Redeem -->
          <div class="flex gap-4 w-full items-center justify-evenly">
            <label for="type-redeem" class="w-1/5 text-xl">Type Redeem</label>
            <input type="text" class="bg-gray-100 w-full px-2 py-2" />
          </div>

          <!-- End Type Redeem -->

          <!-- Start Nominal -->
          <div class="flex gap-4 w-full items-center justify-evenly">
            <label for="nominal" class="w-1/5 text-xl">Nominal</label>
            <input type="text" class="bg-gray-100 w-full px-2 py-2" />
          </div>
          <!-- End Nominal -->
          <!-- Start Point Didapat -->
          <div class="flex gap-4 w-full items-center justify-evenly">
            <label for="point-didapat" class="w-1/5 text-xl"
              >Poin didapat</label
            >
            <input type="text" class="bg-gray-100 w-full px-2 py-2" />
          </div>

          <!-- End point Didapat -->

          <!-- Start Tanggal -->
          <div class="flex gap-4 w-full items-center justify-evenly">
            <label for="Tanggal" class="w-1/5 text-xl">Tanggal</label>
            <input type="date" class="bg-gray-100 w-full px-2 py-2" />
          </div>
          <!-- End Tanggal -->

          <div class="flex justify-end cursor-pointer">
            <div
              @click="isSubmit = true"
              class="px-4 py-2 bg-gray-500 rounded-lg"
            >
              Submit
            </div>
          </div>
        </div>
      </form>
    </div>
    <div
      v-if="isSubmit"
      class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
    >
      <div
        class="flex flex-col items-center justify-center w-auto px-10 py-8 gap-4 bg-white border-2 border-black rounded-lg"
      >
        <svg
          width="162"
          height="167"
          viewBox="0 0 162 167"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="162" height="166.765" fill="#848484" />
          <g clip-path="url(#clip0_197_5285)">
            <path
              d="M99.5294 65.647H62.4705C61.7685 65.647 61.0952 65.9259 60.5988 66.4223C60.1024 66.9187 59.8235 67.592 59.8235 68.294V100.059C59.8235 100.761 60.1024 101.434 60.5988 101.93C61.0952 102.427 61.7685 102.706 62.4705 102.706H99.5294C100.231 102.706 100.905 102.427 101.401 101.93C101.898 101.434 102.176 100.761 102.176 100.059V68.294C102.176 67.592 101.898 66.9187 101.401 66.4223C100.905 65.9259 100.231 65.647 99.5294 65.647ZM62.4705 100.059V68.294H99.5294V100.059H62.4705Z"
              fill="black"
            />
            <path
              d="M68.9823 78.8826C69.7676 78.8826 70.5353 78.6497 71.1882 78.2134C71.8412 77.7771 72.3501 77.157 72.6507 76.4315C72.9512 75.7059 73.0298 74.9076 72.8766 74.1374C72.7234 73.3672 72.3452 72.6597 71.7899 72.1044C71.2346 71.5491 70.5271 71.1709 69.7569 71.0177C68.9867 70.8645 68.1884 70.9431 67.4628 71.2437C66.7373 71.5442 66.1172 72.0531 65.6809 72.7061C65.2446 73.359 65.0117 74.1267 65.0117 74.912C65.0117 75.9651 65.43 76.975 66.1747 77.7196C66.9193 78.4643 67.9292 78.8826 68.9823 78.8826ZM68.9823 72.7943C69.4017 72.7917 69.8124 72.9137 70.1624 73.1448C70.5124 73.3759 70.7859 73.7057 70.9482 74.0924C71.1105 74.4791 71.1543 74.9053 71.0741 75.317C70.9939 75.7286 70.7933 76.1072 70.4976 76.4047C70.202 76.7021 69.8247 76.9051 69.4136 76.9879C69.0024 77.0707 68.576 77.0296 68.1882 76.8697C67.8005 76.7098 67.469 76.4384 67.2357 76.0899C67.0024 75.7413 66.8779 75.3314 66.8779 74.912C66.8814 74.3549 67.1042 73.8217 67.4981 73.4278C67.892 73.0339 68.4253 72.8111 68.9823 72.8076V72.7943Z"
              fill="black"
            />
            <path
              d="M87.3264 80.6955L80.1794 87.8426L74.8852 82.5485C74.6373 82.302 74.3018 82.1636 73.9522 82.1636C73.6025 82.1636 73.2671 82.302 73.0191 82.5485L65.0117 90.6617V94.4073L73.9985 85.4205L78.3529 89.7088L73.3897 94.672H77.0294L88.2132 83.4882L96.8823 92.1176V88.3852L89.1926 80.6955C88.9446 80.449 88.6092 80.3107 88.2595 80.3107C87.9099 80.3107 87.5744 80.449 87.3264 80.6955Z"
              fill="black"
            />
          </g>
          <defs>
            <clipPath id="clip0_197_5285">
              <rect
                width="47.6471"
                height="47.6471"
                fill="white"
                transform="translate(57.1765 60.3529)"
              />
            </clipPath>
          </defs>
        </svg>
        <p class="text-lg font-bold">Transaksi Diproses</p>
        <p class="text-sm text-center">
          Permintaan anda untuk transaksi xxx sedang diproses, tunggu <br />
          beberapa saat untuk menyelesaikannya
        </p>
        <button
          type="submit"
          @click="isSubmit = false"
          class="text-white py-1 rounded-full w-1/2 flex items-center justify-center bg-[#3C3C3C]"
        >
          Close
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isSubmit: false,
    }
  },
}
</script>

<style></style>
