<template>
  <div class="bg-black px-32 pb-36">
    <div class="ad-wrapper mx-auto">
      <div class="text-8xl font-bold text-center text-white mb-20">
        Our <span class="text-brand">Advantages</span>
      </div>
      <div class="">
        <div class="flex justify-between mb-20">
          <AdCard icon="01" title="Security as a Priority" content="FoxWallet is well aware of the importance of security, so it adopts a local encryption method to store private keys to ensure the absolute safety of users' assets and data, completely eliminating external access and potential data leakage risks.">
            <img src="@/assets/new-img/advantages/01.svg" alt="01">
          </AdCard>

          <img src="@/assets/new-img/advantages/05.svg" alt="main">
          <AdCard icon="02" title="Transparent Auditing" content="In order to enhance credibility, FoxWallet's source code is completely open to the outside world and has undergone strict third-party security audits. These measures reflect our commitment to security and transparency.">
            <img src="@/assets/new-img/advantages/02.svg" alt="01">
          </AdCard>
        </div>
        <div class="flex justify-between">
          <AdCard icon="03" title="Comprehensive Chain Support" content="Supports more than 50 mainstream chains, such as Bitcoin, Ethereum, Solana, etc., and fully supports NFT and BRC20 standards, providing a wide range of asset management services for users with different needs.">
            <img src="@/assets/new-img/advantages/03.svg" alt="01">
          </AdCard>

          <AdCard icon="03" title="User trust" content="Having won the trust of more than one million users, especially in communities such as Filecoin, Iron Fish and Spacemesh, FoxWallet is highly praised for its reliability and professionalism.">
            <img src="@/assets/new-img/advantages/04.svg" alt="01">
          </AdCard>

          <AdCard icon="04" title="Advanced security features" content="FoxWallet also provides additional security features, such as automatically identifying and blocking phishing websites, high-risk signature verification, and Token authorization monitoring to comprehensively protect user asset security.">
            <img src="@/assets/new-img/advantages/05.svg" alt="01">
          </AdCard>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .ad-wrapper {
    width: 1200px;
  }
</style>
