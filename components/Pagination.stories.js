import Paginaton from './Pagination'

export default {
  title: 'Paginaton',
  component: { Paginaton },
}

const PaginationTemplate = () => ({
  components: {
    Paginaton,
  },
  template: `<div class="flex items-center justify-center w-full h-screen">
  <Paginaton  
            
  />
  </div>`,
})

export const PaginationDashboard = PaginationTemplate.bind({})
