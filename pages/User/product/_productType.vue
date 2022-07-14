<template>
  <div class="w-full flex flex-col px-10 rounded-md gap-10">
    <div class="flex flex-col gap-6">
      <div class="flex justify-center items-center">
        <p class="text-3xl font-bold">Rekomendasi Paket Data</p>
      </div>

      <div class="flex flex-wrap gap-x-4 gap-y-10 items-center">
        <Card
          v-for="prd in getProduct"
          :key="prd"
          :nominal="prd.nominal"
          :productType="prd.productType"
          :poin="prd.poin"
          :backgroundImage="'https://ik.imagekit.io/drigoalexander/paketdata__pyAZJU4et.png?ik-sdk-version=javascript-1.4.3&updatedAt=1655375508716'"
        />
      </div>
    </div>

    <layanan />
  </div>
</template>

<script>
import Layanan from '../../../components/layanan.vue'
import Card from '~/components/Card.vue'
export default {
  name: 'IndexPage',
  data() {
    return {
      product: '',
    }
  },

  created() {
    this.product = this.$route.params.productType
  },
  computed: {
    getProduct() {
      if (this.product === 'paketData')
        return this.$store.state.product.paketData
      else if (this.product === 'pulsa') return this.$store.state.product.pulsa
      else if (this.product === 'cashout')
        return this.$store.state.product.cashout
      else return this.$store.state.product.emoney
    },
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
  components: { Card, Layanan },
}
</script>

<style></style>
