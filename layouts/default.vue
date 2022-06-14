<template>
  <div
    class="w-full h-auto mx-auto flex flex-col gap-6 max-w-screen-2xl font-poppins bg-gray-200"
  >
    <navbar />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
export default {
  components: { navbar, Footer },
}
</script>

<style></style>
