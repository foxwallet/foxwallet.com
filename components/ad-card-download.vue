<template>
  <div style="height:100%">
    <div class="border rounded border-opacity-40 border-white ad-card-m">
      <div class="pt-4 pl-4">
        <slot></slot>
      </div>
      <div class="pt-0.5">
        <div class="text-3xl text-brand my-5 px-4 ad-title-m" :class="mode === 'tiny' ? 'ad-title-tiny' : ''">
          {{ title }}
        </div>
        <div v-if="mode === 'normal'" class="text-white mt-4 px-4 pb-4 ad-content-m">
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
  .ad-card-m {
    height: 100%;
  }
  .ad-title-m {
    font-size:32px;
    line-height: 48px;
    font-weight: 500;
  }
  .ad-title-tiny {
    font-size: 16px;
    line-height: 24px;
    font-weight: 500;
    margin-top: 10px;
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
