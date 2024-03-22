<template>
  <ul class="list-nonetext-white bg-black px-11 py-6">
    <li
      v-for="({ name, link }) in menus"
      :key="name"
      class="py-3 rounded-sm menu-item"
    >
      <a :href="link" target="_blank">
        {{ $t(`nav.${name}.title`) }}
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      menus: [
        { name: 'earn', link: 'https://foxwallet.com/activity' },
        { name: 'support', link: 'https://hc.foxwallet.com/docs' },
        { name: 'blog', link: 'https://hc.foxwallet.com/blog' },
        { name: 'download', link: '/download-v1' }
      ]
    }
  }
}
</script>

<style>
.dark-menu.el-drawer {
    background-color: black;
}
.dark-menu .el-drawer__header {
  display: none;
}
.menu-item {
    border: 1px solid rgba(255,255,255,0.4);
    border-radius: 2px;
    margin-bottom: 14px;
    text-align: center;
    font-weight: 300;
    font-size: 16px;
    line-height: 22px;
}
</style>
