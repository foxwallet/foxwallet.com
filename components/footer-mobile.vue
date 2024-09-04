<template>
  <div>
    <h3 class="font-bold py-4">
      {{ $t("nav.about.title") }}
    </h3>
    <a href="https://hc.foxwallet.com" target="_blank" class="block w-full hover:opacity-80 py-1 text-gray-500">
      {{ $t("nav.docs") }}
    </a>
    <a href="https://hc.foxwallet.com/docs/faq" target="_blank" class="block w-full hover:opacity-80 py-1 text-gray-500">
      {{ $t("nav.about.faq") }}
    </a>
    <a href="https://hc.foxwallet.com/docs/developer/" target="_blank" class="block w-full hover:opacity-80 py-1 text-gray-500">
      {{ $t("nav.developer") }}
    </a>
    <CommunityIcon :class="bottomBorder ? 'border-b-2 border-gray-200 mt-8 pb-8' : 'mt-4 pb-4'" size="large" />
    <div class="mt-4">
      <h2 class="font-bold pt-2 pb-1">
        {{ $t("nav.slogan") }}
      </h2>
      <a href="mailto:contact@foxwallet.com" class="block pb-2 text-xs text-gray-500 border-b border-gray-200">
        {{ $t("nav.contactUs") }}
      </a>
      <p class="pb-12 mt-2 text-xs text-gray-500">
        {{ $t("nav.copyRight") }}
      </p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    bottomBorder: {
      type: Boolean,
      default: true
    }
  }
}
</script>
