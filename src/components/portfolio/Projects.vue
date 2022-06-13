<template>
  <div>
    <h3 class="font-section centered-text title-size">Projects</h3>
    <Carousel :autoplay="8000" :wrap-around="true">
      <Slide
        v-for="project in projects"
        :key="project.id"
        class="slide-container"
      >
        <img class="carousel__item" :class="project.class" />
        <div class="font-genos" v-html="project.html_description"></div>
        <a :href="project.url" class="cta" target="_blank">
          <span>More</span>
          <svg width="13px" height="10px" viewBox="0 0 13 10">
            <path d="M1,5 L11,5"></path>
            <polyline points="8 1 12 5 8 9"></polyline>
          </svg>
        </a>
      </Slide>

      <template #addons> </template>
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
        {
          id: 1,
          class: "projCadastre",
          html_description: `
          <div>Tags: ...</div>
          <p>In this project for the first time I had the opportunity to solve problems related to large and too complex cadastral information. 
          For that reason a specific algorithm was implemented to cut off all the irrelevant information. 
          This actually reflected to a significant improvement of time and space complexity of calculating the final reports.</p>
          
          <p>Another interesting part of the project was to create a tool which actually allow users to define their own custom exports from the database.
          This actually required to minimize as much as I can the usage of the procedural SQL language for writing business logic.
          By doing so the application become close to database-agnostic state.</p>
          `,
          url: "https://www.w3schools.com",
        },
        {
          id: 2,
          class: "projCManagement",
          html_description: `<p>Test text hfjsd gd ggg </p><br/><p>This is a second paragraph ...</p><br/><p>This is another paragraph ...</p>`,
          url: "www.google.com",
        },
        {
          id: 3,
          class: "projWeb",
          html_description: `<p>Test text hfjsd gd ggg </p><br/><p>This is a second paragraph ...</p><br/><p>This is another paragraph ...</p>`,
          url: "www.google.com",
        },
        {
          id: 4,
          class: "projCraneRails",
          html_description: `<p>Test text hfjsd gd ggg </p><br/><p>This is a second paragraph ...</p><br/><p>This is another paragraph ...</p>`,
          url: "www.google.com",
        },
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
.carousel__slide {
  padding-bottom: 30px;
}
.carousel__item {
  width: 70%;
  padding-top: 70%;
  border-style: solid;
  background-size: cover;
}
.projCadastre {
  background-image: url("../../assets/images/cadastre.jpg");
  background-size: 100% 100%;
}
.projCManagement {
  background-image: url("../../assets/images/cemetary.jpg");
  background-size: 100% 100%;
}
.projWeb {
  background-image: url("../../assets/images/web.jpg");
  background-size: 100% 100%;
}
.projCraneRails {
  background-image: url("../../assets/images/crane.jpg");
  background-size: 100% 100%;
}

a {
  text-decoration: none;
  color: inherit;
}

.cta {
  position: relative;
  margin: auto;
  padding: 19px 22px;
  transition: all 0.2s ease;
}
.cta:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  border-radius: 28px;
  background: rgba(147, 157, 247, 0.5);
  width: 56px;
  height: 56px;
  transition: all 0.3s ease;
}
.cta span {
  position: relative;
  font-size: 16px;
  line-height: 18px;
  font-weight: 900;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  vertical-align: middle;
}
.cta svg {
  position: relative;
  top: 0;
  margin-left: 10px;
  fill: none;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke: #111;
  stroke-width: 2;
  transform: translateX(-5px);
  transition: all 0.3s ease;
}
.cta:hover:before {
  width: 100%;
  background: #42a4f5;
}
.cta:hover svg {
  transform: translateX(0);
}
.cta:active {
  transform: scale(0.96);
}
</style>

