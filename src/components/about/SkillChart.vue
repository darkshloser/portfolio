<template>
  <LineChart chartType="skills" :skills="skills" txtStyle="font-genos" />
</template>

<script>
import LineChart from "./../charts/LineChart.vue";
export default {
  name: "SkillsChart",
  components: {
    LineChart,
  },
  data() {
    return {
      skills: [
        { name: "Vue.js", level: 85 },
        { name: "React", level: 55 },
        { name: "FastAPI", level: 60 },
        { name: "Django", level: 40 },
        { name: "DevOps", level: 44 },
        { name: "Scripting", level: 66 },
      ],
    };
  },
};
</script>