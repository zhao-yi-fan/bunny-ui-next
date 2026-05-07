import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import BunnyUI from '../../../src/packages'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp ({ app }) {
    app.use(BunnyUI)
  }
} satisfies Theme
