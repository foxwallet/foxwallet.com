<template>
  <div
    class="custom-button py-2 text-xs lg:text-sm flex justify-center items-center cursor-pointer hover:opacity-80 text-center rounded-sm"
    :class="type === 'light' ? 'bg-white border border-darkgray-900 text-darkgray-900' : 'bg-darkgray-900 text-white'"
  >
    <div v-if="newTag" class="tag tag-new">
      <img src="@/assets/img/share/tag-new.svg" class="h-5.5" :draggable="false">
    </div>
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
    },
    newTag: {
      type: Boolean,
      default: false,
    }
  }
}
</script>

<style scoped>
.custom-button {
  position: relative;
}
.custom-button .tag.tag-new{
  position: absolute;
  top: 0;
  left: 0;
}
</style>
