<template>
  <div
    class="new-custom-button py-3 px-5 text-xs lg:text-sm flex justify-center items-center cursor-pointer text-center rounded-sm"
    :class="type === 'light' ? 'button-light bg-black text-white border border-white' : 'button-dark bg-brand text-black'"
  >
    <div v-if="newTag" class="tag tag-new">
      <img src="@/assets/new-img/tag-new.svg" class="h-5.5" :draggable="false">
    </div>
    <img v-show="icon" :src="require('@/assets/new-img/'+icon+'.svg')" alt="download-qr-code" class="h-4 lg:h-6 mr-1" :draggable="false">
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
  .new-custom-button {
    position: relative;
    transition: 0.3s;
    height: 44px;
  }
  .new-custom-button:hover {
    transform: scale(1.125);
  }
  .new-custom-button.button-dark:hover {
    box-shadow: 4px 4px 4px 0px #12FE7466;
  }
  .new-custom-button .tag.tag-new{
    position: absolute;
    top: 0;
    left: 0;
  }
  </style>
