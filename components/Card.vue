<!-- Please remove this file from your project -->
<template>
  <div
    @click="$emit('toDetail', index)"
    class="flex items-center justify-start ml-2 gap-4"
    ref="scroll.container"
  >
    <div
      class="w-auto flex flex-col rounded-lg bg-white shadow-lg px-2 py-2 gap-1 cursor-pointer"
    >
      <!-- {{ backgroundImage }} -->
      <div
        class="w-44 aspect-[1.2/1] rounded-t-lg bg-center bg-cover relative"
        :style="{ 'background-image': `url(${backgroundImage})` }"
      >
        <div class="absolute top-[15%] right-[10%]">
          <div class="flex flex-col text-white">
            <h4 class="text-right font-bold text-base">{{ productType }}</h4>
            <h4 class="text-right font-bold text-5xl">{{ nominal }}</h4>
          </div>
        </div>
      </div>
      <div class="flex gap-1">
        <h4 class="font-bold ml-1">{{ productType }}</h4>
        <h4 class="font-bold">{{ nominal }}</h4>
      </div>

      <p class="font-light ml-1">{{ poin }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  components: true,
  props: {
    index: {
      type: Number,
    },
    backgroundImage: {
      type: String,
    },

    nominal: {
      type: String,
    },
    productType: {
      type: String,
    },

    poin: {
      type: Number,
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
  },
}
</script>
