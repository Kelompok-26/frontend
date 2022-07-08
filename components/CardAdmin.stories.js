import CardAdmin from './CardAdmin'

export default {
  title: 'CardAdmin',
  component: { CardAdmin },
  argTypes: {
    numberOfCard: {
      type: 'number',
      defaultValue: 1,
    },
  },
  args: {
    id: '',
    TheDate: '',
    productType: '',
    nominal: '',
    Name: '',
    Status: '',
  },
}

const CardAdminTemplate = (args, { argTypes }) => ({
  components: {
    CardAdmin,
  },
  props: Object.keys(argTypes),
  template: `<div class="flex flex-col w-full gap-4">
  <CardAdmin  v-for="index in numberOfCard"
            :id="id"
            :productType="productType"
            :TheDate="TheDate"
            :nominal="nominal"
            :Name="Name"
            :Status="Status"
  />
  </div>`,
})

export const CardAdminStack = CardAdminTemplate.bind({})
