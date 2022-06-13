<template>
  <br />
  <div class="white-paper">
    <div class="row">
      <div class="col-lg-4 col-md-5">
        <img class="photo-style" />
      </div>
      <div class="col-lg-8 col-md-7">
        <div v-html="htmlIntro"></div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <SkillChart />
      </div>
    </div>
    <div class="row">
      <Experience />
    </div>
  </div>
</template>

<script>
import SkillChart from "./../components/about/SkillChart.vue";
import Experience from "./../components/about/Experience.vue";
export default {
  components: {
    SkillChart,
    Experience,
  },
  data() {
    return {
      htmlIntro: null,
    };
  },
  created() {
    this.htmlIntro = `
    <h3 class="font-section">Name</h3>
    <span class="font-cormorant"><u>Introduction:</u></span>
    <p class="font-cormorant">I appriciate the time You...</p>
    `;
  },
};
</script>


<style scoped src="@/assets/styles/about.css">
</style>