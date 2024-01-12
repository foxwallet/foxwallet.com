<template>
  <div class="mx-auto flex flex-col justify-center items-center">
    <div class="c-banner"></div>
    <div class="container max-w-3xl">
      <img v-if="code.length !== 10" src="@/assets/img/home/arrow-down.svg" class="w-3 mx-auto btc-move mt-10">
      <div v-if="code.length !== 10" class="mt-8">
        <img src="@/assets/img/home/logo-icon.svg" class="w-36 p-3 border-2 border-gray-200 mx-auto rounded-2xl shadow-slate-200 shadow-lg" :draggable="false">
        <img src="@/assets/img/home/logo-word.svg" class="h-3 mx-auto my-4" :draggable="false">
        <div class="h-24"></div>
      </div>
      <div v-else class="mb-32">
        <div class=" mt-5 flex justify-center flex-col items-center">
          <p class="des1">
            Happy Anniversary
          </p>
          <p class="des2">
            Top 10 Inviters Share $100 Daily
          </p>
        </div>
        <div class="flex items-center justify-between bg-gray-100 mt-5 p-4 rounded-md">
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
        <h1 class="text-center text-sm font-semibold mb-5 mt-5">
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
        <div class="bg-gray-100 rounded-md flex justify-between items-center mt-5 p-4">
          <p class="text-gray-400 font-thin text-sm">
            You can get
          </p>
          <div>
            <span class="text-primary-900 text-xl font-mono">50</span>
            <span class="text-gray-400 font-thin text-sm"> Fox Credit</span>
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
              @click.native="download('android')"
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
.c-banner{
  height: 20rem;
  width: 100%;
  background: url('@/assets/img/activity/p-banner.png') no-repeat center 70% / 89%, linear-gradient(0deg, #F77332 0.04%, #FA9B49 99.96%);
}
@media screen and (min-width: 500px) {
  .c-banner{
    height: 30vw;
    background: url('@/assets/img/activity/p-banner.png') no-repeat center center / 39%, linear-gradient(0deg, #F77332 0.04%, #FA9B49 99.96%);
  }
}
.des1{
  color: #EC7D43;
  text-align: center;
  font-family: Poppins;
  font-size: 1.375rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.71875rem; /* 125% */
}
.des2{
  color: var(--neutrals-2, #23262F);
  font-family: Poppins;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.71875rem;
}
</style>
