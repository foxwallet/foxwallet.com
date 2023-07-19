<template>
  <ul class="list-none px-5 text-primary-700">
    <li
      v-for="({ name, link }, index) in menus"
      :key="name"
      :class="{ 'border-t': index !== 0 }"
      class="py-3 rounded-sm border-gray-100"
    >
      <a :href="link" target="_blank">
        {{ $t(`nav.${name}.title`) }}
        <i class="el-icon-d-arrow-right"></i>
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
        { name: 'download', link: 'https://foxwallet.com/download' }
      ]
    }
  }
}
</script>
