<template>
  <div>
    <div class="hidden md:block -mt-28">
      <div class="flex font-bold">
        <div v-for="item, index in words1" :key="index" class="text-4xl xl:text-5xl" :class="animateClass+' delay'+index">
          {{ item }}
          <div v-show="item === ' '" class="w-5"></div>
        </div>
      </div>
      <div class="flex w-64 font-bold mt-2 xl:mt-4">
        <div v-for="item, index in words2" :key="index" class="text-4xl xl:text-5xl" :class="animateClass+' delay'+index">
          {{ item }}
          <div v-show="item === ' '" class="w-5"></div>
        </div>
      </div>
      <div class="py-2 xl:py-8 text-xs lg:text-base">
        <h3 class="animate__animated animate__fadeInDown animate__delay-1s text-gray-600">
          {{ $t('home.banner.feature1') }}
        </h3>
        <h3 class="animate__animated animate__fadeInDown animate__delay-2s text-gray-600">
          {{ $t('home.banner.feature2') }}
        </h3>
        <h3 class="animate__animated animate__fadeInDown animate__delay-3s text-gray-600">
          {{ $t('home.banner.feature3') }}
        </h3>
      </div>
      <div class="animate__animated animate__fadeInDown animate__delay-4s">
        <div class="flex">
          <CustomButton icon="ios" type="dark" content="App Store" class="px-5" @click.native="download('ios')" />
          <CustomButton icon="android" type="dark" content="Android" class="px-5 ml-4" @click.native="download('android')" />
          <CustomButton
            new-tag
            icon="chrome"
            type="dark"
            content="Chrome Extension"
            class="px-5 ml-4 hidden xl:flex"
            @click.native="download('chrome')"
          />
        </div>
        <div class="mt-4 items-center flex xl:hidden">
          <CustomButton
            new-tag
            icon="chrome"
            type="dark"
            content="Chrome Extension"
            class="px-5"
            @click.native="download('chrome')"
          />
        </div>
        <div class="flex mt-4 items-center">
          <CustomButton icon="googleplay" content="GooglePlay" class="w-24 lg:w-32" @click.native="download('googlePlay')" />
          <el-tooltip effect="dark" placement="bottom" type="primary">
            <div class="w-10 h-10 ml-4 p-1 flex justify-center items-center cursor-pointer hover:opacity-80 border border-darkgray-900 rounded-md">
              <img v-show="localeCode==='zh'" src="@/assets/img/home/code-en.png" alt="download-qr-code" class="w-7 h-7" :draggable="false">
              <img v-show="localeCode!=='zh'" src="@/assets/img/home/code-en.png" alt="download-qr-code" class="w-7 h-7" :draggable="false">
            </div>
            <div slot="content" class="relative">
              <canvas ref="canvas" class="my-auto rounded-md border w-32"></canvas>
              <img src="@/assets/img/share/logo-icon.svg" class="code-logo w-6 bg-white p-1 rounded-md absolute -mt-3 -ml-3" :draggable="false">
            </div>
          </el-tooltip>
        </div>
      </div>
    </div>
    <div class="md:hidden pt-32">
      <div class="flex items-center justify-center font-bold">
        <div v-for="item, index in mobileWords1" :key="index" class="text-2xl" :class="animateClass+' delay'+index">
          {{ item }}
          <div v-show="item === ' '" class="w-3"></div>
        </div>
      </div>
      <div class="flex items-center justify-center font-bold">
        <div v-for="item, index in mobileWords2" :key="index" class="text-2xl" :class="animateClass+' delay'+index">
          {{ item }}
          <div v-show="item === ' '" class="w-3"></div>
        </div>
      </div>
      <div class="w-6 h-1 bg-primary-500 mx-auto my-4"></div>
      <div class="py-2 text-sm">
        <h3 class="animate__animated animate__fadeInDown animate__delay-1s text-gray-600 text-center">
          {{ $t('home.banner.feature1') }}
        </h3>
        <h3 class="animate__animated animate__fadeInDown animate__delay-2s text-gray-600 text-center">
          {{ $t('home.banner.feature2') }}
        </h3>
        <h3 class="animate__animated animate__fadeInDown animate__delay-3s text-gray-600 text-center">
          {{ $t('home.banner.feature3') }}
        </h3>
      </div>
    </div>
  </div>
</template>
<script>
import QrCodeWithLogo from 'qr-code-with-logo'
let timer = null

export default {
  data() {
    return {
      localeCode: this.$i18n.locale,
      count: 0,
      words1: ['L', 'e', 'a', 'd', 'i', 'n', 'g', ' ', 'y', 'o', 'u', ' ', 't', 'o', ' ', 't', 'h', 'e'],
      words2: ['w', 'o', 'r', 'l', 'd', ' ', 'o', 'f', ' ', 'W', 'e', 'b', '3'],
      mobileWords1: ['L', 'e', 'a', 'd', 'i', 'n', 'g', ' ', 'y', 'o', 'u'],
      mobileWords2: ['t', 'o', ' ', 't', 'h', 'e', ' ', 'w', 'o', 'r', 'l', 'd', ' ', 'o', 'f', ' ', 'W', 'e', 'b', '3'],
    }
  },
  computed: {
    animateClass() {
      if (this.count % 2 === 0) {
        return 'animate__animated animate__rollIn'
      } else {
        // return 'animate__animated animate__fadeOutDown'
        return ''
      }
    }
  },
  mounted() {
    this.initQrCode()
    // timer = setInterval(() => {
    //   this.count++
    // }, 2000)
    timer = setTimeout(() => {
      this.count = 2
    }, 2000)
  },
  beforeDestroy() {
    // clearInterval(timer)
    clearTimeout(timer)
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
  }
}
</script>
<style scoped>
.subject-content {
  position: absolute;
  left: 20%;
  top: 30%;
}
.code-logo {
  left: 50%;
  top: 50%;
}
</style>
