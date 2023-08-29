<script>
// import { register } from "swiper/element/bundle";

// register();

// export default {
//   setup() {
//     const spaceBetween = 10;
//     const onProgress = (e) => {
//       const [swiper, progress] = e.detail;
//       console.log(progress);
//     };

//     const onSlideChange = (e) => {
//       console.log("slide changed");
//     };

//     return {
//       spaceBetween,
//       onProgress,
//       onSlideChange,
//     };
//   },
// };
</script>

<template>
  <div class="carousel w-full">
    <div id="item1" class="carousel-item w-full">
      <img src="../assets/carousel/image1.jpg" class="w-full h-screen" />
    </div>
    <div id="item2" class="carousel-item w-full">
      <img src="../assets/carousel/image2.jpg" class="w-full h-screen" />
    </div>
    <div id="item3" class="carousel-item w-full">
      <img src="../assets/carousel/image3.jpg" class="w-full h-screen" />
    </div>
  </div>
  <div class="flex justify-center w-full py-2 gap-2">
    <a href="#item1" class="btn btn-xs">1</a>
    <a href="#item2" class="btn btn-xs">2</a>
    <a href="#item3" class="btn btn-xs">3</a>
    <a href="#item4" class="btn btn-xs">4</a>
  </div>
</template>

<style scoped></style>
