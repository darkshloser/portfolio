<template>
  <img class="carousel__item" :class="project.cls" />
  <div class="font-genos" v-html="project.html_description"></div>
  <a :href="project.url" class="cta" target="_blank">
    <span>More</span>
    <svg width="13px" height="10px" viewBox="0 0 13 10">
      <path d="M1,5 L11,5"></path>
      <polyline points="8 1 12 5 8 9"></polyline>
    </svg>
  </a>
</template>


<script>
class Project {
  constructor(id, cls, html_description, url) {
    this.id = id;
    this.cls = cls;
    this.html_description = html_description;
    this.url = url;
  }
}

export default {
  name: "ProjectSlide",
  props: ["project"],
  data() {
    return {
      project: {
        required: true,
        type: Project,
      },
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