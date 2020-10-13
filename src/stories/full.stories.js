import Full from '../components/full.pug'

export default {
  title: 'Full Page'
}

export const Basic = ({}) => {
  const props = {
  }

  return Full({ props })
}

Basic.args = {
    layout: 'fullscreen',
}

Basic.argTypes = {
    layout: { table: { disable: true }}
}