<template>
  <div>
    <div class="border cursor-pointer rounded border-opacity-40 border-white w-96 ad-card hover:border-opacity-75 hidden md:block">
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
    <div class="md:hidden block border rounded border-opacity-40 border-white">
      <div class="pt-4 pl-4">
        <slot></slot>
      </div>
      <div class="pt-0.5">
        <div class="text-3xl text-brand my-5 px-4 ad-title-m">
          {{ title }}
        </div>
        <div class="text-white mt-4 px-4 pb-4 ad-content-m">
          {{ content }}
        </div>
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
.ad-title-m {
  font-size:32px;
  line-height: 48px;
  font-weight: 500;
}
.ad-content-m {
  font-size:18px;
  line-height: 27px;
  font-weight: 300;
}
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
