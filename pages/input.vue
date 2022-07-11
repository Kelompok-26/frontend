<template>
  <div>
    <h1 class="">
      {{ test }}
    </h1>
  </div>
</template>
<script>
export default {
  data() {
    return {
      idMedRec: '',
      test: '',
      code: '',
      feature: '',
    }
  },

  created() {
    this.test = this.$store.state.token
  },
  methods: {
    getMedRecordByID() {
      this.$store.dispatch('fetchMedRecordByID', {
        id: this.idMedRec,
        token: this.token,
      })
    },

    getCode() {
      this.$store.dispatch('fetchCode', {
        code: this.code,
      })
    },

    getFeatureData() {
      this.$store.dispatch('fetchFeature', {
        feature: this.feature,
        token: this.token,
      })
    },
  },
}
</script>

<style></style>
