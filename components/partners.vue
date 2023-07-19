<template>
  <div class="container mx-auto py-24" data-aos="fade-up" data-aos-duration="3000">
    <h3 class="text-2xl font-bold mb-8 text-center">
      {{ $t('home.partners.title') }}
    </h3>
    <div class="justify-center flex flex-wrap">
      <a
        v-for="(item, index) in imgs"
        :key="index"
        :href="item.src"
        target="_blank"
        class="mb-2 mr-2"
        :title="item.name"
      >
        <img :src="item.img" class="cursor-pointer hover:opacity-75 rounded-full" :class="[ index > 19 ? 'w-7 lg:w-10 border' : 'w-8 lg:w-12' ]" :draggable="false">
      </a>
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
