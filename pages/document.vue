<template>
  <div>
    <img :src="documentImgUrl" class="w-full" :draggable="false">
  </div>
</template>
<script>
export default {
  computed: {
    documentImgUrl() {
      return `https://cdn.foxnb.net/app_image/${this.$i18n.locale}/${this.$route.query.filename}`
    }
  }
}
</script>
