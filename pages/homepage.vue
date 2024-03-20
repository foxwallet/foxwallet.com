<template>
  <div>
    <NewHeader />
    <NewSubject />
    <NewWallet />
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
    this.viewRecord()
  },
  methods: {
    changeHeaderShow(show) {
      this.headerShow = show
    }
  }
}
</script>
