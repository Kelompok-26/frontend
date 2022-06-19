export const state = () => ({
  tipe: '',
  index: '',

  umum: [
    {
      type: 'umum',
      pertanyaan: 'Transaksi apa saja yang bisa dilakukan?',
      jawaban: 'asdqwe',
    },
    {
      type: 'umum',
      pertanyaan: 'Berapa harga pulsa dan paket data yang dijual?',
      jawaban: 'zxcvbn',
    },
    {
      type: 'umum',
      pertanyaan: 'Metode pembayaran apa saja yang tersedia?',
      jawaban: 'qwerty',
    },
  ],

  akun: [
    {
      type: 'akun',
      pertanyaan: 'akun Transaksi apa saja yang bisa dilakukan?',
      jawaban: 'transaksi',
    },
    {
      type: 'akun',
      pertanyaan: 'akun Berapa harga pulsa dan paket data yang dijual?',
      jawaban: 'berapa',
    },
    {
      type: 'akun',
      pertanyaan: 'akun Metode pembayaran apa saja yang tersedia?',
      jawaban: 'metode',
    },
  ],

  transaksi: [
    {
      type: 'transaksi',
      pertanyaan: 'trk Transaksi apa saja yang bisa dilakukan?',
      jawaban: 'transaksizz',
    },
    {
      type: 'transaksi',
      pertanyaan: 'trk Berapa harga pulsa dan paket data yang dijual?',
      jawaban: 'transaksizz',
    },
    {
      type: 'transaksi',
      pertanyaan: 'trk Metode pembayaran apa saja yang tersedia?',
      jawaban: 'metransaksizztode',
    },
  ],

  pengembalianDana: [
    {
      type: 'pengembalianDana',
      pertanyaan: 'pengembalian Transaksi apa saja yang bisa dilakukan?',
      jawaban: 'pengembalianDana',
    },
    {
      type: 'pengembalianDana',
      pertanyaan: 'pengembalian Berapa harga pulsa dan paket data yang dijual?',
      jawaban: 'pengembalianDana',
    },
    {
      type: 'pengembalianDana',
      pertanyaan: 'pengembalian Metode pembayaran apa saja yang tersedia?',
      jawaban: 'pengembalianDana',
    },
  ],

  pembayaran: [
    {
      type: 'pembayaran',
      pertanyaan: 'pembayaran Transaksi apa saja yang bisa dilakukan?',
      jawaban: 'pembayaran',
    },
    {
      type: 'pembayaran',
      pertanyaan: 'pembayaran Berapa harga pulsa dan paket data yang dijual?',
      jawaban: 'pembayaran',
    },
    {
      type: 'pembayaran',
      pertanyaan: 'pembayaran Metode pembayaran apa saja yang tersedia?',
      jawaban: 'pembayaran',
    },
  ],
})

export const getter = {}

export const mutations = {
  setIndex(state, param) {
    state.index = param
  },
  setTipe(state, param) {
    state.Tipe = param
  },
}

export const actions = {
  addTipe(store, param) {
    store.commit('setTipe', param.Tipe)
  },

  addIndex(store, param) {
    store.commit('setIndex', param.Index)
  },
}
