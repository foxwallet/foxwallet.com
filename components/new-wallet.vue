<template>
  <div>
    <div class="content-wrapper mx-auto md:flex hidden pb-36" data-aos="fade-up" data-aos-duration="2000">
      <div class="wallet-page mr-4">
        <img src="@/assets/new-img/wallet/Home.svg" alt="wallet home page" height="674" width="312" class="light">
        <img src="@/assets/new-img/wallet/Home-d.svg" alt="wallet home page" height="674" width="312" class="dark">
      </div>
      <div class="wallet-page mr-4">
        <img src="@/assets/new-img/wallet/Wallet.svg" alt="wallet home page" height="674" width="312" class="light">
        <img src="@/assets/new-img/wallet/Wallet-d.svg" alt="wallet home page" height="674" width="312" class="dark">
      </div>
      <div class="wallet-page mr-4">
        <img src="@/assets/new-img/wallet/Discover.svg" alt="wallet home page" height="674" width="312" class="light">
        <img src="@/assets/new-img/wallet/Discover-d.svg" alt="wallet home page" height="674" width="312" class="dark">
      </div>
      <div class="wallet-page mr-4">
        <img src="@/assets/new-img/wallet/Networks.svg" alt="wallet home page" height="674" width="312" class="light">
        <img src="@/assets/new-img/wallet/Networks-d.svg" alt="wallet home page" height="674" width="312" class="dark">
      </div>
      <div class="wallet-page mr-4">
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

<style scoped>
  .pagination-wrapper {
    width: 1200px;
    margin: 0 auto;
  }
  .content-wrapper {
    width: 1200px;
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
    width: 227px;
    transition: 0.25s linear;
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
