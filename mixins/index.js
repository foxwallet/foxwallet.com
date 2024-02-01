
/**
 * record report
 * @param {String} action IOS | ANDROID | GOOGLEPLAY | CHROME
 */
export const viewRecord = async function(action) {
  await this.$axios.$post('/page/view', {
    web_uri: location.href,
    source: this.$route.query.source || '',
    action: action || 'HOMEPAGE'
  })
}

/**
 * download app from different source
 * @param {String} platform ios | android | googlePlay | chrome
 */
export const download = function(platform) {
  if (platform === 'ios') {
    window.open('https://apps.apple.com/app/foxwallet-crypto-web3/id1590983231')
    this.viewRecord('IOS')
  } else if (platform === 'android') {
    window.location.href = 'https://cdn-pkg.foxnb.net/app_image/package/foxwallet_release.apk'
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
}
