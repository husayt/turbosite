<script lang="ts">
// Import Swiper
import Swiper from "swiper"
import { Autoplay } from "swiper/modules"
import "swiper/css"

Swiper.use([Autoplay])
</script>

<script  setup lang="ts">
onMounted(() => {
  const carousel = new Swiper(".clients-carousel", {
    slidesPerView: "auto",
    spaceBetween: 64,
    centeredSlides: true,
    loop: true,
    speed: 5000,
    noSwiping: true,
    noSwipingClass: "swiper-slide",
    autoplay: {
      delay: 0,
      disableOnInteraction: true,
    },
  })
})
</script>

<template>
  <section>
    <div class="relative max-w-6xl mx-auto px-4 sm:px-6">
      <!-- Particles animation -->
      <div class="absolute inset-0 max-w-6xl mx-auto px-4 sm:px-6">
        <Particles class="absolute inset-0 -z-10" :quantity="5" />
      </div>

      <div class="py-12 md:py-16">
        <div class="overflow-hidden">
          <!-- Carousel built with Swiper.js [https://swiperjs.com/] -->
          <!-- * Custom styles in src/css/additional-styles/theme.scss -->
          <div
            class="clients-carousel swiper-container relative before:absolute before:inset-0 before:w-32 before:z-10 before:pointer-events-none before:bg-gradient-to-r before:from-slate-900 after:absolute after:inset-0 after:left-auto after:w-32 after:z-10 after:pointer-events-none after:bg-gradient-to-l after:from-slate-900"
          >
            <div class="swiper-wrapper !ease-linear select-none items-center">
              <!-- Carousel items -->
              <div class="swiper-slide !w-auto">
                <img src="/images/client-01.svg" alt="Client 01" width="110" height="21">
              </div>
              <div class="swiper-slide !w-auto">
                <img src="/images/client-02.svg" alt="Client 02" width="70" height="25">
              </div>
              <div class="swiper-slide !w-auto">
                <img class="mt-1" src="/images/client-03.svg" alt="Client 03" width="107" height="33">
              </div>
              <div class="swiper-slide !w-auto">
                <img src="/images/client-04.svg" alt="Client 04" width="85" height="36">
              </div>
              <div class="swiper-slide !w-auto">
                <img src="/images/client-05.svg" alt="Client 05" width="86" height="18">
              </div>
              <div class="swiper-slide !w-auto">
                <img src="/images/client-06.svg" alt="Client 06" width="78" height="34">
              </div>
              <div class="swiper-slide !w-auto">
                <img src="/images/client-07.svg" alt="Client 07" width="83" height="23">
              </div>
              <div class="swiper-slide !w-auto">
                <img src="/images/client-08.svg" alt="Client 08" width="98" height="26">
              </div>
              <div class="swiper-slide !w-auto">
                <img class="mt-2" src="/images/client-09.svg" alt="Client 09" width="92" height="28">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
