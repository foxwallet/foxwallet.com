<template>
  <div>
    <div class="text-white py-5 md:block hidden">
      <div class="content-wrapper mx-auto">
        <div class="flex justify-between">
          <div class="pt-9">
            <img src="@/assets/new-img/logo.svg" alt="logo">
            <div class="text-xl mt-3">
              {{ $t('footer.title') }}
            </div>
          </div>
          <div>
            <div class="text-lg font-semibold mb-7">
              {{ $t('nav.learnMore') }}
            </div>
            <div class="flex flex-col">
              <a class="cursor-pointer opacity-60 hover:opacity-75 text-white mb-3" target="_blank" href="https://github.com/foxwallet">
                {{ $t('nav.openSource') }}
              </a>
              <a class="cursor-pointer opacity-60 hover:opacity-75 text-white mb-3" target="_blank" href="https://github.com/foxwallet/security-audit-certification">
                {{ $t('nav.auditReport') }}
              </a>
              <a class="cursor-pointer opacity-60 hover:opacity-75 text-white mb-3" target="_blank" href="https://hc.foxwallet.com/docs/resource">
                {{ $t('nav.brandResource') }}
              </a>
            </div>
          </div>
          <div>
            <div class="text-lg font-semibold mb-7">
              {{ $t('nav.about.title') }}
            </div>
            <div class="flex flex-col">
              <a class="cursor-pointer opacity-60 hover:opacity-75 text-white mb-3" target="_blank" href="https://foxwallet.com/download">
                {{ $t('nav.about.download') }}
              </a>
              <a class="cursor-pointer opacity-60 hover:opacity-75 text-white mb-3" target="_blank" href="https://hc.foxwallet.com/docs/faq">
                {{ $t('nav.about.faq') }}
              </a>
              <a class="cursor-pointer opacity-60 hover:opacity-75 text-white mb-3" target="_blank" href="https://hc.foxwallet.com">
                {{ $t('nav.about.tutorial') }}
              </a>
            </div>
          </div>
          <div>
            <div class="text-lg font-semibold mb-7">
              Contact Us
            </div>
            <NewCommunityIcon />
            <a href="mailto:contact@foxwallet.com" class="block opacity-60 hover:opacity-75 mt-8 text-sm text-white">
              Contact@foxwallet.com
            </a>
          </div>
        </div>
        <div class="mt-12 h-px bg-brand"></div>
        <div class="text-center opacity-60 pt-4 pb-8 text-white">
          ©2021 - {{ new Date().getFullYear() }} FOXWALLET FOUNDATION LTD. All Rights Reserved
        </div>
      </div>
    </div>
    <div class="px-5 footer-m md:hidden block text-white">
      <div class="logo-wrapper">
        <img src="@/assets/new-img/logo.svg" alt="logo">
        <div class="text-xl mt-3">
          {{ $t('footer.title') }}
        </div>
      </div>
      <div class="footer-item-m">
        <div class="text-lg font-semibold mb-7">
          {{ $t('nav.learnMore') }}
        </div>
        <div class="flex flex-col">
          <a class="cursor-pointer opacity-60 hover:opacity-75 text-white mb-3" target="_blank" href="https://github.com/foxwallet">
            {{ $t('nav.openSource') }}
          </a>
          <a class="cursor-pointer opacity-60 hover:opacity-75 text-white mb-3" target="_blank" href="https://github.com/foxwallet/security-audit-certification">
            {{ $t('nav.auditReport') }}
          </a>
          <a class="cursor-pointer opacity-60 hover:opacity-75 text-white mb-3" target="_blank" href="https://hc.foxwallet.com/docs/resource">
            {{ $t('nav.brandResource') }}
          </a>
        </div>
      </div>
      <div class="footer-item-m">
        <div class="text-lg font-semibold mb-7">
          {{ $t('nav.about.title') }}
        </div>
        <div class="flex flex-col">
          <a class="cursor-pointer opacity-60 hover:opacity-75 text-white mb-3" target="_blank" href="https://foxwallet.com/download">
            {{ $t('nav.about.download') }}
          </a>
          <a class="cursor-pointer opacity-60 hover:opacity-75 text-white mb-3" target="_blank" href="https://hc.foxwallet.com/docs/faq">
            {{ $t('nav.about.faq') }}
          </a>
          <a class="cursor-pointer opacity-60 hover:opacity-75 text-white mb-3" target="_blank" href="https://hc.foxwallet.com">
            {{ $t('nav.about.tutorial') }}
          </a>
        </div>
      </div>
      <div class="footer-item-m">
        <div class="text-lg font-semibold mb-7">
          Contact Us
        </div>
        <NewCommunityIcon />
        <a href="mailto:contact@foxwallet.com" class="block opacity-60 hover:opacity-75 mt-8 text-sm text-white">
          Contact@foxwallet.com
        </a>
      </div>
      <div class="mt-12 h-px bg-brand"></div>
      <div class="text-center opacity-60 pt-4 pb-8 text-white">
        ©2021 - {{ new Date().getFullYear() }} FOXWALLET FOUNDATION LTD. All Rights Reserved
      </div>
    </div>
  </div>
</template>

<style scoped>
  .content-wrapper {
    width: 1200px;
  }
  .logo-wrapper {
    margin-bottom: 28px;
  }
  .footer-item-m {
    margin-bottom: 30px;
  }
</style>
