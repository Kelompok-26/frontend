export default function ({ redirect, app }) {
  if (app.$cookies.get('role') !== 'Admin') {
    redirect('/')
  }
}
