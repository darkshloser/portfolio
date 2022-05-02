
<template>
  <div>
    <h3 class="font-section centered-text title-size">Companies</h3>
    <Carousel :autoplay="2000" :itemsToShow="2.95" :wrapAround="true">
      <Slide v-for="project in projects" :key="project.id">
        <img class="carousel__item" :src="project.svgLogo" />
        <template #addons> </template>
      </Slide>
    </Carousel>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import svgNPP from "./../../assets/logos/kozloduy.svg";
import svgASML from "./../../assets/logos/asml.svg";
import svgGPLUS from "./../../assets/logos/geoplus.svg";
import svgCHIMCOMPLECT from "./../../assets/logos/chimcomplect.svg";
import svgSTRYPES from "./../../assets/logos/strypes.svg";

export default {
  name: "Autoplay",
  components: {
    Carousel,
    Slide,
  },
  data() {
    return {
      projects: [
        {
          id: 1,
          svgLogo: svgNPP,
          url: "https://www.w3schools.com",
        },
        {
          id: 2,
          svgLogo: svgASML,
          url: "https://www.w3schools.com",
        },
        {
          id: 3,
          svgLogo: svgGPLUS,
          url: "https://www.w3schools.com",
        },
        {
          id: 4,
          svgLogo: svgCHIMCOMPLECT,
          url: "https://www.w3schools.com",
        },
        {
          id: 5,
          svgLogo: svgSTRYPES,
          url: "https://www.w3schools.com",
        },
      ],
    };
  },
};
</script>

<style scoped>
.carousel__item {
  transform: scale(1);
  opacity: 0.5;
  transition: 0.5s;
  max-width: 150px;
}
.carousel__slide--visible > .carousel__item {
  opacity: 1;
  transform: rotateY(0);
}
.carousel__slide--next > .carousel__item {
  transform: scale(0.9) translate(-10px);
}
.carousel__slide--prev > .carousel__item {
  transform: scale(0.9) translate(10px);
}
.carousel__slide--active > .carousel__item {
  transform: scale(1.1);
}
.projI1 {
  width: 10px;
  background: red;
}
.projI2 {
  width: 50px;
  height: 50px;
  background: blue;
  background-image: url("../../assets/images/proj2.jpg");
}
</style>



