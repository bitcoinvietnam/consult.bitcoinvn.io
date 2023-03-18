<template>
  <section id="team" class="bg-dark-blue/10 section">
    <div class="section-ctn">
      <div class="header">
        Meet Our Team
      </div>
      <div class="paragraph">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus minima neque tempora reiciendis.
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3">
        <div v-for="consultant in consultants" :key="consultant.name" class="">
          <div class="py-5 md:px-14">
            <div class="flex justify-center flex-rows">
              <NuxtImg :src="consultant.imgPath" class="rounded-full w-52 h-52 md:w-64 md:h-64" />
            </div>
            <div class="pt-3 text-xl font-bold text-dark-blue">
              {{ consultant.name }}
            </div>
            <div class="pt-1">
              {{ consultant.title }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      consultants: [{
        name: 'Consultant 1',
        imgPath: '/images/person-1.webp',
        title: 'Founder',
        twitter: 'https://twitter.com/'
      },
      {
        name: 'Consultant 2',
        imgPath: '/images/person-2.webp',
        title: 'CEO',
        twitter: 'https://twitter.com/'
      },
      {
        name: 'Consultant 3',
        imgPath: '/images/person-3.webp',
        title: 'Engineer',
        twitter: 'https://twitter.com/'
      }]
    }
  }
}
</script>