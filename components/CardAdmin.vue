<template>
  <div
    class="px-10 py-6 flex gap-10 items-center bg-white w-full rounded-2xl justify-between shadow-md"
  >
    <p>{{ TheDate }}</p>

    <div class="flex flex-col gap-2">
      <h4>{{ Name }}</h4>
      <p class="opacity-75">{{ id }}</p>
    </div>

    <div class="flex flex-col gap-2">
      <h4>
        <span>{{ productType }} </span> {{ nominal }} <span>k</span>
      </h4>
      <p class="opacity-75">
        Rp <span>{{ nominal }}</span> .000
      </p>
    </div>

    <div
      v-if="Status === 'Gagal'"
      class="w-auto px-3 py-2 rounded-2xl bg-[#ee6f57]"
    >
      {{ Status }}
    </div>
    <div
      v-if="Status === 'Berhasil'"
      class="w-auto px-3 py-2 rounded-2xl bg-green-400"
    >
      {{ Status }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      default: '',
    },
    TheDate: {
      type: Date,
      default: '',
    },
    productType: {
      type: String,
      default: '',
    },
    nominal: {
      type: String,
      default: '',
    },
    Name: {
      type: String,
      default: '',
    },
    Status: {
      type: String,
      default: '',
    },
  },
}
</script>

<style></style>
