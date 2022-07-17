<template>
  <div
    class="px-10 py-6 flex gap-10 items-center bg-white w-full rounded-2xl justify-between shadow-md"
    v-if="id <= 4"
  >
    <p>{{ TheDate }}</p>

    <div class="flex flex-col gap-2">
      <h4>{{ Name }}</h4>
    </div>

    <div class="flex flex-col gap-2 items-center">
      <h4>
        {{ productType }} <span> {{ nominal }}</span>
      </h4>
      <p class="opacity-75">- {{ point }} point</p>
    </div>
    <div
      class="w-auto px-5 py-2 border-2 border-[#037857] rounded-2xl bg-[#CAFAD0] text-[#01504A]"
    >
      Sukses
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      default: null,
    },
    TheDate: {
      type: String,
      default: null,
    },
    productType: {
      type: String,
      default: null,
    },
    nominal: {
      type: String,
      default: null,
    },
    Name: {
      type: String,
      default: null,
    },
    Status: {
      type: String,
      default: null,
    },
    point: {
      type: Number,
      default: null,
    },
  },
}
</script>

<style></style>
