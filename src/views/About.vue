<template>
  <br />
  <div class="white-paper">
    <div class="row my-row">
      <div class="col-lg-4 col-md-5 my-col">
        <img class="photo-style" />
      </div>
      <div class="col-lg-8 col-md-7 my-col">
        <div v-html="htmlIntro"></div>
      </div>
    </div>
    <div class="row my-row">
      <div class="col">
        <LineChart />
      </div>
    </div>
    <div class="row my-row">
      <div class="col">Professional experience</div>
    </div>
  </div>
</template>

<script>
import LineChart from "./../components/charts/LineChart.vue";
export default {
  components: {
    LineChart,
  },
  data() {
    return {
      htmlIntro: null,
    };
  },
  created() {
    this.htmlIntro = `
    <h3 class="font-blackopsone">Name</h3>
    <span class="font-genos">Introduction:</span>
    `;
  },
};
</script>


<style scoped>
.photo-style {
  width: 200px;
  height: 300px;
  background-color: gray;
  border: 2px solid black;
}
.my-row {
  border: 2px dotted green;
}
.my-col {
  border: 4px dotted red;
}
</style>