<template>
  <section id="contact" class="bg-gray-100 section">
    <div class="w-full md:w-3/6 section-ctn">
      <div class="header">
        Contact Us
      </div>
      <div class="paragraph">
        <form class="flex flex-col">
          <label for="email" class="pt-3 pb-3 font-bold">Your Email Address:</label>
          <input type="text" id="email"
            class="w-full p-3 text-lg font-bold text-center rounded-lg bg-dark-blue/10 text-dark-blue" />
          <label for="message" class="pt-6 pb-3 font-bold">Your Message:</label>
          <textarea id="email" rows="5" class="w-full p-3 rounded-lg bg-dark-blue/10 text-dark-blue " />
        </form>
        <div class="pt-5 text-center">
          We will reach back to you soon!
        </div>
      </div>
      <div class="pt-3">
        <Button>Submit</Button>
      </div>
    </div>
  </section>
</template>