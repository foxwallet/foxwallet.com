<template>
  <div class="py-2 px-2 sm:text-center cursor-pointer text-black sm:text-gray-300 sm:hover:text-white sm:text-sm">
    <a :href="url" target="_blank">
      {{ title }}
    </a>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String
    },
    url: {
      type: String
    }
  },
}
</script>
