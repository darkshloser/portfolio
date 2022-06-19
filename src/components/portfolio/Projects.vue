<template>
  <div>
    <h3 class="font-section centered-text title-size">Projects</h3>
    <Carousel :autoplay="8000" :wrap-around="true">
      <Slide
        v-for="project in projects"
        :key="project.id"
        class="slide-container"
      >
        <ProjectSlide :project="project" />
      </Slide>
    </Carousel>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import ProjectSlide from "./ProjectSlide.vue";

export default {
  name: "Projects",
  components: {
    Carousel,
    Slide,
    ProjectSlide,
  },
  data() {
    return {
      projects: [
        {
          id: 1,
          imgName: "/projects/cadastre.jpg",
          html_description: `
          <p>In this project for the first time I had the opportunity to solve problems related to large and too complex cadastral information. 
          For that reason a specific algorithm was implemented to cut off all the irrelevant information. 
          This actually reflected to a significant improvement of time and space complexity of calculating the final reports.</p>
          <p>Another interesting part of the project was to create a tool which actually allow users to define their own custom exports from the database.
          This actually required to minimize as much as I can the usage of the procedural SQL language for writing business logic.
          By doing so the application become close to database-agnostic state.</p>
          `,
          url: "https://geoplus-bg.com/storage/pdf/biblioteka-za-kadaster.pdf",
        },
        {
          id: 2,
          imgName: "/projects/cemetary.jpg",
          html_description: `
          <p>This application was designed and created to automate most of the administrative processes of managing cemetaries. We’ve researched the best practices in Belgium and implemented that into a product focused mainly for municipalities in Bulgaria.</p>
          <p>After finalization of the product and first trials results exceeded my expectations and customers was more than satisfied of the product. These good results was not only functionality wise but also it was related to drastically increasing financial returns.</p>
          <p>Some of the places where this product was integrated are <a href="https://strazhitsa.com/" target="_blank">Strazhitsa</a>, <a href="https://pavlikeni.bg/" target="_blank">Pavlikeni</a>, <a href="https://kozloduy.bg/" target="_blank">Kozloduy</a> etc.</p>
          `,
          url: "https://geoplus-bg.com/77943",
        },
        {
          id: 3,
          imgName: "/projects/web.jpg",
          html_description: `
          <p>First project which I’ll mention here is <a href="https://os.university/" target="_blank">Open Source University</a>, where I had the opportunity to be part of a team building decentralized application (dapp). Purpose of the project is to implement trust between Learners, Academia and Bussiness. I took my ferst steps in a production grade blockchain technologies with that project, which gave me a lot of knowledge about maturity of blockchain technology and actual benefits of it.</p>
          <p>Second project is related to making predictions to market movements, based on reinforcement learning algorithms. Currently the project is in process of rework and the tech. Stack will be changed slightly. Backend is build on modern high performance framework like FastAPI with uvocorn ASGI server. Frontend currently is in process of migrating to Vue 3 (respectivelly with Vuex 4.0).</p>
          <p>There are many other projects which are related to Enterprice customers and respectively confidential as well. Wide variate of technologies was used for these web based applications which gave me good experience with broad range of frameworks and languages as well.</p>
          `,
          url: "https://www.asml.com/",
        },
        {
          id: 4,
          imgName: "/projects/crane.jpg",
          html_description: `
          <p>Purpose of that project was to design and develop application which will be able to make calculations and analize the result for defformations outside predefined allowed parameters. This software product is able to prepare needed calculations, analyses and graphical reports for overhead and polar cranes.</p>
          <p>Main reason for that product to be developed was the need to have standertized solution for some of the most important cranes on “Kozloduy” NPP site.</p>
          <p>It was beneficia that multiple measurements will be able to store for every single crane registered, This gave the opportunity also for the users to make comparisons between different periods and see actual size and direction of deformations.</p>
          `,
          url: "https://www.kznpp.org/en",
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

