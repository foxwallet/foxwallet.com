<template>
  <div>
    <div class="partner-wrapper mx-auto md:block hidden pb-36">
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
    <div class="px-5 md:hidden block partner-wrapper-m">
      <div class="title-m text-center text-white mb-20">
        Partner
      </div>
      <div class="flex flex-wrap justify-center">
        <a
          v-for="(item, index) in imgs"
          :key="index"
          :href="item.src"
          target="_blank"
          :title="item.name"
          class="brand-logo"
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
.partner-wrapper-m {
  margin-right: -30px;
  margin-bottom: 80px;
}
.brand-logo {
  margin: 0 30px 30px 0;
}
.title-m {
  font-size: 30px;
  line-height: 45px;
  font-weight: 600;
  font-family: 'Poppins-Bold';
}
</style>
