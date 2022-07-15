export default function ({ redirect, app }) {
  if (app.$cookies.get('role') !== 'User' && app.$cookies.get('token')) {
    redirect('/admin/dashboard')
  }
  if (!app.$cookies.get('role')) {
    redirect('/')
  }
}
