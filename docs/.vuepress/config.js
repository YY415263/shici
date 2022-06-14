module.exports = {
  base:"/shici/",
  head: [
    ['link', {rel: 'icon', href: '/assets/img/logo.jpeg'}]
  ],
  title: '诗词',
  description: '我的诗词网站',


  themeConfig: {
    logo: '/assets/img/logo.jpeg',
    nav: [{
        text: 'Home',
        link: '/'
      },
      {
        text: 'Guide',
        link: '/guide/'
      },
      {
        text: 'External',
        link: 'https://google.com'
      }
    ],
    sidebar: [
      ['/page-a/', 'pageA'],
      ['/page-b/', 'Explicit link text']
    ]
  }

}