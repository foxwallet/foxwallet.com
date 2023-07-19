<template>
  <el-carousel :interval="3000" arrow="always" height="500px">
    <el-carousel-item v-for="{ url, img } in imgs" :key="url">
      <a :href="url" target="_blank">
        <img :src="img" :alt="url">
      </a>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  data() {
    return {
      imgs: [
        {
          url: 'https://app.questn.com/quest/755691302323028011',
          img: require('~/assets/img/carousel/1.jpg'),
        },
        {
          url: 'https://link3.to/atem/post/cf85963c2b7201986e079b54941d16fffefedba88d97ae9bd0ef504022d6d107',
          img: require('~/assets/img/carousel/2.jpg'),
        }
      ]
    }
  }
}
</script>
