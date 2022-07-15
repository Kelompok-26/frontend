<template>
  <!-- Start Content -->

  <div class="w-full px-10 pb-32 bg-white">
    <div class="flex flex-col gap-20">
      <h1 class="text-3xl font-semibold">Edit Profile</h1>
      <div class="flex flex-col justify-center items-center w-full gap-12">
        <div class="flex flex-col gap-6 justify-center items-center">
          <div class="w-32 aspect-square bg-gray-500 rounded-full relative">
            <div class="absolute right-2 bottom-0 z-10">
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="22" height="22" rx="11" fill="#145374" />
                <path
                  d="M5.1745 13.3336L4.41929 16.5999C4.39324 16.7193 4.39413 16.843 4.4219 16.962C4.44968 17.0811 4.50363 17.1923 4.57982 17.2878C4.656 17.3832 4.75251 17.4604 4.86227 17.5137C4.97203 17.567 5.09229 17.595 5.21424 17.5957C5.27107 17.6015 5.32833 17.6015 5.38516 17.5957L8.66435 16.8389L14.9604 10.5533L11.4467 7.04004L5.1745 13.3336Z"
                  fill="#F6F5F5"
                />
                <path
                  d="M17.3459 7.10066L14.8954 4.65018C14.7343 4.48989 14.5163 4.3999 14.289 4.3999C14.0617 4.3999 13.8437 4.48989 13.6826 4.65018L12.3203 6.01248L15.9877 9.6799L17.35 8.3176C17.4298 8.23747 17.4929 8.14241 17.5358 8.03786C17.5788 7.9333 17.6007 7.8213 17.6003 7.70827C17.5999 7.59524 17.5773 7.48339 17.5336 7.37913C17.4899 7.27487 17.4261 7.18024 17.3459 7.10066Z"
                  fill="#F6F5F5"
                />
              </svg>
            </div>
          </div>
          <div class="flex flex-col gap-2 text-center">
            <h4 class="text-lg font-semibold">{{ User.name }}</h4>
            <p>{{ User.email }}</p>
          </div>
        </div>

        <form action="" class="flex flex-col w-full px-80 gap-6">
          <div>
            <label for="Email">Email</label>
            <input
              v-model="email"
              type="text"
              class="bg-[#d9d9d9] w-full rounded-md py-2 px-6"
            />
          </div>
          <div>
            <label for="Username">Username</label>
            <input
              v-model="username"
              type="text"
              class="bg-[#d9d9d9] w-full rounded-md py-2 px-6"
            />
          </div>

          <div>
            <label for="PhoneNumber">Phone Number</label>
            <input
              type="text"
              v-model="phoneNumber"
              class="bg-[#d9d9d9] w-full rounded-md py-2 px-6"
            />
          </div>
          <div>
            <label for="AccountNumber">Account Number</label>
            <input
              v-model="accountNumber"
              type="text"
              class="bg-[#d9d9d9] w-full rounded-md py-2 px-6"
            />
          </div>
          <div>
            <label for="DateofBirth">Date of birth</label>
            <input
              v-model="dateofbirth"
              type="text"
              class="bg-[#d9d9d9] w-full rounded-md py-2 px-6"
            />
          </div>

          <div>
            <label for="DateofBirth">Gender</label>
            <input
              v-model="gender"
              type="text"
              class="bg-[#d9d9d9] w-full rounded-md py-2 px-6"
            />
          </div>

          <div>
            <label for="Password">Password</label>
            <input
              type="password"
              class="bg-[#d9d9d9] w-full rounded-md py-2 px-6"
            />
          </div>
          <div class="flex items-center justify-center">
            <button
              @click.prevent="editProfile"
              class="flex items-center justify-center bg-[#145374] px-4 py-2 text-white rounded-md"
            >
              Simpan
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>

  <!-- End of Bar Question -->
</template>

<script>
export default {
  layout: 'privacy',
  data() {
    return {
      email: '',
      username: '',
      phoneNumber: '',
      accountNumber: '',
      dateofbirth: '',
      password: '',
      gender: '',
      User: {},
      tokens: '',
      id: Number,
    }
  },

  methods: {
    editProfile() {
      const dataProfile = {
        email: this.email,
        name: this.username,
        phone_number: this.phoneNumber,
        date_of_birth: this.dateofbirth,
        password: this.password,
        account_number: this.accountNumber,
        gender: this.gender,
      }
      const config = {
        method: 'put',
        url: `http://ec2-54-160-45-255.compute-1.amazonaws.com:8080/v1/users/update/${this.id}`,
        headers: {
          Authorization: `Bearer ${this.tokens}`,
        },
        data: dataProfile,
      }

      this.$axios(config).then((res) => console.log(res))

      this.$store.dispatch('userAuth/fetchUser', {
        id: this.id,
        token: this.tokens,
      })

      this.$router.push('/')
      // window.location.reload(true)
    },
  },

  created() {
    this.id = this.$store.state.userAuth.User.id
    this.tokens = this.$store.state.userAuth.token
    this.User = this.$store.state.userAuth.User
    this.email = this.$store.state.userAuth.User.email
    this.username = this.$store.state.userAuth.User.name
    this.phoneNumber = this.$store.state.userAuth.User.phone_number
    this.dateofbirth = this.$store.state.userAuth.User.date_of_birth
    this.password = this.$store.state.userAuth.User.password
    this.accountNumber = this.$store.state.userAuth.User.account_number
    this.gender = this.$store.state.userAuth.User.gender
  },
}
</script>
