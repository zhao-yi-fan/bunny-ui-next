// 总入口
import Button from './button'
import ButtonGroup from './button-group'
import Icon from './icon'
import Message from './message'

const plugins = [
  Button,
  ButtonGroup,
  Icon
]

const install = (app) => {
  plugins.forEach((plugin) => app.use(plugin));
}

export default {
  install
}

export {
  Button,
  ButtonGroup,
  Icon,
  Message
}