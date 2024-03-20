<template>
  <div class="bg-black text-white px-32 py-5">
    <div class="content-wrapper mx-auto">
      <div class="flex justify-between">
        <div class="pt-9">
          <img src="@/assets/new-img/logo.svg" alt="logo">
          <div class="text-xl mt-3">
            Leading you to the world of Web3
          </div>
        </div>
        <div>
          <div class="text-lg font-semibold mb-7">
            Learn More
          </div>
          <div class="flex flex-col">
            <a class="cursor-pointer opacity-60 hover:opacity-75 text-white mb-3" target="_blank" href="https://github.com/foxwallet">
              Open Source
            </a>
            <a class="cursor-pointer opacity-60 hover:opacity-75 text-white mb-3" target="_blank" href="https://github.com/foxwallet">
              Audit Report
            </a>
            <a class="cursor-pointer opacity-60 hover:opacity-75 text-white mb-3" target="_blank" href="https://github.com/foxwallet">
              Material
            </a>
          </div>
        </div>
        <div>
          <div class="text-lg font-semibold mb-7">
            About
          </div>
          <div class="flex flex-col">
            <a class="cursor-pointer opacity-60 hover:opacity-75 text-white mb-3" target="_blank" href="https://github.com/foxwallet">
              Download
            </a>
            <a class="cursor-pointer opacity-60 hover:opacity-75 text-white mb-3" target="_blank" href="https://github.com/foxwallet">
              FAQ
            </a>
            <a class="cursor-pointer opacity-60 hover:opacity-75 text-white mb-3" target="_blank" href="https://github.com/foxwallet">
              Tutorial
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
        @{{ new Date().getFullYear() }} FoxWallet—A consensys formation
      </div>
    </div>
  </div>
</template>
