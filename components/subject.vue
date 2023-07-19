<template>
  <div>
    <div class="box items-center hidden md:flex">
      <div class="person-box w-1/3">
        <img class="w-full h-full" src="@/assets/img/home/person.png" draggable="false">
        <img class="w-12 btc-icon btc-move" src="@/assets/img/home/btc.png" draggable="false">
        <img class="w-10 eth-icon etc-move" src="@/assets/img/home/eth.png" draggable="false">
        <img class="w-8 usdt-icon usdt-move" src="@/assets/img/home/usdt.png" draggable="false">
      </div>
      <div class="container mx-auto">
        <BannerPart />
      </div>
    </div>

    <div class="md:hidden">
      <BannerPart />
      <div class="mobile-box mt-8 relative">
        <img class="mobile-person" src="@/assets/img/home/person.png" draggable="false">
        <img class="w-10 btc-icon-mobile btc-move" src="@/assets/img/home/btc.png" draggable="false">
        <img class="w-8 eth-icon-mobile etc-move" src="@/assets/img/home/eth.png" draggable="false">
        <img class="w-6 usdt-icon-mobile usdt-move" src="@/assets/img/home/usdt.png" draggable="false">
        <img src="@/assets/img/home/line-box-mobile.png" class="w-full absolute -bottom-8">
      </div>
      <div class="flex justify-center items-center mt-8">
        <CustomButton icon="ios" type="dark" content="App Store" class="mr-2 w-28" @click.native="download('ios')" />
        <CustomButton icon="android" type="dark" content="Android" class="mr-2 w-28" @click.native="download('android')" />
        <CustomButton icon="googleplay" type="dark" content="Google Play" class="w-28" @click.native="download('googlePlay')" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    download(platform) {
      this.$emit('download', platform)
    }
  }
}
</script>
<style scoped>
.box {
  aspect-ratio: 2.5 / 1;
  background: url('@/assets/img/home/line-box.png');
  background-size: 100%;
  background-position: bottom;
  background-repeat: no-repeat;
  position: relative;
}
.mobile-person {
  width: 80%;
  margin-left: 10%;
}
.person-box {
  position: absolute;
  right: 13%;
  bottom: 15%;
  aspect-ratio: 1.1 / 1;
}
.btc-icon {
  position: absolute;
  left: 13%;
  bottom: 28%;
}
.eth-icon {
  position: absolute;
  bottom: 38%;
  left: -2%;
}
.usdt-icon {
  position: absolute;
  bottom: 20%;
  left: -5%;
}
.btc-icon-mobile {
  position: absolute;
  left: 20%;
  bottom: 28%;
}
.eth-icon-mobile {
  position: absolute;
  bottom: 32%;
  left: 10%;
}
.usdt-icon-mobile {
  position: absolute;
  bottom: 20%;
  left: 7%;
}
@keyframes move {
    0% {
        transform: translate(0px, 0px);
    }
    50% {
        transform: translate(0px, -10px);
    }
    100% {
        transform: translate(0px, 0px);
    }
}
.btc-move{
  animation: move 3s infinite;
}
.etc-move{
  animation: move 2s infinite;
}
.usdt-move{
  animation: move 4s infinite;
}
</style>
