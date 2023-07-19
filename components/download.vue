<template>
  <div class="hidden lg:block mt-32 box text-white py-4">
    <div class="container relative mx-auto py-5 rounded-md">
      <div data-aos="fade-right" data-aos-duration="2000">
        <h1 class="text-2xl font-bold">
          {{ $t('home.download.steps') }}
        </h1>
        <p class="text-sm font-thin">
          {{ $t('home.download.step1') }} >> {{ $t('home.download.step2') }}
        </p>
        <div class="flex mt-8">
          <div class="w-24 h-24 relative mr-2">
            <img src="@/assets/img/home/code.svg" class="w-24 border border-gray-200 rounded-xl" :draggable="false">
            <img src="@/assets/img/share/logo-icon.svg" class="logo w-6 absolute left-1/2 bg-white p-1 rounded-md -ml-3 -mt-3" :draggable="false">
          </div>
          <div class="flex flex-col justify-between py-1">
            <h1 class="text-5xl font-thin">
              {{ $t('home.download.try') }}
            </h1>
            <p class="text-sm font-thin">
              {{ $t('home.download.download') }}
            </p>
          </div>
        </div>
      </div>
      <img src="@/assets/img/home/try-now.png" class="try-now" data-aos="fade-left" data-aos-duration="2000" :draggable="false">
    </div>
  </div>
</template>
<style scoped>
.box {
  background: linear-gradient(258.08deg, #F7901D 18.52%, #FB6F1B 75.63%);
}
.logo {
  left: 50%;
  top: 50%;
}
.try-now {
  position: absolute;
  right: 12rem;
  height: 140%;
  bottom: -1.7rem;
}
</style>
