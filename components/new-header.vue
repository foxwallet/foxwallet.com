
<template>
  <div>
    <div class="hidden md:flex items-center justify-between px-16 bg-black text-white h-16">
      <div class="flex items-center">
        <div class="mr-16 cursor-pointer hover:opacity-80">
          <img src="@/assets/new-img/logo.svg" alt="logo">
        </div>
        <div class="text-bold">
          <!-- <el-tooltip class="item" effect="dark" :content="$t('nav.earn.coming')" placement="bottom">
            <span class="tab-item text-xs lg:text-sm mr-2 lg:mr-6 hover:opacity-60 cursor-pointer">{{ $t("nav.earn.title") }}</span>
          </el-tooltip> -->
          <a href="https://hc.foxwallet.com/docs" target="_blank" class="tab-item text-xs lg:text-sm mr-2 lg:mr-6">
            {{ $t("nav.support.title") }}
          </a>
          <a href="https://hc.foxwallet.com/blog" target="_blank" class="tab-item text-xs lg:text-sm mr-2 lg:mr-6">
            {{ $t("nav.blog.title") }}
          </a>
          <a href="/download" target="_blank" class="tab-item text-xs lg:text-sm mr-2 lg:mr-6">
            {{ $t("nav.download.title") }}
          </a>
          <a href="https://github.com/foxwallet" target="_blank" class="text-xs lg:text-sm mr-2 lg:mr-6 hover:opacity-60">
            {{ $t("nav.opensource.title") }}
          </a>
          <a href="https://github.com/foxwallet/security-audit-certification" target="_blank" class="text-xs lg:text-sm mr-2 lg:mr-6 hover:opacity-60">
            {{ $t("nav.audit.title") }}
          </a>
        </div>
      </div>
      <div class="">
        <NewCommunityIcon />
      </div>
    </div>
    <div class="md:hidden flex text-white font-bold text-xl mobile-header items-center px-6 justify-between">
      <div class="logo">
        <img src="@/assets/new-img/logo.svg" alt="logo">
      </div>
      <div class="more">
        <img src="@/assets/new-img/menu.svg" alt="menu" :draggable="false" @click="drawer = true">
      </div>
      <el-drawer
        :visible.sync="drawer"
        :show-close="false"
        :size="240"
        direction="ttb"
        custom-class="dark-menu"
      >
        <NewMenuMobile />
      </el-drawer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewHeader',
  data() {
    return {
      drawer: false,
    }
  }
}
</script>

<style scoped>
  .mobile-header  {
    height: 74px;
  }
  .tab-item {
    position: relative;
    padding-top: 6px;
  }
  .tab-item:hover {
    color: #12FE74;
  }
  .tab-item:before {
    content: '';
    height: 1px;
    position: absolute;
    top: 0;
    left:0;
    width: 100%;
    background: #12FE74;
    transform: scaleX(0);
    transition: .5s;
  }
  .tab-item:hover:before {
    transform: scaleX(1);
  }
</style>
