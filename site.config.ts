import { defineSiteConfig } from 'valaxy'

export default defineSiteConfig({
  // TODO: 换成自己的域名
  url: 'https://github.com/what1115/vue3-text/',
  lang: 'zh-CN',
  title: '阿凯的笔记本',
  author: {
    name: '阿凯',
    email: '27005063137@qq.com',  // 必填，别留空
    link: 'https://what1115.github.io/',
  },
  subtitle: '欢迎来到我的小站',
  description: '记录生活、技术与思考',

  // TODO: 以下均为模板作者的社交链接，已全部注释。换成自己的后取消注释即可。
  social: [
    // {
    //   name: 'RSS',
    //   link: '/atom.xml',
    //   icon: 'i-ri-rss-line',
    //   color: 'orange',
    // },
    // {
    //   name: 'GitHub',
    //   link: 'https://github.com/YunYouJun',
    //   icon: 'i-ri-github-line',
    //   color: '#6e5494',
    // },
    // {
    //   name: '微博',
    //   link: 'https://weibo.com/jizhideyunyoujun',
    //   icon: 'i-ri-weibo-line',
    //   color: '#E6162D',
    // },
    // {
    //   name: '知乎',
    //   link: 'https://www.zhihu.com/people/yunyoujun/',
    //   icon: 'i-ri-zhihu-line',
    //   color: '#0084FF',
    // },
    // {
    //   name: 'E-Mail',
    //   link: 'mailto:me@yunyoujun.cn',
    //   icon: 'i-ri-mail-line',
    //   color: '#8E71C1',
    // },
  ],

  search: {
    enable: false,
  },

  // TODO: 以下是模板作者的收款码，会把打赏打给他，已暂时禁用。换成自己的码后重新开启。
  sponsor: {
    enable: false,
    title: '请我喝杯咖啡',
    methods: [
      // {
      //   name: '支付宝',
      //   url: 'https://cdn.yunyoujun.cn/img/donate/alipay-qrcode.jpg',
      //   color: '#00A3EE',
      //   icon: 'i-ri-alipay-line',
      // },
      // {
      //   name: 'QQ 支付',
      //   url: 'https://cdn.yunyoujun.cn/img/donate/qqpay-qrcode.jpg',
      //   color: '#12B7F5',
      //   icon: 'i-ri-qq-line',
      // },
      // {
      //   name: '微信支付',
      //   url: 'https://cdn.yunyoujun.cn/img/donate/wechatpay-qrcode.jpg',
      //   color: '#2DC100',
      //   icon: 'i-ri-wechat-pay-line',
      // },
    ],
  },
})
