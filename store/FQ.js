export const state = () => ({
  tipe: '',
  index: '',

  umum: [
    {
      type: 'umum',
      pertanyaan: 'Transaksi apa saja yang bisa dilakukan?',
      jawaban:
        'Dalam layanan C-Loyal ini transaksi yang dapat dilakukan oleh pengguna adalah redeem untuk mendaatkan poin dan penukaran poin yang dapat ditukaran delam bentuk pulsa, paket data, cashout, dan e-money.',
    },
    {
      type: 'umum',
      pertanyaan: 'Bagaimana cara menukarkan poin??',
      jawaban:
        'Untuk melakukan penukaran poin tentu saja kamu harus memiliki sejumlah poin terhadap penawaran yang ingin dilakukan. Untuk memiliki atau menambah jumlah poin kamu bisa melakukan pembelian/redeem terlebih dahulu.',
    },
    {
      type: 'umum',
      pertanyaan: 'Bagaimana cara melakukan redeem?',
      jawaban:
        'Redeem merupakan salah satu fitur yang dimiliki oleh C-Loyal guna mengumpulkan poin terhadap suatu transaksi yang telah dilakukan. Untuk melakukannya kamu bisa menuju menu Redeem kemudian isi data secara lengkap kemudian submit data yang telah kamu isi. Setelah mengirim, proses transaksimu akan diajukan kepada admin untuk persetujuan.',
    },
  ],

  akun: [
    {
      type: 'akun',
      pertanyaan: 'Bagaimana cara melakukan perubahan profil?',
      jawaban:
        'Untuk melakukan perubahan profil pada akun yang Anda miliki, Anda dapat pergi menuju menu profile dengan menekan Profil yang tampil pada navbar sebelah kanan, kemudian pilih Edit Profil. Setelah itu Anda dapat bebas merubah identitas yang Anda miliki pada halaman tersebut dan jangan lupa untuk klik “Simpan” untuk menyimpan seluruh informasi data Anda yang telah diperbarui.',
    },
    {
      type: 'akun',
      pertanyaan: 'Apakah pengubahan nomor rekening memengaruhi poin?',
      jawaban:
        'Pada dasarnya pengubahan nomor rekening pada profil Anda tidak akan memengaruhi jumlah poin yang Anda miliki, karena keseluruhan data telah tersimpan berdasarkan email yang telah Anda daftarkan ketika pertama kali menggunakan aplikasi C-Loyal.',
    },
  ],

  transaksi: [
    {
      type: 'transaksi',
      pertanyaan: 'Apa saja syarat melakukan transaksi redeem?',
      jawaban:
        'Untuk melakukan transaksi redeem Anda perlu memiliki nomor rekening terlebih dahulu yang digunakan sebagai pembayaran, kemudian benefitdari transaksi redeem yang Anda lakukan adalah berupa poin yang nantinya dapat digunakan untuk transaksi lainnya.',
    },
    {
      type: 'transaksi',
      pertanyaan: 'Bagaimana mengetahui suatu penawaran masih tersedia?',
      jawaban:
        'Untuk mengetahui apakah suatu penawaran masih tersedia stoknya atau tidak Anda dapat menekan salah satu penawaran yang tampil dalam layar Anda dan maka akan muncul detail atau deskripsi produk tersebut. Dalam detail tersebut dicantumkan jumlah stok yang masih tersedia untuk penawaran produk yang dipilih.',
    },
    {
      type: 'transaksi',
      pertanyaan: 'Berapa kali dapat melakukan transaksi?',
      jawaban:
        'Untuk melakukan transaksi sendiri C-Loyal tidak membatasi bagi seluruh pengguna apakah terdapat minimal ataupun maksimal. Hal ini akan didasarkan pada keinginan Anda yang ingin melakukan transaksi, apabila transaksi redeem bergantung pada keuangan Anda dan transaksi tukar poin berdasarkan pada poin yang Anda miliki.',
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
