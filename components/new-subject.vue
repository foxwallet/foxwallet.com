<template>
  <div>
    <div class="items-center hidden md:flex flex-col bg-black pt-40 pb-36 text-white mx-auto">
      <div class="text-8xl font-bold flex items-center">
        <div>Your First </div>
        <span class="letter">&nbsp;</span>
        <div
          class="print-wrapper flex text-brand"
        >
          <span v-for="(l,i) in printLetters" :key="i" class="letter" v-html="l"></span>
        </div>
      </div>
      <div class="mt-3 text-center text-2xl font-normal animate__animated animate__fadeInDown animate__delay-1s">
        <p>Best Multi-chain Web3 Wallet / Private & Secure /</p>
        <p>Decentralized & Flexible</p>
      </div>
      <div>
        <NewDownload />
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
/* 光标闪啊闪 */
@keyframes blink-caret {
  from, to { box-shadow: 1px 0 0 0 transparent; }
  50% { box-shadow: 1px 0 0 0; }
}
.box {
  aspect-ratio: 2.5 / 1;
  background: url('@/assets/img/home/line-box.png');
  background-size: 100%;
  background-position: bottom;
  background-repeat: no-repeat;
  position: relative;
}
.mobile-person {
  width: 80%;
  margin-left: 10%;
}
.person-box {
  position: absolute;
  right: 13%;
  bottom: 15%;
  aspect-ratio: 1.1 / 1;
}
.btc-icon {
  position: absolute;
  left: 13%;
  bottom: 28%;
}
.eth-icon {
  position: absolute;
  bottom: 38%;
  left: -2%;
}
.usdt-icon {
  position: absolute;
  bottom: 20%;
  left: -5%;
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
