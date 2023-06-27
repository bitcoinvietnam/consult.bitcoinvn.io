<template>
  <div class="bg-fixed bg-center bg-no-repeat bg-cover bg-[url('~/assets/images/bg-3.jpg')]">
    <NavTop />
    <SectionContact />
    <NavFooter />
  </div>
</template>

<script>
import Vue from 'vue'
import VueCarousel from '@chenfengyuan/vue-carousel'
Vue.use(VueCarousel);

export default Vue.extend({
  name: 'ContactPage'
})
</script>