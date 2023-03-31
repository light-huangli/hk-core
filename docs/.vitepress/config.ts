

const functions = [{ text: '缓存类', link: '/packages/core/GlobalStorage/' }];


const DefaultSideBar = [
  { text: '工具函数集合', items: functions }
];

const isDev = process.argv[process.argv.length - 1] === 'development';

export default {
  base: isDev ? '/' : '/hk-core/',
  title: 'hk-core',
  lang: 'zh-CN',
  themeConfig: {
    logo: '/logo.png',
    lastUpdated: true,
    lastUpdatedText: '最后修改时间',
    socialLinks: [{ icon: 'github' }],
    nav: [
      { text: '函数集合', link: '/packages/core/GlobalStorage/' },
    ],
    // 侧边栏
    sidebar: {
      '/packages/': [
        {
          text: '',
          items: DefaultSideBar,
        },
      ],
    },
  },
};
