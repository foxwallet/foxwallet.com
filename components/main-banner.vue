<template>
  <div class="main-banner-wrapper">
    <div class="main-banner-m">
      <img class="main-icon-m" src="@/assets/new-img/advantages/main.svg" alt="main">
      <img class="btc-move btc-icon-m" src="@/assets/new-img/advantages/btc.svg" alt="btc">
      <img class="eth-move eth-icon-m" src="@/assets/new-img/advantages/eth.svg" alt="eth">
      <img class="l-star-1-m" src="@/assets/new-img/advantages/l-star-1.svg" alt="star-1">
      <img class="l-star-2-m" src="@/assets/new-img/advantages/l-star-2.svg" alt="star-2">
      <img class="r-star-2-m" src="@/assets/new-img/advantages/r-star-2.svg" alt="star-2">
      <img class="r-star-1-m" src="@/assets/new-img/advantages/r-star-1.svg" alt="star-1">
    </div>
  </div>
</template>

<style scoped>

    .main-banner-wrapper {
        width: 355px;
        height: 260px;
        padding-top: 56px;
    }
    .main-banner-m {
       position: relative;
       margin: 0 auto;
    }

    @keyframes move {
        0% {
            transform: translate(0px, 0px);
        }
        50% {
            transform: translate(0px, -20px);
        }
        100% {
            transform: translate(0px, 0px);
        }
    }
    .main-icon {
        position: absolute;
        left: 30px;
        top: 38%;
    }
    .btc-icon {
        position: absolute;
        left: 36%;
        top: 31%;
    }
    .eth-icon {
        position: absolute;
        left: 20%;
        top: 43%;
    }
    .l-star-1 {
        position: absolute;
        left: 2%;
        top: 55%;
    }
    .l-star-2 {
        position: absolute;
        left: 16%;
        top: 55%;
    }
    .r-star-1  {
        position: absolute;
        top: 38%;
        right: 7%;
    }
    .r-star-2 {
        position: absolute;
        right: 18%;
        top: 42%;
    }
    .btc-move {
      animation: move 3s infinite;
    }
    .eth-move {
      animation: move 2s infinite;
    }

    .main-icon-m {
        width: 100%;
    }
    .btc-icon-m {
        position: absolute;
        left: 36%;
        top: -16%;
    }
    .eth-icon-m {
        position: absolute;
        left: 17%;
        top: 24%;
    }
    .l-star-1-m {
        position: absolute;
        left: 2%;
        top: 55%;
    }
    .l-star-2-m {
        position: absolute;
        left: 16%;
        top: 55%;
    }
    .r-star-1-m{
        position: absolute;
        top: 0;
        right: 0;
    }
    .r-star-2-m {
        position: absolute;
        right: 12%;
        top: 15%;
    }

</style>
