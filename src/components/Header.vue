
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


<style scoped>
.logo {
  position: fixed;
  left: 20px;
  top: 25px;
  text-align: center;
  font-size: 20px;
  cursor: pointer;
  margin-top: 0px;
  background-position: center center;
  max-width: 50px;
  padding: 0;
  transition: all 0.3s ease-in-out;
}
.header {
  height: 70px;
  width: 100%;
  margin: 0;
  padding: 0;
  top: 0%;
  width: 100vw;
  position: fixed;
  margin-left: -50vw;
  left: 50%;
}
</style>

