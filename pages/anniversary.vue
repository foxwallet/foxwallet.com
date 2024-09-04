<template>
  <div class="wrap pb-12 lg:pb-32">
    <div class="h-20">
      <Header />
    </div>
    <div
      class="relative banner"
    >
      <div class="absolute inset-0 text-area text-center lg:text-left">
        <div class="hidden md:flex pcTop items-center">
          <div class="ml-10 flex justify-start flex-col items-start">
            <p class="font-semibold leading-normal text-2xl md:text-3xl lg:text-4xl xl:text-4xl 2xl:text-5xl text-left">
              <span class="font-semibold">FoxWallet 2nd Anniversary</span><br>
              <span class="font-semibold text-white">$30,000</span><span class="font-light"> Prize Pool</span>
            </p>
            <p class=" text-xl font-normal mt-4">
              Time: Nov. 9th - Nov. 30th
            </p>
            <div class="flex mt-4">
              <a
                href="https://hc.foxwallet.com/blog/2nd-anniversary"
                target="_blank"
                class="download-btn-pc"
              >
                Details >>
              </a>
            </div>
          </div>
        </div>
        <div class="md:hidden flex flex-col">
          <p class="text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
            <span class="font-semibold">FoxWallet 2nd Anniversary</span><br>
            <span class="font-semibold text-white">$30,000</span><span class="font-light"> Prize Pool</span>
          </p>
          <p class="text-sm lg:text-lg font-semibold mt-3 mb-4 lg:mb-14">
            Time: Nov. 9th - Nov. 30th
          </p>
          <a
            href="https://hc.foxwallet.com/blog/2nd-anniversary"
            target="_blank"
            class="download-btn self-center px-2 py-2 font-medium"
          >
            Details >>
          </a>
          <a href="https://link.foxwallet.com/credit" target="_blank" class="download-btn self-center mt-4 px-4 py-2 font-semibold">
            <span class="font-semibold">Join Now</span>
          </a>
        </div>
      </div>
    </div>
    <div class="video flex flex-col justify-center items-center">
      <img src="@/assets/img/activity/video.png" class="h-8 lg:h-12 self-center mb-8 lg:mb-10" alt="video title">
      <youtube ref="youtube" video-id="Plalme9o8Zw" class="lg:w-7/12 w-11/12 rounded-xl lg:rounded-2xl" @playing="playing" />
    </div>
    <div class="container mx-auto lg:px-16 xl:px-48 2xl:px-48">
      <!-- Join in Fox Credit -->
      <div class="mt-12">
        <p class="text-4xl md:text-5xl text-yellow-100 font-medium">
          Join in Fox Credit
        </p>
        <p class="mt-2">
          <span class="text-white text-xl md:text-2xl font-normal">Prize Pool: </span>
          <span class="text-yellow-400 text-2xl md:text-3xl font-semibold">30,000U</span>
        </p>
        <div class="mt-6 md:-mt-16 w-full">
          <img src="@/assets/img/activity/foxCredit.png" class="w-full h-auto flex md:hidden" alt="Fox Credit">
          <img src="@/assets/img/activity/foxCreditPc.png" class="w-full h-auto hidden md:flex" alt="Fox Credit">
          <div class="flex font-medium text-sm mt-5">
            <div class="bg-yellow-400 rounded text-gray-800 w-28 h-10 md:h-11 flex items-center justify-center cursor-pointer" @click="jumpWebsite('https://foxwallet.com/download')">
              Download
            </div>
            <div class="text-white rounded border border-white w-28 h-10 md:h-11 flex items-center justify-center ml-5 cursor-pointer" @click="jumpWebsite('https://hc.foxwallet.com/blog/2nd-anniversary-tutorial')">
              Tutorial >>
            </div>
          </div>
        </div>
      </div>
      <!-- Space -->
      <AnniversarySpace />
      <!-- Carnival -->
      <AnniversaryCarnival />
      <!-- Partners -->
      <div class="mt-20">
        <p class="text-4xl md:text-5xl text-yellow-100 font-medium">
          Partners
        </p>
        <div class="flex flex-wrap items-center mt-8 lg:mt-12">
          <a v-for="(item, index) in imgs" :key="index" :href="item.src" target="_blank" class="mr-3 mb-2">
            <img :src="item.img" class="w-8  lg:w-12 cursor-pointer hover:opacity-75" :draggable="false">
          </a>
        </div>
        <!-- About us -->
        <div class="mt-16 lg:mt-48 rounded-xl lg:rounded-2xl overflow-hidden">
          <p class="text-4xl md:text-5xl text-yellow-100 font-medium p-4 lg:p-6" style="background: #6B4421">
            About us
          </p>
          <div class="flex justify-around items-center h-24 lg:h-48 bg-white bg-opacity-10 arc-strap">
            <a href="https://discord.gg/foxwallet" target="_blank" class="hover:opacity-20 transition">
              <img src="@/assets/img/activity/cmt-1.svg" class="w-8 lg:w-14 h-auto" alt="Discord">
            </a>
            <a href="https://twitter.com/FoxWallet" target="_blank" class="hover:opacity-20 transition">
              <img src="@/assets/img/activity/cmt-3.svg" class="w-8 lg:w-14 h-auto" alt="Twitter">
            </a>
            <a href="https://t.me/FoxWallet_EN" target="_blank" class="hover:opacity-20 transition">
              <img src="@/assets/img/activity/cmt-2.svg" class="w-8 lg:w-14 h-auto" alt="Telegram">
            </a>
            <a href="https://medium.com/@FoxWallet" target="_blank" class="hover:opacity-20 transition">
              <img src="@/assets/img/activity/medium.svg" class="w-8 lg:w-14 h-auto" alt="Medium">
            </a>
            <a href="https://www.youtube.com/channel/UCt9O4HUkuNutXvFoN6NZh-w" target="_blank" class="hover:opacity-20 transition">
              <img src="@/assets/img/activity/youtube.svg" class="w-8 lg:w-14 h-auto" alt="YouTube">
            </a>
          </div>
        </div>

        <footer class="border-t border-opacity-30 mt-16 lg:mt-32 text-white">
          <div class="flex flex-col lg:flex-row justify-between leading-10 py-16 lg:py-24">
            <div class="flex flex-col">
              <Logo class="h-6 text-white" />
              <p class="text-xl lg:text-3xl font-extralight mt-5">
                Leading you to the  Web3 world
              </p>
              <p class="text-xs mt-auto leading-7">
                Contact Us ( Contact@foxwallet.com )
              </p>
            </div>
            <ul class="mt-8 lg:mt-0 text-xs leading-7">
              <li class="text-lg">
                Learn More
              </li>
              <li>Earn</li>
              <li>
                <a target="_blank" class="cursor-pointer hover:opacity-75" href="https://github.com/foxwallet/security-audit-certification">Aduit Report</a>
              </li>
            </ul>
            <ul class="mt-8 lg:mt-0 text-xs leading-7">
              <li class="text-lg">
                About
              </li>
              <li>
                <a class="cursor-pointer hover:opacity-75" target="_blank" href="https://hc.foxwallet.com/docs/faq">
                  {{ $t('nav.about.faq') }}
                </a>
              </li>
              <li>
                <a class="cursor-pointer hover:opacity-75" target="_blank" href="https://hc.foxwallet.com">
                  {{ $t('nav.docs') }}
                </a>
              </li>
              <li>
                <a class="cursor-pointer hover:opacity-75" target="_blank" href="https://foxwallet.com/download">
                  {{ $t('nav.about.download') }}
                </a>
              </li>
            </ul>
          </div>
          <div class="flex flex-col md:flex-row justify-between items-center border-t border-opacity-10 py-10">
            <p class="text-sm mb-4 md:mb-0">
              @2023 FoxWallet Foundation
            </p>
            <CommunityIcon />
          </div>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
import imgs from '@/constant/partner-item-img'

export default {
  head() {
    return {
      title: 'FoxWallet 2nd Anniversary'
    }
  },
  data() {
    return {
      imgs,
    }
  },
  methods: {
    playVideo() {
      this.player.playVideo()
    },
    playing() {
      console.log('we are watching')
    },
    jumpWebsite(value) {
      window.open(value, '_blank')
    },
  },
  computed: {
    player() {
      return this.$refs.youtube.player
    }
  },
  mounted() {
  },
}
</script>

<style scoped>
.wrap {
  background: #563316;
}

.text-area {

  padding-top: 6.5%;
}

.dynamic-font {
  line-height: 1.2;
}

.download-btn {
  @apply transition border-2 border-transparent bg-white rounded-md text-xs;
  color: #FC701D;
}

.download-btn-pc {
  color: #FC701D;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  display: flex;
  height: 2.5rem;
  padding: 0.5rem 0.625rem;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
  width: auto;
  border-radius: 0.25rem;
  background: #FFF;
}

.download-to-earn-btn {
  @apply transition border-2 border-transparent font-semibold rounded-md px-4 py-2;
  background: #FEC829;
  color: #6C4421;
}

.tutorial-btn {
  @apply transition border-2 font-semibold rounded-md px-4 py-2;
  color: white;
}

.tutorial-btn:hover {
  border-color: #FEC829;
  background: #FEC829;
  color: #6C4421;
}

.download-to-earn-btn:hover {
  border-color: white;
  background: #6C4421;
  color: white;
}

.download-btn:hover {
  border-color: white;
  background: #FC701D;
  color: white;
}

.download-btn-pc:hover {
  background: #FC701D;
  color: white;
}

.claim-btn {
  @apply transition border-2 border-transparent font-semibold rounded-md px-4 py-1 text-sm mt-4;
  background: #FEC829;
  color: #6C4421;
}

.claim-btn:hover {
  border-color: white;
  background: #6C4421;
  color: white;
}

.video {
  @apply pt-10 lg:pt-28 pb-2;
  background: url('@/assets/img/activity/dissolve.png') no-repeat top center;
}

.prize {
  background: url('@/assets/img/activity/prize-banner.png') no-repeat center right / auto 100%;
}

.nft {
  @apply flex flex-col justify-center items-end rounded-xl lg:rounded-2xl;
  text-shadow: 1px 1px 2px white;
  padding-right: 8%;
  background: url('@/assets/img/activity/nft-banner.png') no-repeat center left / auto 100%;
}

.arc-strap {
  background-image: repeating-radial-gradient(at 50% -25% , #ffffff0f, #ffffff0f 2px, #714A26 2px, #714A26 100px);
}

.banner {
    height: 36vw;
    display: block;
  }
@media screen and (max-width: 600px) {
  .arc-strap {
    background-image: repeating-radial-gradient(at 50% -25% , #ffffff0f, #ffffff0f 2px, #714A26 2px, #714A26 20px);
  }
  .text-area {
    padding-top: 7%;
  }

  .dynamic-font {
    line-height: 1.4;
  }

  .banner {
    min-height: 500px;
    background: url('@/assets/img/activity/p-banner.png') no-repeat center 95% / 84%, linear-gradient(45deg, #FA6E1B, #FFA647);
  }
}
.pcTop{
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: url('@/assets/img/activity/p-banner.png') no-repeat 95% center / 47%, linear-gradient(0deg, #F77332 0.04%, #FA9B49 99.96%);
}
</style>
