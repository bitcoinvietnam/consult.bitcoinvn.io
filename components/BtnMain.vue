<template>
  <button @click="onclick"
    class="h-12 font-semibold tracking-wider text-white uppercase rounded-full hover:border-2 w-60 bg-gradient-to-r from-gold-500/60 to-gold-500/90 border-dark-blue hover:border-white">
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    onclick: Function
  }
}
</script>