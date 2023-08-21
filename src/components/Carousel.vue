<script>
import { register } from "swiper/element/bundle";

register();

export default {
  setup() {
    const spaceBetween = 10;
    const onProgress = (e) => {
      const [swiper, progress] = e.detail;
      console.log(progress);
    };

    const onSlideChange = (e) => {
      console.log("slide changed");
    };

    return {
      spaceBetween,
      onProgress,
      onSlideChange,
    };
  },
};
</script>

<template>
  <div>
    <swiper-container
      :slides-per-view="1"
      :space-between="spaceBetween"
      :centered-slides="true"
      :pagination="{
        hideOnClick: true,
      }"
      :breakpoints="{
        768: {
          slidesPerView: 1,
        },
      }"
      @progress="onProgress"
      @slidechange="onSlideChange"
    >
      <swiper-slide class="swiper"
        ><img
          src="../assets/carousel/image1.jpg"
          alt="carousel"
          class="carousel-img"
      /></swiper-slide>
      <swiper-slide
        ><img
          src="../assets/carousel/image2.jpg"
          alt="carousel"
          class="carousel-img"
      /></swiper-slide>
      <swiper-slide
        ><img
          src="../assets/carousel/image3.jpg"
          alt="carousel"
          class="carousel-img"
      /></swiper-slide>
    </swiper-container>
  </div>
</template>

<style scoped></style>
