<template>
  <a href="/anniversary" target="_blank" class="flex items-center mr-8 transition rounded-sm wrap">
    <div class="h-8 w-36 anniversary flex justify-center items-center bg-transparent">
      <img src="@/assets/img/activity/1st.svg">
    </div>
    <div class="h-8 w-16 new flex justify-center items-center">
      <img src="@/assets/img/activity/n.png" class="h-4 inline-block n">
      <img src="@/assets/img/activity/e.png" class="h-4 inline-block e">
      <img src="@/assets/img/activity/w.png" class="h-4 inline-block w">
    </div>
  </a>
</template>

<style scoped>
@keyframes dance {
    0% {
        transform: translateY(-3px);
    }
    100% {
        transform: translateY(3px);
    }
}

.wrap:hover {
  box-shadow: 0 0 20px 0 #FC701D9f;
}

.anniversary {
    background: url('@/assets/img/activity/1st-border.png') no-repeat center / 100% 100%;
}

.new {
    background: url('@/assets/img/activity/new.png') no-repeat center / 100% 100%;
}

.n {
    animation: dance .5s infinite ease-in alternate;
}

.e {
    animation: dance .5s infinite .2s ease-in alternate;
}

.w {
    animation: dance .5s infinite 0.4s ease-in alternate;
}

</style>
