<template>
  <section id="intro" class="text-white section bg-gray-900/40">
    <div class="flex flex-col space-y-3 section-ctn">
      <div class="flex pt-10 tracking-wider normal-case text-gold-500 header">
        <div class="flex flex-row mx-auto space-x-2">
          <div>
            <!-- HERE AT -->
          </div>
          <LogoBitcoinVN :displayConsultingText="false" />
        </div>
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
        <NuxtLink to="/contact">
          <button
            class="h-12 font-semibold tracking-wider text-white uppercase rounded-full hover:border-2 w-60 bg-gradient-to-r from-gold-500/60 to-gold-500/90 border-dark-blue hover:border-white">
            Contact Us
          </button>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>