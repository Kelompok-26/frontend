import ProfileAdmin from './ProfileAdmin'

export default {
  title: 'ProfileAdmin',
  component: { ProfileAdmin },
}

const ProfileAdminTemplate = () => ({
  components: {
    ProfileAdmin,
  },
  template: `<div class="flex items-center justify-center w-full h-screen">
  <ProfileAdmin 
            
  />
  </div>`,
})

export const ProfileAdminDashboard = ProfileAdminTemplate.bind({})
