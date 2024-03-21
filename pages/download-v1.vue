<template>
  <div class="mx-auto max-w-3x min-h-screen text-white">
    <div class="container main-wrapper">
      <div class="flex flex-col main-title-m text-center pt-7">
        <div>Your First </div>
        <div class="print-wrapper print-wrapper-m flex text-brand">
          <span v-for="(l,i) in printLetters" :key="i" class="letter" v-html="l"></span>
        </div>
      </div>

      <div class="mt-20">
        <MainBanner />
      </div>

      <div class="mt-5">
        <img src="@/assets/new-img/logo.svg" alt="logo">
      </div>

      <div class="mt-5 flex flex-wrap justify-between card-list">
        <div class="card-item">
          <AdCard mode="tiny" title="Security as a Priority">
            <img src="@/assets/new-img/advantages/01.svg" alt="01" width="60" height="60">
          </AdCard>
        </div>
        <div class="card-item">
          <AdCard mode="tiny" title="Transparent Auditing">
            <img src="@/assets/new-img/advantages/02.svg" alt="01" width="60" height="60">
          </AdCard>
        </div>
        <div class="card-item">
          <AdCard mode="tiny" title="Comprehensive chain support">
            <img src="@/assets/new-img/advantages/03.svg" alt="01" width="60" height="60">
          </AdCard>
        </div>
        <div class="card-item">
          <AdCard mode="tiny" title="Trusted by users" content="FoxWallet is well aware of the importance of security, so it adopts a local encryption method to store private keys to ensure the absolute safety of users' assets and data, completely eliminating external access and potential data leakage risks.">
            <img src="@/assets/new-img/advantages/04.svg" alt="01" width="60" height="60">
          </AdCard>
        </div>
      </div>

      <div v-if="code.length !== 10" class="mt-8">
        <img src="@/assets/img/home/logo-icon.svg" class="w-36 p-3 border-2 border-gray-200 mx-auto rounded-2xl shadow-slate-200 shadow-lg" :draggable="false">
        <img src="@/assets/img/home/logo-word.svg" class="h-3 mx-auto my-4" :draggable="false">
        <div class="h-24"></div>
      </div>
      <div v-else class="mb-32">
        <div class="flex items-center justify-between bg-white mt-4 p-4 rounded-md">
          <div class="flex items-center">
            <span class="code-title font-thin text-sm">{{ $t('download.invite') }}</span>
            <span class="text-black text-xl font-mono font-bold ml-2">{{ code }}</span>
          </div>
          <span class="bg-brand cursor-pointer rounded text-black hover:opacity-75 text-xs px-2 py-1" @click="copyCode">
            <template v-if="copied">
              <i class="el-icon-check px-2.5 font-bold"></i>
            </template>
            <template v-else>
              {{ $t('download.copy') }}
            </template>
          </span>
        </div>
        <div class="rounded-md  pb-4 border mt-8 py-5 px-3">
          <div class="guide-title text-brand mb-5">
            Completion Guide
          </div>
          <div class="flex justify-between">
            <div class="flex flex-col items-center justify-center text-xs text-white text-center w-1/3">
              <div class="flex justify-center items-center h-12">
                <img src="@/assets/img/home/download.svg" class="w-8">
              </div>
              <span>Download <br> FoxWallet</span>
            </div>
            <div class="flex flex-col items-center justify-center text-xs text-white text-center w-1/3">
              <div class="flex justify-center items-center h-12">
                <img src="@/assets/img/home/create.svg" class="w-6">
              </div>
              <span>Create or<br> Import</span>
            </div>
            <div class="flex flex-col items-center justify-center text-xs text-white text-center w-1/3">
              <div class="flex justify-center items-center h-12">
                <img src="@/assets/img/home/insert.svg" class="w-7">
              </div>
              <span>Fill in the <br> invitation Code</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="fixed bottom-0 left-0 right-0 bottom-download">
      <div class="mx-auto max-w-3xl">
        <div class="container mx-auto py-6">
          <NewDownload />
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
      letters: ['W', 'e', 'b', '3', '&nbsp;', 'W', 'a', 'l', 'l', 'e', 't'],
      printLetters: [],
      interval: null,
      count: 0,
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
    this.print()
    if (this.$route.query?.code) {
      this.code = this.$route.query?.code.substring(0, 10)
    }
  },
  beforeUnmount() {
    clearInterval(this.interval)
  },
  methods: {
    print() {
      this.printLetters = []
      this.count = 0
      this.interval = setInterval(() => {
        if (this.count > this.letters.length - 1) {
          clearInterval(this.interval)
          setTimeout(() => {
            this.print()
          }, 4000)
        }
        this.printLetters.push(this.letters[this.count++])
      }, 150)
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
    copyCode() {
      copy(this.code)
      this.copied = true
      setTimeout(() => { this.copied = false }, 2500)
    }
  }
}
</script>
<style>
    html, body {
        background-color: black;
    }
</style>
  <style scoped>
  .main-wrapper {
    padding-bottom: 100px;
  }

  .print-wrapper-m {
    margin: 0 auto;
  }
  .print-wrapper {
    animation: blink-caret 0.75s step-end infinite;
  }
  .main-title-m {
    font-family: 'Poppins-Bold';
    font-size: 50px;
    line-height: 75px;
    font-weight: 700;
  }
  .guide-title {
    font-size: 30px;
    font-weight: 600;
    line-height: 45px;
  }
  .bottom-download {
    background-color: #121212;
    z-index: 1;
  }
  .code-title {
    color: #777E90;
  }
  .card-list {
    margin-right: -10px;
  }
  .card-item {
    flex: 1;
    min-width: 166px;
    min-height: 126px;
    margin-right: 10px;
    margin-bottom: 10px;
  }
  </style>
