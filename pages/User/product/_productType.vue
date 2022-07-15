<template>
  <div class="w-full flex flex-col px-10 rounded-md gap-10">
    <div class="flex flex-col gap-6">
      <div class="flex justify-center items-center">
        <p class="text-3xl font-bold">
          Rekomendasi <span>{{ product }}</span>
        </p>
      </div>

      <div class="flex flex-wrap gap-x-4 gap-y-10 items-center">
        <Card
          v-for="(paket, idx) in getProduct"
          :key="idx"
          :nominal="paket.product_name"
          :productType="paket.type_product"
          :index="idx"
          :poin="paket.point"
          :backgroundImage="'https://ik.imagekit.io/drigoalexander/paketdata__pyAZJU4et.png?ik-sdk-version=javascript-1.4.3&updatedAt=1655375508716'"
          v-on:toDetail="toDetail(paket.id)"
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
      return this.$store.state.product.product.filter((el) => {
        return el.type_product === `${this.product}`
      })
    },
  },
  methods: {
    toDetail(idx) {
      this.$router.push({
        name: 'User-product-detail-tukar',
        params: {
          index: idx,
        },
      })
    },

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
