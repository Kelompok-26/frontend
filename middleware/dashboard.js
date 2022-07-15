export default function ({ redirect, app, context }) {
  if (app.$cookies.get('role') !== 'User' && app.$cookies.get('token')) {
    redirect('/admin/dashboard')
  }
  if (!app.$cookies.get('role')) {
    redirect('/')
  }

  if (context.route.name === 'index') {
    // skip middleware
    return
  }
}
