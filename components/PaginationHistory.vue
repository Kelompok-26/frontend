<template>
  <div class="flex flex-col gap-20 w-full h-screen mx-auto py-10">
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table class="w-3/4 text-left text-black min-h-fit">
        <thead class="uppercase">
          <tr>
            <th scope="col" class="px-12 py-6">No</th>
            <th scope="col" class="px-12 py-6">Nama Pengguna</th>
            <th scope="col" class="px-12 py-6">Tanggal</th>
            <th scope="col" class="px-12 py-6">No Telp</th>
            <th scope="col" class="px-12 py-6">Poin</th>
            <th scope="col" class="px-12 py-6"></th>
          </tr>
        </thead>
        <tbody>
          <tr
            class="bg-white border-b-2 border-[#EDEDED] text-lg"
            v-for="(val, index) in spliceData"
            :key="index"
          >
            <th
              scope="row"
              class="px-12 py-4 font-medium text-black whitespace-nowrap"
            >
              {{ val.id }}
            </th>
            <td class="px-12 py-4">{{ val.user.name }}</td>
            <td class="px-12 py-4">{{ val.created_at }}</td>
            <td class="px-12 py-4">{{ val.number }}</td>
            <td class="px-12 py-4">
              - <span>{{ val.product.point }}</span>
            </td>
            <td class="px-12 py-4 text-right">
              <div class="flex gap-4">
                <div
                  class="w-auto px-4 py-1 cursor-pointer rounded-md bg-[#CAFAD0] border-2 border-[#01504A] text-[#01504A]"
                >
                  Sukses
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="flex justify-end">
      <div class="flex gap-4 justify-center items-center">
        <div class="flex">
          <span>{{ currentPage }}</span>
          -
          <span>{{ getTotalPage }}</span>
        </div>

        <div class="flex gap-2">
          <button
            @click="downNumber"
            class="aspect-square w-10 bg-white rounded-md flex items-center justify-center group active:bg-[#145374]"
          >
            <svg
              class="stroke-black group-active:stroke-white"
              width="14"
              height="24"
              viewBox="0 0 14 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 22L2 12L12 2"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <button
            @click="upNumber"
            class="aspect-square w-10 bg-white rounded-md flex items-center justify-center group active:bg-[#145374]"
          >
            <svg
              class="stroke-black group-active:stroke-white"
              width="14"
              height="24"
              viewBox="0 0 14 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 2L12 12L2 22"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    User: {
      type: Array,
      default: null,
    },

    tokens: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      currentPage: 1,
      perPage: 7,
      temp: [],
    }
  },

    computed: {
      spliceData() {
        if (this.currentPage === 1) {
          return this.temp.slice(0, 7)
        } else {
          return this.temp.slice((this.currentPage - 1) * 7, this.currentPage * 7)
        }
      },
      getTotalPage() {
        const banyakData = this.User.length
        return Math.ceil(banyakData / this.perPage)
      },
    },
  watch: {
    currentPage() {
      if (this.currentPage === 1) {
        return this.temp.slice(0, 7)
      } else {
        return this.temp.slice(this.currentPage + 7, this.currentPage * 7)
      }
    },
  },
    created() {
      this.temp = Object.assign([], this.User)
    },
  methods: {
    deleteUser(id) {
      const config = {
        method: 'DELETE',
        url: `http://ec2-54-160-45-255.compute-1.amazonaws.com:8080/v1/users/${id}`,
        headers: {
          Authorization: `Bearer ${this.tokens}`,
        },
      }

      this.$axios(config).then((res) => console.log(res))
    },
    upNumber() {
      const banyakData = this.User.length
      const maxPage = banyakData / this.perPage
      if (this.currentPage >= maxPage) {
        return maxPage
      } else {
        this.currentPage += 1
      }
    },

    downNumber() {
      if (this.currentPage === 1) {
        return this.currentPage
      } else {
        this.currentPage -= 1
      }
    },

    editData(idx, poin) {
      this.$store.dispatch('adminUser/getIndexData', {
        Id: idx,
        token: this.tokens,
        Point: poin,
      })
    },
  },
}
</script>

<style></style>
