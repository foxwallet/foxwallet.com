<template>
  <div ref="rotateBox" class="w-6 h-6 md:w-10 md:h-10 absolute">
    <img :src="imgs[index-1]" class="w-full h-full" :draggable="false">
  </div>
</template>
<script>
import imgs from '@/constant/rotate-item-img'
export default {
  props: {
    index: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      imgs,
      timer: null,
      halfWidth: 0,
      radio: 0,
      degree: 0
    }
  },
  mounted() {
    this.init()
  },
  onUnmounted() {
    window.clearInterval(this.timer)
    this.timer = null
  },
  methods: {
    init(noRandom) {
      window.clearInterval(this.timer)
      // 随机在指定角度初始化
      const Range = 450 - 270
      const Rand = Math.random()
      if (noRandom) {
        this.degree = 240
      } else {
        this.degree = 270 + Math.round(Rand * Range) - 1
      }
      this.radio = this.$refs.rotateBox.parentNode.clientWidth / 2
      this.halfWidth = this.$refs.rotateBox.clientWidth / 2
      this.timer = setInterval(() => {
        this.degree = this.degree + 0.5
        const rad = Math.PI / 180 * this.degree
        const x = Math.sin(rad) * this.radio
        const y = Math.cos(rad) * this.radio
        this.$refs.rotateBox.style.left = `${this.radio + x - this.halfWidth}px`
        this.$refs.rotateBox.style.top = `${this.radio + y - this.halfWidth}px`
        if (this.degree > 470) {
          this.$emit('change')
          this.init(true)
        }
      }, 20 + Math.round(Math.random() * 40))
    }
  }
}
</script>
