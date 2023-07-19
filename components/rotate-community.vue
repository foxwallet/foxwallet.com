<template>
  <div class="container mx-auto relative" :style="outBoxStyle">
    <div class="md: absolute left-0 right-0 mask" :style="maskStyle"></div>
    <div ref="box" class="box-shape w-4/5 ml-1/10 mx-auto md:w-128 lg:w-176 relative">
      <div class="box-shape box-shape-1">
        <div class="w-full h-full relative">
          <RotateItem ref="rotateItem1" :index="indexs[0]" @change="resetImg(0)" />
        </div>
      </div>
      <div class="box-shape box-shape-2">
        <RotateItem ref="rotateItem2" :index="indexs[1]" @change="resetImg(1)" />
      </div>
      <div class="box-shape box-shape-3">
        <RotateItem ref="rotateItem3" :index="indexs[2]" @change="resetImg(2)" />
      </div>
      <div class="box-shape box-shape-4">
        <RotateItem ref="rotateItem4" :index="indexs[3]" @change="resetImg(3)" />
      </div>
      <div class="box-shape box-shape-5">
        <RotateItem ref="rotateItem5" :index="indexs[4]" @change="resetImg(4)" />
      </div>
    </div>
  </div>
</template>
<script>
import { set } from 'vue'
import imgs from '@/constant/rotate-item-img'
export default {
  data() {
    return {
      indexs: [1, 2, 3, 4, 5],
      maskStyle: {},
      outBoxStyle: {}
    }
  },
  mounted() {
    this.maskStyle = { height: this.$refs.box.clientHeight / 2 + 30 + 'px' }
    this.outBoxStyle = { marginTop: '-' + (this.$refs.box.clientHeight / 2 + 30) + 'px' }
    let resizeTag = true
    window.addEventListener('resize', () => {
      this.maskStyle = { height: this.$refs.box.clientHeight / 2 + 30 + 'px' }
      this.outBoxStyle = { marginTop: '-' + (this.$refs.box.clientHeight / 2 + 30) + 'px' }
      if (resizeTag) {
        resizeTag = false
        setTimeout(() => {
          resizeTag = true
          this.$refs.rotateItem1.init()
          this.$refs.rotateItem2.init()
          this.$refs.rotateItem3.init()
          this.$refs.rotateItem4.init()
          this.$refs.rotateItem5.init()
        }, 500)
      }
    })
  },
  onUnmounted() {
    window.removeEventListener('resize')
  },
  methods: {
    resetImg(index) {
      const list = []
      for (let i = 1; i <= imgs.length; i++) {
        if (this.indexs.find(item => item === i)) {
          continue
        } else {
          list.push(i)
        }
      }
      if (this.indexs.includes(1) && this.indexs.includes(imgs.length)) {
        set(this.indexs, index, Math.min(...list))
      } else if (this.indexs.includes(18)) {
        set(this.indexs, index, Math.min(...list))
      } else {
        set(this.indexs, index, Math.min(...list.filter(item => item > Math.max(...this.indexs))))
      }
    }
  }
}
</script>
<style scoped>
.box-shape {
  aspect-ratio: 1 / 1;
  position: relative;
}
.box-shape-1, .box-shape-2, .box-shape-3, .box-shape-4, .box-shape-5 {
  position: absolute;
  border:1px dashed rgb(195, 195, 195);
  border-radius: 100%;
}
.box-shape-1 {
  width: 20%;
  left: 40%;
  top: 40%;
}
.box-shape-2 {
  width: 40%;
  left: 30%;
  top: 30%;
}
.box-shape-3 {
  width: 60%;
  left: 20%;
  top: 20%;
}
.box-shape-4 {
  width: 80%;
  left: 10%;
  top: 10%;
}
.box-shape-5 {
  width: 100%;
  left: 0;
  top: 0;
}
.mask {
  background-image: linear-gradient(white, white 85%, rgba(255, 255, 255, 0));
  z-index: 10
}
</style>
