<template>
  <div>
    <h3 class="font-section centered-text title-size">Projects</h3>
    <Carousel :autoplay="4000" :wrap-around="true">
      <Slide
        v-for="project in projects"
        :key="project.id"
        class="slide-container"
      >
        <img class="carousel__item" :class="project.class" />
        <div class="">{{ project.text }}</div>
      </Slide>
      <template #addons>
        <button type="button" class="btn btn-outline-dark btn-sm">More</button>
      </template>
    </Carousel>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

export default {
  name: "Projects",
  components: {
    Carousel,
    Slide,
  },
  data() {
    return {
      projects: [
        { id: 1, class: "projImg1", text: "dadasda" },
        { id: 2, class: "projImg2", text: "dadv  vxxf s ; da" },
      ],
    };
  },
  methods: {},
};
</script>


<style scoped>
.slide-container {
  display: table;
}
.carousel__item {
  width: 70%;
  padding-top: 70%;
  border-style: solid;
  background-size: cover;
}
.projImg1 {
  background-image: url("../../assets/images/proj1.jpg");
}
.projImg2 {
  background-image: url("../../assets/images/proj2.jpg");
}
</style>

