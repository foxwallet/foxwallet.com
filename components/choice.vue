<template>
  <div>
    <div class="container mx-auto text-center mt-12 md:mt-8" data-aos="fade-up" data-aos-duration="2000">
      <h1 class="text-3xl md:text-5xl font-bold">
        <CountTo :start-val="0" :end-val="1000000" :easing-fn="easingFn" :duration="3000" separator="," />
        +
      </h1>
      <h1 class="text-4xl md:text-5xl text-gray-500 my-2 font-thin">
        {{ $t('home.choice.title') }}
      </h1>
      <p class="mt-4 text-gray-700" data-aos="fade-up">
        {{ $t('home.choice.content1') }}
        <span class="text-primary-500 font-bold">{{ $t('home.choice.secure') }}</span>,
        <span class="text-primary-500 font-bold">{{ $t('home.choice.efficient') }}</span>,
        <span class="text-primary-500 font-bold">{{ $t('home.choice.convenient') }}</span>
        {{ $t('home.choice.content2') }}
      </p>
    </div>
    <div class="choice-box container mx-auto relative mt-12" data-aos="fade-up" data-aos-duration="2000">
      <img src="@/assets/img/home/choice.png" class="w-full h-full" :draggable="false">
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    easingFn(t, b, c, d) {
      return c * t / d + b
    }
  }
}
</script>
<style scoped>
.choice-box {
  z-index: 11;
}
.choice-img {
  width: 110%;
}
</style>
