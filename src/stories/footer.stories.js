import Footer from '../components/footer.pug'
import Container from '../components/container.pug'
import Main from '../components/main.pug'

export default {
  title: 'Footer'
}

export const Basic = ({ footer }) => {
  const contents = footer

  return Container({ contents: Main({}) + Footer({ contents }) })
}

Basic.args = {
    layout: 'fullscreen',
    footer: 'Insert Footer Here',
}

Basic.argTypes = {
    layout: { table: { disable: true }}
}