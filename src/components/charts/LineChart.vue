<template>
  <BarChart
    class="bar-chart-wrapper"
    ref="barRef"
    :chartData="testData"
    :options="options"
  />
</template>

<script>
import { Chart, registerables } from "chart.js";
import { defineComponent, ref } from "vue";
import { BarChart } from "vue-chart-3";

Chart.register(...registerables);

export default defineComponent({
  name: "Home",
  components: { BarChart },
  props: {
    chartType: {
      type: String,
      required: true,
      validator: function (value) {
        return ["skills", "progress"].includes(value);
      },
    },
    skills: {
      type: Array,
      required: true,
      validator: function (value) {
        if (value.length > 0) {
          return value.every((obj) => obj.name && obj.level);
        }
        return true;
      },
    },
  },
  setup(props) {
    let isSkillChart = props.chartType == "skills";
    let skillNames = props.skills.map((value) => value.name);
    let skillLevels = props.skills.map((value) => value.level);
    console.log(skillNames);
    const barRef = ref();
    const options = ref({
      responsive: true,
      indexAxis: "y",
      plugins: {
        legend: { display: false },
        tooltip: {
          enabled: false,
          displayColors: false,
          callbacks: {
            labelPointStyle: function (context) {
              return {
                pointStyle: "triangle",
                rotation: 0,
              };
            },
          },
        },
      },
      scales: {
        x: {
          display: false,
          grid: { display: false },
        },
        y: {
          grid: { display: false },
        },
      },
    });

    const testData = {
      labels: skillNames,
      options: {
        indexAxis: "y",
      },
      datasets: [
        {
          barThickness: 10,
          data: skillLevels,
          backgroundColor: ["#1685b8"],
        },
      ],
    };

    return { barRef, options, testData };
  },
});
</script>

<style scoped>
.bar-chart-wrapper {
  height: 130px;
}
</style>