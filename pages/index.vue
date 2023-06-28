<template>
  <div class="bg-fixed bg-center bg-no-repeat bg-cover bg-[url('~/assets/images/bg-3.jpg')]">
    <SectionIntro />
    <NavTop />
    <!-- <SectionMain />
    <SectionAbout />
    <SectionTeam />
    <SectionService />
    <SectionReview />
    <SectionPricing />
    <SectionFaq /> -->
    <NavFooter />
  </div>
</template>

<script>
import Vue from 'vue'
import VueCarousel from '@chenfengyuan/vue-carousel'
Vue.use(VueCarousel);

export default Vue.extend({
  name: 'IndexPage'
})
</script>
