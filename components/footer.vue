<template>
  <div>
    <div class="md:hidden border-t-2 border-gray-300">
      <Logo class="mt-8 mb-4 ml-4" />
      <FooterMobile class="ml-16" :bottom-border="false" />
    </div>
    <div class="hidden md:block py-24 bg-darkgray-500">
      <div class="container mx-auto flex">
        <div class="w-1/2">
          <Logo />
          <h1 class="my-4 text-xl">
            {{ $t('nav.slogan') }}
          </h1>
          <a href="mailto:contact@foxwallet.com" class="block pb-2 text-sm text-gray-500">
            {{ $t("nav.contactUs") }}
          </a>
        </div>
        <div class="w-1/2 flex justify-between">
          <div class="flex flex-col">
            <h3 class="pt-2 pb-4 font-bold text-xl">
              {{ $t('nav.learnMore') }}
            </h3>
            <!-- <el-tooltip class="item" effect="dark" :content="$t('nav.earn.coming')" placement="left">
              <span class="cursor-pointer hover:opacity-75 text-gray-700 mb-2">{{ $t("nav.earn.title") }}</span>
            </el-tooltip> -->
            <a class="cursor-pointer hover:opacity-75 text-gray-700 mb-2" target="_blank" href="https://github.com/foxwallet">
              {{ $t('nav.openSource') }}
            </a>
            <!-- <a class="cursor-pointer hover:opacity-75 text-gray-700 mb-2" target="_blank" href="">
              {{ $t('nav.staking') }}
            </a> -->
            <a class="cursor-pointer hover:opacity-75 text-gray-700 mb-2" target="_blank" href="https://github.com/foxwallet/security-audit-certification">
              {{ $t('nav.auditReport') }}
            </a>
            <a class="cursor-pointer hover:opacity-75 text-gray-700 mb-2" target="_blank" href="https://hc.foxwallet.com/docs/resource">
              {{ $t('nav.brandResource') }}
            </a>
          </div>
          <div class="flex flex-col">
            <h3 class="pt-2 pb-4 font-bold text-xl">
              {{ $t('nav.about.title') }}
            </h3>
            <a class="cursor-pointer hover:opacity-75 text-gray-700 mb-2" target="_blank" href="https://hc.foxwallet.com">
              {{ $t('nav.docs.title') }}
            </a>
            <a class="cursor-pointer hover:opacity-75 text-gray-700 mb-2" target="_blank" href="https://hc.foxwallet.com/docs/faq">
              {{ $t('nav.about.faq') }}
            </a>
            <a class="cursor-pointer hover:opacity-75 text-gray-700 mb-2" target="_blank" href="https://hc.foxwallet.com/docs/developer/">
              {{ $t('nav.developer') }}
            </a>
          </div>
        </div>
      </div>
      <div class="container mx-auto">
        <div class="border-t-2 border-gray-200 flex justify-between items-center pt-4 mt-16">
          <h3 class="text-gray-700">
            {{ $t("nav.copyRight") }}
          </h3>
          <CommunityIcon size="large" />
        </div>
        <div class="flex justify-center items-center mt-5">
          <img src="@/assets/img/home/moralis-icon.png" class="w-7 h-7 mr-2">
          <a class="text-600" target="_blank" href="https://moralis.io/">Powered by Moralis</a>
        </div>
      </div>
    </div>
  </div>
</template>
