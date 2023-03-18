<template>
  <ClientOnly>
    <div>
      <carousel :data="carousel" indicator-type="disc" :controls="true" :autoplay="true" :interval=4000
        v-bind:slide-on-swipe="true">
      </carousel>
    </div>
  </ClientOnly>
</template>

<script>
// const cards = ref([{
//   imgPath: '~/images/bg-3.jpg',
//   title: 'Crypto Business Solutions',
//   caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
// }, {
//   imgPath: '~/images/bg-2.jpg',
//   title: 'Cyber Security Solutions',
//   caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
// },
// {
//   imgPath: '~/images/bg-1.jpg',
//   title: 'Vietnam Remittances',
//   caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
// }])
// const carousel = ref(cards.value.map(card =>
// (function VueCarouselItem() {
//   return h(resolveComponent('CarouselCard'), {
//     title: card.title,
//     caption: card.caption,
//     imgPath: card.imgPath
//   })
// })))
import Card1 from '../carousel/Card1.vue';
import Card2 from '../carousel/Card2.vue';
import Card3 from '../carousel/Card3.vue';

export default {
  data() {
    return {
      carousel: [
        {
          id: 0,
          content(createElement, content) {
            return createElement(Card1);
          },
        },
        {
          id: 1,
          content(createElement, content) {
            return createElement(Card2);
          },
        },
        {
          id: 2,
          content(createElement, content) {
            return createElement(Card3);
          },
        },
      ],
    }
  },
}
</script>