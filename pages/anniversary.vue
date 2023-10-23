<template>
  <div class="wrap pb-12 lg:pb-32">
    <div class="h-20">
      <Header />
    </div>
    <div
      class="relative banner"
    >
      <div class="absolute inset-0 text-area text-center lg:text-left">
        <a
          class="hidden md:block absolute inset-0"
          target="_blank"
          href="https://medium.com/@FoxWallet/comment-to-earn-rate-foxwallet-5-star-sharing-up-to-2000-e337138f2a27"
        >
          <img class="w-full" src="@/assets/img/activity/head-banner.png">
        </a>
        <div class="md:hidden flex flex-col">
          <p class="font-extrabold dynamic-font text-xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
            Comment to Earn<br>
            Rate FoxWallet 5 Star<br>
            <span class="text-global-900">$2000</span>
          </p>
          <p class="text-sm lg:text-lg font-semibold mt-2 mb-4 lg:mb-14">
            Time: Nov 21st - Nov 25th UTC
          </p>
          <a
            href="https://medium.com/@FoxWallet/comment-to-earn-rate-foxwallet-5-star-sharing-up-to-2000-e337138f2a27"
            target="_blank"
            class="download-btn self-center px-2 py-1 font-medium"
          >
            Details >>
          </a>
          <a href="/download" target="_blank" class="download-btn self-center mt-4 px-4 py-1 font-semibold">
            <span class="font-semibold">Join Now</span>
          </a>
        </div>
      </div>
    </div>
    <div class="video flex flex-col justify-center items-center">
      <img src="@/assets/img/activity/video.png" class="h-8 lg:h-12 self-center mb-8 lg:mb-10" alt="video title">
      <youtube ref="youtube" video-id="Plalme9o8Zw" class="lg:w-6/12 md:rounded-xl lg:rounded-2xl" @playing="playing" />
    </div>
    <div class="container mx-auto">
      <div class="prize  flex flex-col justify-start lg:justify-end mt-28 lg:mt-6">
        <img src="@/assets/img/activity/prize.png" class="h-8 lg:h-12 self-start transform -translate-y-14 lg:translate-y-0" alt="video title">
        <p class="text-2xl lg:text-4xl mt-8 transform -translate-y-14 lg:translate-y-0" style="color: #FFFFB2">
          First come, first served
        </p>
        <p class="text-white transform -translate-y-14 lg:translate-y-0">
          Refer a friend both of you will receive BUSD rewards!
        </p>

        <div class="hidden lg:flex bg-white bg-opacity-10 rounded-xl lg:rounded-2xl mt-10 flex-col justify-between items-start py-6 px-8 text-white" style="height: 38%">
          Anniversary process >>
          <div class="flex items-center my-5">
            <img src="@/assets/img/activity/step-down.png" class="h-7 mr-1">Download
            <img src="@/assets/img/activity/step-create.png" class="h-7 mr-1 ml-4">Create / Import Wallet
            <img src="@/assets/img/activity/step-invite.png" class="h-7 mr-1 ml-4">Invitation code
          </div>
          <div class="flex items-center">
            <a href="/download" target="_blank" class="download-to-earn-btn">
              Download to Earn
            </a>
            <a href="https://medium.com/@FoxWallet/foxwallet-anniversary-referral-event-is-living-now-b8451f3f3bfd" target="_blank" class="tutorial-btn ml-4">
              Tutorial >>
            </a>
          </div>
          <div class="mt-8">
            <p>More airdrop, join FoxWallet community</p>
            <div class="flex justify-center items-center mt-4">
              <a class="hover:opacity-75 cursor-pointer" target="_blank" href="https://discord.gg/foxwallet">
                <svg
                  class="mr-3"
                  width="32"
                  height="33"
                  viewBox="0 0 32 33"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M16.0002 33C12.8357 33 9.74234 32.0323 7.11116 30.2193C4.47997 28.4062 2.42893 25.8293 1.21793 22.8143C0.00692503 19.7993 -0.309918 16.4817 0.307445 13.281C0.924809 10.0803 2.44871 7.14031 4.68635 4.83275C6.92399 2.52518 9.77504 0.953706 12.8787 0.31705C15.9824 -0.319606 19.1996 0.00714922 22.1232 1.256C25.0468 2.50484 27.5454 4.61969 29.3035 7.3331C31.0616 10.0465 32.0002 13.2366 32.0002 16.5C32.0002 20.8761 30.3145 25.0729 27.314 28.1673C24.3134 31.2616 20.2436 33 16.0002 33ZM23.3068 11.1375C21.9893 10.1332 20.4105 9.55852 18.7736 9.48751V9.48063L18.827 9.46551H18.84H18.827H18.8003L18.7736 9.48063L18.7602 9.48751H18.7736L18.5334 9.72676C20.0101 10.096 21.3955 10.7803 22.6001 11.7356C21.0435 10.9457 19.3649 10.4426 17.6401 10.2493C16.5549 10.1186 15.4587 10.1186 14.3735 10.2493H14.1069C12.8255 10.3657 11.5699 10.6906 10.3869 11.2118C9.77354 11.4771 9.41357 11.6518 9.41357 11.6518C10.65 10.6324 12.1107 9.94247 13.6668 9.64289L13.4803 9.46551C11.8235 9.52563 10.2234 10.1045 8.89338 11.1251C7.38114 13.9371 6.55756 17.0871 6.49364 20.3019C7.07207 21.0815 7.82599 21.7039 8.69026 22.1153C9.55453 22.5267 10.503 22.7146 11.4536 22.6628C11.4536 22.6628 11.9733 21.9656 12.52 21.3524C11.4048 21.0758 10.4077 20.4312 9.68017 19.5168C9.83665 19.5935 9.98821 19.6808 10.1336 19.778H10.2C10.2155 19.7774 10.231 19.7807 10.2449 19.7877C10.2589 19.7946 10.2709 19.805 10.2801 19.8179V19.8248C10.2901 19.8366 10.3025 19.8463 10.3162 19.8531C10.33 19.86 10.3449 19.8639 10.3602 19.8646C10.8002 20.042 11.2401 20.218 11.6001 20.3871C12.3635 20.711 13.1596 20.9462 13.9735 21.0884C15.3832 21.308 16.8169 21.308 18.2267 21.0884C19.0382 20.936 19.8332 20.7016 20.6001 20.3885C21.2335 20.1008 21.8523 19.7796 22.4536 19.426C21.704 20.3541 20.6768 20.9997 19.5334 21.2616C19.9734 21.8708 20.5867 22.5693 20.5867 22.5693C21.5443 22.5734 22.4927 22.3753 23.3732 21.9873C24.2537 21.5992 25.0479 21.0294 25.7069 20.3129C25.641 17.0989 24.8172 13.9497 23.3068 11.1375ZM19.0535 18.7344C18.6044 18.7344 18.1738 18.5504 17.8563 18.2229C17.5387 17.8954 17.3602 17.4513 17.3602 16.9881C17.3602 16.525 17.5387 16.0808 17.8563 15.7534C18.1738 15.4259 18.6044 15.2419 19.0535 15.2419C19.4822 15.2723 19.8837 15.4693 20.1769 15.7932C20.4701 16.1171 20.633 16.5437 20.633 16.9868C20.633 17.4298 20.4701 17.8564 20.1769 18.1803C19.8837 18.5042 19.4822 18.7012 19.0535 18.7316V18.7344ZM13.0402 18.7344C12.5911 18.7344 12.1605 18.5504 11.8429 18.2229C11.5254 17.8954 11.3468 17.4513 11.3468 16.9881C11.3468 16.525 11.5254 16.0808 11.8429 15.7534C12.1605 15.4259 12.5911 15.2419 13.0402 15.2419H13.0535C13.4821 15.274 13.883 15.4727 14.175 15.7977C14.467 16.1228 14.6281 16.5501 14.6265 16.9932C14.6248 17.4363 14.4603 17.8622 14.1658 18.1849C13.8714 18.5076 13.469 18.703 13.0402 18.7316V18.7344Z" class="fill-current" />
                </svg>

              </a>
              <a class="hover:opacity-75 cursor-pointer mx-4" target="_blank" href="https://t.me/FoxWallet_EN">
                <svg
                  class="mr-3"
                  width="32"
                  height="33"
                  viewBox="0 0 32 33"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M21.1603 23.1426L23.7736 10.3813C24.0136 9.25788 23.3868 8.81512 22.6668 9.0915L7.24006 15.2199C6.18673 15.6434 6.21355 16.2511 7.06689 16.5275L11.0135 17.798L20.1733 11.8498C20.6 11.5555 21.0002 11.7205 20.6668 12.0161L13.2668 18.9214L12.9735 23.1206C13.1283 23.1221 13.2812 23.0861 13.4201 23.0157C13.559 22.9453 13.6802 22.8423 13.7736 22.715L15.7069 20.7996L19.7069 23.8384C19.8349 23.9534 19.9925 24.0276 20.1606 24.052C20.3288 24.0764 20.5003 24.0499 20.6541 23.9758C20.808 23.9017 20.9377 23.7832 21.0275 23.6346C21.1173 23.4859 21.1636 23.3136 21.1603 23.1385V23.1426ZM32.0002 16.5C32.0002 19.7634 31.0616 22.9535 29.3035 25.6669C27.5454 28.3803 25.0468 30.4952 22.1232 31.744C19.1996 32.9929 15.9824 33.3196 12.8787 32.683C9.77504 32.0463 6.92399 30.4748 4.68635 28.1673C2.44871 25.8597 0.924809 22.9197 0.307445 19.719C-0.309918 16.5183 0.00692511 13.2007 1.21793 10.1857C2.42893 7.17074 4.47997 4.5938 7.11116 2.78076C9.74234 0.967715 12.8357 0 16.0002 0C20.2436 0 24.3134 1.73839 27.314 4.83274C30.3145 7.92709 32.0002 12.1239 32.0002 16.5Z" class="fill-current" />
                </svg>
              </a>
              <a class="hover:opacity-75 cursor-pointer" target="_blank" href="https://twitter.com/FoxWallet">
                <svg
                  class="mr-3"
                  width="32"
                  height="33"
                  viewBox="0 0 32 33"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M32 16.5C32 13.2366 31.0615 10.0465 29.3034 7.3331C27.5453 4.61969 25.0467 2.50484 22.1231 1.25599C19.1995 0.0071491 15.9824 -0.319606 12.8787 0.31705C9.77499 0.953706 6.92396 2.52518 4.68633 4.83274C2.4487 7.14031 0.924804 10.0803 0.307444 13.281C-0.309917 16.4817 0.00692499 19.7993 1.21792 22.8143C2.42892 25.8293 4.47995 28.4062 7.11112 30.2193C9.7423 32.0323 12.8356 33 16.0001 33C20.2435 33 24.3133 31.2616 27.3138 28.1673C30.3144 25.0729 32 20.8761 32 16.5ZM7.38684 22.3699C8.31752 22.4908 9.26235 22.4116 10.1619 22.1373C11.0614 21.863 11.8961 21.3996 12.6134 20.7763C11.8562 20.7426 11.1292 20.4615 10.5372 19.9736C9.94519 19.4857 9.51883 18.8162 9.3201 18.062C9.53933 18.11 9.76266 18.1353 9.98676 18.1376C10.2979 18.1397 10.6077 18.0957 10.9067 18.007C10.0841 17.7914 9.35661 17.2945 8.84321 16.5974C8.32981 15.9004 8.06097 15.0445 8.08019 14.1694V14.1199C8.56311 14.4258 9.11387 14.599 9.68012 14.6231C8.92375 14.0341 8.39736 13.1848 8.19673 12.2295C7.9961 11.2742 8.13445 10.2764 8.5867 9.41738C9.43847 10.6095 10.5301 11.5977 11.7866 12.3144C13.0431 13.0311 14.4347 13.4594 15.8666 13.5699C15.8083 13.2803 15.7773 12.9856 15.7735 12.6899C15.7589 12.1999 15.8393 11.7119 16.0098 11.2544C16.1804 10.7969 16.4377 10.379 16.7667 10.0252C17.0957 9.67146 17.4897 9.38892 17.9258 9.19412C18.362 8.99933 18.8314 8.8962 19.3067 8.89076C19.7992 8.90093 20.2842 9.01797 20.7299 9.23427C21.1756 9.45057 21.5718 9.76128 21.8933 10.1461C22.6855 9.98855 23.4443 9.68635 24.1335 9.25376C23.8873 10.1253 23.3359 10.8715 22.5866 11.3479C23.2868 11.2657 23.9705 11.0723 24.6133 10.7745C24.144 11.5289 23.5479 12.1911 22.8532 12.7298V13.2248C22.8532 18.2861 19.3069 24.123 12.8002 24.1203C10.8652 24.1175 8.97692 23.507 7.38684 22.3699Z" class="fill-current" />
                </svg>

              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="lg:hidden bg-white bg-opacity-10 rounded-xl lg:rounded-2xl mt-10 flex flex-col py-6 px-8 text-white" style="height: 38%">
        Anniversary process >>
        <div class="flex flex-col my-6 text-sm">
          <div class="flex items-center">
            <img src="@/assets/img/activity/step-down.png" class="h-6 mr-1">Download
          </div>
          <div class="flex items-center my-2">
            <img src="@/assets/img/activity/step-create.png" class="h-6 mr-1">Create / Import Wallet
          </div>
          <div class="flex items-center">
            <img src="@/assets/img/activity/step-invite.png" class="h-6 mr-1">Invitation code
          </div>
        </div>
        <a href="/download" target="_blank" class="download-to-earn-btn text-center mt-2">
          Download to Earn
        </a>
        <a href="https://medium.com/@FoxWallet/foxwallet-anniversary-referral-event-is-living-now-b8451f3f3bfd" target="_blank" class="tutorial-btn text-center mt-2">
          Tutorial >>
        </a>
        <div class="mt-6">
          <p class="text-sm break-all">
            For more airdrop, please join FoxWallet Community
          </p>
          <div class="flex justify-center items-center mt-4">
            <a class="hover:opacity-75 cursor-pointer" target="_blank" href="https://discord.gg/foxwallet">
              <svg
                class="mr-3"
                width="32"
                height="33"
                viewBox="0 0 32 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill-rule="evenodd" clip-rule="evenodd" d="M16.0002 33C12.8357 33 9.74234 32.0323 7.11116 30.2193C4.47997 28.4062 2.42893 25.8293 1.21793 22.8143C0.00692503 19.7993 -0.309918 16.4817 0.307445 13.281C0.924809 10.0803 2.44871 7.14031 4.68635 4.83275C6.92399 2.52518 9.77504 0.953706 12.8787 0.31705C15.9824 -0.319606 19.1996 0.00714922 22.1232 1.256C25.0468 2.50484 27.5454 4.61969 29.3035 7.3331C31.0616 10.0465 32.0002 13.2366 32.0002 16.5C32.0002 20.8761 30.3145 25.0729 27.314 28.1673C24.3134 31.2616 20.2436 33 16.0002 33ZM23.3068 11.1375C21.9893 10.1332 20.4105 9.55852 18.7736 9.48751V9.48063L18.827 9.46551H18.84H18.827H18.8003L18.7736 9.48063L18.7602 9.48751H18.7736L18.5334 9.72676C20.0101 10.096 21.3955 10.7803 22.6001 11.7356C21.0435 10.9457 19.3649 10.4426 17.6401 10.2493C16.5549 10.1186 15.4587 10.1186 14.3735 10.2493H14.1069C12.8255 10.3657 11.5699 10.6906 10.3869 11.2118C9.77354 11.4771 9.41357 11.6518 9.41357 11.6518C10.65 10.6324 12.1107 9.94247 13.6668 9.64289L13.4803 9.46551C11.8235 9.52563 10.2234 10.1045 8.89338 11.1251C7.38114 13.9371 6.55756 17.0871 6.49364 20.3019C7.07207 21.0815 7.82599 21.7039 8.69026 22.1153C9.55453 22.5267 10.503 22.7146 11.4536 22.6628C11.4536 22.6628 11.9733 21.9656 12.52 21.3524C11.4048 21.0758 10.4077 20.4312 9.68017 19.5168C9.83665 19.5935 9.98821 19.6808 10.1336 19.778H10.2C10.2155 19.7774 10.231 19.7807 10.2449 19.7877C10.2589 19.7946 10.2709 19.805 10.2801 19.8179V19.8248C10.2901 19.8366 10.3025 19.8463 10.3162 19.8531C10.33 19.86 10.3449 19.8639 10.3602 19.8646C10.8002 20.042 11.2401 20.218 11.6001 20.3871C12.3635 20.711 13.1596 20.9462 13.9735 21.0884C15.3832 21.308 16.8169 21.308 18.2267 21.0884C19.0382 20.936 19.8332 20.7016 20.6001 20.3885C21.2335 20.1008 21.8523 19.7796 22.4536 19.426C21.704 20.3541 20.6768 20.9997 19.5334 21.2616C19.9734 21.8708 20.5867 22.5693 20.5867 22.5693C21.5443 22.5734 22.4927 22.3753 23.3732 21.9873C24.2537 21.5992 25.0479 21.0294 25.7069 20.3129C25.641 17.0989 24.8172 13.9497 23.3068 11.1375ZM19.0535 18.7344C18.6044 18.7344 18.1738 18.5504 17.8563 18.2229C17.5387 17.8954 17.3602 17.4513 17.3602 16.9881C17.3602 16.525 17.5387 16.0808 17.8563 15.7534C18.1738 15.4259 18.6044 15.2419 19.0535 15.2419C19.4822 15.2723 19.8837 15.4693 20.1769 15.7932C20.4701 16.1171 20.633 16.5437 20.633 16.9868C20.633 17.4298 20.4701 17.8564 20.1769 18.1803C19.8837 18.5042 19.4822 18.7012 19.0535 18.7316V18.7344ZM13.0402 18.7344C12.5911 18.7344 12.1605 18.5504 11.8429 18.2229C11.5254 17.8954 11.3468 17.4513 11.3468 16.9881C11.3468 16.525 11.5254 16.0808 11.8429 15.7534C12.1605 15.4259 12.5911 15.2419 13.0402 15.2419H13.0535C13.4821 15.274 13.883 15.4727 14.175 15.7977C14.467 16.1228 14.6281 16.5501 14.6265 16.9932C14.6248 17.4363 14.4603 17.8622 14.1658 18.1849C13.8714 18.5076 13.469 18.703 13.0402 18.7316V18.7344Z" class="fill-current" />
              </svg>

            </a>
            <a class="hover:opacity-75 cursor-pointer mx-4" target="_blank" href="https://t.me/FoxWallet_EN">
              <svg
                class="mr-3"
                width="32"
                height="33"
                viewBox="0 0 32 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill-rule="evenodd" clip-rule="evenodd" d="M21.1603 23.1426L23.7736 10.3813C24.0136 9.25788 23.3868 8.81512 22.6668 9.0915L7.24006 15.2199C6.18673 15.6434 6.21355 16.2511 7.06689 16.5275L11.0135 17.798L20.1733 11.8498C20.6 11.5555 21.0002 11.7205 20.6668 12.0161L13.2668 18.9214L12.9735 23.1206C13.1283 23.1221 13.2812 23.0861 13.4201 23.0157C13.559 22.9453 13.6802 22.8423 13.7736 22.715L15.7069 20.7996L19.7069 23.8384C19.8349 23.9534 19.9925 24.0276 20.1606 24.052C20.3288 24.0764 20.5003 24.0499 20.6541 23.9758C20.808 23.9017 20.9377 23.7832 21.0275 23.6346C21.1173 23.4859 21.1636 23.3136 21.1603 23.1385V23.1426ZM32.0002 16.5C32.0002 19.7634 31.0616 22.9535 29.3035 25.6669C27.5454 28.3803 25.0468 30.4952 22.1232 31.744C19.1996 32.9929 15.9824 33.3196 12.8787 32.683C9.77504 32.0463 6.92399 30.4748 4.68635 28.1673C2.44871 25.8597 0.924809 22.9197 0.307445 19.719C-0.309918 16.5183 0.00692511 13.2007 1.21793 10.1857C2.42893 7.17074 4.47997 4.5938 7.11116 2.78076C9.74234 0.967715 12.8357 0 16.0002 0C20.2436 0 24.3134 1.73839 27.314 4.83274C30.3145 7.92709 32.0002 12.1239 32.0002 16.5Z" class="fill-current" />
              </svg>
            </a>
            <a class="hover:opacity-75 cursor-pointer" target="_blank" href="https://twitter.com/FoxWallet">
              <svg
                class="mr-3"
                width="32"
                height="33"
                viewBox="0 0 32 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill-rule="evenodd" clip-rule="evenodd" d="M32 16.5C32 13.2366 31.0615 10.0465 29.3034 7.3331C27.5453 4.61969 25.0467 2.50484 22.1231 1.25599C19.1995 0.0071491 15.9824 -0.319606 12.8787 0.31705C9.77499 0.953706 6.92396 2.52518 4.68633 4.83274C2.4487 7.14031 0.924804 10.0803 0.307444 13.281C-0.309917 16.4817 0.00692499 19.7993 1.21792 22.8143C2.42892 25.8293 4.47995 28.4062 7.11112 30.2193C9.7423 32.0323 12.8356 33 16.0001 33C20.2435 33 24.3133 31.2616 27.3138 28.1673C30.3144 25.0729 32 20.8761 32 16.5ZM7.38684 22.3699C8.31752 22.4908 9.26235 22.4116 10.1619 22.1373C11.0614 21.863 11.8961 21.3996 12.6134 20.7763C11.8562 20.7426 11.1292 20.4615 10.5372 19.9736C9.94519 19.4857 9.51883 18.8162 9.3201 18.062C9.53933 18.11 9.76266 18.1353 9.98676 18.1376C10.2979 18.1397 10.6077 18.0957 10.9067 18.007C10.0841 17.7914 9.35661 17.2945 8.84321 16.5974C8.32981 15.9004 8.06097 15.0445 8.08019 14.1694V14.1199C8.56311 14.4258 9.11387 14.599 9.68012 14.6231C8.92375 14.0341 8.39736 13.1848 8.19673 12.2295C7.9961 11.2742 8.13445 10.2764 8.5867 9.41738C9.43847 10.6095 10.5301 11.5977 11.7866 12.3144C13.0431 13.0311 14.4347 13.4594 15.8666 13.5699C15.8083 13.2803 15.7773 12.9856 15.7735 12.6899C15.7589 12.1999 15.8393 11.7119 16.0098 11.2544C16.1804 10.7969 16.4377 10.379 16.7667 10.0252C17.0957 9.67146 17.4897 9.38892 17.9258 9.19412C18.362 8.99933 18.8314 8.8962 19.3067 8.89076C19.7992 8.90093 20.2842 9.01797 20.7299 9.23427C21.1756 9.45057 21.5718 9.76128 21.8933 10.1461C22.6855 9.98855 23.4443 9.68635 24.1335 9.25376C23.8873 10.1253 23.3359 10.8715 22.5866 11.3479C23.2868 11.2657 23.9705 11.0723 24.6133 10.7745C24.144 11.5289 23.5479 12.1911 22.8532 12.7298V13.2248C22.8532 18.2861 19.3069 24.123 12.8002 24.1203C10.8652 24.1175 8.97692 23.507 7.38684 22.3699Z" class="fill-current" />
              </svg>

            </a>
          </div>
        </div>
      </div>

      <div>
        <p class="text-2xl lg:text-4xl mt-12 text-center lg:text-left lg:mt-20" style="color: #FFFFB2">
          Carnival
        </p>
        <div class="flex flex-col lg:flex-row justify-between mt-4 lg:mt-8">
          <div class="h-64 rounded-2xl bg-opacity-90 flex flex-col justify-between items-center lg:w-31/100" style="background: #664526; color: #E9E4D7">
            <div class="mt-4">
              <div class="flex justify-center items-center">
                <img src="@/assets/img/activity/sponsor/5.png" class="w-8 h-8">
                <img src="@/assets/img/activity/sponsor/7.png" class="w-8 h-8 mx-2">
                <img src="@/assets/img/activity/sponsor/8.png" class="w-8 h-8">
              </div>
              <p class="mt-2">
                FoxWallet X TwitterScan X NNS
              </p>
            </div>

            <div class="flex flex-col justify-center items-center">
              <p class="text-xs text-gray-300 font-thin">
                Rewards
              </p>
              <p class="font-semibold text-center">
                Freemint .nft domain names
              </p>
            </div>
            <div class="w-full flex justify-between items-center px-2.5 py-3.5 border-t border-opacity-10 text-sm">
              <span class="text-gray-300">Time: Nov 17th</span>
              <a target="_blank" href="https://nft.space?channel=FOXWALLET" style="color: #E0B961">Details>></a>
            </div>
          </div>
          <div class="my-4 lg:my-0 w-7/24 h-64 rounded-2xl text-white bg-opacity-90 flex flex-col justify-between items-center lg:w-31/100" style="background: #664526; color: #E9E4D7">
            <div class="mt-4">
              <div class="flex justify-center items-center">
                <img src="@/assets/img/activity/sponsor/5.png" class="w-8 h-8">
                <img src="@/assets/img/activity/sponsor/6.png" class="w-8 h-8 ml-2">
              </div>
              <p class="mt-2">
                FoxWallet X OpenMeta
              </p>
            </div>

            <div class="flex flex-col justify-center items-center">
              <p class="text-xs text-gray-300 font-thin">
                Rewards
              </p>
              <p class="text-center font-bold">
                OAT + Medals<br>500USDC NFT Farming rewards
              </p>
            </div>
            <div class="w-full flex justify-between items-center px-2.5 py-3.5 border-t border-opacity-10 text-sm">
              <span class="text-gray-300">Time: Nov 14th</span>
              <a target="_blank" href="https://giv.gg/foxwallet-openmeta" style="color: #E0B961">Details>></a>
            </div>
          </div>
          <div class="w-7/24 h-64 rounded-2xl text-white bg-opacity-90 flex flex-col justify-between items-center lg:w-31/100" style="background: #664526; color: #E9E4D7">
            <div class="mt-4">
              <div class="flex justify-center items-center">
                <img src="@/assets/img/activity/sponsor/5.png" class="w-8 h-8">
                <img src="@/assets/img/activity/sponsor/4.png" class="w-8 h-8 ml-2">
                <img src="@/assets/img/activity/sponsor/3.png" class="w-8 h-8 ml-2">
                <img src="@/assets/img/activity/sponsor/2.png" class="w-8 h-8 ml-2">
                <img src="@/assets/img/activity/sponsor/1.png" class="w-8 h-8 ml-2">
              </div>
              <p class="px-12 mt-2 text-center">
                FoxWallet X Nawarat X P12 X METAEASTE X PORT3
              </p>
            </div>

            <div class="flex flex-col justify-center items-center">
              <p class="text-xs text-gray-300 font-thin">
                Rewards
              </p>
              <p class="font-semibold">
                NFT giveaway
              </p>
            </div>
            <div class="w-full flex justify-between items-center px-2.5 py-3.5 border-t border-opacity-10 text-sm">
              <span class="text-gray-300">Time: Nov 18th</span>
              <a target="_blank" href="https://sograph.xyz/space/FoxWallet/campaign/jyszGwFl5V" style="color: #E0B961">Details>></a>
            </div>
          </div>
        </div>

        <!-- 合作方第二行 -->
        <div class="flex flex-col lg:flex-row justify-between mt-4 lg:mt-8">
          <div class="h-64 rounded-2xl bg-opacity-90 flex flex-col justify-between items-center lg:w-31/100" style="background: #664526; color: #E9E4D7">
            <div class="mt-4">
              <div class="flex justify-center items-center">
                <img src="@/assets/img/activity/sponsor/5.png" class="w-8 h-8 mr-2">
                <img src="@/assets/img/activity/sponsor/10.png" class="w-8 h-8">
              </div>
              <p class="mt-2">
                FoxWallet X Rouge Ticket
              </p>
            </div>

            <div class="flex flex-col justify-center items-center">
              <p class="text-xs text-gray-300 font-thin">
                Rewards
              </p>
              <p class="font-semibold text-center">
                500 DAI
              </p>
            </div>
            <div class="w-full flex justify-between items-center px-2.5 py-3.5 border-t border-opacity-10 text-sm">
              <span class="text-gray-300">Time: Nov 17th</span>
              <a target="_blank" href="https://ticket.rouge.network/i/special/foxwallet" style="color: #E0B961">Details>></a>
            </div>
          </div>

          <div class="h-64 rounded-2xl bg-opacity-90 flex flex-col justify-between items-center lg:w-31/100" style="background: #664526; color: #E9E4D7">
            <div class="mt-4">
              <div class="flex justify-center items-center">
                <img src="@/assets/img/activity/sponsor/5.png" class="w-8 h-8 mr-2">
                <img src="@/assets/img/activity/sponsor/9.jpg" class="w-8 h-8 rounded-full">
              </div>
              <p class="mt-2">
                FoxWallet X TaskOn
              </p>
            </div>

            <div class="flex flex-col justify-center items-center">
              <p class="text-xs text-gray-300 font-thin">
                Rewards
              </p>
              <p class="font-semibold text-center">
                Exclusive NFT + TaskOn EXP
              </p>
            </div>
            <div class="w-full flex justify-between items-center px-2.5 py-3.5 border-t border-opacity-10 text-sm">
              <span class="text-gray-300">Time: Nov 18th</span>
              <a target="_blank" href="https://taskon.xyz/campaign/detail/1226" style="color: #E0B961">Details>></a>
            </div>
          </div>

          <div class="lg:w-31/100"></div>
        </div>
      </div>

      <div class="nft h-76 lg:h-100 mt-24 lg:mt-48">
        <img src="@/assets/img/activity/nft.png" class="h-7 lg:h-12">
        <p class="text-2xl lg:text-4xl text-right mt-8">
          Exclusive FoxWallet 1st <br>
          Anniversary NFT
        </p>
        <p class="hidden lg:block">
          Anyone who invites 3 eligible users could claim.
        </p>
        <p class="mt-4 block lg:hidden text-sm text-right">
          Anyone who invites 3 eligible users <br> could claim.
        </p>
        <a
          href="https://galxe.com/FoxWallet/campaign/GCJUoUwmJL"
          target="_blank"
          class="claim-btn text-center mt-2"
          style="text-shadow: none"
        >
          Claim
        </a>
      </div>

      <div class="mt-16 lg:mt-32">
        <p class="text-2xl lg:text-5xl" style="color: #FFFFB2">
          Partners
        </p>
        <div class="flex flex-wrap items-center mt-8 lg:mt-12">
          <a v-for="(item, index) in imgs" :key="index" :href="item.src" target="_blank" class="mr-2 mb-2">
            <img :src="item.img" class="w-8  lg:w-12 cursor-pointer hover:opacity-75" :draggable="false">
          </a>
        </div>

        <div class="mt-16 lg:mt-48 rounded-xl lg:rounded-2xl overflow-hidden">
          <p class="text-2xl lg:text-5xl p-4 lg:p-6" style="color: #FFFFB2; background: #6B4421">
            About us
          </p>
          <div class="flex justify-around items-center h-24 lg:h-48 bg-white bg-opacity-10 arc-strap">
            <a href="https://discord.gg/foxwallet" target="_blank" class="hover:opacity-20 transition">
              <img src="@/assets/img/activity/cmt-1.svg" class="w-8 lg:w-14 h-auto" alt="Discord">
            </a>
            <a href="https://twitter.com/FoxWallet" target="_blank" class="hover:opacity-20 transition">
              <img src="@/assets/img/activity/cmt-3.svg" class="w-8 lg:w-14 h-auto" alt="Twitter">
            </a>
            <a href="https://t.me/FoxWallet_EN" target="_blank" class="hover:opacity-20 transition">
              <img src="@/assets/img/activity/cmt-2.svg" class="w-8 lg:w-14 h-auto" alt="Telegram">
            </a>
            <a href="https://medium.com/@FoxWallet" target="_blank" class="hover:opacity-20 transition">
              <img src="@/assets/img/activity/medium.svg" class="w-8 lg:w-14 h-auto" alt="Medium">
            </a>
            <a href="https://www.youtube.com/channel/UCt9O4HUkuNutXvFoN6NZh-w" target="_blank" class="hover:opacity-20 transition">
              <img src="@/assets/img/activity/youtube.svg" class="w-8 lg:w-14 h-auto" alt="YouTube">
            </a>
          </div>
        </div>

        <footer class="border-t border-opacity-30 mt-16 lg:mt-32 text-white">
          <div class="flex flex-col lg:flex-row justify-between leading-10 py-16 lg:py-24">
            <div class="flex flex-col">
              <Logo class="h-6 text-white" />
              <p class="text-xl lg:text-3xl font-extralight mt-5">
                Leading you to the  Web3 world
              </p>
              <p class="text-xs mt-auto leading-7">
                Contact Us ( Contact@foxwallet.com )
              </p>
            </div>
            <ul class="mt-8 lg:mt-0 text-xs leading-7">
              <li class="text-lg">
                Learn More
              </li>
              <li>Earn</li>
              <li>
                <a target="_blank" class="cursor-pointer hover:opacity-75" href="https://github.com/foxwallet/security-audit-certification">Aduit Report</a>
              </li>
            </ul>
            <ul class="mt-8 lg:mt-0 text-xs leading-7">
              <li class="text-lg">
                About
              </li>
              <li>
                <a class="cursor-pointer hover:opacity-75" target="_blank" href="https://foxwallet.com/download">
                  {{ $t('nav.about.download') }}
                </a>
              </li>
              <li>
                <a class="cursor-pointer hover:opacity-75" target="_blank" href="https://hc.foxwallet.com/docs/faq">
                  {{ $t('nav.about.faq') }}
                </a>
              </li>
              <li>
                <a class="cursor-pointer hover:opacity-75" target="_blank" href="https://hc.foxwallet.com">
                  {{ $t('nav.about.tutorial') }}
                </a>
              </li>
            </ul>
          </div>
          <div class="flex flex-col md:flex-row justify-between items-center border-t border-opacity-10 py-10">
            <p class="text-sm mb-4 md:mb-0">
              @2022 FoxWallet-A consensys formation
            </p>
            <CommunityIcon />
          </div>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
import imgs from '@/constant/partner-item-img'

export default {
  head() {
    return {
      title: 'FoxWallet 1st Anniversary'
    }
  },
  data() {
    return {
      imgs
    }
  },
  methods: {
    playVideo() {
      this.player.playVideo()
    },
    playing() {
      console.log('we are watching')
    }
  },
  computed: {
    player() {
      return this.$refs.youtube.player
    }
  }
}
</script>

<style scoped>
.wrap {
  background: #563316;
}

.text-area {
  padding-left: 15%;
  padding-right: 15%;
  padding-top: 5.5%;
}

.dynamic-font {
  line-height: 1.2;
}

.download-btn {
  @apply transition border-2 border-transparent bg-white rounded-md text-xs;
  color: #FC701D;
}

.download-to-earn-btn {
  @apply transition border-2 border-transparent font-semibold rounded-md px-4 py-2;
  background: #FEC829;
  color: #6C4421;
}

.tutorial-btn {
  @apply transition border-2 font-semibold rounded-md px-4 py-2;
  color: white;
}

.tutorial-btn:hover {
  border-color: #FEC829;
  background: #FEC829;
  color: #6C4421;
}

.download-to-earn-btn:hover {
  border-color: white;
  background: #6C4421;
  color: white;
}

.download-btn:hover {
  border-color: white;
  background: #FC701D;
  color: white;
}

.claim-btn {
  @apply transition border-2 border-transparent font-semibold rounded-md px-4 py-1 text-sm mt-4;
  background: #FEC829;
  color: #6C4421;
}

.claim-btn:hover {
  border-color: white;
  background: #6C4421;
  color: white;
}

.video {
  @apply pt-16 lg:pt-28 pb-2;
  background: url('@/assets/img/activity/dissolve.png') no-repeat top center;
}

.prize {
  background: url('@/assets/img/activity/prize-banner.png') no-repeat center right / auto 100%;
}

.nft {
  @apply flex flex-col justify-center items-end rounded-xl lg:rounded-2xl;
  text-shadow: 1px 1px 2px white;
  padding-right: 8%;
  background: url('@/assets/img/activity/nft-banner.png') no-repeat center left / auto 100%;
}

.arc-strap {
  background-image: repeating-radial-gradient(at 50% -25% , #ffffff0f, #ffffff0f 2px, #714A26 2px, #714A26 100px);
}

.banner {
    height: 36vw;
    display: block;
  }

@media screen and (max-width: 600px) {
  .arc-strap {
    background-image: repeating-radial-gradient(at 50% -25% , #ffffff0f, #ffffff0f 2px, #714A26 2px, #714A26 20px);
  }

  .text-area {
    padding-top: 10%;
  }

  .dynamic-font {
    line-height: 1.4;
  }

  .banner {
    min-height: 500px;
    background: url('@/assets/img/activity/p-banner.png') no-repeat center 95% / 84%, linear-gradient(45deg, #FA6E1B, #FFA647);
  }
}
</style>
