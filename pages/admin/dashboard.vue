<template>
  <div class="w-full h-screen flex mx-auto">
    <div class="w-1/2 h-full flex items-center justify-center bg-[#F6F5F5]">
  
          
    </div>
    <div class="w-1/2 flex items-center justify-center bg-[#145374] text-white">
      <form action="" class="flex flex-col gap-20 items-start w-96">
        <h2 class="text-3xl font-semibold">Welcome! <br />Login to continue</h2>

        <div class="flex flex-col gap-4 w-full">
          <div class="flex flex-col gap-2">
            <label for="Notelephone">No.telepon</label>
            <input
              v-model="Notelephone"
              type="text"
              name="Notelephone"
              id=""
              class="bg-[#D9D9D9] py-1 rounded-lg px-4 text-black aspect-[9.6/1]"
            />
          </div>

          <div class="flex flex-col gap-2">
            <label for="password">Password</label>
            <input
              v-model="password"
              type="text"
              name="password"
              id=""
              class="bg-[#D9D9D9] py-1 rounded-lg px-4 text-black aspect-[9.6/1]"
            />
          </div>
        </div>
        <div
          class="w-full bg-[#EE6F57] text-white rounded-lg aspect-[7.4/1] text-xl font-bold flex items-center justify-center"
        >
          Login
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Notelephone: '',
      username: '',
      password: '',
    }
  },
  layout: 'admin',
}
</script>

<style></style>
