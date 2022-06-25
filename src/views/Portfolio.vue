<template>
  <br />
  <div class="white-paper">
    <div v-if="!isLoaded" class="empty-paper">
      <pacman-loader
        :loading="!isLoaded"
        color="#7065eb"
        size="25px"
        class="loader-style"
      ></pacman-loader>
    </div>
    <div v-show="isLoaded">
      <compIntro />
      <compCompanies />
      <br />
      <compPoject />
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
  beforeCreate: function () {
    window.addEventListener("load", () => {
      this.isLoaded = true;
    });
  },
  mounted: function () {
    this.isLoaded = true;
  },
  data() {
    return {
      isLoaded: false,
    };
  },
  caculated: {},
};
</script>

<style scoped>
</style>


