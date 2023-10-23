if (process.client && process.env.NODE_ENV === 'production') {
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', '');
}

export default ({ app: { router }, store }) => {
 if (process.client && process.env.NODE_ENV === 'production') {
  router.afterEach((to, from) => {
    ga('set', 'page', to.fullPath)
    ga('send', 'pageview')
  })
}
}