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
              <a class="cursor-pointer opacity-60 hover:opacity-75 text-white mb-3" target="_blank" :href="`${baseUrl}/docs/resource`">
                {{ $t('nav.brandResource') }}
              </a>
              <a class="cursor-pointer opacity-60 hover:opacity-75 text-white mb-3" target="_blank" :href="`${baseUrl}/docs/official-links`">
                {{ $t('nav.offcialLinks') }}
              </a>
              <a class="cursor-pointer opacity-60 hover:opacity-75 text-white mb-3" target="_blank" :href="`${baseUrl}/docs/developer/`">
                {{ $t('nav.developer') }}
              </a>
              <a class="cursor-pointer opacity-60 hover:opacity-75 text-white mb-3" target="_blank" :href="`${baseUrl}/docs/faq`">
                {{ $t('nav.faqs') }}
              </a>
              <a class="cursor-pointer opacity-60 hover:opacity-75 text-white mb-3" target="_blank" :href="`${baseUrl}/docs/fox-credit`">
                {{ $t('nav.foxCredit') }}
              </a>
              <a class="cursor-pointer opacity-60 hover:opacity-75 text-white mb-3" target="_blank" href="https://foxwallet.com/download">
                {{ $t('nav.download.title') }}
              </a>
              <a class="cursor-pointer opacity-60 hover:opacity-75 text-white mb-3" target="_blank" :href="`${baseUrl}/privacy-policy`">
                {{ $t('nav.privacy') }}
              </a>
              <a class="cursor-pointer opacity-60 hover:opacity-75 text-white mb-3" target="_blank" :href="`${baseUrl}/terms-of-service`">
                {{ $t('nav.terms') }}
              </a>
            </div>
          </div>
          <div>
            <div class="text-lg font-semibold mb-7">
              {{ $t('footer.supportedNetworks') }}
            </div>
            <div class="flex flex-col">
              <a class="cursor-pointer opacity-60 hover:opacity-75 text-white mb-3" target="_blank" :href="`${baseUrl}/docs/bitcoin/`">
                Bitcoin {{ $t('main.wallet') }}
              </a>
              <a class="cursor-pointer opacity-60 hover:opacity-75 text-white mb-3" target="_blank" :href="`${baseUrl}/docs/ethereum/`">
                Ethereum {{ $t('main.wallet') }}
              </a>
              <a class="cursor-pointer opacity-60 hover:opacity-75 text-white mb-3" target="_blank" :href="`${baseUrl}/docs/aleo/`">
                Aleo {{ $t('main.wallet') }}
              </a>
              <a class="cursor-pointer opacity-60 hover:opacity-75 text-white mb-3" target="_blank" :href="`${baseUrl}/docs/aptos/`">
                Aptos {{ $t('main.wallet') }}
              </a>
              <a class="cursor-pointer opacity-60 hover:opacity-75 text-white mb-3" target="_blank" :href="`${baseUrl}/docs/cosmos/`">
                Cosmos {{ $t('main.wallet') }}
              </a>
              <a class="cursor-pointer opacity-60 hover:opacity-75 text-white mb-3" target="_blank" :href="`${baseUrl}/docs/filecoin/`">
                Filecoin {{ $t('main.wallet') }}
              </a>
              <a class="cursor-pointer opacity-60 hover:opacity-75 text-white mb-3" target="_blank" :href="`${baseUrl}/docs/ironfish/`">
                IronFish {{ $t('main.wallet') }}
              </a>
              <a class="cursor-pointer opacity-60 hover:opacity-75 text-white mb-3" target="_blank" :href="`${baseUrl}/docs/qtum/`">
                Qtum {{ $t('main.wallet') }}
              </a>
              <a class="cursor-pointer opacity-60 hover:opacity-75 text-white mb-3" target="_blank" :href="`${baseUrl}/docs/sui/`">
                Sui {{ $t('main.wallet') }}
              </a>
              <a class="cursor-pointer opacity-60 hover:opacity-75 text-white mb-3" target="_blank" :href="`${baseUrl}/docs/spacemesh/`">
                Spacemesh {{ $t('main.wallet') }}
              </a>
              <a class="cursor-pointer opacity-60 hover:opacity-75 text-white mb-3" target="_blank" :href="`${baseUrl}/docs/ton/`">
                Ton {{ $t('main.wallet') }}
              </a>
              <a class="cursor-pointer opacity-60 hover:opacity-75 text-white mb-3" target="_blank" :href="`${baseUrl}/docs/tron/`">
                Tron {{ $t('main.wallet') }}
              </a>
            </div>
          </div>
          <div>
            <div class="text-lg font-semibold mb-7">
              {{ $t('main.contact') }}
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
          <a class="cursor-pointer opacity-60 hover:opacity-75 text-white mb-3" target="_blank" :href="`${baseUrl}/docs/resource`">
            {{ $t('nav.brandResource') }}
          </a>
        </div>
      </div>
      <div class="footer-item-m">
        <div class="text-lg font-semibold mb-7">
          {{ $t('nav.about.title') }}
        </div>
        <div class="flex flex-col">
          <a class="cursor-pointer opacity-60 hover:opacity-75 text-white mb-3" target="_blank" :href="`${baseUrl}`">
            {{ $t('nav.docs.title') }}
          </a>
          <a class="cursor-pointer opacity-60 hover:opacity-75 text-white mb-3" target="_blank" :href="`${baseUrl}/docs/faq`">
            {{ $t('nav.about.faq') }}
          </a>
          <a class="cursor-pointer opacity-60 hover:opacity-75 text-white mb-3" target="_blank" :href="`${baseUrl}/docs/developer/`">
            {{ $t('nav.developer') }}
          </a>
        </div>
      </div>
      <div class="footer-item-m">
        <div class="text-lg font-semibold mb-7">
          {{ $t('main.contact') }}
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

<script>

export default {
  name: 'NewFooter',
  computed: {
    baseUrl() {
      if (this.$i18n.locale === 'zh') {
        return 'https://hc.foxwallet.com/zh'
      }
      return 'https://hc.foxwallet.com'
    }
  }
}

</script>

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
