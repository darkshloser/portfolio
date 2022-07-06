
<template>
  <div v-show="isLoaded" class="container" @contextmenu.prevent="onRightClick">
    <app-header id="headerID" class="fixedHeader"></app-header>
    <router-view :key="$route.fullPath"></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>
export default {
  name: "App",
  created() {
    window.addEventListener("scroll", this.handleScroll);
    window.addEventListener("DOMContentLoaded", this.loaded);
  },
  data() {
    return {
      objHeader: null,
      posHeader: null,
      isLoaded: false,
    };
  },
  mounted() {
    this.objHeader = document.getElementById("headerID");
    this.objLogo = document.getElementById("logo-id");
    this.objMenuOff = document.getElementById("menu-off-id");
    this.objMenuOn = document.getElementById("menu-on-id");
    this.posHeader = this.objHeader.offsetTop;
    this.isLoading = false;
  },
  methods: {
    loaded() {
      this.isLoaded = true;
      document.body.className = "body-style";
    },
    handleScroll() {
      if (window.pageYOffset > this.posHeader) {
        this.objHeader.classList.add("sticky");
        this.objLogo.classList.add("logo-sticky");
        this.objMenuOn.classList.add("menu-on-sticky");
        this.objMenuOff.classList.add("menu-off-sticky");
      } else {
        this.objHeader.classList.remove("sticky");
        this.objLogo.classList.remove("logo-sticky");
        this.objMenuOn.classList.remove("menu-on-sticky");
        this.objMenuOff.classList.remove("menu-off-sticky");
      }
    },
    onRightClick() {
      pass;
    },
  },
};
</script>

<style>
@import "./assets/styles/main.css";
</style>
