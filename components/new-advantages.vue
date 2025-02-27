<template>
  <div>
    <div class="advantage-wrapper mx-auto hidden md:block pb-36">
      <div class="text-8xl font-bold text-center text-white mb-20">
        {{ $t('main.our') }} <span class="text-brand">{{ $t('main.strengths') }}</span>
      </div>
      <div>
        <div class="flex justify-between mb-20">
          <AdCard :title="$t('advantages.ad1.title') " :content="$t('advantages.ad1.desp')">
            <img src="@/assets/new-img/advantages/01.svg" alt="01">
          </AdCard>
          <div class="advantage-card-banner">
            <MainBanner />
          </div>
          <AdCard :title="$t('advantages.ad2.title') " :content="$t('advantages.ad2.desp')">
            <img src="@/assets/new-img/advantages/02.svg" alt="01">
          </AdCard>
        </div>
        <div class="flex justify-between">
          <AdCard :title="$t('advantages.ad3.title') " :content="$t('advantages.ad3.desp')">
            <img src="@/assets/new-img/advantages/03.svg" alt="01">
          </AdCard>

          <AdCard :title="$t('advantages.ad4.title') " :content="$t('advantages.ad4.desp')">
            <img src="@/assets/new-img/advantages/04.svg" alt="01">
          </AdCard>

          <AdCard :title="$t('advantages.ad5.title') " :content="$t('advantages.ad5.desp')">
            <img src="@/assets/new-img/advantages/05.svg" alt="01">
          </AdCard>
        </div>
      </div>
    </div>
    <div class="px-5 md:hidden block pb-10">
      <div class="title-m font-bold text-center text-white mb-10">
        {{ $t('main.our') }} <span class="text-brand">{{ $t('main.strengths') }}</span>
      </div>
      <div>
        <div class="mb-10 flex justify-center">
          <MainBanner />
        </div>
        <div class="mb-10">
          <AdCard icon="01" :title="$t('advantages.ad1.title')" :content="$t('advantages.ad1.desp')">
            <img src="@/assets/new-img/advantages/01.svg" alt="01">
          </AdCard>
        </div>
        <div class="mb-10">
          <AdCard icon="02" :title="$t('advantages.ad2.title')" :content="$t('advantages.ad2.desp')">
            <img src="@/assets/new-img/advantages/02.svg" alt="01">
          </AdCard>
        </div>
        <div class="mb-10">
          <AdCard icon="03" :title="$t('advantages.ad3.title')" :content="$t('advantages.ad3.desp')">
            <img src="@/assets/new-img/advantages/03.svg" alt="01">
          </AdCard>
        </div>
        <div class="mb-10">
          <AdCard icon="03" :title="$t('advantages.ad4.title')" :content="$t('advantages.ad4.desp')">
            <img src="@/assets/new-img/advantages/04.svg" alt="01">
          </AdCard>
        </div>
        <div class="mb-10">
          <AdCard icon="04" :title="$t('advantages.ad5.title')" :content="$t('advantages.ad5.desp')">
            <img src="@/assets/new-img/advantages/05.svg" alt="01">
          </AdCard>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .advantage-wrapper {
    width: 1200px;
  }

  .title-m {
    font-size: 30px;
    line-height: 45px;
    font-weight: 600;
    font-family: 'Poppins-Bold';
  }
  .advantage-card-banner {
    margin-top: 170px;
  }
</style>
