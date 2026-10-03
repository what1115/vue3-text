import type { UserThemeConfig } from 'valaxy-theme-yun'
import { defineValaxyConfig } from 'valaxy'

// add icons what you will need
const safelist = [
  'i-ri-home-line',
]

/**
 * User Config
 */
export default defineValaxyConfig<UserThemeConfig>({
  // site config see site.config.ts

  theme: 'yun',

  themeConfig: {
    banner: {
      enable: true,
      title: '阿凯的笔记本',
    },

    pages: [
      {
        name: '我的伙伴',
        url: '/links/',
        icon: 'i-ri-genderless-line',
        color: 'dodgerblue',
      },
      {
        name: '喜欢的女孩子',
        url: '/girls/',
        icon: 'i-ri-women-line',
        color: 'hotpink',
      },
    ],

    footer: {
      since: 2016,
      // 主题默认会显示一个指向云游君赞助页的云图标，先关掉。
      // TODO: 换成自己的仓库/主页后改回 enable: true 并填 url 和 title
      icon: {
        enable: false,
      },
      beian: {
        enable: false,
        icp: '苏ICP备xxxxxx号',
        police: '苏公网安备 xxxxxxx号',
      },
    },
  },

  unocss: { safelist },
})
