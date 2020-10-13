import Blank from '../components/blank.pug'

export default {
  title: 'Blank Page'
}

export const Basic = ({ name, footer, navItems }) => {
  const props = {
    name,
    homepage: '#',
    navItems,
    footer
  }

  return Blank({ props })
}

Basic.args = {
    layout: 'fullscreen',
    name: 'Example Site',
    navItems: [
        { name: 'Link', href: '#' },
        { name: 'Another Link', href: '#' }
    ],
    footer: 'Insert Footer Here',
}

Basic.argTypes = {
    layout: { table: { disable: true }}
}