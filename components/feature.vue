<template>
  <div class="container mx-auto">
    <div class="py-12 pt-24 lg:py-24 feature-title" data-aos="fade-up" data-aos-duration="2000">
      <h1 class="text-3xl font-bold text-center">
        {{ $t('home.feature.title') }}
      </h1>
      <p class="text-center text-gray-500">
        {{ $t('home.feature.description1') }}
      </p>
      <p class="text-center text-gray-500">
        {{ $t('home.feature.description2') }}
      </p>
    </div>
    <div class="grid-cols-3 gap-2 xl:gap-6 hidden xl:grid" data-aos="fade-down" data-aos-duration="2000" data-aos-anchor=".feature-title">
      <div class="box rounded-lg p-4 flex flex-col items-start justify-center">
        <img src="@/assets/img/home/feature-1.svg" class="h-12" :draggable="false">
        <h3 class="text-xl 2xl:text-2xl font-bold py-4">
          {{ $t('home.feature.feature1.title') }}
        </h3>
        <div class="text-gray-500 text-sm h-44">
          <p class="xl:py-1">
            {{ $t('home.feature.feature1.content1') }}
          </p>
          <p class="xl:py-1">
            {{ $t('home.feature.feature1.content2') }}
          </p>
          <p class="xl:py-1">
            {{ $t('home.feature.feature1.content3') }}
          </p>
          <p class="xl:py-1">
            {{ $t('home.feature.feature1.content4') }}
          </p>
        </div>
      </div>
      <div class="box rounded-lg p-4 flex flex-col items-start justify-center">
        <img src="@/assets/img/home/feature-2.svg" class="h-12" :draggable="false">
        <h3 class="text-xl 2xl:text-2xl font-bold py-4">
          {{ $t('home.feature.feature2.title') }}
        </h3>
        <div class="text-gray-500 text-sm h-44">
          <p class="xl:py-1">
            {{ $t('home.feature.feature2.content1') }}
          </p>
          <p class="xl:py-1">
            {{ $t('home.feature.feature2.content2') }}
          </p>
          <p class="xl:py-1">
            {{ $t('home.feature.feature2.content3') }}
          </p>
        </div>
      </div>
      <div class="box rounded-lg p-4 flex flex-col items-start justify-center">
        <img src="@/assets/img/home/feature-3.svg" class="h-12" :draggable="false">
        <h3 class="text-xl 2xl:text-2xl font-bold py-4">
          {{ $t('home.feature.feature3.title') }}
        </h3>
        <div class="text-gray-500 text-sm h-44">
          <p class="xl:py-1">
            {{ $t('home.feature.feature3.content1') }}
          </p>
          <p class="xl:py-1">
            {{ $t('home.feature.feature3.content2') }}
          </p>
          <p class="xl:py-1">
            {{ $t('home.feature.feature3.content3') }}
          </p>
          <p class="xl:py-1">
            {{ $t('home.feature.feature3.content4') }}
          </p>
        </div>
      </div>
    </div>
    <div class="xl:hidden">
      <client-only>
        <swiper :options="swiperOption" :real-index="1">
          <swiper-slide>
            <div class="mobile-box rounded-lg px-4 flex flex-col items-center justify-center">
              <img src="@/assets/img/home/feature-2.svg" class="h-12" :draggable="false">
              <h3 class="text-2xl font-bold py-2">
                {{ $t('home.feature.feature2.title') }}
              </h3>
              <div class="text-gray-500 text-sm h-32 text-center">
                <p class="py-1">
                </p>
                <p class="py-1">
                  {{ $t('home.feature.feature2.content2') }}
                </p>
                <p class="py-1">
                  {{ $t('home.feature.feature2.content3') }}
                </p>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="mobile-box rounded-lg px-4 flex flex-col items-center justify-center">
              <img src="@/assets/img/home/feature-1.svg" class="h-12" :draggable="false">
              <h3 class="text-2xl font-bold py-2">
                {{ $t('home.feature.feature1.title') }}
              </h3>
              <div class="text-gray-500 text-sm h-32 text-center">
                <p class="py-1">
                  {{ $t('home.feature.feature1.content1') }}
                </p>
                <p class="py-1">
                  {{ $t('home.feature.feature1.content2') }}
                </p>
                <p class="py-1">
                  {{ $t('home.feature.feature1.content3') }}
                </p>
                <p class="py-1">
                  {{ $t('home.feature.feature1.content4') }}
                </p>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="mobile-box rounded-lg px-4 flex flex-col items-center justify-center">
              <img src="@/assets/img/home/feature-3.svg" class="h-12" :draggable="false">
              <h3 class="text-2xl font-bold py-2">
                {{ $t('home.feature.feature3.title') }}
              </h3>
              <div class="text-gray-500 text-sm h-32 text-center">
                <p class="py-1">
                  {{ $t('home.feature.feature3.content1') }}
                </p>
                <p class="py-1">
                  {{ $t('home.feature.feature3.content2') }}
                </p>
                <p class="py-1">
                  {{ $t('home.feature.feature3.content3') }}
                </p>
                <p class="py-1">
                  {{ $t('home.feature.feature3.content4') }}
                </p>
              </div>
            </div>
          </swiper-slide>
        </swiper>
        <div class="flex items-center justify-center my-6 home-swiper-page">
          <div class="swiper-pagination"></div>
        </div>
      </client-only>
    </div>
    <div class="hidden md:flex justify-between items-stretch mt-24 mb-12">
      <div class="w-1/2 flex flex-col justify-center" data-aos="fade-right" data-aos-duration="2000">
        <h1 class="text-2xl font-bold">
          {{ $t('home.feature.feature4.title') }}
        </h1>
        <p class="text-gray-500">
          {{ $t('home.feature.feature4.content1') }}
        </p>
      </div>
      <img src="@/assets/img/home/feature-4.png" class="w-1/2 lg:pl-24" :draggable="false" data-aos="fade-left" data-aos-duration="2000">
    </div>
    <div class="hidden md:flex justify-between items-stretch mt-24 mb-12">
      <img src="@/assets/img/home/feature-5.png" class="w-1/2 lg:pr-24" :draggable="false" data-aos="fade-right" data-aos-duration="2000">
      <div class="w-1/2 flex items-center justify-end lg:pl-24" data-aos="fade-left" data-aos-duration="2000">
        <div class="flex flex-col">
          <h1 class="text-2xl font-bold">
            {{ $t('home.feature.feature5.title') }}
          </h1>
          <p class="text-gray-500">
            {{ $t('home.feature.feature5.content1') }}
          </p>
        </div>
      </div>
    </div>
    <div class="md:hidden mt-24 flex flex-col items-center">
      <div class="text-center w-3/5">
        <h1 class="text-2xl font-bold">
          {{ $t('home.feature.feature4.mobileTitle1') }}
        </h1>
        <h1 class="text-2xl font-bold mb-2">
          {{ $t('home.feature.feature4.mobileTitle2') }}
        </h1>
        <p class="text-gray-500">
          {{ $t('home.feature.feature4.mobileContent1') }}
        </p>
        <p class="text-gray-500">
          {{ $t('home.feature.feature4.mobileContent2') }}
        </p>
      </div>
      <img src="@/assets/img/home/feature-4-mobile.png" class="w-4/5 mt-2" :draggable="false">
    </div>
    <div class="md:hidden mt-24 flex flex-col items-center">
      <div class="text-center w-3/5">
        <h1 class="text-2xl font-bold">
          {{ $t('home.feature.feature5.title') }}
        </h1>
        <p class="text-gray-500">
          {{ $t('home.feature.feature5.mobileContent1') }}
        </p>
        <p class="text-gray-500">
          {{ $t('home.feature.feature5.mobileContent2') }}
        </p>
      </div>
      <img src="@/assets/img/home/feature-5-mobile.png" class="w-4/5 mt-2" :draggable="false">
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      swiperOption: {
        initialSlide: 1,
        spaceBetween: 30,
        centeredSlides: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      }
    }
  }
}
</script>

<style scoped>
.box {
  aspect-ratio: 1 / 1;
  background: #FAFAFA;
}

@media screen and (min-width: 1400px) {
  .box {
    aspect-ratio: 5 / 3;
  }
}
.mobile-box {
  aspect-ratio: 2 / 1;
  background: #FAFAFA;
}
@media screen and (max-width: 600px) {
  .mobile-box {
    aspect-ratio: 1 / 1;
  }
}
</style>

<style>
.home-swiper-page .swiper-pagination-bullet-active {
  background: #000000 !important;
}
.home-swiper-page .swiper-pagination-bullet {
  margin: 0 4px 0 4px !important;
}
</style>
