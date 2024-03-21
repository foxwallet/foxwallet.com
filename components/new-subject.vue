<template>
  <div class="subject-wrapper">
    <div class="text-white mx-auto">
      <div class="shadow shadow-l"></div>
      <div class="shadow shadow-r"></div>
      <div class="subject-content flex-col flex items-center justify-center min-h-screen">
        <div class="flex items-center main-title">
          <div>Your First </div>
          <span class="letter">&nbsp;</span>
          <div
            class="print-wrapper flex text-brand"
          >
            <span v-for="(l,i) in printLetters" :key="i" class="letter" v-html="l"></span>
          </div>
        </div>
        <div class="mt-3 text-center sub-title animate__animated animate__fadeInDown animate__delay-1s">
          <p>Best Multi-chain Web3 Wallet / Private & Secure /</p>
          <p>Decentralized & Flexible</p>
        </div>
        <div class="text-center mt-20">
          <NewDownload />
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
    }
  },
  mounted() {
    this.print()
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
    download(platform) {
      this.$emit('download', platform)
    }
  }
}
</script>
<style scoped>
.print-wrapper {
  animation: blink-caret 0.75s step-end infinite;
}
@keyframes blink-caret {
  from, to { box-shadow: 1px 0 0 0 transparent; }
  50% { box-shadow: 1px 0 0 0; }
}
.subject-wrapper {
  position: relative;
}
.subject-content {
  z-index: 1;
}
.main-title {
  font-family: 'Poppins-Bold';
  font-size: 100px;
  line-height: 150px;
  font-weight: 700;;
}
.sub-title {
  font-size: 26px;
  line-height: 39px;
  font-weight:400;
}
.download-wrapper {
  width: 100%;
  display: flex;
  align-items: center;
}

.shadow {
  background: rgba(18, 254, 116, 0.9);
  opacity: .3;
  filter: blur(150px);
  height: 637px;
  width: 637px;
  border-radius: 100%;
  z-index: 1;
}

.shadow-l {
  position: absolute;
  left: -220px;
  top: 0;
}

.shadow-r {
  position: absolute;
  right: -220px;
  bottom: -400px;
}

</style>
