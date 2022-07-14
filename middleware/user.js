export default function ({ redirect, app }) {
  if (app.$cookies.get('role') !== 'User') {
    redirect('/')
  }
}
