<template>
  <div
    class="w-full h-full min-h-screen mx-auto flex max-w-screen-2xl font-poppins bg-gray-200"
  >
    <div class="flex justify-between w-full items-start">
      <Sidebar class="" />
      <div class="flex flex-col w-full">
        <ProfileAdmin />
        <Nuxt />
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from '~/components/Sidebar.vue'
export default {
  middleware: ['admin', 'authAdmin'],
  components: { Sidebar },
}
</script>

<style></style>
