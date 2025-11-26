<template>
  <div class="min-h-screen text-white">
    <div class="mx-auto main-layout">
      <div class="flex items-center">
        <div class="locale-button" @click="langDrawer = true">
          {{ currLocale }}
        </div>
      </div>
      <el-drawer :visible.sync="langDrawer" :show-close="false" :size="240" direction="ttb" custom-class="dark-menu">
        <div class="lang-wrapper">
          <div class="lang-item" :class="currLocale === 'English' ? 'active' : ''" @click="handleLangItemClick('en')">
            English
          </div>
          <div class="lang-item" :class="currLocale === '简体中文' ? 'active' : ''" @click="handleLangItemClick('zh')">
            简体中文
          </div>
        </div>
      </el-drawer>
    </div>
    <div class="mx-auto main-layout" :class="isValidCode ? '' : 'main-wrapper'">
      <div v-if="!isValidCode" class="flex flex-col main-title-m text-center pt-7">
        <div>{{ $t('main.title') }} </div>
        <div class="print-wrapper print-wrapper-m flex text-brand">
          <span v-for="(l,i) in printLetters" :key="i" class="letter" v-html="l"></span>
        </div>
      </div>
      <div v-if="!isValidCode" class="mt-10 flex justify-center">
        <MainBanner />
      </div>
      <div v-else>
        <div
          class="text-center download-hint pt-7 mb-7 font-semibold"
        >
          <p>{{ $t('download.download') }} <span class="text-brand">FoxWallet</span> </p>
          <p> {{ $t('download.get') }} <span class="text-brand">{{ $t('download.daily_gains') }}</span></p>
        </div>

        <div class="text-brand text-xl font-semibold text-center mb-5">
          {{ $t('download.steps') }}
        </div>

        <div class="border border-opacity-40 border-white rounded-md p-3">
          <div class="flex items-center mb-3">
            <div class="step-icon-wrapper rounded-full mr-2 flex items-center justify-center">
              <img class="step-icon" src="@/assets/new-img/step_download.svg" alt="download">
            </div>
            <span class="text-white text-sm">{{ $t('download.step1') }}</span>
          </div>
          <div class="flex mb-6">
            <NewCustomButton
              mode="tiny"
              icon="ios"
              type="dark"
              content="App Store"
              class="mr-2"
              @click.native="download('ios')"
            />
            <NewCustomButton
              mode="tiny"
              icon="android"
              type="dark"
              content="Android"
              class="mr-2"
              @click.native="download('android')"
            />
            <NewCustomButton
              mode="tiny"
              type="dark"
              icon="googleplay"
              content="Google Play"
              @click.native="download('googlePlay')"
            />
          </div>
          <div class="flex items-center mb-3">
            <div class="step-icon-wrapper rounded-full mr-2 flex items-center justify-center">
              <img class="step-icon" src="@/assets/new-img/step_edit.svg" alt="edit">
            </div>
            <span class="text-white text-sm">{{ $t('download.step2') }}</span>
          </div>
          <div class="flex mb-6 bg-white rounded-sm h-12 items-center px-3">
            <div class="invitation-hint">
              {{ $t('download.invite') }}
            </div>
            <div class="flex justify-between flex-1">
              <div class="text-black font-semibold flex-1 text-center">
                {{ code }}
              </div>
              <div class="copy-btn cursor-pointer hover:opacity-75" @click="copyCode">
                <template v-if="copied">
                  {{ $t('download.copied') }}
                </template>
                <template v-else>
                  {{ $t('download.copy') }}
                </template>
              </div>
            </div>
          </div>
          <div class="flex items-center mb-6">
            <div class="step-icon-wrapper rounded-full mr-2 flex items-center justify-center">
              <img class="step-icon" src="@/assets/new-img/step_verified.svg" alt="verified">
            </div>
            <span class="text-white text-sm">{{ $t('download.step3') }}</span>
          </div>
          <div class="flex items-center">
            <div class="step-icon-wrapper rounded-full mr-2 flex items-center justify-center">
              <img class="step-icon" src="@/assets/new-img/step_invite.svg" alt="invite">
            </div>
            <span class="text-white text-sm">{{ $t('download.step4') }}</span>
          </div>
        </div>
      </div>

      <div class="my-10 flex justify-center">
        <img src="@/assets/new-img/logo-text.svg" alt="logo">
      </div>

      <div class="mt-5 flex flex-wrap justify-between card-list">
        <div class="card-item">
          <AdCardDownload mode="tiny" :title="$t('advantages.ad1.title')">
            <img src="@/assets/new-img/advantages/01.svg" alt="01" width="60" height="60">
          </AdCardDownload>
        </div>
        <div class="card-item">
          <AdCardDownload mode="tiny" :title="$t('advantages.ad2.title')">
            <img src="@/assets/new-img/advantages/02.svg" alt="01" width="60" height="60">
          </AdCardDownload>
        </div>
      </div>
      <div class="mt-5 flex flex-wrap justify-between card-list">
        <div class="card-item">
          <AdCardDownload mode="tiny" :title="$t('advantages.ad3.title')">
            <img src="@/assets/new-img/advantages/03.svg" alt="01" width="60" height="60">
          </AdCardDownload>
        </div>
        <div class="card-item">
          <AdCardDownload mode="tiny" :title="$t('advantages.ad4.title')">
            <img src="@/assets/new-img/advantages/04.svg" alt="01" width="60" height="60">
          </AdCardDownload>
        </div>
      </div>
    </div>
    <div v-if="!isValidCode" class="fixed bottom-0 left-0 right-0 ">
      <div class="mx-auto bottom-download">
        <div class="mx-auto py-6">
          <div class="flex justify-center items-center">
            <NewCustomButton
              mode="tiny"
              icon="ios"
              type="dark"
              content="App Store"
              class="mr-4"
              @click.native="download('ios')"
            />
            <NewCustomButton
              mode="tiny"
              icon="android"
              type="dark"
              content="Android"
              class="mr-4"
              @click.native="download('android')"
            />
          </div>
          <div class="mt-5 flex justify-center items-center">
            <NewCustomButton
              mode="tiny"
              type="dark"
              class="mr-4"
              icon="googleplay"
              content="Google Play"
              @click.native="download('googlePlay')"
            />
            <NewCustomButton
              new-tag
              mode="tiny"
              icon="chrome"
              type="dark"
              content="Chrome Extension"
              class="mr-4"
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

const localeMap = {
  en: 'English',
  zh: '简体中文'
}

export default {
  data() {
    let isAndroid = null
    let isIos = null
    if (process.client) {
      isAndroid = /android/i.test(navigator.userAgent)
      isIos = /(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)
    }
    return {
      langDrawer: false,
      currLocale: 'English',
      letters: ['W', 'e', 'b', '3', '&nbsp;', 'W', 'a', 'l', 'l', 'e', 't'],
      zhLetters: ['W', 'e', 'b', '3', '&nbsp;', '钱', '包'],
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
    if (this.$i18n.locale === 'en') {
      this.currLocale = 'English'
    } else {
      this.currLocale = '简体中文'
    }
  },
  beforeUnmount() {
    clearInterval(this.interval)
  },
  computed: {
    isValidCode() {
      return this.code.length === 10
    },
    googlePlayUrl() {
      const url = 'https://play.google.com/store/apps/details?id=com.foxwallet.play'
      if (this.code) {
        const referrerParams = {
          utm_content: this.code
        }
        const queryString = encodeURIComponent(new URLSearchParams(referrerParams).toString())
        return url + `&referrer=${queryString}`
      }
      return url
    }
  },
  methods: {
    handleLangItemClick(locale) {
      this.switchLocalePath(locale)
      this.langDrawer = false
    },
    switchLocalePath(locale) {
      this.$i18n.locale = locale
      this.currLocale = localeMap[locale]
    },
    print() {
      this.printLetters = []
      this.count = 0
      let originTitle = []
      if (this.$i18n.locale === 'en') {
        originTitle = this.letters
      } else {
        originTitle = this.zhLetters
      }
      this.interval = setInterval(() => {
        if (this.count > originTitle.length - 1) {
          clearInterval(this.interval)
          setTimeout(() => {
            this.print()
          }, 4000)
        }
        this.printLetters.push(originTitle[this.count++])
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
        window.open(this.googlePlayUrl)
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
      // setTimeout(() => { this.copied = false }, 2500)
    }
  }
}
</script>
<style>
html,
body {
  background-color: black;
}

.dark-menu.el-drawer {
  background-color: black;
}

.dark-menu .el-drawer__header {
  display: none;
}

.el-drawer__wrapper {
  position: absolute;
  height: 150px;
}
</style>
<style scoped>
.download-hint {
  font-size: 30px;
}

.copy-btn {
  background-color: #12FE74;
  font-size: 12px;
  color: #000;
  border-radius: 2px;
  height: 26px;
  line-height: 26px;
  padding: 0 10px;
}

.invitation-hint {
  color: #777E90;
  font-size: 12px;
}

.step-icon-wrapper {
  width: 30px;
  height: 30px;
  background-color: #12FE74;
}

.step-icon {
  height: 24px;
  width: 24px;
}

.guide-text {
  white-space: pre-line;
}

.lang-wrapper {
  padding: 24px 44px;
}

.lang-item {
  text-align: center;
  padding: 10px 0;
  border: 1px solid #ddd;
  border-radius: 2px;
  margin-bottom: 14px;
  font-size: 16px;
  font-weight: 400;
}

.lang-item.active {
  background: #12FE74;
  border: none;
  color: #000;
  font-weight: 600;
}

.locale-button {
  padding: 5px 10px;
  border: 1px solid #fff;
  font-size: 14px;
  border-radius: 2px;
  margin-top: 20px;
  margin-left: 16px;
  font-weight: 400;
}

.main-wrapper {
  padding-bottom: 200px;
}

.main-layout {
  width: 375px;
  position: relative;
}

.print-wrapper-m {
  margin: 0 auto;
  height: 75px;
}

.print-wrapper {
  animation: blink-caret 0.75s step-end infinite;
}

@keyframes blink-caret {

  from,
  to {
    box-shadow: 1px 0 0 0 transparent;
  }

  50% {
    box-shadow: 1px 0px 0 0;
  }
}

.main-title-m {
  font-family: 'Poppins-Bold';
  font-size: 30px;
  line-height: 45px;
  font-weight: 600;
}

.guide-title {
  font-size: 30px;
  font-weight: 600;
  line-height: 45px;
}

.bottom-download {
  background-color: #121212;
  z-index: 1;
  width: 375px;
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
