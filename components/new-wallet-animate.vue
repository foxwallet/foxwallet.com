<template>
  <div>
    <div class="wallet-content mx-auto md:flex hidden pb-36" data-aos="fade-up" data-aos-duration="2000">
      <div ref="wallet-1" class="wallet-page mr-4">
        <img src="@/assets/new-img/wallet/Home.svg" alt="wallet home page" height="674" width="312" class="light">
        <img src="@/assets/new-img/wallet/Home-d.svg" alt="wallet home page" height="674" width="312" class="dark">
      </div>
      <div ref="wallet-2" class="wallet-page mr-4">
        <img src="@/assets/new-img/wallet/Wallet.svg" alt="wallet home page" height="674" width="312" class="light">
        <img src="@/assets/new-img/wallet/Wallet-d.svg" alt="wallet home page" height="674" width="312" class="dark">
      </div>
      <div ref="wallet-3" class="wallet-page mr-4">
        <img src="@/assets/new-img/wallet/Discover.svg" alt="wallet home page" height="674" width="312" class="light">
        <img src="@/assets/new-img/wallet/Discover-d.svg" alt="wallet home page" height="674" width="312" class="dark">
      </div>
      <div ref="wallet-4" class="wallet-page mr-4">
        <img src="@/assets/new-img/wallet/Networks.svg" alt="wallet home page" height="674" width="312" class="light">
        <img src="@/assets/new-img/wallet/Networks-d.svg" alt="wallet home page" height="674" width="312" class="dark">
      </div>
      <div ref="wallet-5" class="wallet-page mr-4">
        <img src="@/assets/new-img/wallet/FoxCredit.svg" alt="wallet home page" height="674" width="312" class="light">
        <img src="@/assets/new-img/wallet/FoxCredit-d.svg" alt="wallet home page" height="674" width="312" class="dark">
      </div>
    </div>
    <div class="ml-5 mt-20 flex md:hidden overflow-auto pb-20">
      <div class="wallet-page-m mr-4">
        <img src="@/assets/new-img/wallet/Home.svg" alt="wallet home page" width="230" height="498" class="light">
        <!-- <img src="@/assets/new-img/wallet/Home-d.svg" alt="wallet home page" height="674" width="312" class="dark"> -->
      </div>
      <div class="wallet-page-m mr-4">
        <img src="@/assets/new-img/wallet/Wallet.svg" alt="wallet home page" width="230" height="498" class="light">
        <!-- <img src="@/assets/new-img/wallet/Wallet-d.svg" alt="wallet home page" height="674" width="312" class="dark"> -->
      </div>
      <div class="wallet-page-m mr-4">
        <img src="@/assets/new-img/wallet/Discover.svg" alt="wallet home page" width="230" height="498" class="light">
        <!-- <img src="@/assets/new-img/wallet/Discover-d.svg" alt="wallet home page" height="674" width="312" class="dark"> -->
      </div>
      <div class="wallet-page-m mr-4">
        <img src="@/assets/new-img/wallet/Networks.svg" alt="wallet home page" width="230" height="498" class="light">
        <!-- <img src="@/assets/new-img/wallet/Networks-d.svg" alt="wallet home page" height="674" width="312" class="dark"> -->
      </div>
      <div class="wallet-page-m mr-4">
        <img src="@/assets/new-img/wallet/FoxCredit.svg" alt="wallet home page" width="230" height="498" class="light">
        <!-- <img src="@/assets/new-img/wallet/FoxCredit-d.svg" alt="wallet home page" height="674" width="312" class="dark"> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewWalletAnimate',
  data() {
    return {
      animated: false,
    }
  },
  mounted() {
    // this.setAnimate()
    this.init()
  },
  methods: {
    init() {
      const intersectionObserver = new IntersectionObserver(entries => {
        if (entries[0].intersectionRatio <= 0) { return }
        this.setAnimate()
      })
      intersectionObserver.observe(document.querySelector('.wallet-content'))
    },
    setAnimate() {
      if (this.animated) {
        return
      }
      setTimeout(() => {
        this.$refs['wallet-1'].style.left = '0px'
        this.$refs['wallet-2'].style.left = '242.5px'
        this.$refs['wallet-3'].style.left = '485px'
        this.$refs['wallet-4'].style.left = '727.5px'
        this.$refs['wallet-5'].style.left = '970px'
        this.animated = true
      }, (500))
    }
  }
}
</script>

  <style>
    .pagination-wrapper {
      width: 1200px;
      margin: 0 auto;
    }
    .wallet-content {
      width: 1200px;
      height: 740px;
      overflow-x: hidden;
      padding-top: 20px;
      position: relative;
      z-index: 2;
    }
    .wallet-page-m {
      width: 230px;
      height: 498px;
      flex: 0 0 230px;
      scroll-snap-align: start;
      scroll-snap-stop: always;
    }
    .wallet-page {
      position: absolute;
      top: 120px;
      width: 227px;
      transition: all 0.4s cubic-bezier(.29, 1.01, 1, -0.68);
    }
    .wallet-page:nth-child(1) {
        left: 475px;
        z-index: 5;
    }
    .wallet-page:nth-child(2) {
        left: 485px;
        z-index: 4;
    }
    .wallet-page:nth-child(3) {
        left: 495px;
        z-index: 3;
    }
    .wallet-page:nth-child(4) {
        left: 505px;
        z-index: 2;
    }
    .wallet-page:nth-child(5) {
        left: 515px;
        z-index: 1;
    }
    .wallet-page .dark {
      display: none;
    }
    .wallet-page:hover {
      transform: translateY(-20px);
    }
    .wallet-page:hover .light {
      display: none;
    }
    .wallet-page:hover .dark {
      display: block;
    }
  </style>
