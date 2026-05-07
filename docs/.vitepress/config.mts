import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Bunny UI Next',
  description: '基于 Vue 3 的 Bunny UI 组件库文档。',
  base: '/bunny-ui-next/',
  cleanUrls: true,
  themeConfig: {
    nav: [
      { text: '指南', link: '/' },
      { text: '组件', link: '/components/button' },
      { text: 'GitHub', link: 'https://github.com/zhao-yi-fan/bunny-ui-next' }
    ],
    sidebar: [
      {
        text: '指南',
        items: [
          { text: '介绍', link: '/' },
          { text: '快速开始', link: '/getting-started' }
        ]
      },
      {
        text: '组件',
        items: [
          { text: 'Button', link: '/components/button' },
          { text: 'Button Group', link: '/components/button-group' },
          { text: 'Icon', link: '/components/icon' },
          { text: 'Input', link: '/components/input' },
          { text: 'Dialog', link: '/components/dialog' },
          { text: 'Tag', link: '/components/tag' },
          { text: 'Divider', link: '/components/divider' },
          { text: 'Watermark', link: '/components/watermark' },
          { text: 'Message', link: '/components/message' }
        ]
      }
    ],
    outline: [2, 3],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/zhao-yi-fan/bunny-ui-next' }
    ],
    footer: {
      message: '基于 MIT License 开源。',
      copyright: 'Copyright © Zhao Yifan'
    }
  }
})
