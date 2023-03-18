<template>
  <section id="faq" class=" section bg-dark-blue/10">
    <div class="section-ctn">
      <div class="header">
        Frequently Asked Questions
      </div>
      <div class="grid w-full grid-flow-row grid-cols-1 overflow-y-auto rounded-lg md:grid-cols-2 auto-rows-max">
        <div v-for="question in questions" :key="question.q" class="px-3">
          <div class="pt-5 text-lg font-bold text-left text-dark-blue">
            {{ question.q }}
          </div>
          <div class="pt-1 text-justify">
            {{ question.a }}
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
      questions: [{
        q: 'Where are you from?',
        a: 'Voluptatum nobis obcaecati perferendis dolor totam unde dolores quod maxime corporis officia et. Distinctio assumenda minima maiores.'
      }, {
        q: 'What is your opening time?',
        a: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.'
      },
      {
        q: 'What is your policy?',
        a: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.'
      }, {
        q: 'Can I pay in Bitcoin or VND?',
        a: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.'
      }]
    }
  }
}
</script>