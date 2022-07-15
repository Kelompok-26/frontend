<template>
  <div class="flex flex-col gap-20 w-full h-screen px-20 mx-auto py-10">
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table class="w-full text-left text-black min-h-fit">
        <thead class="uppercase bg-[#EDEDED]">
          <tr>
            <th scope="col" class="px-6 py-6">ID</th>
            <th scope="col" class="px-6 py-6">Nominal</th>
            <th scope="col" class="px-6 py-6">Jumlah</th>
            <th scope="col" class="px-6 py-6">Point</th>
            <th scope="col" class="px-6 py-6"></th>
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
              class="px-6 py-4 font-medium text-black whitespace-nowrap"
            >
              {{ index }}
            </th>
            <td class="px-6 py-4">{{ val.id }}</td>
            <td class="px-6 py-4">{{ val.nominal }}</td>
            <td class="px-6 py-4">${{ val.jumlah }}</td>
            <td class="px-6 py-4 text-right">
              <div class="flex gap-4">
                <Nuxtlink>
                  <div
                    class="w-auto p-3 cursor-pointer rounded-md bg-[#145374]"
                  >
                    <svg
                      width="18"
                      height="17"
                      viewBox="0 0 24 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.6754 4.13355L19.1672 6.62416L16.6754 4.13355ZM18.2778 1.93941L11.5401 8.67712C11.1919 9.02477 10.9545 9.4677 10.8577 9.95008L10.2354 13.0654L13.3507 12.4419C13.833 12.3454 14.2754 12.1089 14.6236 11.7607L21.3613 5.02297C21.5638 4.8205 21.7244 4.58013 21.834 4.31559C21.9436 4.05105 22 3.76752 22 3.48119C22 3.19485 21.9436 2.91132 21.834 2.64678C21.7244 2.38224 21.5638 2.14188 21.3613 1.93941C21.1589 1.73694 20.9185 1.57633 20.654 1.46675C20.3894 1.35718 20.1059 1.30078 19.8196 1.30078C19.5332 1.30078 19.2497 1.35718 18.9852 1.46675C18.7206 1.57633 18.4803 1.73694 18.2778 1.93941V1.93941Z"
                        stroke="white"
                        stroke-width="2.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M19.6472 15.4184V18.9478C19.6472 19.5719 19.3993 20.1704 18.9581 20.6116C18.5168 21.0529 17.9183 21.3008 17.2943 21.3008H4.35297C3.72892 21.3008 3.13043 21.0529 2.68917 20.6116C2.2479 20.1704 2 19.5719 2 18.9478V6.00653C2 5.38248 2.2479 4.784 2.68917 4.34273C3.13043 3.90147 3.72892 3.65356 4.35297 3.65356H7.88241"
                        stroke="white"
                        stroke-width="2.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </Nuxtlink>

                <Nuxtlink>
                  <div
                    class="w-auto p-3 cursor-pointer rounded-md bg-[#EE6F57]"
                  >
                    <svg
                      width="17"
                      height="19"
                      viewBox="0 0 20 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.04167 2.17578H5.83333C5.94792 2.17578 6.04167 2.08203 6.04167 1.96745V2.17578H13.9583V1.96745C13.9583 2.08203 14.0521 2.17578 14.1667 2.17578H13.9583V4.05078H15.8333V1.96745C15.8333 1.04818 15.0859 0.300781 14.1667 0.300781H5.83333C4.91406 0.300781 4.16667 1.04818 4.16667 1.96745V4.05078H6.04167V2.17578ZM19.1667 4.05078H0.833333C0.372396 4.05078 0 4.42318 0 4.88411V5.71745C0 5.83203 0.09375 5.92578 0.208333 5.92578H1.78125L2.42448 19.5456C2.46615 20.4336 3.20052 21.1341 4.08854 21.1341H15.9115C16.8021 21.1341 17.5339 20.4362 17.5755 19.5456L18.2187 5.92578H19.7917C19.9062 5.92578 20 5.83203 20 5.71745V4.88411C20 4.42318 19.6276 4.05078 19.1667 4.05078ZM15.7109 19.2591H4.28906L3.65885 5.92578H16.3411L15.7109 19.2591Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                </Nuxtlink>
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
  data() {
    return {
      currentPage: 1,
      data: [
        {
          id: '123',
          nominal: '12000',
          jumlah: '200',
        },
        {
          id: '234',
          nominal: '12000',
          jumlah: '200',
        },
        {
          id: '345',
          nominal: '12000',
          jumlah: '200',
        },
        {
          id: '456',
          nominal: '12000',
          jumlah: '200',
        },
        {
          id: '567',
          nominal: '12000',
          jumlah: '200',
        },
        {
          id: '678',
          nominal: '12000',
          jumlah: '200',
        },
        {
          id: '789',
          nominal: '12000',
          jumlah: '200',
        },
        {
          id: '890',
          nominal: '12000',
          jumlah: '200',
        },
        {
          id: '321',
          nominal: '12000',
          jumlah: '200',
        },
        {
          id: '432',
          nominal: '12000',
          jumlah: '200',
        },
        {
          id: '543',
          nominal: '12000',
          jumlah: '200',
        },
        {
          id: '654',
          nominal: '12000',
          jumlah: '200',
        },
        {
          id: '765',
          nominal: '12000',
          jumlah: '200',
        },
      ],
      perPage: 7,
      temp: [],
    }
  },

  created() {
    this.temp = Object.assign([], this.data)
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
  computed: {
    spliceData() {
      if (this.currentPage === 1) {
        return this.temp.slice(0, 7)
      } else {
        return this.temp.slice((this.currentPage - 1) * 7, this.currentPage * 7)
      }
    },
    getTotalPage() {
      const banyakData = this.data.length
      return Math.ceil(banyakData / this.perPage)
    },
  },
  methods: {
    upNumber() {
      const banyakData = this.data.length
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
  },
}
</script>

<style></style>
