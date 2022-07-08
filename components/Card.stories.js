import Card from './Card'

export default {
  title: 'Card',
  component: Card,
  argTypes: {
    numberOfChildren: {
      type: 'number',
      defaultValue: 4,
    },
  },
  args: {
    nominal: '10 K',
    poin: '20',
    productType: 'Data',
    backgroundImage: '',
  },
}

const StackTemplate = (args, { argTypes }) => ({
  components: {
    Card,
  },
  props: Object.keys(argTypes),
  template: `<div class="flex flex-wrap gap-4 items-center">
  <Card  v-for="index in numberOfChildren"
            :nominal="nominal"
            :productType="productType"
            :poin="poin"
            :backgroundImage="backgroundImage"
  />
  </div>`,
})

export const PrimaryStack = StackTemplate.bind({})
