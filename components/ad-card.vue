<template>
  <div class="border cursor-pointer rounded border-opacity-40 border-white w-96 ad-card hover:border-opacity-75">
    <div class="pt-4 pl-4">
      <slot></slot>
    </div>
    <div class="ad-body pt-0.5">
      <div class="text-3xl text-brand my-5 px-4 ad-title">
        {{ title }}
      </div>
      <div class="text-white mt-4 px-4 pb-4 ad-content">
        {{ content }}
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'AdCard',
  props: {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  }
}
</script>

<style scoped>
  .ad-card {
    height: 600px;
  }
  .ad-card .ad-body{
    height: 359px;
  }
  .ad-card .ad-title,
  .ad-card .ad-body,
  .ad-card .ad-content{
    transition: 0.6s ease;
  }
  .ad-card:hover .ad-title,
  .ad-card:hover .ad-content {
    color: black;
  }
  .ad-card:hover .ad-body {
    background-color: #12FE74;
  }
</style>
