<template>
  <div class="w-full h-screen flex mx-auto">
    <div
      class="w-1/2 h-full bg-cover bg-center"
      style="
        background-image: url('https://i.pinimg.com/originals/f1/6f/ed/f16fedc86686146624897737cf4338d8.jpg');
      "
    >
      <!-- <img
        class="w-full h-full"
        src="https://i.pinimg.com/originals/f1/6f/ed/f16fedc86686146624897737cf4338d8.jpg"
        alt=""
      /> -->
    </div>
    <div class="w-1/2 flex items-center justify-center bg-[#145374] text-white">
      <form action="" class="flex flex-col gap-6 items-start w-96">
        <h2 class="text-3xl font-semibold">Welcome! <br />Login to continue</h2>

        <div class="flex flex-col gap-4 w-full">
          <div class="flex flex-col gap-2">
            <label for="Email">Email</label>
            <input
              v-model="email"
              type="text"
              name="Email"
              id=""
              class="bg-[#D9D9D9] py-1 rounded-lg px-4 text-black"
            />
          </div>

          <div class="flex flex-col gap-2">
            <label for="Phonenumber">Phone Number</label>
            <input
              type="text"
              name="Phonenumber"
              id=""
              class="bg-[#D9D9D9] py-1 rounded-lg px-4 text-black"
            />
          </div>

          <div class="flex flex-col gap-2">
            <label for="Username">Username</label>
            <input
              type="text"
              name="Username"
              id=""
              class="bg-[#D9D9D9] py-1 rounded-lg px-4 text-black"
            />
          </div>
          <div class="flex flex-col gap-2">
            <label for="Dateofbirth">Date Of Birth</label>
            <input
              type="date"
              name="Dateofbirth"
              id=""
              class="bg-[#D9D9D9] py-1 rounded-lg px-4 text-black"
            />
          </div>
          <div class="flex flex-col gap-2">
            <label for="Password">Password</label>
            <input
              type="password"
              name="Password"
              id=""
              class="bg-[#D9D9D9] py-1 rounded-lg px-4 text-black"
            />
          </div>
        </div>
        <div
          class="w-full bg-[#EE6F57] text-white rounded-lg text-white flex items-center justify-center py-2"
        >
          Login
        </div>

        <p class="flex items-center justify-center w-full">
          Have an account before?
          <span class="pl-2 font-semibold cursor-pointer text-[#EE6F57]"
            >Login</span
          >
        </p>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      username: '',
      password: '',
    }
  },
  layout: 'empty',
}
</script>

<style></style>
