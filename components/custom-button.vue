<template>
  <div
    class="py-2 text-xs lg:text-sm flex justify-center items-center cursor-pointer hover:opacity-80 text-center rounded-sm"
    :class="type === 'light' ? 'bg-white border border-darkgray-900 text-darkgray-900' : 'bg-darkgray-900 text-white'"
  >
    <img v-show="icon" :src="require('@/assets/img/share/'+icon+'.png')" alt="download-qr-code" class="h-4 lg:h-6 mr-1" :draggable="false">
    <span>{{ content }}</span>
  </div>
</template>
<script>
export default {
  props: {
    icon: {
      type: String,
      default: '',
    },
    content: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'light'
    }
  }
}
</script>
