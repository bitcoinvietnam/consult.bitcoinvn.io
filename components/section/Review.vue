<template>
  <ClientOnly>
    <section id="review" class="section bg-dark-blue/20">
      <div class="section-ctn">
        <div class="header">
          Happy Customers
        </div>
        <carousel class="pt-5" :data="customers" :indicators="false" indicator-type="false" :controls="true"
          :autoplay="true" :interval=4000 v-bind:slide-on-swipe="true">
        </carousel>
      </div>
    </section>
  </ClientOnly>
</template>

<script>
import Customer from '../Customer.vue'

export default {
  data() {
    return {
      customers: [{
        name: 'John Smith',
        title: 'Laundry CEO',
        quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus minima neque tempora reiciendis.',
        imgPath: '/images/person-1.webp'
      },
      {
        name: 'John Smith',
        title: 'Laundry CEO',
        quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus minima neque tempora reiciendis.',
        imgPath: '/images/person-2.webp'
      },
      {
        name: 'John Smith',
        title: 'Laundry CEO',
        quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus minima neque tempora reiciendis.',
        imgPath: '/images/person-3.webp'
      }].map((customer, index) => {
        return {
          id: index,
          content(createElement, content) {
            return createElement(Customer, {
              props: customer
            });
          },
        }
      }
      )
    }
  }
}
</script>