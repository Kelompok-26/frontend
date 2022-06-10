<template>
  <div class="w-screen h-screen flex items-center justify-center mx-auto">
    <div class="relative flex flex-col items-center justify-center">
      <nav
        class="w-full h-full relative select-none cursor-pointer"
        @click="dropdown"
      >
        <div
          class="w-auto h-auto flex border-2 border-black rounded-lg px-10 py-2"
        >
          Dropdown
        </div>

        <div
          :class="{ block: isHover, hidden: !isHover }"
          class="absolute top-14"
        >
          <ul class="flex flex-col items-center justify-center">
            <li class="text-center py-2 w-full hover:bg-gray-200">
              Hybrid Class
            </li>
            <li class="text-center py-2 w-full hover:bg-gray-200">
              Fundamental Class
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
      isHover: false,
    }
  },

  methods: {
    dropdown() {
      if (this.isHover === false) {
        this.isHover = true
      } else this.isHover = false

      console.log(this.isHover)
    },
  },
  computed: {
    checkHover() {
      return this.isHover
    },
  },
}
</script>

<style></style>
