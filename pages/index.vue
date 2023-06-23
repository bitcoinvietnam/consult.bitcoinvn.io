<template>
  <div class=" bg-[url('~/assets/images/bg-1.jpg')] bg-no-repeat bg-fixed bg-center bg-cover ">
    <NavTop />
    <!-- <SectionMain />
    <SectionAbout />
    <SectionTeam />
    <SectionService />
    <SectionReview />
    <SectionPricing />
    <SectionFaq /> -->
    <SectionIntro />
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
