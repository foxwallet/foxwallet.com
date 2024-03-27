<template>
  <div>
    <NewHeader />
    <NewSubject />
    <NewWalletAnimate />
    <NewAdvantages />
    <NewPartner />
    <NewFooter />
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
    // this.viewRecord()
  },
  methods: {
    changeHeaderShow(show) {
      this.headerShow = show
    }
  }
}
</script>

<style>
  html, body {
    background: #000000;
  }
</style>
