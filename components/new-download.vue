<template>
  <div>
    <div class="hidden md:flex items-center text-white">
      <NewCustomButton icon="ios" type="dark" content="App Store" class="mr-4" @click.native="download('ios')" />
      <NewCustomButton icon="android" type="dark" content="Android" class="mr-4" @click.native="download('android')" />
      <NewCustomButton
        new-tag
        icon="chrome"
        type="dark"
        content="Chrome Extension"
        class="mr-4"
        @click.native="download('chrome')"
      />
      <NewCustomButton class="mr-4" icon="googleplay" content="Google Play" @click.native="download('googlePlay')" />
      <el-tooltip effect="dark" placement="bottom" type="primary">
        <div class="w-11 h-11 ml-4 p-1 flex justify-center items-center cursor-pointer hover:opacity-80 border border-white rounded-md">
          <img src="@/assets/img/home/code-en.png" alt="download-qr-code" class="w-9 h-9" :draggable="false">
        </div>
        <div slot="content" class="relative">
          <canvas ref="canvas" class="my-auto rounded-md border w-32"></canvas>
          <img src="@/assets/img/share/logo-icon.svg" class="code-logo w-6 bg-white p-1 rounded-md absolute -mt-3 -ml-3" :draggable="false">
        </div>
      </el-tooltip>
    </div>
    <div class="md:hidden block px-5 flex justify-center  flex-wrap">
      <NewCustomButton icon="ios" type="dark" content="App Store" class="mr-4 mb-4" @click.native="download('ios')" />
      <NewCustomButton icon="android" type="dark" content="Android" class="mr-4 mb-4" @click.native="download('android')" />
      <NewCustomButton
        new-tag
        icon="chrome"
        type="dark"
        content="Chrome Extension"
        class="mr-4 mb-4"
        @click.native="download('chrome')"
      />
      <NewCustomButton class="mr-4 mb-4" icon="googleplay" content="Google Play" @click.native="download('googlePlay')" />
    </div>
  </div>
</template>

<script>
import QrCodeWithLogo from 'qr-code-with-logo'
let timer = null

export default {
  name: 'NewDownload',
  mounted() {
    this.initQrCode()
    timer = setTimeout(() => {
      this.count = 2
    }, 2000)
  },
  beforeDestroy() {
    clearTimeout(timer)
  },
  methods: {
    initQrCode() {
      setTimeout(() => {
        const content = `https://foxwallet.com/download/${this.$route.query.source ? '?source=' + this.$route.query.source : ''}`
        QrCodeWithLogo.toCanvas({
          canvas: this.$refs.canvas,
          content,
          width: 130
        })
      }, 400)
    },
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
    },
  }
}
</script>

<style scoped>
.code-logo {
  left: 50%;
  top: 50%;
}
</style>
