<template>
  <div class="pb-36">
    <div class="partner-wrapper mx-auto">
      <div class="text-8xl font-bold text-center text-white mb-20">
        Partner
      </div>
      <div class="flex flex-wrap justify-center">
        <a
          v-for="(item, index) in imgs"
          :key="index"
          :href="item.src"
          target="_blank"
          :title="item.name"
          class="mr-6 mb-6"
        >
          <img :src="item.img" class="cursor-pointer hover:opacity-75 rounded-full w-10" :draggable="false">
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import imgs from '@/constant/partner-item-img'
export default {
  data() {
    return { imgs }
  }
}
</script>

<style scoped>
.partner-wrapper {
  width: 1200px;
}
</style>
