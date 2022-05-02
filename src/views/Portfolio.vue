<template>
  <br />
  <div class="white-paper">
    <compIntro />
    <compCompanies />
    <br />
    <compPoject />
  </div>
</template>

<script>
import compPoject from "./../components/portfolio/Projects.vue";
import compIntro from "./../components/portfolio/Intro.vue";
import compCompanies from "./../components/portfolio/Companies.vue";
export default {
  name: "Header",
  components: {
    compPoject,
    compIntro,
    compCompanies,
  },
  caculated: {},
};
</script>

<style scoped>
</style>


