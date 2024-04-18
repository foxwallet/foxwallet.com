<template>
  <div style="height:100%">
    <div class="border cursor-pointer rounded border-opacity-40 border-white w-96 advantage-card hover:border-opacity-75 hidden md:block">
      <div class="pt-4 pl-4 pb-4">
        <slot></slot>
      </div>
      <div class="advantage-body pt-0.5">
        <div class="text-3xl text-brand my-5 px-4 advantage-title">
          {{ title }}
        </div>
        <div class="text-white mt-4 px-4 pb-4 advantage-content">
          {{ content }}
        </div>
      </div>
    </div>
    <div class="md:hidden block border rounded border-opacity-40 border-white advantage-card-m">
      <div class="pt-4 pl-4">
        <slot></slot>
      </div>
      <div class="pt-0.5">
        <div class="text-3xl text-brand my-5 px-4 advantage-title-m" :class="mode === 'tiny' ? 'advantage-title-tiny' : ''">
          {{ title }}
        </div>
        <div v-if="mode === 'normal'" class="text-white mt-4 px-4 pb-4 advantage-content-m">
          {{ content }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'AdvantageCard',
  props: {
    mode: {
      type: String,
      default: 'normal'
    },
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      default: '',
    },
  }
}
</script>

<style scoped>
.advantage-card-m {
  height: 100%;
}
.advantage-title-m {
  font-size:32px;
  line-height: 48px;
  font-weight: 500;
}
.advantage-title-tiny {
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
  margin-top: 10px;
}
.advantage-content-m {
  font-size:18px;
  line-height: 27px;
  font-weight: 300;
}
  .advantage-card {
    height: 600px;
  }
  .advantage-card .advantage-body{
    height: 343px;
  }
  .advantage-card .advantage-title,
  .advantage-card .advantage-body,
  .advantage-card .advantage-content{
    transition: 0.6s ease;
  }
  .advantage-card:hover .advantage-title,
  .advantage-card:hover .advantage-content {
    color: black;
  }
  .advantage-card:hover .advantage-body {
    background-color: #12FE74;
  }
</style>
