<template>
  <div class="mt-20">
    <p class="text-4xl md:text-5xl text-yellow-100 font-medium">Space</p>
    <!-- iphone -->
    <div class="block md:hidden">
      <div class="mt-5 w-full rounded-lg bg-while10 px-5 py-2 relative" @click="jumpWebsite('https://twitter.com/FoxWallet/status/1721450414644797663')">
        <div class="ended">Ended</div>
        <div class="flex">
          <img src="@/assets/img/space/logo-Filcoin.png" class="w-10 h-10 mr-3" alt="Space Icon">
          <img src="@/assets/img/space/logo-FileMarket.png" class="w-10 h-10 mr-3" alt="Space Icon">
          <img src="@/assets/img/space/logo-Filfox.png" class="w-10 h-10 mr-3" alt="Space Icon">
          <img src="@/assets/img/space/logo-GLIF.png" class="w-10 h-10 mr-3" alt="Space Icon">
          <img src="@/assets/img/space/logo-HashKing.png" class="w-10 h-10" alt="Space Icon">
        </div>
        <div class="mt-2 border-t border-opacity-10">
          <p class="text-yellow-400 text-base font-normal mt-2">2023/11/09 12:00 UTC</p>
          <p class="text-white text-lg font-medium">Filecoin Ecosystem</p>
          <p class="text-yellow-400 text-base font-normal">Reward: 50USDT</p>
        </div>
      </div>
      <div class="mt-5 w-full rounded-lg bg-while10 px-5 py-2 relative" @click="jumpWebsite('https://twitter.com/FoxWallet/status/1723323458644480033')">
        <div class="ended">Ended</div>
        <div class="flex">
          <img src="@/assets/img/space/space2.png" class="w-10 h-10 mr-7" alt="Space Icon">
        </div>
        <div class="mt-2 border-t border-opacity-10">
          <p class="text-yellow-400 text-base font-normal mt-2">2023/11/14 13:00 UTC</p>
          <p class="text-white text-lg font-medium">Ola</p>
          <p class="text-yellow-400 text-base font-normal">Reward: 50USDT</p>
        </div>
      </div>
      <div class="mt-5 w-full rounded-lg bg-while10 px-5 py-2 relative" @click="jumpWebsite('https://twitter.com/FoxWallet/status/1723674897086660839')">
        <div class="ended">Ended</div>
        <div class="flex">
          <img src="@/assets/img/space/space3.png" class="w-10 h-10 mr-7" alt="Space Icon">
        </div>
        <div class="mt-2 border-t border-opacity-10">
          <p class="text-yellow-400 text-base font-normal mt-2">2023/11/15 11:00 UTC</p>
          <p class="text-white text-lg font-medium">Lumoz</p>
          <p class="text-yellow-400 text-base font-normal">Reward: 50USDT</p>
        </div>
      </div>
      <div class="mt-5 w-full rounded-lg bg-while10 px-5 py-2 relative" @click="jumpWebsite('https://twitter.com/FoxWallet/status/1724001121046520231')">
        <div class="ended">Ended</div>
        <div class="flex">
          <img src="@/assets/img/space/space4.png" class="w-10 h-10 mr-7" alt="Space Icon">
        </div>
        <div class="mt-2 border-t border-opacity-10">
          <p class="text-yellow-400 text-base font-normal mt-2">2023/11/16 21:00 UTC</p>
          <p class="text-white text-lg font-medium">Qtum</p>
          <p class="text-yellow-400 text-base font-normal">Reward: 50USDT</p>
        </div>
      </div>
      <div class="mt-5 w-full rounded-lg bg-while10 px-5 py-2 relative" @click="jumpWebsite('https://twitter.com/FoxWallet/status/1725873327334736379')">
        <div class="ended">Ended</div>
        <div class="flex">
          <img src="@/assets/img/space/space5.png" class="w-10 h-10 mr-7" alt="Space Icon">
        </div>
        <div class="mt-2 border-t border-opacity-10">
          <p class="text-yellow-400 text-base font-normal mt-2">2023/11/21 15:00 UTC</p>
          <p class="text-white text-lg font-medium">zkSync Ecosystem</p>
          <p class="text-yellow-400 text-base font-normal">Reward: 50USDT</p>
        </div>
      </div>
      <div class="mt-5 w-full rounded-lg bg-while10 px-5 py-2 relative" @click="jumpWebsite('https://twitter.com/FoxWallet/status/1726896436573585590')">
        <div class="ended">Ended</div>
        <div class="flex">
          <img src="@/assets/img/space/btc.jpeg" class="w-10 h-10 mr-7 rounded-full" alt="Space Icon">
        </div>
        <div class="mt-2 border-t border-opacity-10">
          <p class="text-yellow-400 text-base font-normal mt-2">2023/11/22 12:00 UTC</p>
          <p class="text-white text-lg font-medium">BTC Ecosystem</p>
          <p class="text-yellow-400 text-base font-normal">Reward: 50USDT</p>
        </div>
      </div>
      <div class="mt-5 w-full rounded-lg bg-while10 px-5 py-2 relative">
        <div class="ended">Ended</div>
        <div class="flex">
          <img src="@/assets/img/space/space6.png" class="w-10 h-10 mr-7" alt="Space Icon">
        </div>
        <div class="mt-2 border-t border-opacity-10">
          <p class="text-yellow-400 text-base font-normal mt-2">2023/11/23 13:00 UTC</p>
          <p class="text-white text-lg font-medium">Taiko Ecosystem</p>
          <p class="text-yellow-400 text-base font-normal">Reward: 50USDT</p>
        </div>
      </div>
      <div class="mt-5 w-full rounded-lg bg-while10 px-5 py-2" @click="jumpWebsite('https://twitter.com/FoxWallet/status/1729067527274430535')">
        <div class="flex">
          <img src="@/assets/img/space/space7.png" class="w-10 h-10 mr-7" alt="Space Icon">
        </div>
        <div class="mt-2 border-t border-opacity-10">
          <p class="text-yellow-400 text-base font-normal mt-2">2023/11/28 9:00 UTC</p>
          <p class="text-white text-lg font-medium">Linea Ecosystem</p>
          <p class="text-yellow-400 text-base font-normal">Reward: 50USDT</p>
        </div>
      </div>
      <div class="mt-5 w-full rounded-lg bg-while10 px-5 py-2">
        <div class="flex">
          <img src="@/assets/img/space/space8.png" class="w-10 h-10 mr-7" alt="Space Icon">
        </div>
        <div class="mt-2 border-t border-opacity-10">
          <p class="text-yellow-400 text-base font-normal mt-2">2023/11/30</p>
          <p class="text-white text-lg font-medium">Scroll Ecosystem</p>
          <p class="text-yellow-400 text-base font-normal">Reward: 50USDT</p>
        </div>
      </div>
    </div>
    <!-- PC -->
    <div class="hidden md:block">
      <div class="mt-5 flex justify-between">
        <div class="mt-5 rounded-xl bg-while10 px-5 py-7 cursor-pointer relative" style="width:calc(33.3% - 1.25rem)" @click="jumpWebsite('https://twitter.com/FoxWallet/status/1721450414644797663')">
          <div class="ended">Ended</div>
          <div class="flex">
            <img src="@/assets/img/space/logo-Filcoin.png" class="w-10 h-10 mr-3" alt="Space Icon">
            <img src="@/assets/img/space/logo-FileMarket.png" class="w-10 h-10 mr-3" alt="Space Icon">
            <img src="@/assets/img/space/logo-Filfox.png" class="w-10 h-10 mr-3" alt="Space Icon">
            <img src="@/assets/img/space/logo-GLIF.png" class="w-10 h-10 mr-3" alt="Space Icon">
            <img src="@/assets/img/space/logo-HashKing.png" class="w-10 h-10" alt="Space Icon">
          </div>
          <div class="mt-2 border-t border-opacity-10">
            <p class="text-yellow-400 text-base font-normal mt-2">2023/11/09 12:00 UTC</p>
            <p class="text-white text-xl font-medium">Filecoin Ecosystem</p>
            <p class="text-yellow-400 text-base font-normal">Reward: 50USDT</p>
          </div>
        </div>
        <div class="mt-5 rounded-xl bg-while10 px-5 py-7 cursor-pointer relative" style="width:calc(33.3% - 1.25rem)" @click="jumpWebsite('https://twitter.com/FoxWallet/status/1723323458644480033')">
          <div class="ended">Ended</div>
          <div class="flex">
            <img src="@/assets/img/space/space2.png" class="w-10 h-10 mr-8" alt="Space Icon">
          </div>
          <div class="mt-2 border-t border-opacity-10">
            <p class="text-yellow-400 text-base font-normal mt-2">2023/11/14 13:00 UTC</p>
            <p class="text-white text-xl font-medium">Ola</p>
            <p class="text-yellow-400 text-base font-normal">Reward: 50USDT</p>
          </div>
        </div>
        <div class="mt-5 rounded-xl bg-while10 px-5 py-7 cursor-pointer relative" style="width:calc(33.3% - 1.25rem)" @click="jumpWebsite('https://twitter.com/FoxWallet/status/1723674897086660839')">
          <div class="ended">Ended</div>
          <div class="flex">
            <img src="@/assets/img/space/space3.png" class="w-10 h-10 mr-8" alt="Space Icon">
          </div>
          <div class="mt-2 border-t border-opacity-10">
            <p class="text-yellow-400 text-base font-normal mt-2">2023/11/15 11:00 UTC</p>
            <p class="text-white text-xl font-medium">Lumoz</p>
            <p class="text-yellow-400 text-base font-normal">Reward: 50USDT</p>
          </div>
        </div>
      </div>
      <div class="mt-5 flex justify-between">
        <div class="mt-5 rounded-xl bg-while10 px-5 py-7 cursor-pointer relative" style="width:calc(33.3% - 1.25rem)" @click="jumpWebsite('https://twitter.com/FoxWallet/status/1724001121046520231')">
          <div class="ended">Ended</div>
          <div class="flex">
            <img src="@/assets/img/space/space4.png" class="w-10 h-10 mr-8" alt="Space Icon">
          </div>
          <div class="mt-2 border-t border-opacity-10">
            <p class="text-yellow-400 text-base font-normal mt-2">2023/11/16 21:00 UTC</p>
            <p class="text-white text-xl font-medium">Qtum</p>
            <p class="text-yellow-400 text-base font-normal">Reward: 50USDT</p>
          </div>
        </div>
        <div class="mt-5 rounded-xl bg-while10 px-5 py-7 cursor-pointer relative" style="width:calc(33.3% - 1.25rem)" @click="jumpWebsite('https://twitter.com/FoxWallet/status/1725873327334736379')">
          <div class="ended">Ended</div>
          <div class="flex">
            <img src="@/assets/img/space/space5.png" class="w-10 h-10 mr-8" alt="Space Icon">
          </div>
          <div class="mt-2 border-t border-opacity-10">
            <p class="text-yellow-400 text-base font-normal mt-2">2023/11/21 15:00 UTC</p>
            <p class="text-white text-xl font-medium">zkSync Ecosystem</p>
            <p class="text-yellow-400 text-base font-normal">Reward: 50USDT</p>
          </div>
        </div>
        <div class="mt-5 rounded-xl bg-while10 px-5 py-7 cursor-pointer relative" style="width:calc(33.3% - 1.25rem)" @click="jumpWebsite('https://twitter.com/FoxWallet/status/1726896436573585590')">
          <div class="ended">Ended</div>
          <div class="flex">
            <img src="@/assets/img/space/btc.jpeg" class="w-10 h-10 mr-7 rounded-full" alt="Space Icon">
          </div>
          <div class="mt-2 border-t border-opacity-10">
            <p class="text-yellow-400 text-base font-normal mt-2">2023/11/22 12:00 UTC</p>
            <p class="text-white text-xl font-medium">BTC Ecosystem</p>
            <p class="text-yellow-400 text-base font-normal">Reward: 50USDT</p>
          </div>
        </div>
      </div>
      <div class="mt-5 flex justify-between">
        <div class="mt-5 rounded-xl bg-while10 px-5 py-7 cursor-pointer relative" style="width:calc(33.3% - 1.25rem)">
          <div class="ended">Ended</div>
          <div class="flex">
            <img src="@/assets/img/space/space6.png" class="w-10 h-10 mr-8" alt="Space Icon">
          </div>
          <div class="mt-2 border-t border-opacity-10">
            <p class="text-yellow-400 text-base font-normal mt-2">2023/11/23 13:00 UTC</p>
            <p class="text-white text-xl font-medium">Taiko Ecosystem</p>
            <p class="text-yellow-400 text-base font-normal">Reward: 50USDT</p>
          </div>
        </div>
        <div class="mt-5 rounded-xl bg-while10 px-5 py-7 cursor-pointer" style="width:calc(33.3% - 1.25rem)" @click="jumpWebsite('https://twitter.com/FoxWallet/status/1729067527274430535')">
          <div class="flex">
            <img src="@/assets/img/space/space7.png" class="w-10 h-10 mr-8" alt="Space Icon">
          </div>
          <div class="mt-2 border-t border-opacity-10">
            <p class="text-yellow-400 text-base font-normal mt-2">2023/11/28 9:00 UTC</p>
            <p class="text-white text-xl font-medium">Linea Ecosystem</p>
            <p class="text-yellow-400 text-base font-normal">Reward: 50USDT</p>
          </div>
        </div>
        <div class="mt-5 rounded-xl bg-while10 px-5 py-7 cursor-pointer" style="width:calc(33.3% - 1.25rem)">
          <div class="flex">
            <img src="@/assets/img/space/space8.png" class="w-10 h-10 mr-8" alt="Space Icon">
          </div>
          <div class="mt-2 border-t border-opacity-10">
            <p class="text-yellow-400 text-base font-normal mt-2">2023/11/30</p>
            <p class="text-white text-xl font-medium">Scroll Ecosystem</p>
            <p class="text-yellow-400 text-base font-normal">Reward: 50USDT</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'AnniversarySpace',
  computed: {

  },
  methods: {
    jumpWebsite(value) {
      window.open(value, '_blank')
    },
  },
}
</script>
<style>
.ended{
  position: absolute;
  right: 0;
  top: 0;
  border-radius: 0.625rem;
  background: #454545;
  padding: 0.25rem 0.625rem;
  color: #FFF;
  font-size: 1.125rem;
  font-weight: 500;
}
</style>
