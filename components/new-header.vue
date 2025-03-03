<template>
  <div>
    <div class="hidden md:flex items-center justify-between px-16 bg-black text-white h-16">
      <div class="flex items-center">
        <div class="mr-16 cursor-pointer hover:opacity-80">
          <img src="@/assets/new-img/logo.svg" alt="logo">
        </div>
        <div class="text-bold">
          <a :href="blogLink" target="_blank" class="tab-item text-xs lg:text-base mr-2 lg:mr-6">
            {{ $t("nav.blog.title") }}
          </a>
          <a :href="docsLink" target="_blank" class="tab-item text-xs lg:text-base mr-2 lg:mr-6">
            {{ $t("nav.docs.title") }}
          </a>
          <a href="https://github.com/foxwallet" target="_blank" class="tab-item text-xs lg:text-base mr-2 lg:mr-6">
            {{ $t("nav.openSource") }}
          </a>
          <a
            href="https://github.com/foxwallet/security-audit-certification"
            target="_blank"
            class="tab-item text-xs lg:text-base mr-2 lg:mr-6"
          >
            {{ $t("nav.auditReport") }}
          </a>
          <a href="/download" target="_blank" class="tab-item text-xs lg:text-base mr-2 lg:mr-6">
            {{ $t("nav.download.title") }}
          </a>
        </div>
      </div>
      <div class="flex">
        <NewCommunityIcon />
        <div class="ml-10">
          <el-dropdown @command="switchLocalePath">
            <span class="el-dropdown-link">
              {{ currLocale }}<i
                class="el-icon-caret-bottom el-icon--right"
              ></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item
                command="en"
                :class="currLocale ===
                  'English' ? 'active' : ''"
              >
                English
              </el-dropdown-item>
              <el-dropdown-item
                command="zh"
                :class="currLocale ===
                  '简体中文' ? 'active' : ''"
              >
                简体中文
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
    </div>
    <div class="md:hidden flex text-white font-bold text-xl mobile-header items-center px-6 justify-between">
      <div class="logo">
        <img src="@/assets/new-img/logo.svg" alt="logo">
      </div>
      <div class="more flex items-center">
        <div class="locale-button" @click="langDrawer = true">
          {{ currLocale }}
        </div>
        <img src="@/assets/new-img/menu.svg" alt="menu" :draggable="false" @click="drawer = true">
      </div>
      <el-drawer :visible.sync="langDrawer" :show-close="false" :size="150" direction="ttb" custom-class="dark-menu">
        <div class="lang-wrapper">
          <div
            class="lang-item"
            :class="currLocale === 'English' ? 'active' : ''"
            @click="handleLangItemClick('en')"
          >
            English
          </div>
          <div
            class="lang-item"
            :class="currLocale === '简体中文' ? 'active' : ''"
            @click="handleLangItemClick('zh')"
          >
            简体中文
          </div>
        </div>
      </el-drawer>
      <el-drawer :visible.sync="drawer" :show-close="false" :size="240" direction="ttb" custom-class="dark-menu">
        <NewMenuMobile />
      </el-drawer>
    </div>
  </div>
</template>

<script>

const localeMap = {
  en: 'English',
  zh: '简体中文'
}

export default {
  name: 'NewHeader',
  data() {
    return {
      drawer: false,
      langDrawer: false,
      currLocale: 'English',
    }
  },
  mounted() {
    if (this.$i18n.locale === 'en') {
      this.currLocale = 'English'
    } else {
      this.currLocale = '简体中文'
    }
  },
  computed: {
    blogLink() {
      if (this.$i18n.locale === 'zh') {
        return 'https://hc.foxwallet.com/zh/blog'
      }
      return 'https://hc.foxwallet.com/blog'
    },
    docsLink() {
      if (this.$i18n.locale === 'zh') {
        return 'https://hc.foxwallet.com/zh/docs/'
      }
      return 'https://hc.foxwallet.com/docs'
    },
  },
  methods: {
    handleLangItemClick(locale) {
      this.switchLocalePath(locale)
      this.langDrawer = false
    },
    switchLocalePath(locale) {
      this.$i18n.locale = locale
      this.currLocale = localeMap[locale]
    }
  }
}
</script>

<style>
.el-dropdown-menu.el-popper .popper__arrow {
  display: none;
}
.el-dropdown {
  font-size: 16px;
  min-width: 100px;
}

.el-dropdown-menu {
  color: #fff;
  background-color: #1a1a1a;
  border: none;
}

.el-dropdown-menu__item {
  color: #fff;
  font-size: 16px;
  position: relative;
}

.el-dropdown-menu__item:last-of-type:after {
  display: none;
}

.el-dropdown-menu__item:after {
  content: '';
  position: absolute;
  height: 1px;
  left: 20px;
  right: 20px;
  bottom: 0;
  background: #fff;
}

.el-dropdown-menu__item:focus, .el-dropdown-menu__item:not(.is-disabled):hover {
  background: transparent;
  color: #fff;
}

.el-dropdown-link:hover,
.el-dropdown-menu__item.active {
  color: #12FE74 !important;
}

.el-dropdown-link {
  color: #fff;
}

</style>

<style scoped>
.lang-wrapper {
  padding: 24px 44px;
}
.lang-item {
  text-align: center;
  padding: 10px 0;
  border: 1px solid #ddd;
  border-radius: 2px;
  margin-bottom: 14px;
  font-size: 16px;
  font-weight: 400;
}

.lang-item.active {
  background:#12FE74;
  border: none;
  color: #000;
  font-weight: 600;
}
.locale-button {
  padding: 5px 10px;
  border: 1px solid #fff;
  font-size: 14px;
  border-radius: 2px;
  margin-right: 30px;
  font-weight: 400;
  line-height: 21px;
}

.mobile-header {
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
  left: 0;
  width: 100%;
  background: #12FE74;
  transform: scaleX(0);
  transition: .5s;
}

.tab-item:hover:before {
  transform: scaleX(1);
}
</style>
