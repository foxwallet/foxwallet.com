<template>
  <div>
    <Header @headerShow="changeHeaderShow" />
    <div :class="headerShow ? 'hidden md:block' : ''">
      <Subject @download="download" />
      <youtube video-id="Plalme9o8Zw" class="md:rounded-xl lg:rounded-2xl mx-auto mt-16 mb-32 border" />
      <Choice />
      <RotateCommunity />
      <Feature />
      <Download />
      <Partners />
      <Footer />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      headerShow: false
    }
  },
  mounted() {
    this.viewRecord()
  },
  methods: {
    async viewRecord(action) {
      await this.$axios.$post('/page/view', {
        web_uri: location.href,
        source: this.$route.query.source || '',
        action: action || 'HOMEPAGE'
      })
    },
    download(platform) {
      if (platform === 'ios') {
        window.open('https://apps.apple.com/app/foxwallet-crypto-web3/id1590983231')
        this.viewRecord('IOS')
      } else if (platform === 'android') {
        window.location.href = 'https://cdn.foxnb.net/app_image/package/foxwallet_release.apk'
        this.viewRecord('ANDROID')
      } else if (platform === 'googlePlay') {
        window.open('https://play.google.com/store/apps/details?id=com.foxwallet.play')
        this.viewRecord('GOOGLEPLAY')
      } else if (platform === 'chrome') {
        window.open('https://chromewebstore.google.com/detail/foxwallet/pmmnimefaichbcnbndcfpaagbepnjaig')
        this.viewRecord('CHROME')
      } else {
        window.open(`https://foxwallet.com/download/${this.$route.query.source ? '?source=' + this.$route.query.source : ''}`)
      }
    },
    changeHeaderShow(show) {
      this.headerShow = show
    }
  }
}
</script>
