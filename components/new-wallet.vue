<template>
  <div class="pb-36">
    <!-- <div class="pagination-wrapper flex flex-row-reverse">
      <div class="btn-arrow w-10 h-10 rounded-full flex items-center justify-center bg-brand text-black cursor-pointer ml-3 hover:opacity-60">
        <i class="el-icon-arrow-right"></i>
      </div>
      <div class="btn-arrow w-10 h-10 rounded-full border border-white text-white flex items-center justify-center cursor-pointer hover:opacity-60">
        <i class="el-icon-arrow-left"></i>
      </div>
    </div> -->
    <div class="content-wrapper mx-auto flex">
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
  </div>
</template>

<style>
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
