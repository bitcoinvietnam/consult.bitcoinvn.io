<template>
  <div class="absolute top-0 w-full">
    <div class="flex justify-center h-14 md:h-[60px] bg-dark-blue-2/50">
      <div class="absolute left-4 top-3 md:left-5 md:top-[14px]">
        <NuxtLink to="/">
          <LogoBitcoinVN :displayConsultingText="true" />
        </NuxtLink>
      </div>
      <div class="flex flex-row m-auto text-white">
        <div v-for="item in items" :key="item.caption"
          class="px-2 hover:underline hover:underline-offset-8 hover:decoration-2">
          <NuxtLink :to="item.url">
            {{ item.caption }}
          </NuxtLink>
        </div>
      </div>
      <div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        // {
        // caption: "Home",
        // url: "/"
        // }, {
        //   caption: "About",
        //   url: "/#about"
        // }, {
        //   caption: "Our Team",
        //   url: "/#team"
        // }, {
        //   caption: "Services",
        //   url: "/#service"
        // }, {
        //   caption: "Pricing",
        //   url: "/#pricing"
        // }, {
        //   caption: "FAQs",
        //   url: "/#faq"
        //   }, {
        //     caption: "Contact",
        //     url: "/#contact"
        // }
      ]
    };
  },
  methods: {},
}
</script>
