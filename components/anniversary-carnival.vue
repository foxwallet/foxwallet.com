<template>
  <div class="mt-20">
    <p class="text-4xl md:text-5xl text-yellow-100 font-medium">Carnival</p>
    <!-- Phone -->
    <div class="block md:hidden">
      <div class="mt-5 w-full rounded-lg bg-while10 flex flex-col items-center">
        <div
          class="w-full rounded-t-lg flex items-center justify-center h-11 text-xl"
          :class="activeStatus === 'In Progress'?'bg-green-400 text-white':activeStatus === 'Coming Soon'?'bg-yellow250 text-black':'bg-gray-700 text-white'"
        >
          {{ activeStatus }}
        </div>
        <div class="flex justify-center mt-7">
          <img src="@/assets/img/carnival/FoxWallet-logo.png" class="w-10 h-10 mr-3" alt="Carnival Icon">
          <img src="@/assets/img/carnival/fbBank.png" class="w-10 h-10" alt="Carnival Icon">
        </div>
        <p class="text-xl font-medium mt-3 text-white text-center">
          FoxWallet X FBBank Joint Event
        </p>
        <p class="text-base font-normal text-gray-300 mt-7">Reward</p>
        <p class="text-xl font-medium text-white">
          100U + 120 Fox Credits
        </p>
        <div class="border-t border-opacity-10 w-full mt-7 py-5 px-2 flex justify-between">
          <p class="text-white text-base font-normal">Time: Nov 9th - 27th 12:00 UTC</p>
          <p v-if="activeStatus !== 'Ended'" class="text-yellow-400 text-base font-normal cursor-pointer" @click="jumpWebsite('https://rewards.taskon.xyz/campaign/detail/18264')">Details>></p>
        </div>
      </div>
      <div class="mt-5 w-full rounded-lg bg-while10 flex flex-col items-center">
        <div
          class="w-full rounded-t-lg flex items-center justify-center h-11 text-xl"
          :class="activeStatus === 'In Progress'?'bg-green-400 text-white':activeStatus === 'Coming Soon'?'bg-yellow250 text-black':'bg-gray-700 text-white'"
        >
          {{ activeStatus }}
        </div>
        <div class="flex justify-center mt-7 items-center">
          <img src="@/assets/img/carnival/FoxWallet-logo.png" class="w-10 h-10 mr-3 rounded-full" alt="Carnival Icon">
          <img src="@/assets/img/carnival/Filutils1.jpg" class="w-10 h-10 mr-3 rounded-full" alt="Carnival Icon">
          <img src="@/assets/img/carnival/Filutils2.jpg" class="w-10 h-10 mr-3 rounded-full" alt="Carnival Icon">
          <img src="@/assets/img/carnival/Filutils3.jpg" class="w-10 h-10 rounded-full" alt="Carnival Icon">
        </div>
        <p class="text-xl font-medium mt-3 text-white text-center">
          FoxWallet X FNS DAO
        </p>
        <p class="text-xl font-medium text-white text-center">
          Filutils, FNS.Space, Filfox Joint Event
        </p>
        <p class="text-base font-normal text-gray-300 mt-7">Reward</p>
        <p class="text-xl font-medium text-white text-center">
          100U + 180 Fox Credits + .fil
          <br/>domain (worth $2000+)
        </p>
        <div class="border-t border-opacity-10 w-full mt-7 py-5 px-2 flex justify-between">
          <p class="text-white text-base font-normal">Time: Nov 9th - 27th 12:00 UTC</p>
          <p v-if="activeStatus !== 'Ended'" class="text-yellow-400 text-base font-normal cursor-pointer" @click="jumpWebsite('https://rewards.taskon.xyz/campaign/detail/18358')">Details>></p>
        </div>
      </div>
      <div class="mt-5 w-full rounded-lg bg-while10 flex flex-col items-center">
        <div
          class="w-full rounded-t-lg flex items-center justify-center h-11 text-xl"
          :class="activeStatus === 'In Progress'?'bg-green-400 text-white':activeStatus === 'Coming Soon'?'bg-yellow250 text-black':'bg-gray-700 text-white'"
        >
          {{ activeStatus }}
        </div>
        <div class="flex justify-center mt-7">
          <img src="@/assets/img/carnival/FoxWallet-logo.png" class="w-10 h-10 mr-0 rounded-full" alt="Carnival Icon">
          <img src="@/assets/img/carnival/FileMarket.png" class="w-auto h-20 -mt-5" alt="Carnival Icon">
        </div>
        <p class="text-xl font-medium -mt-1 text-white text-center">
          FoxWallet X FileMarket Joint Event
        </p>
        <p class="text-base font-normal text-gray-300 mt-7">Reward</p>
        <p class="text-xl font-medium text-white text-center">
          120 Fox Credits + 10 FileBunnies EFT（worth $500)
        </p>
        <div class="border-t border-opacity-10 w-full mt-7 py-5 px-2 flex justify-between">
          <p class="text-white text-base font-normal">Time: Nov 9th - 27th 12:00 UTC</p>
          <p v-if="activeStatus !== 'Ended'" class="text-yellow-400 text-base font-normal cursor-pointer" @click="jumpWebsite('https://rewards.taskon.xyz/campaign/detail/18397')">Details>></p>
        </div>
      </div>
      <div class="mt-5 w-full rounded-lg bg-while10 flex flex-col items-center">
        <div
          class="w-full rounded-t-lg flex items-center justify-center h-11 text-xl"
          :class="activeStatus === 'In Progress'?'bg-green-400 text-white':activeStatus === 'Coming Soon'?'bg-yellow250 text-black':'bg-gray-700 text-white'"
        >
          {{ activeStatus }}
        </div>
        <div class="flex justify-center mt-7">
          <img src="@/assets/img/carnival/FoxWallet-logo.png" class="w-10 h-10 mr-3 rounded-full" alt="Carnival Icon">
          <img src="@/assets/img/carnival/Meta2150s.png" class="w-10 h-10" alt="Carnival Icon">
        </div>
        <p class="text-xl font-medium mt-3 text-white text-center">
          FoxWallet X Meta2150s Joint Event
        </p>
        <p class="text-base font-normal text-gray-300 mt-7">Reward</p>
        <p class="text-xl font-medium text-white text-center">
          120 Fox Credits
          <br/>+5 Quantum Force NFT
        </p>
        <div class="border-t border-opacity-10 w-full mt-7 py-5 px-2 flex justify-between">
          <p class="text-white text-base font-normal">Time: Nov 9th - 27th 12:00 UTC</p>
          <p v-if="activeStatus !== 'Ended'" class="text-yellow-400 text-base font-normal cursor-pointer" @click="jumpWebsite('https://rewards.taskon.xyz/campaign/detail/18556')">Details>></p>
        </div>
      </div>
      <div class="mt-5 w-full rounded-lg bg-while10 flex flex-col items-center">
        <div
          class="w-full rounded-t-lg flex items-center justify-center h-11 text-xl"
          :class="activeStatus === 'In Progress'?'bg-green-400 text-white':activeStatus === 'Coming Soon'?'bg-yellow250 text-black':'bg-gray-700 text-white'"
        >
          {{ activeStatus }}
        </div>
        <div class="flex justify-center mt-7">
          <img src="@/assets/img/carnival/FoxWallet-logo.png" class="w-10 h-10 mr-3 rounded-full" alt="Carnival Icon">
          <img src="@/assets/img/carnival/uhNjXQ5q.jpg" class="w-10 h-10 rounded-full" alt="Carnival Icon">
        </div>
        <p class="text-xl font-medium mt-3 text-white text-center">
          FoxWallet X Star_Protocol
          <br/>Joint Event
        </p>
        <p class="text-base font-normal text-gray-300 mt-7">Reward</p>
        <p class="text-xl font-medium text-white text-center">
          120 Fox Credits + 5
          <br/>x 4-char .scroll domain
        </p>
        <div class="border-t border-opacity-10 w-full mt-7 py-5 px-2 flex justify-between">
          <p class="text-white text-base font-normal">Time: Nov 9th - 27th 12:00 UTC</p>
          <p v-if="activeStatus !== 'Ended'" class="text-yellow-400 text-base font-normal cursor-pointer" @click="jumpWebsite('https://rewards.taskon.xyz/campaign/detail/18562')">Details>></p>
        </div>
      </div>
      <div class="mt-5 w-full rounded-lg bg-while10 flex flex-col items-center">
        <div
          class="w-full rounded-t-lg flex items-center justify-center h-11 text-xl"
          :class="activeStatus === 'In Progress'?'bg-green-400 text-white':activeStatus === 'Coming Soon'?'bg-yellow250 text-black':'bg-gray-700 text-white'"
        >
          {{ activeStatus }}
        </div>
        <div class="flex justify-center mt-7">
          <img src="@/assets/img/carnival/FoxWallet-logo.png" class="w-10 h-10 mr-3 rounded-full" alt="Carnival Icon">
          <img src="@/assets/img/carnival/oal.png" class="w-10 h-10 rounded-full" alt="Carnival Icon">
        </div>
        <p class="text-xl font-medium mt-3 text-white text-center">
          FoxWallet X Ola Joint Event
        </p>
        <p class="text-base font-normal text-gray-300 mt-7">Reward</p>
        <p class="text-xl font-medium text-white text-center">
          100U + 120 Fox Credits + Ola OVPs
        </p>
        <div class="border-t border-opacity-10 w-full mt-7 py-5 px-2 flex justify-between">
          <p class="text-white text-base font-normal">Time: Nov 9th - 27th 12:00 UTC</p>
          <p v-if="activeStatus !== 'Ended'" class="text-yellow-400 text-base font-normal cursor-pointer" @click="jumpWebsite('https://rewards.taskon.xyz/campaign/detail/18563')">Details>></p>
        </div>
      </div>
      <div class="mt-5 w-full rounded-lg bg-while10 flex flex-col items-center">
        <div
          class="w-full rounded-t-lg flex items-center justify-center h-11 text-xl"
          :class="activeStatus === 'In Progress'?'bg-green-400 text-white':activeStatus === 'Coming Soon'?'bg-yellow250 text-black':'bg-gray-700 text-white'"
        >
          {{ activeStatus }}
        </div>
        <div class="flex justify-center mt-7">
          <img src="@/assets/img/carnival/FoxWallet-logo.png" class="w-10 h-10 mr-3 rounded-full" alt="Carnival Icon">
          <img src="@/assets/img/carnival/Velocore.png" class="w-10 h-10 rounded-full" alt="Carnival Icon">
        </div>
        <p class="text-xl font-medium mt-3 text-white text-center">
          FoxWallet X Velocore Joint Event
        </p>
        <p class="text-base font-normal text-gray-300 mt-7">Reward</p>
        <p class="text-xl font-medium text-white text-center">
          100U + 120 Fox Credits
        </p>
        <div class="border-t border-opacity-10 w-full mt-7 py-5 px-2 flex justify-between">
          <p class="text-white text-base font-normal">Time: Nov 9th - 27th 12:00 UTC</p>
          <p v-if="activeStatus !== 'Ended'" class="text-yellow-400 text-base font-normal cursor-pointer" @click="jumpWebsite('https://rewards.taskon.xyz/campaign/detail/18568')">Details>></p>
        </div>
      </div>
      <div class="mt-5 w-full rounded-lg bg-while10 flex flex-col items-center">
        <div
          class="w-full rounded-t-lg flex items-center justify-center h-11 text-xl"
          :class="activeStatus === 'In Progress'?'bg-green-400 text-white':activeStatus === 'Coming Soon'?'bg-yellow250 text-black':'bg-gray-700 text-white'"
        >
          {{ activeStatus }}
        </div>
        <div class="flex justify-center mt-7">
          <img src="@/assets/img/carnival/FoxWallet-logo.png" class="w-10 h-10 mr-3 rounded-full" alt="Carnival Icon">
          <img src="@/assets/img/carnival/T20rGs2O.jpg" class="w-10 h-10 rounded-full" alt="Carnival Icon">
        </div>
        <p class="text-xl font-medium mt-3 text-white text-center">
          FoxWallet X HashKing Joint Event
        </p>
        <p class="text-base font-normal text-gray-300 mt-7">Reward</p>
        <p class="text-xl font-medium text-white text-center">
          100U + 120 Fox Credits
        </p>
        <div class="border-t border-opacity-10 w-full mt-7 py-5 px-2 flex justify-between">
          <p class="text-white text-base font-normal">Time: Nov 9th - 27th 12:00 UTC</p>
          <p v-if="activeStatus !== 'Ended'" class="text-yellow-400 text-base font-normal cursor-pointer" @click="jumpWebsite('https://rewards.taskon.xyz/campaign/detail/18569')">Details>></p>
        </div>
      </div>
      <div class="mt-5 w-full rounded-lg bg-while10 flex flex-col items-center">
        <div
          class="w-full rounded-t-lg flex items-center justify-center h-11 text-xl"
          :class="activeStatus === 'In Progress'?'bg-green-400 text-white':activeStatus === 'Coming Soon'?'bg-yellow250 text-black':'bg-gray-700 text-white'"
        >
          {{ activeStatus }}
        </div>
        <div class="flex justify-center mt-7 items-center">
          <img src="@/assets/img/carnival/FoxWallet-logo.png" class="w-10 h-10 mr-3 rounded-full" alt="Carnival Icon">
          <img src="@/assets/img/carnival/logo_green_black.png" class="w-auto h-8" alt="Carnival Icon">
        </div>
        <p class="text-xl font-medium text-white text-center">
          FoxWallet X Lumoz Joint Event
        </p>
        <p class="text-base font-normal text-gray-300 mt-7">Reward</p>
        <p class="text-xl font-medium text-white text-center">
          100U + 120 Fox Credits
        </p>
        <div class="border-t border-opacity-10 w-full mt-7 py-5 px-2 flex justify-between">
          <p class="text-white text-base font-normal">Time: Nov 9th - 27th 12:00 UTC</p>
          <p v-if="activeStatus !== 'Ended'" class="text-yellow-400 text-base font-normal cursor-pointer" @click="jumpWebsite('https://rewards.taskon.xyz/campaign/detail/18570')">Details>></p>
        </div>
      </div>
      <div class="mt-5 w-full rounded-lg bg-while10 flex flex-col items-center">
        <div
          class="w-full rounded-t-lg flex items-center justify-center h-11 text-xl"
          :class="activeStatus === 'In Progress'?'bg-green-400 text-white':activeStatus === 'Coming Soon'?'bg-yellow250 text-black':'bg-gray-700 text-white'"
        >
          {{ activeStatus }}
        </div>
        <div class="flex justify-center mt-7 items-center">
          <img src="@/assets/img/carnival/FoxWallet-logo.png" class="w-10 h-10 mr-3 rounded-full" alt="Carnival Icon">
          <img src="@/assets/img/carnival/zkDx.png" class="w-12 h-12 rounded-full" alt="Carnival Icon">
        </div>
        <p class="text-xl font-medium text-white text-center">
          FoxWallet X zkDx Joint Event
        </p>
        <p class="text-base font-normal text-gray-300 mt-7">Reward</p>
        <p class="text-xl font-medium text-white text-center">
          50U + 120 Fox Credits + zkDX NFT(worth $500)
        </p>
        <div class="border-t border-opacity-10 w-full mt-7 py-5 px-2 flex justify-between">
          <p class="text-white text-base font-normal">Time: Nov 9th - 27th 12:00 UTC</p>
          <p v-if="activeStatus !== 'Ended'" class="text-yellow-400 text-base font-normal cursor-pointer" @click="jumpWebsite('https://rewards.taskon.xyz/campaign/detail/18571')">Details>></p>
        </div>
      </div>
      <div class="mt-5 w-full rounded-lg bg-while10 flex flex-col items-center">
        <div
          class="w-full rounded-t-lg flex items-center justify-center h-11 text-xl"
          :class="activeStatus === 'In Progress'?'bg-green-400 text-white':activeStatus === 'Coming Soon'?'bg-yellow250 text-black':'bg-gray-700 text-white'"
        >
          {{ activeStatus }}
        </div>
        <div class="flex justify-center mt-7 items-center">
          <img src="@/assets/img/carnival/FoxWallet-logo.png" class="w-10 h-10 mr-3 rounded-full" alt="Carnival Icon">
          <img src="@/assets/img/carnival/usddLogo.png" class="w-10 h-10 rounded-full" alt="Carnival Icon">
        </div>
        <p class="text-xl font-medium text-white text-center mt-3">
          FoxWallet X USDD Joint Event
        </p>
        <p class="text-base font-normal text-gray-300 mt-7">Reward</p>
        <p class="text-xl font-medium text-white text-center">
          200 $USDD + 120 Fox Credits
        </p>
        <div class="border-t border-opacity-10 w-full mt-7 py-5 px-2 flex justify-between">
          <p class="text-white text-base font-normal">Time: Nov 9th - 27th 12:00 UTC</p>
          <p v-if="activeStatus !== 'Ended'" class="text-yellow-400 text-base font-normal cursor-pointer" @click="jumpWebsite('https://rewards.taskon.xyz/campaign/detail/18572')">Details>></p>
        </div>
      </div>
      <div class="mt-5 w-full rounded-lg bg-while10 flex flex-col items-center">
        <div
          class="w-full rounded-t-lg flex items-center justify-center h-11 text-xl"
          :class="activeStatus === 'In Progress'?'bg-green-400 text-white':activeStatus === 'Coming Soon'?'bg-yellow250 text-black':'bg-gray-700 text-white'"
        >
          {{ activeStatus }}
        </div>
        <div class="flex justify-center mt-7 items-center">
          <img src="@/assets/img/carnival/FoxWallet-logo.png" class="w-10 h-10 mr-3 rounded-full" alt="Carnival Icon">
          <img src="@/assets/img/carnival/Pheasant.png" class="w-auto h-8" alt="Carnival Icon">
        </div>
        <p class="text-xl font-medium text-white text-center mt-3">
          FoxWallet X Pheasant Joint Event
        </p>
        <p class="text-base font-normal text-gray-300 mt-7">Reward</p>
        <p class="text-xl font-medium text-white text-center">
          Pheasant X FoxWallet NFT
          <br/>+ 120 Fox Credits
        </p>
        <div class="border-t border-opacity-10 w-full mt-7 py-5 px-2 flex justify-between">
          <p class="text-white text-base font-normal">Time: Nov 9th - 27th 12:00 UTC</p>
          <p v-if="activeStatus !== 'Ended'" class="text-yellow-400 text-base font-normal cursor-pointer" @click="jumpWebsite('https://rewards.taskon.xyz/campaign/detail/18574')">Details>></p>
        </div>
      </div>
      <div class="mt-5 w-full rounded-lg bg-while10 flex flex-col items-center">
        <div
          class="w-full rounded-t-lg flex items-center justify-center h-11 text-xl"
          :class="activeStatus === 'In Progress'?'bg-green-400 text-white':activeStatus === 'Coming Soon'?'bg-yellow250 text-black':'bg-gray-700 text-white'"
        >
          {{ activeStatus }}
        </div>
        <div class="flex justify-center mt-7 items-center">
          <img src="@/assets/img/carnival/FoxWallet-logo.png" class="w-10 h-10 mr-3 rounded-full" alt="Carnival Icon">
          <img src="@/assets/img/carnival/HorizonDEX.png" class="w-10 h-10 rounded-full" alt="Carnival Icon">
        </div>
        <p class="text-xl font-medium mt-3 text-white text-center">
          FoxWallet X HorizonDEX Joint Event
        </p>
        <p class="text-base font-normal text-gray-300 mt-7">Reward</p>
        <p class="text-xl font-medium text-white text-center">
          50U + 120 Fox Credits
        </p>
        <div class="border-t border-opacity-10 w-full mt-7 py-5 px-2 flex justify-between">
          <p class="text-white text-base font-normal">Time: Nov 9th - 27th 12:00 UTC</p>
          <p v-if="activeStatus !== 'Ended'" class="text-yellow-400 text-base font-normal cursor-pointer" @click="jumpWebsite('https://rewards.taskon.xyz/campaign/detail/18575')">Details>></p>
        </div>
      </div>
      <div class="mt-5 w-full rounded-lg bg-while10 flex flex-col items-center">
        <div
          class="w-full rounded-t-lg flex items-center justify-center h-11 text-xl"
          :class="activeStatus === 'In Progress'?'bg-green-400 text-white':activeStatus === 'Coming Soon'?'bg-yellow250 text-black':'bg-gray-700 text-white'"
        >
          {{ activeStatus }}
        </div>
        <div class="flex justify-center mt-7 items-center">
          <img src="@/assets/img/carnival/FoxWallet-logo.png" class="w-10 h-10 mr-3 rounded-full" alt="Carnival Icon">
          <img src="@/assets/img/carnival/Protocol.png" class="w-auto h-7" alt="Carnival Icon">
        </div>
        <p class="text-xl font-medium mt-3 text-white text-center">
          FoxWallet X SFT Protocol Joint Event
        </p>
        <p class="text-base font-normal text-gray-300 mt-7">Reward</p>
        <p class="text-xl font-medium text-white text-center">
          200rSPD + 120 Fox Credits
        </p>
        <div class="border-t border-opacity-10 w-full mt-7 py-5 px-2 flex justify-between">
          <p class="text-white text-base font-normal">Time: Nov 9th - 27th 12:00 UTC</p>
          <p v-if="activeStatus !== 'Ended'" class="text-yellow-400 text-base font-normal cursor-pointer" @click="jumpWebsite('https://rewards.taskon.xyz/campaign/detail/18576')">Details>></p>
        </div>
      </div>
      <div class="mt-5 w-full rounded-lg bg-while10 flex flex-col items-center">
        <div
          class="w-full rounded-t-lg flex items-center justify-center h-11 text-xl"
          :class="activeStatus === 'In Progress'?'bg-green-400 text-white':activeStatus === 'Coming Soon'?'bg-yellow250 text-black':'bg-gray-700 text-white'"
        >
          {{ activeStatus }}
        </div>
        <div class="flex justify-center mt-7">
          <img src="@/assets/img/carnival/FoxWallet-logo.png" class="w-10 h-10 mr-3 rounded-full" alt="Carnival Icon">
          <img src="@/assets/img/carnival/Celer.png" class="w-10 h-10 rounded-full" alt="Carnival Icon">
        </div>
        <p class="text-xl font-medium mt-3 text-white text-center">
          FoxWallet X Celer
          <br/>Network Joint Event
        </p>
        <p class="text-base font-normal text-gray-300 mt-7">Reward</p>
        <p class="text-xl font-medium text-white text-center">
          Celer X FoxWallet NFT CAP
          <br/>+ 120 Fox Credits
        </p>
        <div class="border-t border-opacity-10 w-full mt-7 py-5 px-2 flex justify-between">
          <p class="text-white text-base font-normal">Time: Nov 9th - 27th 12:00 UTC</p>
          <p v-if="activeStatus !== 'Ended'" class="text-yellow-400 text-base font-normal cursor-pointer" @click="jumpWebsite('https://rewards.taskon.xyz/campaign/detail/18577')">Details>></p>
        </div>
      </div>
      <div class="mt-5 w-full rounded-lg bg-while10 flex flex-col items-center">
        <div
          class="w-full rounded-t-lg flex items-center justify-center h-11 text-xl"
          :class="activeStatus === 'In Progress'?'bg-green-400 text-white':activeStatus === 'Coming Soon'?'bg-yellow250 text-black':'bg-gray-700 text-white'"
        >
          {{ activeStatus }}
        </div>
        <div class="flex justify-center mt-7">
          <img src="@/assets/img/carnival/FoxWallet-logo.png" class="w-10 h-10 mr-3 rounded-full" alt="Carnival Icon">
          <img src="@/assets/img/carnival/ReactorFusion.png" class="w-10 h-10 rounded-full" alt="Carnival Icon">
        </div>
        <p class="text-xl font-medium mt-3 text-white text-center">
          FoxWallet X ReactorFusion
          <br/>Joint Event
        </p>
        <p class="text-base font-normal text-gray-300 mt-7">Reward</p>
        <p class="text-xl font-medium text-white text-center">
          100U + 120 Fox Credits
        </p>
        <div class="border-t border-opacity-10 w-full mt-7 py-5 px-2 flex justify-between">
          <p class="text-white text-base font-normal">Time: Nov 9th - 27th 12:00 UTC</p>
          <p v-if="activeStatus !== 'Ended'" class="text-yellow-400 text-base font-normal cursor-pointer" @click="jumpWebsite('https://rewards.taskon.xyz/campaign/detail/18578')">Details>></p>
        </div>
      </div>
      <div class="mt-5 w-full rounded-lg bg-while10 flex flex-col items-center">
        <div
          class="w-full rounded-t-lg flex items-center justify-center h-11 text-xl"
          :class="activeStatus === 'In Progress'?'bg-green-400 text-white':activeStatus === 'Coming Soon'?'bg-yellow250 text-black':'bg-gray-700 text-white'"
        >
          {{ activeStatus }}
        </div>
        <div class="flex justify-center mt-7">
          <img src="@/assets/img/carnival/FoxWallet-logo.png" class="w-10 h-10 mr-3 rounded-full" alt="Carnival Icon">
          <img src="@/assets/img/carnival/Oases.jpg" class="w-10 h-10 rounded-full" alt="Carnival Icon">
        </div>
        <p class="text-xl font-medium mt-3 text-white text-center">
          FoxWallet X Oases Joint Event
        </p>
        <p class="text-base font-normal text-gray-300 mt-7">Reward</p>
        <p class="text-xl font-medium text-white text-center">
          100U + 120 Fox Credits
        </p>
        <div class="border-t border-opacity-10 w-full mt-7 py-5 px-2 flex justify-between">
          <p class="text-white text-base font-normal">Time: Nov 9th - 27th 12:00 UTC</p>
          <p v-if="activeStatus !== 'Ended'" class="text-yellow-400 text-base font-normal cursor-pointer" @click="jumpWebsite('https://rewards.taskon.xyz/campaign/detail/18580')">Details>></p>
        </div>
      </div>
      <div class="mt-5 w-full rounded-lg bg-while10 flex flex-col items-center">
        <div
          class="w-full rounded-t-lg flex items-center justify-center h-11 text-xl"
          :class="activeStatus === 'In Progress'?'bg-green-400 text-white':activeStatus === 'Coming Soon'?'bg-yellow250 text-black':'bg-gray-700 text-white'"
        >
          {{ activeStatus }}
        </div>
        <div class="flex justify-center mt-7">
          <img src="@/assets/img/carnival/FoxWallet-logo.png" class="w-10 h-10 mr-3 rounded-full" alt="Carnival Icon">
          <img src="@/assets/img/carnival/Market.png" class="w-auto h-10" alt="Carnival Icon">
        </div>
        <p class="text-xl font-medium mt-3 text-white text-center">
          FoxWallet X LULU
          <br/>Market Joint Event
        </p>
        <p class="text-base font-normal text-gray-300 mt-7">Reward</p>
        <p class="text-xl font-medium text-white text-center">
          100 LULU Treasury Boxes
          <br/>+ 120 Fox Credits
        </p>
        <div class="border-t border-opacity-10 w-full mt-7 py-5 px-2 flex justify-between">
          <p class="text-white text-base font-normal">Time: Nov 9th - 27th 12:00 UTC</p>
          <p v-if="activeStatus !== 'Ended'" class="text-yellow-400 text-base font-normal cursor-pointer" @click="jumpWebsite('https://rewards.taskon.xyz/campaign/detail/18581')">Details>></p>
        </div>
      </div>
      <div class="mt-5 w-full rounded-lg bg-while10 flex flex-col items-center">
        <div
          class="w-full rounded-t-lg flex items-center justify-center h-11 text-xl"
          :class="activeStatus === 'In Progress'?'bg-green-400 text-white':activeStatus === 'Coming Soon'?'bg-yellow250 text-black':'bg-gray-700 text-white'"
        >
          {{ activeStatus }}
        </div>
        <div class="flex justify-center mt-7">
          <img src="@/assets/img/carnival/FoxWallet-logo.png" class="w-10 h-10 mr-3 rounded-full" alt="Carnival Icon">
          <img src="@/assets/img/carnival/NOAH.png" class="w-10 h-10 rounded-full" alt="Carnival Icon">
        </div>
        <p class="text-xl font-medium mt-3 text-white text-center">
          FoxWallet X NOAH Joint Event
        </p>
        <p class="text-base font-normal text-gray-300 mt-7">Reward</p>
        <p class="text-xl font-medium text-white text-center">
          100U + 120 Fox Credits
        </p>
        <div class="border-t border-opacity-10 w-full mt-7 py-5 px-2 flex justify-between">
          <p class="text-white text-base font-normal">Time: Nov 9th - 27th 12:00 UTC</p>
          <p v-if="activeStatus !== 'Ended'" class="text-yellow-400 text-base font-normal cursor-pointer" @click="jumpWebsite('https://rewards.taskon.xyz/campaign/detail/18582')">Details>></p>
        </div>
      </div>
      <div class="mt-5 w-full rounded-lg bg-while10 flex flex-col items-center">
        <div
          class="w-full rounded-t-lg flex items-center justify-center h-11 text-xl"
          :class="activeStatus === 'In Progress'?'bg-green-400 text-white':activeStatus === 'Coming Soon'?'bg-yellow250 text-black':'bg-gray-700 text-white'"
        >
          {{ activeStatus }}
        </div>
        <div class="flex justify-center mt-7">
          <img src="@/assets/img/carnival/FoxWallet-logo.png" class="w-10 h-10 mr-3 rounded-full" alt="Carnival Icon">
          <img src="@/assets/img/carnival/Carbon.png" class="w-10 h-10 rounded-full" alt="Carnival Icon">
        </div>
        <p class="text-xl font-medium mt-3 text-white text-center">
          FoxWallet X Carbon
          <br/>Browser Joint Event
        </p>
        <p class="text-base font-normal text-gray-300 mt-7">Reward</p>
        <p class="text-xl font-medium text-white text-center">
          100U + 120 Fox Credits
        </p>
        <div class="border-t border-opacity-10 w-full mt-7 py-5 px-2 flex justify-between">
          <p class="text-white text-base font-normal">Time: Nov 9th - 27th 12:00 UTC</p>
          <p v-if="activeStatus !== 'Ended'" class="text-yellow-400 text-base font-normal cursor-pointer" @click="jumpWebsite('https://rewards.taskon.xyz/campaign/detail/18583')">Details>></p>
        </div>
      </div>
      <div class="mt-5 w-full rounded-lg bg-while10 flex flex-col items-center">
        <div
          class="w-full rounded-t-lg flex items-center justify-center h-11 text-xl"
          :class="activeStatus === 'In Progress'?'bg-green-400 text-white':activeStatus === 'Coming Soon'?'bg-yellow250 text-black':'bg-gray-700 text-white'"
        >
          {{ activeStatus }}
        </div>
        <div class="flex justify-center mt-7">
          <img src="@/assets/img/carnival/FoxWallet-logo.png" class="w-10 h-10 mr-3 rounded-full" alt="Carnival Icon">
          <img src="@/assets/img/carnival/Relation.png" class="w-10 h-10 rounded-full" alt="Carnival Icon">
        </div>
        <p class="text-xl font-medium mt-3 text-white text-center">
          FoxWallet X Relation Joint Event
        </p>
        <p class="text-base font-normal text-gray-300 mt-7">Reward</p>
        <p class="text-xl font-medium text-white text-center">
          100U + 120 Fox Credits
        </p>
        <div class="border-t border-opacity-10 w-full mt-7 py-5 px-2 flex justify-between">
          <p class="text-white text-base font-normal">Time: Nov 9th - 27th 12:00 UTC</p>
          <p v-if="activeStatus !== 'Ended'" class="text-yellow-400 text-base font-normal cursor-pointer" @click="jumpWebsite('https://taskon.xyz/campaign/detail/18927')">Details>></p>
        </div>
      </div>
      <div class="mt-5 w-full rounded-lg bg-while10 flex flex-col items-center">
        <div
          class="w-full rounded-t-lg flex items-center justify-center h-11 text-xl"
          :class="activeStatus === 'In Progress'?'bg-green-400 text-white':activeStatus === 'Coming Soon'?'bg-yellow250 text-black':'bg-gray-700 text-white'"
        >
          {{ activeStatus }}
        </div>
        <div class="flex justify-center mt-7">
          <img src="@/assets/img/carnival/FoxWallet-logo.png" class="w-10 h-10 mr-3 rounded-full" alt="Carnival Icon">
          <img src="@/assets/img/carnival/Swapter.jpg" class="w-10 h-10 rounded-full" alt="Carnival Icon">
        </div>
        <p class="text-xl font-medium mt-3 text-white text-center">
          FoxWallet X Swapter Joint Event
        </p>
        <p class="text-base font-normal text-gray-300 mt-7">Reward</p>
        <p class="text-xl font-medium text-white text-center">
          100U + 120 Fox Credits
        </p>
        <div class="border-t border-opacity-10 w-full mt-7 py-5 px-2 flex justify-between">
          <p class="text-white text-base font-normal">Time: Nov 9th - 27th 12:00 UTC</p>
          <p v-if="activeStatus !== 'Ended'" class="text-yellow-400 text-base font-normal cursor-pointer" @click="jumpWebsite('https://rewards.taskon.xyz/campaign/detail/18928')">Details>></p>
        </div>
      </div>
      <div class="mt-5 w-full rounded-lg bg-while10 flex flex-col items-center">
        <div
          class="w-full rounded-t-lg flex items-center justify-center h-11 text-xl"
          :class="activeStatus2 === 'In Progress'?'bg-green-400 text-white':activeStatus2 === 'Coming Soon'?'bg-yellow250 text-black':'bg-gray-700 text-white'"
        >
          {{ activeStatus2 }}
        </div>
        <div class="flex justify-center mt-7">
          <img src="@/assets/img/carnival/FoxWallet-logo.png" class="w-10 h-10 mr-3 rounded-full" alt="Carnival Icon">
          <img src="@/assets/img/carnival/Cattie.jpg" class="w-10 h-10 rounded-full" alt="Carnival Icon">
        </div>
        <p class="text-xl font-medium mt-3 text-white text-center">
          FoxWallet X Cattie Swap Joint Event
        </p>
        <p class="text-base font-normal text-gray-300 mt-7">Reward</p>
        <p class="text-xl font-medium text-white text-center">
          15 Meowshare LV2 + 120 Fox Credits
        </p>
        <div class="border-t border-opacity-10 w-full mt-7 py-5 px-2 flex justify-between">
          <p class="text-white text-base font-normal">Time: Nov 14th - 27th 12:00 UTC</p>
          <p v-if="activeStatus2 !== 'Ended'" class="text-yellow-400 text-base font-normal cursor-pointer" @click="jumpWebsite('https://rewards.taskon.xyz/campaign/detail/20243')">Details>></p>
        </div>
      </div>
      <div class="mt-5 w-full rounded-lg bg-while10 flex flex-col items-center">
        <div
          class="w-full rounded-t-lg flex items-center justify-center h-11 text-xl"
          :class="activeStatus2 === 'In Progress'?'bg-green-400 text-white':activeStatus2 === 'Coming Soon'?'bg-yellow250 text-black':'bg-gray-700 text-white'"
        >
          {{ activeStatus2 }}
        </div>
        <div class="flex justify-center mt-7">
          <img src="@/assets/img/carnival/FoxWallet-logo.png" class="w-10 h-10 mr-3 rounded-full" alt="Carnival Icon">
          <img src="@/assets/img/carnival/iZUMi.jpg" class="w-10 h-10 rounded-full" alt="Carnival Icon">
        </div>
        <p class="text-xl font-medium mt-3 text-white text-center">
          FoxWallet X iZUMi Finance Joint Event
        </p>
        <p class="text-base font-normal text-gray-300 mt-7">Reward</p>
        <p class="text-xl font-medium text-white text-center">
          iPoints + 120 Fox Credits
        </p>
        <div class="border-t border-opacity-10 w-full mt-7 py-5 px-2 flex justify-between">
          <p class="text-white text-base font-normal">Time: Nov 14th - 27th 12:00 UTC</p>
          <p v-if="activeStatus2 !== 'Ended'" class="text-yellow-400 text-base font-normal cursor-pointer" @click="jumpWebsite('https://rewards.taskon.xyz/campaign/detail/20194')">Details>></p>
        </div>
      </div>
      <div class="mt-5 w-full rounded-lg bg-while10 flex flex-col items-center">
        <div
          class="w-full rounded-t-lg flex items-center justify-center h-11 text-xl"
          :class="activeStatus2 === 'In Progress'?'bg-green-400 text-white':activeStatus2 === 'Coming Soon'?'bg-yellow250 text-black':'bg-gray-700 text-white'"
        >
          {{ activeStatus2 }}
        </div>
        <div class="flex justify-center mt-7">
          <img src="@/assets/img/carnival/FoxWallet-logo.png" class="w-10 h-10 mr-3 rounded-full" alt="Carnival Icon">
          <img src="@/assets/img/carnival/Kinza.jpg" class="w-10 h-10 rounded-full" alt="Carnival Icon">
        </div>
        <p class="text-xl font-medium mt-3 text-white text-center">
          FoxWallet X Kinza Finance Joint Event
        </p>
        <p class="text-base font-normal text-gray-300 mt-7">Reward</p>
        <p class="text-xl font-medium text-white text-center">
          100U + 120 Fox Credits
        </p>
        <div class="border-t border-opacity-10 w-full mt-7 py-5 px-2 flex justify-between">
          <p class="text-white text-base font-normal">Time: Nov 14th - 27th 12:00 UTC</p>
          <p v-if="activeStatus2 !== 'Ended'" class="text-yellow-400 text-base font-normal cursor-pointer" @click="jumpWebsite('https://rewards.taskon.xyz/campaign/detail/20244')">Details>></p>
        </div>
      </div>
      <div class="mt-5 w-full rounded-lg bg-while10 flex flex-col items-center">
        <div
          class="w-full rounded-t-lg flex items-center justify-center h-11 text-xl"
          :class="activeStatus2 === 'In Progress'?'bg-green-400 text-white':activeStatus2 === 'Coming Soon'?'bg-yellow250 text-black':'bg-gray-700 text-white'"
        >
          {{ activeStatus2 }}
        </div>
        <div class="flex justify-center mt-7">
          <img src="@/assets/img/carnival/FoxWallet-logo.png" class="w-10 h-10 mr-3 rounded-full" alt="Carnival Icon">
          <img src="@/assets/img/carnival/STP.png" class="w-10 h-10 rounded-full" alt="Carnival Icon">
        </div>
        <p class="text-xl font-medium mt-3 text-white text-center">
          FoxWallet X STP Joint Event
        </p>
        <p class="text-base font-normal text-gray-300 mt-7">Reward</p>
        <p class="text-xl font-medium text-white text-center">
          100U + 120 Fox Credits
        </p>
        <div class="border-t border-opacity-10 w-full mt-7 py-5 px-2 flex justify-between">
          <p class="text-white text-base font-normal">Time: Nov 14th - 27th 12:00 UTC</p>
          <p v-if="activeStatus2 !== 'Ended'" class="text-yellow-400 text-base font-normal cursor-pointer" @click="jumpWebsite('https://rewards.taskon.xyz/campaign/detail/20246')">Details>></p>
        </div>
      </div>
      <div class="mt-5 w-full rounded-lg bg-while10 flex flex-col items-center">
        <div
          class="w-full rounded-t-lg flex items-center justify-center h-11 text-xl"
          :class="activeStatus2 === 'In Progress'?'bg-green-400 text-white':activeStatus2 === 'Coming Soon'?'bg-yellow250 text-black':'bg-gray-700 text-white'"
        >
          {{ activeStatus2 }}
        </div>
        <div class="flex justify-center mt-7">
          <img src="@/assets/img/carnival/FoxWallet-logo.png" class="w-10 h-10 mr-3 rounded-full" alt="Carnival Icon">
          <img src="@/assets/img/carnival/Adventure.jpg" class="w-10 h-10 rounded-full" alt="Carnival Icon">
        </div>
        <p class="text-xl font-medium mt-3 text-white text-center">
          FoxWallet X Adventure Gold Joint Event
        </p>
        <p class="text-base font-normal text-gray-300 mt-7">Reward</p>
        <p class="text-xl font-medium text-white text-center">
          100U + 120 Fox Credits
        </p>
        <div class="border-t border-opacity-10 w-full mt-7 py-5 px-2 flex justify-between">
          <p class="text-white text-base font-normal">Time: Nov 14th - 27th 12:00 UTC</p>
          <p v-if="activeStatus2 !== 'Ended'" class="text-yellow-400 text-base font-normal cursor-pointer" @click="jumpWebsite('https://rewards.taskon.xyz/campaign/detail/20250')">Details>></p>
        </div>
      </div>
      <div class="mt-5 w-full rounded-lg bg-while10 flex flex-col items-center">
        <div
          class="w-full rounded-t-lg flex items-center justify-center h-11 text-xl"
          :class="activeStatus2 === 'In Progress'?'bg-green-400 text-white':activeStatus2 === 'Coming Soon'?'bg-yellow250 text-black':'bg-gray-700 text-white'"
        >
          {{ activeStatus2 }}
        </div>
        <div class="flex justify-center mt-7">
          <img src="@/assets/img/carnival/FoxWallet-logo.png" class="w-10 h-10 mr-3 rounded-full" alt="Carnival Icon">
          <img src="@/assets/img/carnival/Aleoswap.jpg" class="w-10 h-10 rounded-full" alt="Carnival Icon">
        </div>
        <p class="text-xl font-medium mt-3 text-white text-center">
          FoxWallet X Aleoswap Joint Event
        </p>
        <p class="text-base font-normal text-gray-300 mt-7">Reward</p>
        <p class="text-xl font-medium text-white text-center">
          100U + 120 Fox Credits
        </p>
        <div class="border-t border-opacity-10 w-full mt-7 py-5 px-2 flex justify-between">
          <p class="text-white text-base font-normal">Time: Nov 14th - 27th 12:00 UTC</p>
          <p v-if="activeStatus2 !== 'Ended'" class="text-yellow-400 text-base font-normal cursor-pointer" @click="jumpWebsite('https://rewards.taskon.xyz/campaign/detail/20252')">Details>></p>
        </div>
      </div>
      <div class="mt-5 w-full rounded-lg bg-while10 flex flex-col items-center">
        <div
          class="w-full rounded-t-lg flex items-center justify-center h-11 text-xl"
          :class="activeStatus2 === 'In Progress'?'bg-green-400 text-white':activeStatus2 === 'Coming Soon'?'bg-yellow250 text-black':'bg-gray-700 text-white'"
        >
          {{ activeStatus2 }}
        </div>
        <div class="flex justify-center mt-7">
          <img src="@/assets/img/carnival/FoxWallet-logo.png" class="w-10 h-10 mr-3 rounded-full" alt="Carnival Icon">
          <img src="@/assets/img/carnival/Konnect.jpg" class="w-10 h-10 rounded-full" alt="Carnival Icon">
        </div>
        <p class="text-xl font-medium mt-3 text-white text-center">
          FoxWallet X Konnect Joint Event
        </p>
        <p class="text-base font-normal text-gray-300 mt-7">Reward</p>
        <p class="text-xl font-medium text-white text-center">
          5000KCT + 120 Fox Credits
        </p>
        <div class="border-t border-opacity-10 w-full mt-7 py-5 px-2 flex justify-between">
          <p class="text-white text-base font-normal">Time: Nov 14th - 27th 12:00 UTC</p>
          <p v-if="activeStatus2 !== 'Ended'" class="text-yellow-400 text-base font-normal cursor-pointer" @click="jumpWebsite('https://rewards.taskon.xyz/campaign/detail/20253')">Details>></p>
        </div>
      </div>

      <div class="mt-5 w-full rounded-lg bg-while10 flex flex-col items-center">
        <div
          class="w-full rounded-t-lg flex items-center justify-center h-11 text-xl"
          :class="activeStatus2 === 'In Progress'?'bg-green-400 text-white':activeStatus2 === 'Coming Soon'?'bg-yellow250 text-black':'bg-gray-700 text-white'"
        >
          {{ activeStatus2 }}
        </div>
        <div class="flex justify-center mt-7">
          <img src="@/assets/img/carnival/FoxWallet-logo.png" class="w-10 h-10 mr-3 rounded-full" alt="Carnival Icon">
          <img src="@/assets/img/carnival/zkLink.png" class="w-10 h-10 rounded-full" alt="Carnival Icon">
        </div>
        <p class="text-xl font-medium mt-3 text-white text-center">
          FoxWallet X zkLink Joint Event
        </p>
        <p class="text-base font-normal text-gray-300 mt-7">Reward</p>
        <p class="text-xl font-medium text-white text-center">
          100U + 120 Fox Credits
        </p>
        <div class="border-t border-opacity-10 w-full mt-7 py-5 px-2 flex justify-between">
          <p class="text-white text-base font-normal">Time: Nov 21st - 27th 12:00 UTC</p>
          <p v-if="activeStatus2 !== 'Ended'" class="text-yellow-400 text-base font-normal cursor-pointer" @click="jumpWebsite('https://rewards.taskon.xyz/campaign/detail/22207')">Details>></p>
        </div>
      </div>
      <div class="mt-5 w-full rounded-lg bg-while10 flex flex-col items-center">
        <div
          class="w-full rounded-t-lg flex items-center justify-center h-11 text-xl"
          :class="activeStatus2 === 'In Progress'?'bg-green-400 text-white':activeStatus2 === 'Coming Soon'?'bg-yellow250 text-black':'bg-gray-700 text-white'"
        >
          {{ activeStatus2 }}
        </div>
        <div class="flex justify-center mt-7">
          <img src="@/assets/img/carnival/FoxWallet-logo.png" class="w-10 h-10 mr-3 rounded-full" alt="Carnival Icon">
          <img src="@/assets/img/carnival/Aggre.jpg" class="w-10 h-10 rounded-full" alt="Carnival Icon">
        </div>
        <p class="text-xl font-medium mt-3 text-white text-center">
          FoxWallet X Aggre Joint Event
        </p>
        <p class="text-base font-normal text-gray-300 mt-7">Reward</p>
        <p class="text-xl font-medium text-white text-center">
          50 Tracker Pass NFT + 120 Fox Credits
        </p>
        <div class="border-t border-opacity-10 w-full mt-7 py-5 px-2 flex justify-between">
          <p class="text-white text-base font-normal">Time: Nov 21st - 27th 12:00 UTC</p>
          <p v-if="activeStatus2 !== 'Ended'" class="text-yellow-400 text-base font-normal cursor-pointer" @click="jumpWebsite('https://rewards.taskon.xyz/campaign/detail/20945')">Details>></p>
        </div>
      </div>
      <div class="mt-5 w-full rounded-lg bg-while10 flex flex-col items-center">
        <div
          class="w-full rounded-t-lg flex items-center justify-center h-11 text-xl"
          :class="activeStatus2 === 'In Progress'?'bg-green-400 text-white':activeStatus2 === 'Coming Soon'?'bg-yellow250 text-black':'bg-gray-700 text-white'"
        >
          {{ activeStatus2 }}
        </div>
        <div class="flex justify-center mt-7">
          <img src="@/assets/img/carnival/FoxWallet-logo.png" class="w-10 h-10 mr-3 rounded-full" alt="Carnival Icon">
          <img src="@/assets/img/carnival/DappGate.jpg" class="w-10 h-10 rounded-full" alt="Carnival Icon">
        </div>
        <p class="text-xl font-medium mt-3 text-white text-center">
          FoxWallet X DappGate Joint Event
        </p>
        <p class="text-base font-normal text-gray-300 mt-7">Reward</p>
        <p class="text-xl font-medium text-white text-center">
          50 Tracker Pass NFT + 120 Fox Credits
        </p>
        <div class="border-t border-opacity-10 w-full mt-7 py-5 px-2 flex justify-between">
          <p class="text-white text-base font-normal">Time: Nov 21st - 27th 12:00 UTC</p>
          <p v-if="activeStatus2 !== 'Ended'" class="text-yellow-400 text-base font-normal cursor-pointer" @click="jumpWebsite('https://rewards.taskon.xyz/campaign/detail/21285')">Details>></p>
        </div>
      </div>
    </div>
    <!-- PC -->
    <div class="hidden md:block">
      <div class="mt-5 flex justify-between">
        <div class="mt-5 rounded-xl bg-while10 flex flex-col items-center" style="width:calc(33.3% - 1.25rem)">
          <div
            class="w-full rounded-t-lg flex items-center justify-center h-11 text-xl"
            :class="activeStatus === 'In Progress'?'bg-green-400 text-white':activeStatus === 'Coming Soon'?'bg-yellow250 text-black':'bg-gray-700 text-white'"
          >
            {{ activeStatus }}
          </div>
          <div class="flex justify-center mt-7">
            <img src="@/assets/img/carnival/FoxWallet-logo.png" class="w-10 h-10 mr-3 rounded-full" alt="Carnival Icon">
            <img src="@/assets/img/carnival/uhNjXQ5q.jpg" class="w-10 h-10 rounded-full" alt="Carnival Icon">
          </div>
          <p class="text-xl font-medium mt-3 text-white text-center">
            FoxWallet X Star_Protocol
            <br/>Joint Event
          </p>
          <p class="text-base font-normal text-gray-300 mt-7">Reward</p>
          <p class="text-xl font-medium text-white text-center">
            120 Fox Credits + 5
            <br/>x 4-char .scroll domain
          </p>
          <div class="border-t border-opacity-10 w-full mt-7 py-5 px-2 flex justify-between">
            <p class="text-white text-base font-normal">Time: Nov 9th - 27th 12:00 UTC</p>
            <p v-if="activeStatus !== 'Ended'" class="text-yellow-400 text-base font-normal cursor-pointer" @click="jumpWebsite('https://rewards.taskon.xyz/campaign/detail/18562')">Details>></p>
          </div>
        </div>
        <div class="mt-5 rounded-xl bg-while10 flex flex-col items-center" style="width:calc(33.3% - 1.25rem)">
          <div
            class="w-full rounded-t-lg flex items-center justify-center h-11 text-xl"
            :class="activeStatus === 'In Progress'?'bg-green-400 text-white':activeStatus === 'Coming Soon'?'bg-yellow250 text-black':'bg-gray-700 text-white'"
          >
            {{ activeStatus }}
          </div>
          <div class="flex justify-center mt-7 items-center">
            <img src="@/assets/img/carnival/FoxWallet-logo.png" class="w-10 h-10 mr-3 rounded-full" alt="Carnival Icon">
            <img src="@/assets/img/carnival/Filutils1.jpg" class="w-10 h-10 mr-3 rounded-full" alt="Carnival Icon">
            <img src="@/assets/img/carnival/Filutils2.jpg" class="w-10 h-10 mr-3 rounded-full" alt="Carnival Icon">
            <img src="@/assets/img/carnival/Filutils3.jpg" class="w-10 h-10 rounded-full" alt="Carnival Icon">
          </div>
          <p class="text-xl font-medium mt-3 text-white text-center">
            FoxWallet X FNS DAO
          </p>
          <p class="text-xl font-medium text-white text-center">
            Filutils, FNS.Space, Filfox Joint Event
          </p>
          <p class="text-base font-normal text-gray-300 mt-7">Reward</p>
          <p class="text-xl font-medium text-white text-center">
            100U + 180 Fox Credits + .fil
            <br/>domain (worth $2000+)
          </p>
          <div class="border-t border-opacity-10 w-full mt-7 py-5 px-2 flex justify-between">
            <p class="text-white text-base font-normal">Time: Nov 9th - 27th 12:00 UTC</p>
            <p v-if="activeStatus !== 'Ended'" class="text-yellow-400 text-base font-normal cursor-pointer" @click="jumpWebsite('https://rewards.taskon.xyz/campaign/detail/18358')">Details>></p>
          </div>
        </div>
        <div class="mt-5 rounded-xl bg-while10 flex flex-col items-center" style="width:calc(33.3% - 1.25rem)">
          <div
            class="w-full rounded-t-lg flex items-center justify-center h-11 text-xl"
            :class="activeStatus === 'In Progress'?'bg-green-400 text-white':activeStatus === 'Coming Soon'?'bg-yellow250 text-black':'bg-gray-700 text-white'"
          >
            {{ activeStatus }}
          </div>
          <div class="flex justify-center mt-7 items-center">
            <img src="@/assets/img/carnival/FoxWallet-logo.png" class="w-10 h-10 mr-3 rounded-full" alt="Carnival Icon">
            <img src="@/assets/img/carnival/Protocol.png" class="w-auto h-7" alt="Carnival Icon">
          </div>
          <p class="text-xl font-medium mt-3 text-white text-center">
            FoxWallet X SFT
            <br/>Protocol Joint Event
          </p>
          <p class="text-base font-normal text-gray-300 mt-7">Reward</p>
          <p class="text-xl font-medium text-white text-center">
            200rSPD + 120
            <br/>Fox Credits
          </p>
          <div class="border-t border-opacity-10 w-full mt-7 py-5 px-2 flex justify-between">
            <p class="text-white text-base font-normal">Time: Nov 9th - 27th 12:00 UTC</p>
            <p v-if="activeStatus !== 'Ended'" class="text-yellow-400 text-base font-normal cursor-pointer" @click="jumpWebsite('https://rewards.taskon.xyz/campaign/detail/18576')">Details>></p>
          </div>
        </div>
      </div>
      <div class="mt-5 flex justify-between">
        <div class="mt-5 rounded-xl bg-while10 flex flex-col items-center" style="width:calc(33.3% - 1.25rem)">
          <div
            class="w-full rounded-t-lg flex items-center justify-center h-11 text-xl"
            :class="activeStatus === 'In Progress'?'bg-green-400 text-white':activeStatus === 'Coming Soon'?'bg-yellow250 text-black':'bg-gray-700 text-white'"
          >
            {{ activeStatus }}
          </div>
          <div class="flex justify-center mt-7 items-center">
            <img src="@/assets/img/carnival/FoxWallet-logo.png" class="w-10 h-10 mr-3 rounded-full" alt="Carnival Icon">
            <img src="@/assets/img/carnival/usddLogo.png" class="w-10 h-10 rounded-full" alt="Carnival Icon">
          </div>
          <p class="text-xl font-medium text-white text-center mt-3">
            FoxWallet X USDD Joint Event
          </p>
          <p class="text-base font-normal text-gray-300 mt-7">Reward</p>
          <p class="text-xl font-medium text-white text-center">
            200 $USDD + 120 Fox Credits
          </p>
          <div class="border-t border-opacity-10 w-full mt-7 py-5 px-2 flex justify-between">
            <p class="text-white text-base font-normal">Time: Nov 9th - 27th 12:00 UTC</p>
            <p v-if="activeStatus !== 'Ended'" class="text-yellow-400 text-base font-normal cursor-pointer" @click="jumpWebsite('https://rewards.taskon.xyz/campaign/detail/18572')">Details>></p>
          </div>
        </div>
        <div class="mt-5 rounded-xl bg-while10 flex flex-col items-center" style="width:calc(33.3% - 1.25rem)">
          <div
            class="w-full rounded-t-lg flex items-center justify-center h-11 text-xl"
            :class="activeStatus === 'In Progress'?'bg-green-400 text-white':activeStatus === 'Coming Soon'?'bg-yellow250 text-black':'bg-gray-700 text-white'"
          >
            {{ activeStatus }}
          </div>
          <div class="flex justify-center mt-7">
            <img src="@/assets/img/carnival/FoxWallet-logo.png" class="w-10 h-10 mr-3" alt="Carnival Icon">
            <img src="@/assets/img/carnival/fbBank.png" class="w-10 h-10" alt="Carnival Icon">
          </div>
          <p class="text-xl font-medium mt-3 text-white text-center">
            FoxWallet X FBBank Joint Event
          </p>
          <p class="text-base font-normal text-gray-300 mt-7">Reward</p>
          <p class="text-xl font-medium text-white">
            100U + 120 Fox Credits
          </p>
          <div class="border-t border-opacity-10 w-full mt-7 py-5 px-2 flex justify-between">
            <p class="text-white text-base font-normal">Time: Nov 9th - 27th 12:00 UTC</p>
            <p v-if="activeStatus !== 'Ended'" class="text-yellow-400 text-base font-normal cursor-pointer" @click="jumpWebsite('https://rewards.taskon.xyz/campaign/detail/18264')">Details>></p>
          </div>
        </div>
        <div class="mt-5 rounded-xl bg-while10 flex flex-col items-center" style="width:calc(33.3% - 1.25rem)">
          <div
            class="w-full rounded-t-lg flex items-center justify-center h-11 text-xl"
            :class="activeStatus === 'In Progress'?'bg-green-400 text-white':activeStatus === 'Coming Soon'?'bg-yellow250 text-black':'bg-gray-700 text-white'"
          >
            {{ activeStatus }}
          </div>
          <div class="flex justify-center mt-7">
            <img src="@/assets/img/carnival/FoxWallet-logo.png" class="w-10 h-10 mr-3 rounded-full" alt="Carnival Icon">
            <img src="@/assets/img/carnival/oal.png" class="w-10 h-10 rounded-full" alt="Carnival Icon">
          </div>
          <p class="text-xl font-medium mt-3 text-white text-center">
            FoxWallet X Ola Joint Event
          </p>
          <p class="text-base font-normal text-gray-300 mt-7">Reward</p>
          <p class="text-xl font-medium text-white text-center">
            100U + 120 Fox Credits + Ola OVPs
          </p>
          <div class="border-t border-opacity-10 w-full mt-7 py-5 px-2 flex justify-between">
            <p class="text-white text-base font-normal">Time: Nov 9th - 27th 12:00 UTC</p>
            <p v-if="activeStatus !== 'Ended'" class="text-yellow-400 text-base font-normal cursor-pointer" @click="jumpWebsite('https://rewards.taskon.xyz/campaign/detail/18563')">Details>></p>
          </div>
        </div>
      </div>
      <div class="mt-5 flex justify-between">
        <div class="mt-5 rounded-xl bg-while10 flex flex-col items-center" style="width:calc(33.3% - 1.25rem)">
          <div
            class="w-full rounded-t-lg flex items-center justify-center h-11 text-xl"
            :class="activeStatus === 'In Progress'?'bg-green-400 text-white':activeStatus === 'Coming Soon'?'bg-yellow250 text-black':'bg-gray-700 text-white'"
          >
            {{ activeStatus }}
          </div>
          <div class="flex justify-center mt-7">
            <img src="@/assets/img/carnival/FoxWallet-logo.png" class="w-10 h-10 mr-3 rounded-full" alt="Carnival Icon">
            <img src="@/assets/img/carnival/Velocore.png" class="w-10 h-10 rounded-full" alt="Carnival Icon">
          </div>
          <p class="text-xl font-medium mt-3 text-white text-center">
            FoxWallet X Velocore Joint Event
          </p>
          <p class="text-base font-normal text-gray-300 mt-7">Reward</p>
          <p class="text-xl font-medium text-white text-center">
            100U + 120 Fox Credits
          </p>
          <div class="border-t border-opacity-10 w-full mt-7 py-5 px-2 flex justify-between">
            <p class="text-white text-base font-normal">Time: Nov 9th - 27th 12:00 UTC</p>
            <p v-if="activeStatus !== 'Ended'" class="text-yellow-400 text-base font-normal cursor-pointer" @click="jumpWebsite('https://rewards.taskon.xyz/campaign/detail/18568')">Details>></p>
          </div>
        </div>
        <div class="mt-5 rounded-xl bg-while10 flex flex-col items-center" style="width:calc(33.3% - 1.25rem)">
          <div
            class="w-full rounded-t-lg flex items-center justify-center h-11 text-xl"
            :class="activeStatus === 'In Progress'?'bg-green-400 text-white':activeStatus === 'Coming Soon'?'bg-yellow250 text-black':'bg-gray-700 text-white'"
          >
            {{ activeStatus }}
          </div>
          <div class="flex justify-center mt-7">
            <img src="@/assets/img/carnival/FoxWallet-logo.png" class="w-10 h-10 mr-3 rounded-full" alt="Carnival Icon">
            <img src="@/assets/img/carnival/T20rGs2O.jpg" class="w-10 h-10 rounded-full" alt="Carnival Icon">
          </div>
          <p class="text-xl font-medium mt-3 text-white text-center">
            FoxWallet X HashKing Joint Event
          </p>
          <p class="text-base font-normal text-gray-300 mt-7">Reward</p>
          <p class="text-xl font-medium text-white text-center">
            100U + 120 Fox Credits
          </p>
          <div class="border-t border-opacity-10 w-full mt-7 py-5 px-2 flex justify-between">
            <p class="text-white text-base font-normal">Time: Nov 9th - 27th 12:00 UTC</p>
            <p v-if="activeStatus !== 'Ended'" class="text-yellow-400 text-base font-normal cursor-pointer" @click="jumpWebsite('https://rewards.taskon.xyz/campaign/detail/18569')">Details>></p>
          </div>
        </div>
        <div class="mt-5 rounded-xl bg-while10 flex flex-col items-center" style="width:calc(33.3% - 1.25rem)">
          <div
            class="w-full rounded-t-lg flex items-center justify-center h-11 text-xl"
            :class="activeStatus === 'In Progress'?'bg-green-400 text-white':activeStatus === 'Coming Soon'?'bg-yellow250 text-black':'bg-gray-700 text-white'"
          >
            {{ activeStatus }}
          </div>
          <div class="flex justify-center mt-7 items-center">
            <img src="@/assets/img/carnival/FoxWallet-logo.png" class="w-10 h-10 mr-3 rounded-full" alt="Carnival Icon">
            <img src="@/assets/img/carnival/logo_green_black.png" class="w-auto h-8" alt="Carnival Icon">
          </div>
          <p class="text-xl mt-3 font-medium text-white text-center">
            FoxWallet X Lumoz Joint Event
          </p>
          <p class="text-base font-normal text-gray-300 mt-7">Reward</p>
          <p class="text-xl font-medium text-white text-center">
            100U + 120 Fox Credits
          </p>
          <div class="border-t border-opacity-10 w-full mt-7 py-5 px-2 flex justify-between">
            <p class="text-white text-base font-normal">Time: Nov 9th - 27th 12:00 UTC</p>
            <p v-if="activeStatus !== 'Ended'" class="text-yellow-400 text-base font-normal cursor-pointer" @click="jumpWebsite('https://rewards.taskon.xyz/campaign/detail/18570')">Details>></p>
          </div>
        </div>
      </div>
      <div class="mt-5 flex justify-between">
        <div class="mt-5 rounded-xl bg-while10 flex flex-col items-center" style="width:calc(33.3% - 1.25rem)">
          <div
            class="w-full rounded-t-lg flex items-center justify-center h-11 text-xl"
            :class="activeStatus === 'In Progress'?'bg-green-400 text-white':activeStatus === 'Coming Soon'?'bg-yellow250 text-black':'bg-gray-700 text-white'"
          >
            {{ activeStatus }}
          </div>
          <div class="flex justify-center mt-7 items-center">
            <img src="@/assets/img/carnival/FoxWallet-logo.png" class="w-10 h-10 mr-3 rounded-full" alt="Carnival Icon">
            <img src="@/assets/img/carnival/zkDx.png" class="w-12 h-12 rounded-full" alt="Carnival Icon">
          </div>
          <p class="text-xl font-medium text-white text-center">
            FoxWallet X zkDx Joint Event
          </p>
          <p class="text-base font-normal text-gray-300 mt-7">Reward</p>
          <p class="text-xl font-medium text-white text-center">
            50U + 120 Fox Credits + zkDX NFT(worth $500)
          </p>
          <div class="border-t border-opacity-10 w-full mt-7 py-5 px-2 flex justify-between">
            <p class="text-white text-base font-normal">Time: Nov 9th - 27th 12:00 UTC</p>
            <p v-if="activeStatus !== 'Ended'" class="text-yellow-400 text-base font-normal cursor-pointer" @click="jumpWebsite('https://rewards.taskon.xyz/campaign/detail/18571')">Details>></p>
          </div>
        </div>
        <div class="mt-5 rounded-xl bg-while10 flex flex-col items-center" style="width:calc(33.3% - 1.25rem)">
          <div
            class="w-full rounded-t-lg flex items-center justify-center h-11 text-xl"
            :class="activeStatus === 'In Progress'?'bg-green-400 text-white':activeStatus === 'Coming Soon'?'bg-yellow250 text-black':'bg-gray-700 text-white'"
          >
            {{ activeStatus }}
          </div>
          <div class="flex justify-center mt-7">
            <img src="@/assets/img/carnival/FoxWallet-logo.png" class="w-10 h-10 mr-3 rounded-full" alt="Carnival Icon">
            <img src="@/assets/img/carnival/Meta2150s.png" class="w-10 h-10" alt="Carnival Icon">
          </div>
          <p class="text-xl font-medium mt-3 text-white text-center">
            FoxWallet X Meta2150s Joint Event
          </p>
          <p class="text-base font-normal text-gray-300 mt-7">Reward</p>
          <p class="text-xl font-medium text-white text-center">
            120 Fox Credits
            <br/>+5 Quantum Force NFT
          </p>
          <div class="border-t border-opacity-10 w-full mt-7 py-5 px-2 flex justify-between">
            <p class="text-white text-base font-normal">Time: Nov 9th - 27th 12:00 UTC</p>
            <p v-if="activeStatus !== 'Ended'" class="text-yellow-400 text-base font-normal cursor-pointer" @click="jumpWebsite('https://rewards.taskon.xyz/campaign/detail/18556')">Details>></p>
          </div>
        </div>
        <div class="mt-5 rounded-xl bg-while10 flex flex-col items-center" style="width:calc(33.3% - 1.25rem)">
          <div
            class="w-full rounded-t-lg flex items-center justify-center h-11 text-xl"
            :class="activeStatus === 'In Progress'?'bg-green-400 text-white':activeStatus === 'Coming Soon'?'bg-yellow250 text-black':'bg-gray-700 text-white'"
          >
            {{ activeStatus }}
          </div>
          <div class="flex justify-center mt-7 items-center">
            <img src="@/assets/img/carnival/FoxWallet-logo.png" class="w-10 h-10 mr-3 rounded-full" alt="Carnival Icon">
            <img src="@/assets/img/carnival/Pheasant.png" class="w-auto h-8" alt="Carnival Icon">
          </div>
          <p class="text-xl font-medium text-white text-center mt-3">
            FoxWallet X Pheasant Joint Event
          </p>
          <p class="text-base font-normal text-gray-300 mt-7">Reward</p>
          <p class="text-xl font-medium text-white text-center">
            Pheasant X FoxWallet NFT
            <br/>+ 120 Fox Credits
          </p>
          <div class="border-t border-opacity-10 w-full mt-7 py-5 px-2 flex justify-between">
            <p class="text-white text-base font-normal">Time: Nov 9th - 27th 12:00 UTC</p>
            <p v-if="activeStatus !== 'Ended'" class="text-yellow-400 text-base font-normal cursor-pointer" @click="jumpWebsite('https://rewards.taskon.xyz/campaign/detail/18574')">Details>></p>
          </div>
        </div>
      </div>
      <div class="mt-5 flex justify-between">
        <div class="mt-5 rounded-xl bg-while10 flex flex-col items-center" style="width:calc(33.3% - 1.25rem)">
          <div
            class="w-full rounded-t-lg flex items-center justify-center h-11 text-xl"
            :class="activeStatus === 'In Progress'?'bg-green-400 text-white':activeStatus === 'Coming Soon'?'bg-yellow250 text-black':'bg-gray-700 text-white'"
          >
            {{ activeStatus }}
          </div>
          <div class="flex justify-center mt-7">
            <img src="@/assets/img/carnival/FoxWallet-logo.png" class="w-10 h-10 mr-3 rounded-full" alt="Carnival Icon">
            <img src="@/assets/img/carnival/NOAH.png" class="w-10 h-10 rounded-full" alt="Carnival Icon">
          </div>
          <p class="text-xl font-medium mt-3 text-white text-center">
            FoxWallet X NOAH Joint Event
          </p>
          <p class="text-base font-normal text-gray-300 mt-7">Reward</p>
          <p class="text-xl font-medium text-white text-center">
            100U + 120 Fox Credits
          </p>
          <div class="border-t border-opacity-10 w-full mt-7 py-5 px-2 flex justify-between">
            <p class="text-white text-base font-normal">Time: Nov 9th - 27th 12:00 UTC</p>
            <p v-if="activeStatus !== 'Ended'" class="text-yellow-400 text-base font-normal cursor-pointer" @click="jumpWebsite('https://rewards.taskon.xyz/campaign/detail/18582')">Details>></p>
          </div>
        </div>
        <div class="mt-5 rounded-xl bg-while10 flex flex-col items-center" style="width:calc(33.3% - 1.25rem)">
          <div
            class="w-full rounded-t-lg flex items-center justify-center h-11 text-xl"
            :class="activeStatus === 'In Progress'?'bg-green-400 text-white':activeStatus === 'Coming Soon'?'bg-yellow250 text-black':'bg-gray-700 text-white'"
          >
            {{ activeStatus }}
          </div>
          <div class="flex justify-center mt-7 items-center">
            <img src="@/assets/img/carnival/FoxWallet-logo.png" class="w-10 h-10 mr-3 rounded-full" alt="Carnival Icon">
            <img src="@/assets/img/carnival/HorizonDEX.png" class="w-10 h-10 rounded-full" alt="Carnival Icon">
          </div>
          <p class="text-xl font-medium mt-3 text-white text-center">
            FoxWallet X HorizonDEX Joint Event
          </p>
          <p class="text-base font-normal text-gray-300 mt-7">Reward</p>
          <p class="text-xl font-medium text-white text-center">
            50U + 120 Fox Credits
          </p>
          <div class="border-t border-opacity-10 w-full mt-7 py-5 px-2 flex justify-between">
            <p class="text-white text-base font-normal">Time: Nov 9th - 27th 12:00 UTC</p>
            <p v-if="activeStatus !== 'Ended'" class="text-yellow-400 text-base font-normal cursor-pointer" @click="jumpWebsite('https://rewards.taskon.xyz/campaign/detail/18575')">Details>></p>
          </div>
        </div>
        <div class="mt-5 rounded-xl bg-while10 flex flex-col items-center" style="width:calc(33.3% - 1.25rem)">
          <div
            class="w-full rounded-t-lg flex items-center justify-center h-11 text-xl"
            :class="activeStatus === 'In Progress'?'bg-green-400 text-white':activeStatus === 'Coming Soon'?'bg-yellow250 text-black':'bg-gray-700 text-white'"
          >
            {{ activeStatus }}
          </div>
          <div class="flex justify-center mt-7">
            <img src="@/assets/img/carnival/FoxWallet-logo.png" class="w-10 h-10 mr-3 rounded-full" alt="Carnival Icon">
            <img src="@/assets/img/carnival/Oases.jpg" class="w-10 h-10 rounded-full" alt="Carnival Icon">
          </div>
          <p class="text-xl font-medium mt-3 text-white text-center">
            FoxWallet X Oases Joint Event
          </p>
          <p class="text-base font-normal text-gray-300 mt-7">Reward</p>
          <p class="text-xl font-medium text-white text-center">
            100U + 120 Fox Credits
          </p>
          <div class="border-t border-opacity-10 w-full mt-7 py-5 px-2 flex justify-between">
            <p class="text-white text-base font-normal">Time: Nov 9th - 27th 12:00 UTC</p>
            <p v-if="activeStatus !== 'Ended'" class="text-yellow-400 text-base font-normal cursor-pointer" @click="jumpWebsite('https://rewards.taskon.xyz/campaign/detail/18580')">Details>></p>
          </div>
        </div>
      </div>
      <div class="mt-5 flex justify-between">
        <div class="mt-5 rounded-xl bg-while10 flex flex-col items-center" style="width:calc(33.3% - 1.25rem)">
          <div
            class="w-full rounded-t-lg flex items-center justify-center h-11 text-xl"
            :class="activeStatus === 'In Progress'?'bg-green-400 text-white':activeStatus === 'Coming Soon'?'bg-yellow250 text-black':'bg-gray-700 text-white'"
          >
            {{ activeStatus }}
          </div>
          <div class="flex justify-center mt-7">
            <img src="@/assets/img/carnival/FoxWallet-logo.png" class="w-10 h-10 mr-3 rounded-full" alt="Carnival Icon">
            <img src="@/assets/img/carnival/Celer.png" class="w-10 h-10 rounded-full" alt="Carnival Icon">
          </div>
          <p class="text-xl font-medium mt-3 text-white text-center">
            FoxWallet X Celer
            <br/>Network Joint Event
          </p>
          <p class="text-base font-normal text-gray-300 mt-7">Reward</p>
          <p class="text-xl font-medium text-white text-center">
            Celer X FoxWallet NFT CAP
            <br/>+ 120 Fox Credits
          </p>
          <div class="border-t border-opacity-10 w-full mt-7 py-5 px-2 flex justify-between">
            <p class="text-white text-base font-normal">Time: Nov 9th - 27th 12:00 UTC</p>
            <p v-if="activeStatus !== 'Ended'" class="text-yellow-400 text-base font-normal cursor-pointer" @click="jumpWebsite('https://rewards.taskon.xyz/campaign/detail/18577')">Details>></p>
          </div>
        </div>
        <div class="mt-5 rounded-xl bg-while10 flex flex-col items-center" style="width:calc(33.3% - 1.25rem)">
          <div
            class="w-full rounded-t-lg flex items-center justify-center h-11 text-xl"
            :class="activeStatus === 'In Progress'?'bg-green-400 text-white':activeStatus === 'Coming Soon'?'bg-yellow250 text-black':'bg-gray-700 text-white'"
          >
            {{ activeStatus }}
          </div>
          <div class="flex justify-center mt-7">
            <img src="@/assets/img/carnival/FoxWallet-logo.png" class="w-10 h-10 mr-3 rounded-full" alt="Carnival Icon">
            <img src="@/assets/img/carnival/Market.png" class="w-auto h-10" alt="Carnival Icon">
          </div>
          <p class="text-xl font-medium mt-3 text-white text-center">
            FoxWallet X LULU
            <br/>Market Joint Event
          </p>
          <p class="text-base font-normal text-gray-300 mt-7">Reward</p>
          <p class="text-xl font-medium text-white text-center">
            100 LULU Treasury Boxes
            <br/>+ 120 Fox Credits
          </p>
          <div class="border-t border-opacity-10 w-full mt-7 py-5 px-2 flex justify-between">
            <p class="text-white text-base font-normal">Time: Nov 9th - 27th 12:00 UTC</p>
            <p v-if="activeStatus !== 'Ended'" class="text-yellow-400 text-base font-normal cursor-pointer" @click="jumpWebsite('https://rewards.taskon.xyz/campaign/detail/18581')">Details>></p>
          </div>
        </div>
        <div class="mt-5 rounded-xl bg-while10 flex flex-col items-center" style="width:calc(33.3% - 1.25rem)">
          <div
            class="w-full rounded-t-lg flex items-center justify-center h-11 text-xl"
            :class="activeStatus === 'In Progress'?'bg-green-400 text-white':activeStatus === 'Coming Soon'?'bg-yellow250 text-black':'bg-gray-700 text-white'"
          >
            {{ activeStatus }}
          </div>
          <div class="flex justify-center mt-7">
            <img src="@/assets/img/carnival/FoxWallet-logo.png" class="w-10 h-10 mr-0 rounded-full" alt="Carnival Icon">
            <img src="@/assets/img/carnival/FileMarket.png" class="w-auto h-20 -mt-5" alt="Carnival Icon">
          </div>
          <p class="text-xl font-medium -mt-2 text-white text-center">
            FoxWallet X FileMarket
            <br/>Joint Event
          </p>
          <p class="text-base font-normal text-gray-300 mt-7">Reward</p>
          <p class="text-xl font-medium text-white text-center">
            120 Fox Credits + 10 FileBunnies
            <br/>EFT（worth $500)
          </p>
          <div class="border-t border-opacity-10 w-full mt-7 py-5 px-2 flex justify-between">
            <p class="text-white text-base font-normal">Time: Nov 9th - 27th 12:00 UTC</p>
            <p v-if="activeStatus !== 'Ended'" class="text-yellow-400 text-base font-normal cursor-pointer" @click="jumpWebsite('https://rewards.taskon.xyz/campaign/detail/18397')">Details>></p>
          </div>
        </div>
      </div>
      <div class="mt-5 flex justify-between">
        <div class="mt-5 rounded-xl bg-while10 flex flex-col items-center" style="width:calc(33.3% - 1.25rem)">
          <div
            class="w-full rounded-t-lg flex items-center justify-center h-11 text-xl"
            :class="activeStatus === 'In Progress'?'bg-green-400 text-white':activeStatus === 'Coming Soon'?'bg-yellow250 text-black':'bg-gray-700 text-white'"
          >
            {{ activeStatus }}
          </div>
          <div class="flex justify-center mt-7">
            <img src="@/assets/img/carnival/FoxWallet-logo.png" class="w-10 h-10 mr-3 rounded-full" alt="Carnival Icon">
            <img src="@/assets/img/carnival/ReactorFusion.png" class="w-10 h-10 rounded-full" alt="Carnival Icon">
          </div>
          <p class="text-xl font-medium mt-3 text-white text-center">
            FoxWallet X ReactorFusion
            <br/>Joint Event
          </p>
          <p class="text-base font-normal text-gray-300 mt-7">Reward</p>
          <p class="text-xl font-medium text-white text-center">
            100U + 120 Fox Credits
          </p>
          <div class="border-t border-opacity-10 w-full mt-7 py-5 px-2 flex justify-between">
            <p class="text-white text-base font-normal">Time: Nov 9th - 27th 12:00 UTC</p>
            <p v-if="activeStatus !== 'Ended'" class="text-yellow-400 text-base font-normal cursor-pointer" @click="jumpWebsite('https://rewards.taskon.xyz/campaign/detail/18578')">Details>></p>
          </div>
        </div>
        <div class="mt-5 rounded-xl bg-while10 flex flex-col items-center" style="width:calc(33.3% - 1.25rem)">
          <div
            class="w-full rounded-t-lg flex items-center justify-center h-11 text-xl"
            :class="activeStatus === 'In Progress'?'bg-green-400 text-white':activeStatus === 'Coming Soon'?'bg-yellow250 text-black':'bg-gray-700 text-white'"
          >
            {{ activeStatus }}
          </div>
          <div class="flex justify-center mt-7">
            <img src="@/assets/img/carnival/FoxWallet-logo.png" class="w-10 h-10 mr-3 rounded-full" alt="Carnival Icon">
            <img src="@/assets/img/carnival/Carbon.png" class="w-10 h-10 rounded-full" alt="Carnival Icon">
          </div>
          <p class="text-xl font-medium mt-3 text-white text-center">
            FoxWallet X Carbon
            <br/>Browser Joint Event
          </p>
          <p class="text-base font-normal text-gray-300 mt-7">Reward</p>
          <p class="text-xl font-medium text-white text-center">
            100U + 120 Fox Credits
          </p>
          <div class="border-t border-opacity-10 w-full mt-7 py-5 px-2 flex justify-between">
            <p class="text-white text-base font-normal">Time: Nov 9th - 27th 12:00 UTC</p>
            <p v-if="activeStatus !== 'Ended'" class="text-yellow-400 text-base font-normal cursor-pointer" @click="jumpWebsite('https://rewards.taskon.xyz/campaign/detail/18583')">Details>></p>
          </div>
        </div>
        <div class="mt-5 rounded-xl bg-while10 flex flex-col items-center" style="width:calc(33.3% - 1.25rem)">
          <div
            class="w-full rounded-t-lg flex items-center justify-center h-11 text-xl"
            :class="activeStatus === 'In Progress'?'bg-green-400 text-white':activeStatus === 'Coming Soon'?'bg-yellow250 text-black':'bg-gray-700 text-white'"
          >
            {{ activeStatus }}
          </div>
          <div class="flex justify-center mt-7">
            <img src="@/assets/img/carnival/FoxWallet-logo.png" class="w-10 h-10 mr-3 rounded-full" alt="Carnival Icon">
            <img src="@/assets/img/carnival/Relation.png" class="w-10 h-10 rounded-full" alt="Carnival Icon">
          </div>
          <p class="text-xl font-medium mt-3 text-white text-center">
            FoxWallet X Relation
            <br/>Joint Event
          </p>
          <p class="text-base font-normal text-gray-300 mt-7">Reward</p>
          <p class="text-xl font-medium text-white text-center">
            100U + 120 Fox Credits
          </p>
          <div class="border-t border-opacity-10 w-full mt-7 py-5 px-2 flex justify-between">
            <p class="text-white text-base font-normal">Time: Nov 9th - 27th 12:00 UTC</p>
            <p v-if="activeStatus !== 'Ended'" class="text-yellow-400 text-base font-normal cursor-pointer" @click="jumpWebsite('https://taskon.xyz/campaign/detail/18927')">Details>></p>
          </div>
        </div>
      </div>
      <div class="mt-5 flex justify-between">
        <div class="mt-5 rounded-xl bg-while10 flex flex-col items-center" style="width:calc(33.3% - 1.25rem)">
          <div
            class="w-full rounded-t-lg flex items-center justify-center h-11 text-xl"
            :class="activeStatus === 'In Progress'?'bg-green-400 text-white':activeStatus === 'Coming Soon'?'bg-yellow250 text-black':'bg-gray-700 text-white'"
          >
            {{ activeStatus }}
          </div>
          <div class="flex justify-center mt-7">
            <img src="@/assets/img/carnival/FoxWallet-logo.png" class="w-10 h-10 mr-3 rounded-full" alt="Carnival Icon">
            <img src="@/assets/img/carnival/Swapter.jpg" class="w-10 h-10 rounded-full" alt="Carnival Icon">
          </div>
          <p class="text-xl font-medium mt-3 text-white text-center">
            FoxWallet X Swapter
            <br/>
            Joint Event
          </p>
          <p class="text-base font-normal text-gray-300 mt-7">Reward</p>
          <p class="text-xl font-medium text-white text-center">
            100U + 120 Fox Credits
          </p>
          <div class="border-t border-opacity-10 w-full mt-7 py-5 px-2 flex justify-between">
            <p class="text-white text-base font-normal">Time: Nov 9th - 27th 12:00 UTC</p>
            <p v-if="activeStatus !== 'Ended'" class="text-yellow-400 text-base font-normal cursor-pointer" @click="jumpWebsite('https://rewards.taskon.xyz/campaign/detail/18928')">Details>></p>
          </div>
        </div>
        <div class="mt-5 rounded-xl bg-while10 flex flex-col items-center" style="width:calc(33.3% - 1.25rem)">
          <div
            class="w-full rounded-t-lg flex items-center justify-center h-11 text-xl"
            :class="activeStatus2 === 'In Progress'?'bg-green-400 text-white':activeStatus2 === 'Coming Soon'?'bg-yellow250 text-black':'bg-gray-700 text-white'"
          >
            {{ activeStatus2 }}
          </div>
          <div class="flex justify-center mt-7">
            <img src="@/assets/img/carnival/FoxWallet-logo.png" class="w-10 h-10 mr-3 rounded-full" alt="Carnival Icon">
            <img src="@/assets/img/carnival/Cattie.jpg" class="w-10 h-10 rounded-full" alt="Carnival Icon">
          </div>
          <p class="text-xl font-medium mt-3 text-white text-center">
            FoxWallet X Cattie
            <br/>
            Swap Joint Event
          </p>
          <p class="text-base font-normal text-gray-300 mt-7">Reward</p>
          <p class="text-xl font-medium text-white text-center">
            15 Meowshare LV2 + 120
            <br/>
            Fox Credits
          </p>
          <div class="border-t border-opacity-10 w-full mt-7 py-5 px-2 flex justify-between">
            <p class="text-white text-base font-normal">Time: Nov 14th - 27th 12:00 UTC</p>
            <p v-if="activeStatus2 !== 'Ended'" class="text-yellow-400 text-base font-normal cursor-pointer" @click="jumpWebsite('https://rewards.taskon.xyz/campaign/detail/20243')">Details>></p>
          </div>
        </div>
        <div class="mt-5 rounded-xl bg-while10 flex flex-col items-center" style="width:calc(33.3% - 1.25rem)">
          <div
            class="w-full rounded-t-lg flex items-center justify-center h-11 text-xl"
            :class="activeStatus2 === 'In Progress'?'bg-green-400 text-white':activeStatus2 === 'Coming Soon'?'bg-yellow250 text-black':'bg-gray-700 text-white'"
          >
            {{ activeStatus2 }}
          </div>
          <div class="flex justify-center mt-7">
            <img src="@/assets/img/carnival/FoxWallet-logo.png" class="w-10 h-10 mr-3 rounded-full" alt="Carnival Icon">
            <img src="@/assets/img/carnival/iZUMi.jpg" class="w-10 h-10 rounded-full" alt="Carnival Icon">
          </div>
          <p class="text-xl font-medium mt-3 text-white text-center">
            FoxWallet X iZUMi
            <br/>
            Finance Joint Event
          </p>
          <p class="text-base font-normal text-gray-300 mt-7">Reward</p>
          <p class="text-xl font-medium text-white text-center">
            iPoints + 120 Fox Credits
          </p>
          <div class="border-t border-opacity-10 w-full mt-7 py-5 px-2 flex justify-between">
            <p class="text-white text-base font-normal">Time: Nov 14th - 27th 12:00 UTC</p>
            <p v-if="activeStatus2 !== 'Ended'" class="text-yellow-400 text-base font-normal cursor-pointer" @click="jumpWebsite('https://rewards.taskon.xyz/campaign/detail/20194')">Details>></p>
          </div>
        </div>
      </div>
      <div class="mt-5 flex justify-between">
        <div class="mt-5 rounded-xl bg-while10 flex flex-col items-center" style="width:calc(33.3% - 1.25rem)">
          <div
            class="w-full rounded-t-lg flex items-center justify-center h-11 text-xl"
            :class="activeStatus2 === 'In Progress'?'bg-green-400 text-white':activeStatus2 === 'Coming Soon'?'bg-yellow250 text-black':'bg-gray-700 text-white'"
          >
            {{ activeStatus2 }}
          </div>
          <div class="flex justify-center mt-7">
            <img src="@/assets/img/carnival/FoxWallet-logo.png" class="w-10 h-10 mr-3 rounded-full" alt="Carnival Icon">
            <img src="@/assets/img/carnival/Kinza.jpg" class="w-10 h-10 rounded-full" alt="Carnival Icon">
          </div>
          <p class="text-xl font-medium mt-3 text-white text-center">
            FoxWallet X Kinza Finance Joint Event
          </p>
          <p class="text-base font-normal text-gray-300 mt-7">Reward</p>
          <p class="text-xl font-medium text-white text-center">
            100U + 120 Fox Credits
          </p>
          <div class="border-t border-opacity-10 w-full mt-7 py-5 px-2 flex justify-between">
            <p class="text-white text-base font-normal">Time: Nov 14th - 27th 12:00 UTC</p>
            <p v-if="activeStatus2 !== 'Ended'" class="text-yellow-400 text-base font-normal cursor-pointer" @click="jumpWebsite('https://rewards.taskon.xyz/campaign/detail/20244')">Details>></p>
          </div>
        </div>
        <div class="mt-5 rounded-xl bg-while10 flex flex-col items-center" style="width:calc(33.3% - 1.25rem)">
          <div
            class="w-full rounded-t-lg flex items-center justify-center h-11 text-xl"
            :class="activeStatus2 === 'In Progress'?'bg-green-400 text-white':activeStatus2 === 'Coming Soon'?'bg-yellow250 text-black':'bg-gray-700 text-white'"
          >
            {{ activeStatus2 }}
          </div>
          <div class="flex justify-center mt-7">
            <img src="@/assets/img/carnival/FoxWallet-logo.png" class="w-10 h-10 mr-3 rounded-full" alt="Carnival Icon">
            <img src="@/assets/img/carnival/STP.png" class="w-10 h-10 rounded-full" alt="Carnival Icon">
          </div>
          <p class="text-xl font-medium mt-3 text-white text-center">
            FoxWallet X STP Joint Event
          </p>
          <p class="text-base font-normal text-gray-300 mt-7">Reward</p>
          <p class="text-xl font-medium text-white text-center">
            100U + 120 Fox Credits
          </p>
          <div class="border-t border-opacity-10 w-full mt-7 py-5 px-2 flex justify-between">
            <p class="text-white text-base font-normal">Time: Nov 14th - 27th 12:00 UTC</p>
            <p v-if="activeStatus2 !== 'Ended'" class="text-yellow-400 text-base font-normal cursor-pointer" @click="jumpWebsite('https://rewards.taskon.xyz/campaign/detail/20246')">Details>></p>
          </div>
        </div>
        <div class="mt-5 rounded-xl bg-while10 flex flex-col items-center" style="width:calc(33.3% - 1.25rem)">
          <div
            class="w-full rounded-t-lg flex items-center justify-center h-11 text-xl"
            :class="activeStatus2 === 'In Progress'?'bg-green-400 text-white':activeStatus2 === 'Coming Soon'?'bg-yellow250 text-black':'bg-gray-700 text-white'"
          >
            {{ activeStatus2 }}
          </div>
          <div class="flex justify-center mt-7">
            <img src="@/assets/img/carnival/FoxWallet-logo.png" class="w-10 h-10 mr-3 rounded-full" alt="Carnival Icon">
            <img src="@/assets/img/carnival/Adventure.jpg" class="w-10 h-10 rounded-full" alt="Carnival Icon">
          </div>
          <p class="text-xl font-medium mt-3 text-white text-center">
            FoxWallet X Adventure Gold Joint Event
          </p>
          <p class="text-base font-normal text-gray-300 mt-7">Reward</p>
          <p class="text-xl font-medium text-white text-center">
            100U + 120 Fox Credits
          </p>
          <div class="border-t border-opacity-10 w-full mt-7 py-5 px-2 flex justify-between">
            <p class="text-white text-base font-normal">Time: Nov 14th - 27th 12:00 UTC</p>
            <p v-if="activeStatus2 !== 'Ended'" class="text-yellow-400 text-base font-normal cursor-pointer" @click="jumpWebsite('https://rewards.taskon.xyz/campaign/detail/20250')">Details>></p>
          </div>
        </div>
      </div>
      <div class="mt-5 flex justify-between">
        <div class="mt-5 rounded-xl bg-while10 flex flex-col items-center" style="width:calc(33.3% - 1.25rem)">
          <div
            class="w-full rounded-t-lg flex items-center justify-center h-11 text-xl"
            :class="activeStatus2 === 'In Progress'?'bg-green-400 text-white':activeStatus2 === 'Coming Soon'?'bg-yellow250 text-black':'bg-gray-700 text-white'"
          >
            {{ activeStatus2 }}
          </div>
          <div class="flex justify-center mt-7">
            <img src="@/assets/img/carnival/FoxWallet-logo.png" class="w-10 h-10 mr-3 rounded-full" alt="Carnival Icon">
            <img src="@/assets/img/carnival/Aleoswap.jpg" class="w-10 h-10 rounded-full" alt="Carnival Icon">
          </div>
          <p class="text-xl font-medium mt-3 text-white text-center">
            FoxWallet X Aleoswap Joint Event
          </p>
          <p class="text-base font-normal text-gray-300 mt-7">Reward</p>
          <p class="text-xl font-medium text-white text-center">
            100U + 120 Fox Credits
          </p>
          <div class="border-t border-opacity-10 w-full mt-7 py-5 px-2 flex justify-between">
            <p class="text-white text-base font-normal">Time: Nov 14th - 27th 12:00 UTC</p>
            <p v-if="activeStatus2 !== 'Ended'" class="text-yellow-400 text-base font-normal cursor-pointer" @click="jumpWebsite('https://rewards.taskon.xyz/campaign/detail/20252')">Details>></p>
          </div>
        </div>
        <div class="mt-5 rounded-xl bg-while10 flex flex-col items-center" style="width:calc(33.3% - 1.25rem)">
          <div
            class="w-full rounded-t-lg flex items-center justify-center h-11 text-xl"
            :class="activeStatus2 === 'In Progress'?'bg-green-400 text-white':activeStatus2 === 'Coming Soon'?'bg-yellow250 text-black':'bg-gray-700 text-white'"
          >
            {{ activeStatus2 }}
          </div>
          <div class="flex justify-center mt-7">
            <img src="@/assets/img/carnival/FoxWallet-logo.png" class="w-10 h-10 mr-3 rounded-full" alt="Carnival Icon">
            <img src="@/assets/img/carnival/Konnect.jpg" class="w-10 h-10 rounded-full" alt="Carnival Icon">
          </div>
          <p class="text-xl font-medium mt-3 text-white text-center">
            FoxWallet X Konnect Joint Event
          </p>
          <p class="text-base font-normal text-gray-300 mt-7">Reward</p>
          <p class="text-xl font-medium text-white text-center">
            5000KCT + 120 Fox Credits
          </p>
          <div class="border-t border-opacity-10 w-full mt-7 py-5 px-2 flex justify-between">
            <p class="text-white text-base font-normal">Time: Nov 14th - 27th 12:00 UTC</p>
            <p v-if="activeStatus2 !== 'Ended'" class="text-yellow-400 text-base font-normal cursor-pointer" @click="jumpWebsite('https://rewards.taskon.xyz/campaign/detail/20253')">Details>></p>
          </div>
        </div>
        <div class="mt-5 rounded-xl bg-while10 flex flex-col items-center" style="width:calc(33.3% - 1.25rem)">
          <div
            class="w-full rounded-t-lg flex items-center justify-center h-11 text-xl"
            :class="activeStatus2 === 'In Progress'?'bg-green-400 text-white':activeStatus2 === 'Coming Soon'?'bg-yellow250 text-black':'bg-gray-700 text-white'"
          >
            {{ activeStatus2 }}
          </div>
          <div class="flex justify-center mt-7">
            <img src="@/assets/img/carnival/FoxWallet-logo.png" class="w-10 h-10 mr-3 rounded-full" alt="Carnival Icon">
            <img src="@/assets/img/carnival/zkLink.png" class="w-10 h-10 rounded-full" alt="Carnival Icon">
          </div>
          <p class="text-xl font-medium mt-3 text-white text-center">
            FoxWallet X zkLink Joint Event
          </p>
          <p class="text-base font-normal text-gray-300 mt-7">Reward</p>
          <p class="text-xl font-medium text-white text-center">
            100U + 120 Fox Credits
          </p>
          <div class="border-t border-opacity-10 w-full mt-7 py-5 px-2 flex justify-between">
            <p class="text-white text-base font-normal">Time: Nov 21st - 27th 12:00 UTC</p>
            <p v-if="activeStatus2 !== 'Ended'" class="text-yellow-400 text-base font-normal cursor-pointer" @click="jumpWebsite('https://rewards.taskon.xyz/campaign/detail/22207')">Details>></p>
          </div>
        </div>
      </div>
      <div class="mt-5 flex justify-between">
        <div class="mt-5 rounded-xl bg-while10 flex flex-col items-center" style="width:calc(33.3% - 1.25rem)">
          <div
            class="w-full rounded-t-lg flex items-center justify-center h-11 text-xl"
            :class="activeStatus2 === 'In Progress'?'bg-green-400 text-white':activeStatus2 === 'Coming Soon'?'bg-yellow250 text-black':'bg-gray-700 text-white'"
          >
            {{ activeStatus2 }}
          </div>
          <div class="flex justify-center mt-7">
            <img src="@/assets/img/carnival/FoxWallet-logo.png" class="w-10 h-10 mr-3 rounded-full" alt="Carnival Icon">
            <img src="@/assets/img/carnival/Aggre.jpg" class="w-10 h-10 rounded-full" alt="Carnival Icon">
          </div>
          <p class="text-xl font-medium mt-3 text-white text-center">
            FoxWallet X Aggre Joint Event
          </p>
          <p class="text-base font-normal text-gray-300 mt-7">Reward</p>
          <p class="text-xl font-medium text-white text-center">
            50 Tracker Pass NFT + 120 Fox Credits
          </p>
          <div class="border-t border-opacity-10 w-full mt-7 py-5 px-2 flex justify-between">
            <p class="text-white text-base font-normal">Time: Nov 21st - 27th 12:00 UTC</p>
            <p v-if="activeStatus2 !== 'Ended'" class="text-yellow-400 text-base font-normal cursor-pointer" @click="jumpWebsite('https://rewards.taskon.xyz/campaign/detail/20945')">Details>></p>
          </div>
        </div>
        <div class="mt-5 rounded-xl bg-while10 flex flex-col items-center" style="width:calc(33.3% - 1.25rem)">
          <div
            class="w-full rounded-t-lg flex items-center justify-center h-11 text-xl"
            :class="activeStatus2 === 'In Progress'?'bg-green-400 text-white':activeStatus2 === 'Coming Soon'?'bg-yellow250 text-black':'bg-gray-700 text-white'"
          >
            {{ activeStatus2 }}
          </div>
          <div class="flex justify-center mt-7">
            <img src="@/assets/img/carnival/FoxWallet-logo.png" class="w-10 h-10 mr-3 rounded-full" alt="Carnival Icon">
            <img src="@/assets/img/carnival/DappGate.jpg" class="w-10 h-10 rounded-full" alt="Carnival Icon">
          </div>
          <p class="text-xl font-medium mt-3 text-white text-center">
            FoxWallet X DappGate Joint Event
          </p>
          <p class="text-base font-normal text-gray-300 mt-7">Reward</p>
          <p class="text-xl font-medium text-white text-center">
            50 Tracker Pass NFT + 120 Fox Credits
          </p>
          <div class="border-t border-opacity-10 w-full mt-7 py-5 px-2 flex justify-between">
            <p class="text-white text-base font-normal">Time: Nov 21st - 27th 12:00 UTC</p>
            <p v-if="activeStatus2 !== 'Ended'" class="text-yellow-400 text-base font-normal cursor-pointer" @click="jumpWebsite('https://rewards.taskon.xyz/campaign/detail/21285')">Details>></p>
          </div>
        </div>
        <div style="width:calc(33.3% - 1.25rem)">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'AnniversaryCarnival',
  data() {
    return {
      activeStatus: '',
      activeStatus2: '',
    }
  },
  computed: {},
  methods: {
    jumpWebsite(value) {
      window.open(value, '_blank')
    },
  },
  mounted() {
    // activeStatus
    const startUtcTime = '2023-11-09T12:00:00Z' // 活动起始时间 Nov 9th 12:00 UTC
    const startTimestamp = new Date(startUtcTime).getTime() // 活动起始时间时间戳（UTC格式）

    const endUtcTime = '2023-11-27T12:00:00Z' // 活动结束时间 Nov 27th 12:00 UTC
    const endTimestamp = new Date(endUtcTime).getTime() // 活动起始时间时间戳（UTC格式）

    const now = new Date()
    const nowUtcTime = now.toISOString() // 当前时间（UTC格式）
    const nowTimestamp = new Date(nowUtcTime).getTime()// 当前时间时间戳（UTC格式）

    if (Number(nowTimestamp) < Number(startTimestamp)) {
      this.activeStatus = 'Coming Soon'
    }
    if (Number(startTimestamp) < Number(nowTimestamp) && Number(nowTimestamp) < Number(endTimestamp)) {
      this.activeStatus = 'In Progress'
    }
    if (Number(nowTimestamp) > Number(endTimestamp)) {
      this.activeStatus = 'Ended'
    }

    // activeStatus2
    const startUtcTime2 = '2023-11-14T12:00:00Z' // 活动起始时间 Nov 14th 12:00 UTC
    const startTimestamp2 = new Date(startUtcTime2).getTime() // 活动起始时间时间戳（UTC格式）

    const endUtcTime2 = '2023-11-27T12:00:00Z' // 活动结束时间 Nov 27th 12:00 UTC
    const endTimestamp2 = new Date(endUtcTime2).getTime() // 活动起始时间时间戳（UTC格式）

    const now2 = new Date()
    const nowUtcTime2 = now2.toISOString() // 当前时间（UTC格式）
    const nowTimestamp2 = new Date(nowUtcTime2).getTime()// 当前时间时间戳（UTC格式）

    if (Number(nowTimestamp2) < Number(startTimestamp2)) {
      this.activeStatus2 = 'Coming Soon'
    }
    if (Number(startTimestamp2) < Number(nowTimestamp2) && Number(nowTimestamp2) < Number(endTimestamp2)) {
      this.activeStatus2 = 'In Progress'
    }
    if (Number(nowTimestamp2) > Number(endTimestamp2)) {
      this.activeStatus2 = 'Ended'
    }
  },
}
</script>
