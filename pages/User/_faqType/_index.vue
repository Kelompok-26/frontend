<template>
  <div class="w-full px-10 flex flex-col gap-6">
    <div class="flex justify-between items-center gap-6">
      <div class="flex justify-evenly">
        <span class="text-2xl font-bold">Frequently Ask Question</span>
      </div>
    </div>
    <div class="w-full rounded-lg bg-white block px-4 py-4 bg-[#145374]">
      <div class="flex flex-col gap-2">
        <span class="text-white">Pertanyaan:</span>
        <span class="text-white font-semibold">{{
          getFAQ[idx].pertanyaan
        }}</span>
      </div>
    </div>

    <div class="w-full rounded-lg bg-white block px-4 py-4">
      <div class="flex flex-col gap-2">
        <span class="font-semibold">Jawaban:</span>
        <span>{{ getFAQ[idx].jawaban }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      faq: '',
      idx: '',
      pertanyaan: '',
      jawaban: '',
    }
  },
  created() {
    this.faq = this.$route.params.faqType
    this.idx = this.$route.params.index
  },

  computed: {
    getFAQ() {
      if (this.faq === 'umum') return this.$store.state.FQ.umum
      else if (this.faq === 'akun') return this.$store.state.FQ.akun
      else if (this.faq === 'transaksi') return this.$store.state.FQ.transaksi
      else return 'nothing'
    },
  },
}
</script>
