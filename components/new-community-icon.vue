<template>
  <div class="flex items-center">
    <a class="hover:opacity-75 cursor-pointer mr-4" target="_blank" href="https://discord.gg/foxwallet">
      <img src="@/assets/new-img/dc.svg" alt="dc">
    </a>
    <a class="hover:opacity-75 cursor-pointer mr-4" target="_blank" href="https://t.me/FoxWallet_EN">
      <img src="@/assets/new-img/tg.svg" alt="tg">
    </a>
    <a class="hover:opacity-75 cursor-pointer mr-4" target="_blank" href="https://www.youtube.com/channel/UCt9O4HUkuNutXvFoN6NZh-w">
      <img src="@/assets/new-img/youtube.svg" alt="youtube">
    </a>
    <a class="hover:opacity-75 cursor-pointer mr-4" target="_blank" href="https://twitter.com/FoxWallet">
      <img src="@/assets/new-img/x.svg" alt="x">
    </a>
    <a class="hover:opacity-75 cursor-pointer mr-4" target="_blank" href="https://medium.com/@FoxWallet">
      <img src="@/assets/new-img/medium.svg" alt="medium">
    </a>
    <a class="hover:opacity-75 cursor-pointer" target="_blank" href="https://sociogram.org/FoxWallet">
      <img src="@/assets/new-img/Sociogram.svg" alt="Sociogram">
    </a>
  </div>
</template>
<script lang="ts">
export default {
  props: {
    size: {
      default: 'small',
      type: String
    }
  }
}
</script>
