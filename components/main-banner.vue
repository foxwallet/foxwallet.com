<template>
  <div class="main-banner">
    <img class="main-icon" src="@/assets/new-img/advantages/main.svg" alt="main">
    <img class="btc-move btc-icon" src="@/assets/new-img/advantages/btc.svg" alt="btc">
    <img class="eth-move eth-icon" src="@/assets/new-img/advantages/eth.svg" alt="eth">
    <img class="l-star-1" src="@/assets/new-img/advantages/l-star-1.svg" alt="star-1">
    <img class="l-star-2" src="@/assets/new-img/advantages/l-star-2.svg" alt="star-2">
    <img class="r-star-2" src="@/assets/new-img/advantages/r-star-2.svg" alt="star-2">
    <img class="r-star-1" src="@/assets/new-img/advantages/r-star-1.svg" alt="star-1">
  </div>
  </div>
</template>

<style scoped>

    .main-banner {
        position: relative;
        width: 386px;
        height: 600px;
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

</style>
