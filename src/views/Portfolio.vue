<template>
  <br />
  <div class="white-paper">
    <compIntro />
    <div class="container">
      <div class="row row-cols-2">
        <div class="col col-12 col-sm-12 col-md-12 col-lg-6">
          <compPoject />
        </div>
        <div class="col col-12 col-sm-12 col-md-12 col-lg-6">
          <compPoject />
        </div>
        <div class="col col-12 col-sm-12 col-md-12 col-lg-6">
          <compPoject />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import compPoject from "./../components/portfolio/Project.vue";
import compIntro from "./../components/portfolio/Intro.vue";
export default {
  name: "Header",
  components: {
    compPoject,
    compIntro,
  },
};
</script>

<style scoped>
</style>


