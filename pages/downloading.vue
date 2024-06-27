<template>
  <div class="min-h-screen text-white">
    <div class="mx-auto main-wrapper">
      <div class="pt-6">
        <img src="@/assets/new-img/logo.svg" alt="logo">
      </div>
      <div class="flex flex-col main-title-m text-center pt-7">
        <div>{{ $t('main.title') }} </div>
        <div class="print-wrapper print-wrapper-m flex text-brand">
          <span v-for="(l, i) in printLetters" :key="i" class="letter" v-html="l"></span>
        </div>
      </div>

      <div class="mt-3 text-center sub-title">
        <p>Leading Multi-Chain Wallet Solution</p>
        <p>Private & Secure </p>
        <p>Decentralized & Versatile </p>
      </div>

      <div class="flex justify-center py-10 arrow-move">
        <img src="@/assets/new-img/down-arrow.svg" alt="">
      </div>

      <div class="flex justify-center">
        <MainBanner />
      </div>
      <div class="fixed bottom-0 left-0 right-0">
        <div class="mx-auto bottom-download py-5">
          <NewCustomButton
            mode="tiny"
            type="dark"
            class="font-bold"
            content="Downloading"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      letters: ['W', 'e', 'b', '3', '&nbsp;', 'W', 'a', 'l', 'l', 'e', 't'],
      printLetters: [],
      interval: null,
      count: 0,
      mobileWords1: ['L', 'e', 'a', 'd', 'i', 'n', 'g', ' ', 'y', 'o', 'u'],
      mobileWords2: ['t', 'o', ' ', 't', 'h', 'e', ' ', 'w', 'o', 'r', 'l', 'd', ' ', 'o', 'f', ' ', 'W', 'e', 'b', '3'],

    }
  },
  mounted() {
    this.print()
    this.autoDownload()
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
    autoDownload() {
      const downloadUrl = this.$route.query?.downloadUrl
      if (downloadUrl) {
        const options = { method: 'Get' }
        const element = document.createElement('form', options)
        element.setAttribute('action', downloadUrl)
        document.body.appendChild(element)
        element.submit()
      }
    }
  }

}
</script>
<style>
html,
body {
    background-color: black;
}
</style>
<style scoped>
.main-wrapper {
    padding-bottom: 200px;
    width: 375px;
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
    font-size: 50px;
    line-height: 75px;
    font-weight: 700;
}

.bottom-download {
    background-color: #121212;
    z-index: 1;
    width: 375px;
}
</style>
