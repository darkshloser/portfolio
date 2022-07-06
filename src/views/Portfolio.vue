<template>
  <br />
  <div class="white-paper">
    <div v-show="!allResourcesLoaded" class="empty-paper">
      <pacman-loader
        :loading="!allResourcesLoaded"
        color="#7065eb"
        size="25px"
        class="loader-style"
      ></pacman-loader>
    </div>
    <div v-show="allResourcesLoaded">
      <compIntro />
      <compCompanies />
      <br />
      <compPoject :compLoaded="getChildState" />
    </div>
  </div>
</template>

<script>
import PacmanLoader from "vue-spinner/src/PacmanLoader.vue";
import compPoject from "./../components/portfolio/Projects.vue";
import compIntro from "./../components/portfolio/Intro.vue";
import compCompanies from "./../components/portfolio/Companies.vue";

export default {
  name: "Header",
  components: {
    compPoject,
    compIntro,
    compCompanies,
    PacmanLoader,
  },
  created() {
    window.addEventListener("DOMContentLoaded", () => {
      this.pageLoaded = true;
    });
  },
  data() {
    return {
      projectsLoaded: false,
      pageLoaded: null,
    };
  },
  computed: {
    allResourcesLoaded() {
      return this.pageLoaded == null || (this.projectsLoaded && this.pageLoaded)
        ? true
        : false;
    },
  },
  methods: {
    getChildState(projectsLoaded) {
      this.projectsLoaded = projectsLoaded;
    },
  },
  caculated: {},
};
</script>

<style scoped>
</style>


