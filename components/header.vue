<template>
  <div class="bg-white">
    <div class="hidden md:flex px-4 lg:px-20 mx-auto items-center justify-between">
      <div class="sm:flex justify-between items-center h-20" data-aos="fade-right" data-aos-duration="3000">
        <Logo class="flex items-end" />
        <div class="text-sm flex ml-2 md:ml-8 lg:ml-12">
          <el-tooltip class="item" effect="dark" :content="$t('nav.earn.coming')" placement="bottom">
            <span class="text-xs lg:text-sm mr-2 lg:mr-6 hover:opacity-60 cursor-pointer">{{ $t("nav.earn.title") }}</span>
          </el-tooltip>
          <a href="https://hc.foxwallet.com/docs" target="_blank" class="text-xs lg:text-sm mr-2 lg:mr-6 hover:opacity-60">
            {{ $t("nav.docs") }}
          </a>
          <a href="https://hc.foxwallet.com/blog" target="_blank" class="text-xs lg:text-sm mr-2 lg:mr-6 hover:opacity-60">
            {{ $t("nav.blog.title") }}
          </a>
          <a href="https://github.com/foxwallet" target="_blank" class="text-xs lg:text-sm mr-2 lg:mr-6 hover:opacity-60">
            {{ $t("nav.openSource") }}
          </a>
          <a href="https://github.com/foxwallet/security-audit-certification" target="_blank" class="text-xs lg:text-sm mr-2 lg:mr-6 hover:opacity-60">
            {{ $t("nav.auditReport") }}
          </a>
          <a href="https://foxwallet.com/download" target="_blank" class="text-xs lg:text-sm mr-2 lg:mr-6 hover:opacity-60">
            {{ $t("nav.download.title") }}
          </a>
        </div>
      </div>
      <div class="flex items-center" data-aos="fade-left" data-aos-duration="3000">
        <!-- <el-tooltip effect="dark" placement="bottom" type="primary">
          <button class="text-sm  bg-gray-200 rounded-full hover:opacity-80 z-40 w-24 py-2 mr-3">
            {{ selectedLanguage }}
          </button>
          <div slot="content">
            <div v-for="{ code, name } in $i18n.locales" :key="code" class="py-2 px-2 text-center cursor-pointer text-gray-200 hover:text-white text-sm" @click="changeLocale(code)">
              {{ name }}
            </div>
          </div>
        </el-tooltip> -->
        <div class="flex justify-center items-center">
          <CommunityIcon />
        </div>
      </div>
    </div>

    <div class="absolute left-0 right-0 text-sm md:hidden bg-white">
      <div class="flex justify-between items-center h-20 container mx-auto">
        <Logo />
        <img src="@/assets/img/share/menu.svg" class="cursor-pointer hover:opacity-80 w-7" :draggable="false" @click="drawer = true">
      </div>
      <el-drawer
        :visible.sync="drawer"
        direction="ttb"
      >
        <MenuMobile />
      </el-drawer>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      drawer: false,
      communityShow: false,
      localeCode: this.$i18n.locale
    }
  },
  computed: {
    selectedLanguage() {
      return this.$i18n.locales.find(locale => locale.code === this.$i18n.locale).name
    }
  },
  methods: {
    changeLocale(code) {
      this.$i18n.locale = code
      this.$router.push(this.localePath('/'))
    },
    mobileScrollToContact() {
      this.showDialog(false)
      setTimeout(() => {
        window.scroll({
          top: document.body.clientHeight,
          left: 0,
          behavior: 'smooth'
        })
      }, 200)
    }
  }
}
</script>

<style>
#el-drawer__title {
  margin-bottom: 0.5rem;
}
</style>
