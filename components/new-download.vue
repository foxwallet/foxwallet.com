<template>
  <div class="hidden lg:flex items-center mt-20 text-white">
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
      <div class="w-10 h-10 ml-4 p-1 flex justify-center items-center cursor-pointer hover:opacity-80 border border-darkgray-900 rounded-md">
        <img src="@/assets/img/home/code-en.png" alt="download-qr-code" class="w-7 h-7" :draggable="false">
      </div>
      <div slot="content" class="relative">
        <canvas ref="canvas" class="my-auto rounded-md border w-32"></canvas>
        <img src="@/assets/img/share/logo-icon.svg" class="code-logo w-6 bg-white p-1 rounded-md absolute -mt-3 -ml-3" :draggable="false">
      </div>
    </el-tooltip>
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
    download(params) {
      console.log('params', params)
    }
  }
}
</script>

<style scoped>
.code-logo {
  left: 50%;
  top: 50%;
}
</style>
