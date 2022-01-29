
<template>
  <div class="container">
    <app-header></app-header>
    <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
@font-face {
  font-family: "Monoton-regular";
  src: local("Monoton-Regular"),
    url(./assets/fonts/Monoton-Regular.ttf) format("truetype");
}
@font-face {
  font-family: "Gwendolyn-regular";
  src: local("Gwendolyn-Regular"),
    url(./assets/fonts/Gwendolyn-Regular.ttf) format("truetype");
}
@font-face {
  font-family: "Genos-regular";
  src: local("Genos-Regular"),
    url(./assets/fonts/Genos-Regular.ttf) format("truetype");
}
@font-face {
  font-family: "FrederickatheGreat-regular";
  src: local("FrederickatheGreat-Regular"),
    url(./assets/fonts/FrederickatheGreat-Regular.ttf) format("truetype");
}
@font-face {
  font-family: "BlackOpsOne-regular";
  src: local("BlackOpsOne-Regular"),
    url(./assets/fonts/BlackOpsOne-Regular.ttf) format("truetype");
}
@font-face {
  font-family: "FlowCircular-regular";
  src: local("FlowCircular-Regular"),
    url(./assets/fonts/FlowCircular-Regular.ttf) format("truetype");
}
@font-face {
  font-family: "LibreBarcode39-regular";
  src: local("LibreBarcode39-Regular"),
    url(./assets/fonts/LibreBarcode39-Regular.ttf) format("truetype");
}
@font-face {
  font-family: "CormorantSC-regular";
  src: local("CormorantSC-Regular"),
    url(./assets/fonts/CormorantSC-Regular.ttf) format("truetype");
}
.font-monoton {
  font-family: "Monoton-regular", Helvetica, Arial;
}
.font-gwendolyn {
  font-family: "Gwendolyn-regular", Helvetica, Arial;
}
.font-genos {
  font-family: "Genos-regular", Helvetica, Arial;
}
.font-fredericka {
  font-family: "FrederickatheGreat-regular", Helvetica, Arial;
}
.font-blackopsone {
  font-family: "BlackOpsOne-regular", Helvetica, Arial;
}
.font-circular {
  font-family: "FlowCircular-regular", Helvetica, Arial;
}
.font-barcode {
  font-family: "LibreBarcode39-regular", Helvetica, Arial;
}
.font-cormorant {
  font-family: "CormorantSC-regular", Helvetica, Arial;
}

body {
  background-image: url("./assets/images/background.png"); /* The background image used */
  background-position: top center;
  background-color: #ffffff; /* Used if the image is unavailable */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: auto; /* Resize the background image to cover the entire container */
  height: 100%;
  margin: 0;
}
</style>
