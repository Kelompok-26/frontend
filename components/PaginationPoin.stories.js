import PaginationPoin from './PaginationPoin'

export default {
  title: 'PaginationPoin',
  component: { PaginationPoin },
}

const PaginationTemplate = () => ({
  components: {
    PaginationPoin,
  },
  template: `<div class="flex items-center justify-center w-full h-screen">
  <PaginationPoin  
            
  />
  </div>`,
})

export const PaginationDashboard = PaginationTemplate.bind({})
