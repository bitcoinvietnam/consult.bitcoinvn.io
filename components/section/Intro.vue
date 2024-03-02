<template>
  <section id="intro" class="text-white section bg-gray-900/40">
    <div class="section-ctn">
      <div class="flex flex-col space-y-3 ">
        <div class="mx-auto tracking-wider normal-case text-gold-500 header">
          <LogoBitcoinVN :displayConsultingText="false" />
        </div>
        <div class="flex flex-col space-y-1 leading-relaxed tracking-wide md:space-y-3 paragraph md:px-20 md:text-xl">
          <div>
            We are dedicated to helping you on your path to self-sovereignty.
          </div>
          <div>

            We want you to hold your keys and take control of your finances.
          </div>
          <div>

            And we are here to assist you every step of the way.
          </div>
          <div>
            Feel you could need our help or benefit from our guidance?
          </div>
        </div>
        <div>
          <button @click="contact"
            class="h-12 font-semibold tracking-wider text-white uppercase rounded-full hover:border-2 w-60 bg-gradient-to-r from-gold-500/60 to-gold-500/90 border-dark-blue hover:border-white">
            Contact Us
          </button>
        </div>
        <div
          class="flex flex-col space-y-1 text-sm leading-relaxed tracking-wide text-center text-gray-300 md:space-y-3 paragraph md:px-20 hover:text-white md:text-sm hover:underline hover:underline-offset-8 hover:decoration-1">
          <a href="https://newsletter.bitcoinvn.io/private-client?utm_source=consult&utm_medium=intro_section&utm_campaign=subscribe"
            target="_blank"> Or subscribe to our private client newsletter. </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    contact() {
      FreshworksWidget('open');
    }

  }
}
</script>