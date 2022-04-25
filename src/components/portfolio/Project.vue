<template>
  <div class="card">
    <nav></nav>
    <div class="photo">
      <img
        src="https://s-media-cache-ak0.pinimg.com/236x/3b/36/ca/3b36ca3afe0fa0fd4984b9eee2e154bb.jpg"
      />
    </div>
    <div class="description">
      <h5 class="font-section">Project Name</h5>
      <h7 class="font-cormorant">Description</h7>
      <p class="font-cormorant">
        Classic Peace Lily is a spathiphyllum floor plant arranged in a bamboo
        planter with a blue & red ribbom and butterfly pick.
      </p>

      <button @click="fetchDetails('https://www.google.com/')">Details</button>
    </div>
  </div>
</template>

<style scoped src="@/assets/styles/project.css">
</style>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    fetchDetails(url) {
      window.open(url);
    },
  },
};
</script>

