<!-- Please remove this file from your project -->
<template>
  <nav
    class="flex justify-between items-center w-full bg-white shadow-lg py-6 px-10"
  >
    <h1 class="text-2xl font-bold">C-Loyal</h1>

    <div class="flex items-center gap-16">
      <NuxtLink to="/">
        <p class="hover:font-bold transition-all">Home</p>
      </NuxtLink>
      <NuxtLink to="/User/riwayat">
        <p class="hover:font-bold transition-all">Riwayat</p>
      </NuxtLink>
      <NuxtLink to="/User/point-user">
        <p class="hover:font-bold transition-all">Poin</p>
      </NuxtLink>
      <NuxtLink to="/User/Redeem"
        ><p class="hover:font-bold transition-all">Redeem</p></NuxtLink
      >
      <NuxtLink to="/User/FAQ">
        <p class="hover:font-bold transition-all">FAQ</p>
      </NuxtLink>
    </div>

    <div class="flex gap-6 items-center relative">
      <svg
        width="60"
        height="58"
        viewBox="0 0 69 67"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M51.9594 45.5111C51.0062 43.378 49.6229 41.4404 47.8865 39.8063C46.1555 38.1675 44.1049 36.8608 41.848 35.9585C41.8278 35.949 41.8076 35.9442 41.7874 35.9347C44.9355 33.7864 46.982 30.2872 46.982 26.3392C46.982 19.799 41.373 14.5 34.4502 14.5C27.5274 14.5 21.9184 19.799 21.9184 26.3392C21.9184 30.2872 23.9649 33.7864 27.113 35.9394C27.0928 35.949 27.0726 35.9538 27.0524 35.9633C24.7886 36.8656 22.7572 38.1593 21.0138 39.8111C19.2791 41.4464 17.8961 43.3837 16.941 45.5158C16.0027 47.6032 15.4967 49.8412 15.4503 52.1085C15.449 52.1595 15.4584 52.2102 15.4781 52.2576C15.4979 52.3051 15.5274 52.3483 15.5651 52.3848C15.6028 52.4213 15.6478 52.4503 15.6975 52.47C15.7472 52.4898 15.8006 52.5 15.8546 52.5H18.8865C19.1088 52.5 19.2857 52.3329 19.2907 52.1276C19.3918 48.4422 20.9583 44.9907 23.7274 42.3746C26.5925 39.6678 30.3976 38.1784 34.4502 38.1784C38.5028 38.1784 42.3079 39.6678 45.173 42.3746C47.9421 44.9907 49.5086 48.4422 49.6097 52.1276C49.6147 52.3377 49.7916 52.5 50.0139 52.5H53.0458C53.0998 52.5 53.1532 52.4898 53.2029 52.47C53.2526 52.4503 53.2976 52.4213 53.3353 52.3848C53.373 52.3483 53.4025 52.3051 53.4222 52.2576C53.442 52.2102 53.4514 52.1595 53.4501 52.1085C53.3995 49.8266 52.8993 47.6068 51.9594 45.5111ZM34.4502 34.5503C32.1308 34.5503 29.9478 33.6957 28.3056 32.1442C26.6633 30.5927 25.7588 28.5304 25.7588 26.3392C25.7588 24.148 26.6633 22.0857 28.3056 20.5342C29.9478 18.9827 32.1308 18.1281 34.4502 18.1281C36.7696 18.1281 38.9526 18.9827 40.5948 20.5342C42.2371 22.0857 43.1416 24.148 43.1416 26.3392C43.1416 28.5304 42.2371 30.5927 40.5948 32.1442C38.9526 33.6957 36.7696 34.5503 34.4502 34.5503Z"
          fill="black"
        />
      </svg>

      <p class="font-bold cursor-pointer" @click="openProfile = !openProfile">
        Username
      </p>
      <div
        :class="{
          'translate-y-0': openProfile,
          ' -translate-y-[36rem]': !openProfile,
          'opacity-100': openProfile,
          'opacity-0': !openProfile,
          'z-10 ': openProfile,
          '-z-10': !openProfile,
        }"
        class="absolute -bottom-[30rem] duration-700 ease-in-out rounded-lg py-6 right-0 w-72 h-[29rem] flex flex-col gap-8 justify-start bg-[#f6f5f5] shadow-lg"
      >
        <div
          class="px-6 flex flex-col gap-2 items-center justify-center w-full"
        >
          <div
            class="w-20 aspect-square rounded-full overflow-hidden bg-gray-500"
          ></div>

          <p class="font-semibold">Indah Cahya</p>
          <p class="font-light text-xs">@indahcahya</p>
        </div>

        <div class="flex flex-col gap-8 px-6">
          <span class="cursor-pointer">Edit Profile</span>
          <span class="cursor-pointer">Privacy Policy</span>
          <span class="cursor-pointer">Terms of Service</span>
        </div>

        <hr class="w-full border-b-1 border-gray-700" />

        <div class="flex items-center justify-center">
          <button
            class="flex items-center w-auto px-6 justify-center text-white text-xs aspect-[3/1] rounded-md bg-[#145374]"
          >
            Simpan
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavigationBar',
  components: true,

  data() {
    return {
      openProfile: false,
    }
  },
}
</script>
