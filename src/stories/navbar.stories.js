import Navbar from '../components/navbar.pug'

export default {
  title: 'Navbar'
}

export const Basic = ({ name, navItems }) => {
  const props = {
    name,
    homepage: '#',
    navItems
  }

  return Navbar({ props })
}

Basic.args = {
    layout: 'fullscreen',
    name: 'Example Site',
    navItems: [
        { name: 'Link', href: '#' },
        { name: 'Another Link', href: '#' }
    ],
}

Basic.argTypes = {
    layout: { table: { disable: true }}
}