<template>
  <div>
    <div class="advantage-wrapper mx-auto hidden md:block pb-36">
      <div class="text-8xl font-bold text-center text-white mb-20">
        {{ $t('main.our') }} <span class="text-brand">{{ $t('main.strengths') }}</span>
      </div>
      <div>
        <div class="flex justify-between mb-20">
          <AdCard :title="$t('advantages.ad1.title') " :content="$t('advantages.ad1.desp')">
            <img src="@/assets/new-img/advantages/01.svg" alt="01">
          </AdCard>
          <div class="advantage-card-banner">
            <MainBanner />
          </div>
          <AdCard :title="$t('advantages.ad2.title') " :content="$t('advantages.ad2.desp')">
            <img src="@/assets/new-img/advantages/02.svg" alt="01">
          </AdCard>
        </div>
        <div class="flex justify-between">
          <AdCard :title="$t('advantages.ad3.title') " :content="$t('advantages.ad3.desp')">
            <img src="@/assets/new-img/advantages/03.svg" alt="01">
          </AdCard>

          <AdCard :title="$t('advantages.ad4.title') " :content="$t('advantages.ad4.desp')">
            <img src="@/assets/new-img/advantages/04.svg" alt="01">
          </AdCard>

          <AdCard :title="$t('advantages.ad5.title') " :content="$t('advantages.ad5.desp')">
            <img src="@/assets/new-img/advantages/05.svg" alt="01">
          </AdCard>
        </div>
      </div>
    </div>
    <div class="px-5 md:hidden block pb-10">
      <div class="title-m font-bold text-center text-white mb-10">
        {{ $t('main.our') }} <span class="text-brand">{{ $t('main.strengths') }}</span>
      </div>
      <div>
        <div class="mb-10 flex justify-center">
          <MainBanner />
        </div>
        <div class="mb-10">
          <AdCard icon="01" title="Security as a Priority" content="FoxWallet is well aware of the importance of security, so it adopts a local encryption method to store private keys to ensure the absolute safety of users' assets and data, completely eliminating external access and potential data leakage risks.">
            <img src="@/assets/new-img/advantages/01.svg" alt="01">
          </AdCard>
        </div>
        <div class="mb-10">
          <AdCard icon="02" title="Transparent Auditing" content="In order to enhance credibility, FoxWallet's source code is completely open to the outside world and has undergone strict third-party security audits. These measures reflect our commitment to security and transparency.">
            <img src="@/assets/new-img/advantages/02.svg" alt="01">
          </AdCard>
        </div>
        <div class="mb-10">
          <AdCard icon="03" title="Comprehensive Chain Support" content="Supports more than 50 mainstream chains, such as Bitcoin, Ethereum, Solana, etc., and fully supports NFT and BRC20 standards, providing a wide range of asset management services for users with different needs.">
            <img src="@/assets/new-img/advantages/03.svg" alt="01">
          </AdCard>
        </div>
        <div class="mb-10">
          <AdCard icon="03" title="User trust" content="Having won the trust of more than one million users, especially in communities such as Filecoin, Iron Fish and Spacemesh, FoxWallet is highly praised for its reliability and professionalism.">
            <img src="@/assets/new-img/advantages/04.svg" alt="01">
          </AdCard>
        </div>
        <div class="mb-10">
          <AdCard icon="04" title="Advanced security features" content="FoxWallet also provides additional security features, such as automatically identifying and blocking phishing websites, high-risk signature verification, and Token authorization monitoring to comprehensively protect user asset security.">
            <img src="@/assets/new-img/advantages/05.svg" alt="01">
          </AdCard>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .advantage-wrapper {
    width: 1200px;
  }

  .title-m {
    font-size: 30px;
    line-height: 45px;
    font-weight: 600;
    font-family: 'Poppins-Bold';
  }
  .advantage-card-banner {
    margin-top: 170px;
  }
</style>
