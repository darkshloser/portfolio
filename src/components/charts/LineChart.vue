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
  setup() {
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
            // labelTextColor: function (context) {
            //   return "#543453";
            // },

            // label: function (context) {
            //   let label = context.dataset.label || "";
            //   let tt = ["Middle"];

            //   if (label) {
            //     label += ": ";
            //   }
            //   if (context.parsed.y !== null) {
            //     label += new Intl.ListFormat("en", {
            //       style: "narrow",
            //       type: "unit",
            //     }).format(tt);
            //   }
            //   return label;
            // },
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
      labels: ["Vue.js", "React", "FastAPI", "Django", "DevOps", "Scripting"],
      options: {
        indexAxis: "y",
      },
      datasets: [
        {
          barThickness: 10,
          data: [80, 65, 70, 50, 52, 70],
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