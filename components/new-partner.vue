<template>
  <div>
    <div class="partner-wrapper mx-auto md:block hidden pb-36">
      <div class="text-8xl font-bold text-center text-white mb-20">
        {{ $t('main.partners') }}
      </div>
      <div class="flex flex-wrap justify-center">
        <a
          v-for="(item, index) in imgs.slice(0, 126)"
          :key="index"
          :href="item.link"
          target="_blank"
          :title="item.name"
          class="mr-6 mb-6"
        >
          <img :src="item.avatar" class="cursor-pointer hover:opacity-75 rounded-full w-10 h-10" :draggable="false">
        </a>
        <template v-if="moreItemShow">
          <a
            v-for="(item, index) in imgs.slice(126)"
            :key="index"
            :href="item.link"
            target="_blank"
            :title="item.name"
            class="mr-6 mb-6"
          >
            <img :src="item.avatar" class="cursor-pointer hover:opacity-75 rounded-full w-10 h-10" :draggable="false">
          </a>
        </template>
      </div>
      <div v-if="!moreItemShow" class="flex justify-center">
        <div class="hover:opacity-75 text-brand border border-brand py-2 px-4 flex justify-center items-center cursor-pointer text-center rounded-sm" @click="moreItemShow=true">
          {{ $t('main.more') }}
        </div>
      </div>
    </div>
    <div class="px-5 md:hidden block partner-wrapper-m">
      <div class="title-m text-center text-white mb-20">
        {{ $t('main.partners') }}
      </div>
      <div class="flex flex-wrap justify-center">
        <a
          v-for="(item, index) in imgs.slice(0, 126)"
          :key="index"
          :href="item.link"
          target="_blank"
          :title="item.name"
          class="brand-logo"
        >
          <img :src="item.avatar" class="cursor-pointer hover:opacity-75 rounded-full w-10" :draggable="false">
        </a>
        <template v-if="moreItemShow">
          <a
            v-for="(item, index) in imgs.slice(126)"
            :key="index"
            :href="item.link"
            target="_blank"
            :title="item.name"
            class="brand-logo"
          >
            <img :src="item.avatar" class="cursor-pointer hover:opacity-75 rounded-full w-10 h-10" :draggable="false">
          </a>
        </template>
      </div>
      <div v-if="!moreItemShow" class="flex justify-center">
        <div class="hover:opacity-75 text-brand border border-brand py-2 px-4 flex justify-center items-center cursor-pointer text-center rounded-sm" @click="moreItemShow=true">
          {{ $t('main.more') }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import imgs from '@/constant/partner-list'
export default {
  data() {
    return { imgs, moreItemShow: false }
  },
  methods: {

  }
}
</script>

<style scoped>
.partner-wrapper {
  width: 1200px;
}
.partner-wrapper-m {
  margin-right: -30px;
  margin-bottom: 80px;
}
.brand-logo {
  margin: 0 30px 30px 0;
}
.title-m {
  font-size: 30px;
  line-height: 45px;
  font-weight: 600;
  font-family: 'Poppins-Bold';
}
</style>
