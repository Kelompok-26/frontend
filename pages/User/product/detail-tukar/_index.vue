<template>
  <div class="w-full px-10">
    <dialog
      :class="{
        flex: isDialog,
        hidden: !isDialog,
      }"
      id="dialog"
      class="z-20 items-center justify-center fixed px-6 py-6 rounded-lg"
    >
      <div class="flex flex-col gap-16">
        <div class="flex justify-between items-center gap-64">
          <h1>Form penukaran poin ke <span>paket data</span></h1>
          <div class="cursor-pointer" @click="isDialog = false">
            <svg
              width="20"
              height="21"
              viewBox="0 0 40 41"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_405_18045)">
                <path
                  d="M34.1333 6.53295C32.2777 4.67334 30.0731 3.19865 27.6459 2.19359C25.2188 1.18852 22.617 0.672879 19.99 0.676286C8.94328 0.676286 -0.0117188 9.63129 -0.0117188 20.678C-0.0117188 26.2013 2.22828 31.203 5.84828 34.823C7.70383 36.6826 9.9085 38.1573 12.3356 39.1623C14.7628 40.1674 17.3646 40.683 19.9916 40.6796C31.0383 40.6796 39.9933 31.7246 39.9933 20.678C39.9933 15.1546 37.7533 10.153 34.1333 6.53295ZM31.5633 32.2446C30.0453 33.7665 28.2416 34.9734 26.2558 35.796C24.2699 36.6186 22.1411 37.0406 19.9916 37.038C10.9533 37.038 3.62661 29.7113 3.62661 20.673C3.62392 18.5235 4.046 16.3947 4.8686 14.4088C5.69119 12.423 6.89809 10.6192 8.41995 9.10129C9.93754 7.57941 11.741 6.37248 13.7265 5.54987C15.7121 4.72726 17.8407 4.30521 19.99 4.30795C29.0266 4.30795 36.3533 11.6346 36.3533 20.6713C36.3561 22.8205 35.9341 24.9491 35.1115 26.9347C34.2889 28.9203 33.0819 30.7237 31.5599 32.2413L31.5633 32.2446Z"
                  fill="black"
                />
                <path
                  d="M22.5616 20.6798L28.9866 14.2548C29.3035 13.9093 29.4748 13.4548 29.4646 12.9861C29.4545 12.5174 29.2637 12.0707 28.9321 11.7393C28.6004 11.4079 28.1537 11.2174 27.685 11.2076C27.2162 11.1977 26.7618 11.3693 26.4166 11.6864L26.4183 11.6848L19.9933 18.1098L13.5683 11.6848C13.2228 11.3678 12.7683 11.1966 12.2996 11.2067C11.8309 11.2169 11.3842 11.4077 11.0528 11.7393C10.7214 12.0709 10.5309 12.5177 10.5211 12.9864C10.5112 13.4551 10.6828 13.9095 10.9999 14.2548L10.9983 14.2531L17.4233 20.6781L10.9983 27.1031C10.8175 27.2689 10.6721 27.4696 10.571 27.6931C10.4698 27.9166 10.4149 28.1583 10.4096 28.4035C10.4043 28.6488 10.4487 28.8926 10.54 29.1203C10.6314 29.348 10.7679 29.5548 10.9413 29.7283C11.1148 29.9018 11.3215 30.0385 11.5491 30.13C11.7767 30.2215 12.0205 30.2661 12.2657 30.2609C12.511 30.2557 12.7527 30.201 12.9763 30.1C13.1998 29.999 13.4006 29.8538 13.5666 29.6731L13.5683 29.6714L19.9933 23.2464L26.4183 29.6714C26.5841 29.8522 26.7848 29.9975 27.0083 30.0987C27.2318 30.1999 27.4735 30.2548 27.7187 30.2601C27.964 30.2654 28.2078 30.221 28.4355 30.1296C28.6631 30.0383 28.87 29.9018 29.0435 29.7283C29.217 29.5549 29.3536 29.3482 29.4452 29.1206C29.5367 28.893 29.5812 28.6492 29.5761 28.4039C29.5709 28.1587 29.5162 27.917 29.4152 27.6934C29.3141 27.4699 29.1689 27.2691 28.9883 27.1031L28.9866 27.1014L22.5616 20.6798Z"
                  fill="black"
                />
              </g>
              <defs>
                <clipPath id="clip0_405_18045">
                  <rect
                    width="40"
                    height="40"
                    fill="white"
                    transform="translate(0 0.679688)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>

        <div class="flex flex-col gap-4 w-full px-10">
          <input
            v-model="nohp"
            type="text"
            class="w-full rounded-md px-4 py-2 border-2 border-gray-500 focus:border-[#145374] form-input"
            placeholder="No. Hp"
          />

          <select
            placeholder="Provider"
            id="provider"
            class="w-full rounded-md px-4 py-2 border-2 border-gray-500 form-select focus:border-[#145374]"
          >
            <option value="" disabled selected>Provider</option>
            <option value="Indosat">Indosat</option>
            <option value="Telkomsel">Telkomsel</option>
            <option value="AXIS">AXIS</option>
            <option value="XL Axiata">XL Axiata</option>
            <option value="3 (Three)">3 (Three)</option>
          </select>
        </div>

        <div class="flex items-center justify-center w-full">
          <div
            class="w-auto px-4 py-2 bg-[#145374] rounded-md text-white cursor-pointer"
          >
            Submit
          </div>
        </div>
      </div>
    </dialog>
    <div
      v-if="isDialog"
      class="w-full min-h-full fixed z-10 h-full bg-black flex left-0 top-0 opacity-50"
    ></div>
    <div
      class="w-full h-full flex flex-col rounded-md gap-6"
      :class="{ 'blur-sm': isDialog, 'blur-none': !isDialog }"
    >
      <!-- Tukar poin -->
      <div class="flex flex-col gap-6 mb-3">
        <p class="text-xl font-bold">Tukarkan poin ke Paket Data</p>

        <div class="w-full flex bg-[#145374] items-center gap-4">
          <div class="w-full flex items-center font-semibold">
            <div class="">
              <div
                class="w-44 aspect-[1.2/1] bg-center bg-cover relative"
                :style="{
                  'background-image': `url(https://ik.imagekit.io/drigoalexander/paketdata__pyAZJU4et.png?ik-sdk-version=javascript-1.4.3&updatedAt=1655375508716)`,
                }"
              ></div>
            </div>

            <div class="flex flex-col flex-1 items-end text-white px-10">
              <div><h4 class="font-bold text-5xl">Paket Data</h4></div>
              <div><h4 class="font-bold text-5xl">1 GB</h4></div>
            </div>
          </div>
        </div>
      </div>
      <!-- End of Tukar poin -->

      <!-- Paket Data 1 GB -->
      <div class="w-full flex flex-col gap-6">
        <p class="flex justify-center text-2xl font-bold">Paket Data 1 GB</p>

        <!-- Poin -->
        <div class="flex flex-col bg-white px-5 py-5 rounded-2xl">
          <div class="w-full flex flex-col gap-4 font-semibold">
            <div class="flex justify-between">
              <div>Poin</div>
              <div>10 Poin</div>
            </div>

            <div class="flex justify-between font-bold">
              <div>Berlaku sampai dengan</div>
              <div>30 Juli 2022</div>
            </div>
          </div>
        </div>

        <!-- Detail -->
        <div class="flex flex-col bg-white px-5 py-5 rounded-2xl">
          <p class="font-semibold py-3">Detail</p>
          <p>
            Paket Data 1GB ini merupakan salah satu penawaran untuk kamu dapat
            tukarkan dengan poin yang kamu milliki. Klik konfirmasi untuk
            mengisi form penukaran Paket Data 1GB ini.
          </p>
        </div>

        <!-- Syarat dan ketentuan -->
        <div class="flex flex-col bg-white px-5 py-5 rounded-2xl">
          <p class="font-semibold py-3">Syarat & Ketentuan</p>
          <ul>
            <li>
              1. Pengguna C-Loyal dapat menukarkan poin maksimal 2 kali dalam 7
              hari
            </li>
            <li>
              2. Pastikan penawaran yang kamu pilih sesuai dengan apa yang ingin
              kamu tukar
            </li>
            <li>3. Cek kembali detail untuk informasi yang lebih lengkap</li>
            <li>
              4. Isi form untuk melakukan penukaran karena penawaran ini akan
              menyesuaikan operator yang anda gunakan
            </li>
            <li>
              5. Jika sudah yakin, konfirmasi halaman ini untuk ke tahap
              selanjutnya.
            </li>
          </ul>
        </div>
      </div>
      <!-- End of Paket Data 1 GB -->
      <div class="flex justify-center">
        <button
          @click="isDialog = true"
          class="bg-[#145374] text-white items-center px-10 py-3 my-6 rounded-md"
        >
          Konfirmasi Tukar Poin
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      idx: '',
      nohp: '',
      provider: '',
      isDialog: false,
    }
  },

  created() {
    this.idx = this.$route.params.index
  },
  methods: {
    redirectBenefit(objBenefit) {
      this.$router.push({
        name: 'User-produtType',
        params: { objBft: objBenefit },
      })

      console.log(objBenefit)
    },
  },
}
</script>

<style></style>
