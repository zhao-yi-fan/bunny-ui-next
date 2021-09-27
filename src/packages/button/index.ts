import Button from './button.vue'
import '../../style/button.scss'
// Button 组件可以单独使用
// import { Button } from 'bunny-ui';
// app.use(Button)

Button.install = (app) => {
  app.component(Button.name, Button)
}

export default Button