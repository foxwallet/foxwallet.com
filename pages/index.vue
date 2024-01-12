<template>
  <div>
    <Header @headerShow="changeHeaderShow" />
    <div :class="headerShow ? 'hidden md:block' : ''">
      <Subject @download="download" />
      <youtube video-id="Plalme9o8Zw" class="md:rounded-xl lg:rounded-2xl mx-auto mt-16 mb-32 border" />
      <Choice />
      <RotateCommunity />
      <Feature />
      <Download />
      <Partners />
      <Footer />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      headerShow: false
    }
  },
  mounted() {
    this.viewRecord()
  },
  methods: {
    changeHeaderShow(show) {
      this.headerShow = show
    }
  }
}
</script>
