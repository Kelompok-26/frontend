<template>
  <div
    class="w-full h-auto mx-auto flex max-w-screen-2xl font-poppins bg-gray-200"
  >
  <div class="flex justify-evenly -ml-[150px] w-full items-start"> 
    <Sidebar class="" />
    <div class="flex flex-col">
      <ProfileAdmin/>
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
