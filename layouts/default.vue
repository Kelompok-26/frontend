<template>
  <div
    class="w-full h-auto mx-auto flex flex-col gap-6 max-w-screen-2xl font-poppins bg-gray-200"
  >
    <navbar />
    <Nuxt />
  </div>
</template>

<script>
import navbar from '../components/Navbar.vue'
export default {
  components: { navbar },
}
</script>

<style></style>
