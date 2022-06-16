<template>
  <div
    class="w-full h-auto mx-auto flex flex-col gap-6 max-w-screen-2xl font-poppins bg-gray-200"
  >
    <Navbar />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
export default {
  components: { Navbar, Footer },
}
</script>

<style></style>
