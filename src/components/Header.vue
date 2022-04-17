
<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <a href="/" class="d-flex align-items-center text-decoration-none">
          <img
            id="logo-id"
            class="logo"
            src="../assets/images/website_logo.png"
          />
        </a>
      </div>
      <div class="col">
        <Menu />
      </div>
    </div>
  </div>
</template>

<script>
import Menu from "./Menu.vue";

export default {
  name: "Header",
  components: {
    Menu,
  },
};
</script>


<style scoped src="@/assets/styles/header.css">
</style>

