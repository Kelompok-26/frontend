<template>
  <div
    class="w-full h-auto mx-auto flex max-w-screen-2xl font-poppins bg-gray-200"
  >
    <Sidebar />
    <Nuxt />
  </div>
</template>

<script>
import Sidebar from '~/components/Sidebar.vue'
export default { components: { Sidebar } }
</script>

<style></style>
