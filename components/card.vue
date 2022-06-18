<!-- Please remove this file from your project -->
<template>
  <div class="flex items-center justify-start ml-2 gap-4">
    <div
      class="w-auto flex flex-col rounded-lg bg-white shadow-lg px-2 py-2 gap-1"
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
  name: 'BenefitCard',
  components: true,
  props: {
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
      type: String,
    },
  },

  data() {},
}
</script>
