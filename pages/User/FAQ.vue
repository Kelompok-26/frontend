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

    <div class="w-full rounded-lg bg-white block px-4 py-4">
      <div class="flex flex-col gap-2">
        <span class="font-bold">Umum</span>
        <div class="flex flex-col gap-2" v-for="(um, idx) in umum" :key="idx">
          <div
            class="flex justify-between relative cursor-pointer"
            @click="redirectPage(idx, um.type)"
          >
            <span class="justify-evenly">{{ um.pertanyaan }}</span>
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

    <!-- End of Umum -->

    <!-- Akun -->
    <div class="w-full rounded-lg bg-white block px-4 py-4">
      <div class="flex flex-col gap-2">
        <span class="font-bold">Akun</span>
        <div class="flex flex-col gap-2" v-for="(akn, idx) in akun" :key="idx">
          <div
            class="flex justify-between relative cursor-pointer"
            @click="redirectPage(idx, akn.type)"
          >
            <span class="justify-evenly">{{ akn.pertanyaan }}</span>
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
    <!-- End Of Akun -->

    <!-- Transaksi -->
    <div class="w-full rounded-lg bg-white block px-4 py-4">
      <div class="flex flex-col gap-2">
        <span class="font-bold">Transaksi</span>
        <div
          class="flex flex-col gap-2"
          v-for="(trk, idx) in transaksi"
          :key="idx"
        >
          <div
            class="flex justify-between relative cursor-pointer"
            @click="redirectPage(idx, trk.type)"
          >
            <span class="justify-evenly">{{ trk.pertanyaan }}</span>
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
    <!-- End of Transaksi -->
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

  computed: {
    umum() {
      return this.$store.state.FQ.umum
    },

    akun() {
      return this.$store.state.FQ.akun
    },

    transaksi() {
      return this.$store.state.FQ.transaksi
    },
  },
  methods: {
    redirectPage(idx, type) {
      this.$router.push({
        name: 'User-faqType',
        params: {
          index: idx,
          faqType: type,
        },
      })

      // this.$store.dispatch('store/faq', {
      //   tipe: type,
      //   index: idx,
      // })
    },
  },
}
</script>
