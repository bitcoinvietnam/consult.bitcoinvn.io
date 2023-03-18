<template>
  <div class="grid grid-cols-1 px-3 md:grid-cols-2 md:px-44">
    <div class="md:flex">
      <div class="text-2xl text-justify md:text-3xl text-dark-blue md:m-auto">
        <svg aria-hidden="true" class="inline-block w-10 h-10" viewBox="0 0 24 27" fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
            fill="currentColor" />
        </svg>
        {{ quote }}
      </div>
    </div>
    <div class="flex flex-col items-center ">
      <div class="pt-10">
        <nuxt-img :src="imgPath" class="rounded-full w-36 h-36 md:w-52 md:h-52" />
      </div>
      <div class="flex flex-col pt-5 text-dark-blue">
        <div class="font-bold text-center ">
          {{ name }}
        </div>
        <div>
          {{ title }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imgPath: String,
    name: String,
    title: String,
    quote: String
  }
}
</script>