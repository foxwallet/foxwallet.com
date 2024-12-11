<template>
  <div class="mx-auto max-w-3xl">
    <div class="container">
      <Logo class="mt-4" class-name="h-9" />
      <div class="mt-4" style="background:linear-gradient(to left, transparent, #b6b6b6, transparent); height: 1px"></div>
      <div class="flex items-center justify-center font-extrabold mt-4">
        <div v-for="item, index in mobileWords1" :key="index" class="text-2xl">
          {{ item }}
          <div v-if="item === ' '" class="w-3"></div>
        </div>
      </div>

      <div class="flex items-center justify-center font-bold">
        <div v-for="item, index in mobileWords2" :key="index" class="text-2xl">
          {{ item }}
          <div v-if="item === ' '" class="w-3"></div>
        </div>
      </div>

      <div class="pt-8 relative">
        <img class="mobile-person" src="@/assets/img/home/person.png" draggable="false">
        <img class="w-10 btc-icon-mobile btc-move" src="@/assets/img/home/btc.png" draggable="false">
        <img class="w-8 eth-icon-mobile etc-move" src="@/assets/img/home/eth.png" draggable="false">
        <img class="w-6 usdt-icon-mobile usdt-move" src="@/assets/img/home/usdt.png" draggable="false">
        <img src="@/assets/img/home/line-box-mobile.png" class="w-full absolute -bottom-8">
      </div>

      <div class="py-2 text-sm mb-4 mt-6 leading-6">
        <h3 class="text-gray-600 text-center">
          {{ $t('download.banner.feature1') }}
        </h3>
        <h3 class="text-gray-600 text-center">
          {{ $t('download.banner.feature2') }}
        </h3>
        <h3 class="text-gray-600 text-center">
          {{ $t('download.banner.feature3') }}
        </h3>
      </div>
      <img src="@/assets/img/home/arrow-down.svg" class="w-3 mx-auto btc-move">
      <div v-if="code.length !== 10" class="mt-8">
        <img src="@/assets/img/home/logo-icon.svg" class="w-36 p-3 border-2 border-gray-200 mx-auto rounded-2xl shadow-slate-200 shadow-lg" :draggable="false">
        <img src="@/assets/img/home/logo-word.svg" class="h-3 mx-auto my-4" :draggable="false">
        <div class="h-24"></div>
      </div>
      <div v-else class="mb-32">
        <div class="flex items-center justify-between bg-gray-100 mt-4 p-4 rounded-md">
          <div class="flex items-center">
            <span class="text-gray-400 font-thin text-sm">{{ $t('download.invite') }}</span>
            <span class="text-primary-900 text-xl font-mono ml-2">{{ code }}</span>
          </div>
          <span class="bg-primary-900 cursor-pointer rounded text-white hover:opacity-75 text-xs px-2 py-1" @click="copyCode">
            <template v-if="copied">
              <i class="el-icon-check px-2.5 font-bold"></i>
            </template>
            <template v-else>
              {{ $t('download.copy') }}
            </template>
          </span>
        </div>
        <h1 class="text-center text-xl mb-4 mt-8">
          {{ $t('download.guide') }}
        </h1>
        <div class="bg-gray-100 rounded-md flex justify-between pb-4">
          <div class="flex flex-col items-center justify-center text-xs text-gray-600 text-center w-1/3">
            <div class="flex justify-center items-center h-12">
              <img src="@/assets/img/home/download.svg" class="w-8">
            </div>
            <span>Download <br> FoxWallet</span>
          </div>
          <div class="flex flex-col items-center justify-center text-xs text-gray-600 text-center w-1/3">
            <div class="flex justify-center items-center h-12">
              <img src="@/assets/img/home/create.svg" class="w-6">
            </div>
            <span>Create <br> and Import</span>
          </div>
          <div class="flex flex-col items-center justify-center text-xs text-gray-600 text-center w-1/3">
            <div class="flex justify-center items-center h-12">
              <img src="@/assets/img/home/insert.svg" class="w-7">
            </div>
            <span>Input <br> Invitation Code</span>
          </div>
        </div>
      </div>
    </div>
    <div class="fixed bottom-0 left-0 right-0">
      <div class="mx-auto max-w-3xl">
        <div class="mt-4" style="background:linear-gradient(to left, transparent, #b6b6b6, transparent); height: 1px"></div>
        <div class="container mx-auto py-6 bg-white">
          <div class="flex item-center justify-between">
            <CustomButton
              v-if="isIos || (!isAndroid && !isIos)"
              icon="ios"
              type="dark"
              content="App Store"
              class="mr-2 w-28"
              @click.native="download('ios')"
            />
            <CustomButton
              v-if="isAndroid || (!isAndroid && !isIos)"
              icon="android"
              type="dark"
              content="Android"
              class="mr-2 w-28"
              @click.native="download('android')"
            />
            <CustomButton
              v-if="isAndroid || (!isAndroid && !isIos)"
              icon="googleplay"
              type="dark"
              content="Google Play"
              class="px-4"
              @click.native="download('googlePlay')"
            />
          </div>
          <div class="flex item-center justify-center mt-4">
            <CustomButton
              new-tag
              icon="chrome"
              type="dark"
              content="Chrome Extension"
              class="px-5"
              @click.native="download('chrome')"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import copy from 'copy-to-clipboard'
export default {
  data() {
    let isAndroid = null
    let isIos = null
    if (process.client) {
      isAndroid = /android/i.test(navigator.userAgent)
      isIos = /(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)
    }
    return {
      localeCode: this.$i18n.locale,
      code: '',
      mobileWords1: ['L', 'e', 'a', 'd', 'i', 'n', 'g', ' ', 'y', 'o', 'u'],
      mobileWords2: ['t', 'o', ' ', 't', 'h', 'e', ' ', 'w', 'o', 'r', 'l', 'd', ' ', 'o', 'f', ' ', 'W', 'e', 'b', '3'],
      isAndroid,
      isIos,
      copied: false
    }
  },
  mounted() {
    if (this.$route.query?.code) {
      this.code = this.$route.query?.code.substring(0, 10)
    }
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
    copyCode() {
      copy(this.code)
      this.copied = true
      setTimeout(() => { this.copied = false }, 2500)
    }
  }
}
</script>
<style scoped>
.mobile-person {
  width: 80%;
  margin-left: 10%;
}
.btc-icon-mobile {
  position: absolute;
  left: 20%;
  bottom: 28%;
}
.eth-icon-mobile {
  position: absolute;
  bottom: 32%;
  left: 10%;
}
.usdt-icon-mobile {
  position: absolute;
  bottom: 20%;
  left: 7%;
}
@keyframes move {
    0% {
        transform: translate(0px, 0px);
    }
    50% {
        transform: translate(0px, -10px);
    }
    100% {
        transform: translate(0px, 0px);
    }
}
.btc-move{
  animation: move 3s infinite;
}
.etc-move{
  animation: move 2s infinite;
}
.usdt-move{
  animation: move 4s infinite;
}
</style>
