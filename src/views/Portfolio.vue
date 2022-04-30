<template>
  <br />
  <div class="white-paper">
    <compIntro />
    <compPoject />
  </div>
</template>

<script>
import compPoject from "./../components/portfolio/Projects.vue";
import compIntro from "./../components/portfolio/Intro.vue";
export default {
  name: "Header",
  components: {
    compPoject,
    compIntro,
  },
  caculated: {},
};
</script>

<style scoped>
</style>


