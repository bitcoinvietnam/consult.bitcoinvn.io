<template>
  <div>
    <NavTop />
    <SectionMain />
    <SectionAbout />
    <SectionTeam />
    <SectionService />
    <SectionReview />
    <SectionPricing />
    <SectionFaq />
    <SectionContact />
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
