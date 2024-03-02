<template>
  <section id="contact" class="text-white bg-gray-900/70 section">
    <div class="w-full md:w-3/6 section-ctn ">
      <div class="text-gold-500 header">
        Contact Us
      </div>
      <div class="paragraph">
        <form class="flex flex-col">
          <label for="email" class="pt-3 pb-3 font-bold">Your Email Address:</label>
          <input type="text" v-model="email" id="email"
            class="w-full p-2 text-base font-bold text-center bg-gray-100 rounded-lg md:p-3 md:text-lg text-dark-blue" />
          <div v-if="!validEmail" class="pt-1 text-red-500">
            Please enter a valid email address.
          </div>
          <label for="message" class="pt-6 pb-3 font-bold">Your Message:</label>
          <textarea id="message" v-model="message" rows="6"
            class="w-full p-2 text-sm bg-gray-100 rounded-lg md:p-3 md:text-sm text-dark-blue " />
        </form>
        <div v-if="successResp" class="pt-5 font-bold tracking-wide text-center text-green-500">
          <div>
            Thank you for contacting us.
          </div>
          <div>
            We will reach back to you soon!

          </div>
        </div>
      </div>
      <div class="pt-3">
        <BtnMain :onclick="submit">Submit</BtnMain>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      message: '',
      endpoint: '',
      validEmail: true,
      successResp: false
    }
  },
  methods: {
    validateEmail(email) {
      if (!email) {
        return false
      }
      if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        return true
      }
      return false
    },

    async submit() {
      this.successResp = false
      this.validEmail = this.validateEmail(this.email)
      if (!this.validEmail) {
        return
      }
      const data = {
        email: this.email,
        message: this.message
      }
      // Formspree side will send an email for confirmation.
      // So we just display a thank you note here
      this.successResp = true
      const resp = await fetch(this.endpoint, {
        method: 'POST',
        body: JSON.stringify(data)
      })
    },
  },
}
</script>