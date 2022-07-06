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
      <div class="row">
        <div class="col-lg-4 col-md-5">
          <img
            class="photo-style"
            src="/about/profile_picture.jpg"
            alt=""
            @load="imgLoaded"
          />
          <comp-social />
        </div>
        <div class="col-lg-8 col-md-7">
          <div v-html="htmlIntro"></div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <comp-skill-chart />
        </div>
      </div>
      <div class="row">
        <comp-experience />
      </div>
    </div>
  </div>
</template>

<script>
import PacmanLoader from "vue-spinner/src/PacmanLoader.vue";
import compSkillChart from "./../components/about/TheSkillChart.vue";
import compExperience from "./../components/about/TheExperience.vue";
import compSocial from "./../components/about/TheSocial.vue";
export default {
  components: {
    compSkillChart,
    compExperience,
    compSocial,
    PacmanLoader,
  },
  data() {
    return {
      htmlIntro: null,
      isLoaded: false,
    };
  },
  created() {
    this.htmlIntro = `
    <h3 class="font-section">Dobromir Kovachev</h3>
    <span class="font-cormorant"><u>Let me introduce myself.</u></span>
    <p class="font-cormorant">My name is Dobromir and I’ am a Software Developer with more than 10 years of experience crafting software products and services.</p>
    <p class="font-cormorant">Officially, my role as a Full Stack Developer is to help the development team on all sides of the project. But really, I enjoy finding solutions to technical challenges and seeing how these solutions become a reality.</p>
    <p class="font-cormorant">It’s all about continuous learning, self-development, and applying new knowledge in projects I am involved with. This is a fancy way of saying that I love what I’m doing.</p>
    `;
  },
  methods: {
    imgLoaded() {
      this.isLoaded = true;
    },
  },
};
</script>


<style scoped src="@/assets/styles/about.css">
</style>