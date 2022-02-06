<template>
  <app-external-links class="external-links-home"></app-external-links>
  <div class="rights">&copy; 2022 GSconsult.io</div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {};
  },
  mounted() {
    console.log("asdasdas");
  },
  methods: {},
};
</script>

<style>
.external-links-home {
  position: fixed;
  left: 50%;
  bottom: 0px;
  transform: translate(-50%, -50%);
  margin: 0 auto;
}
.rights {
  position: fixed;
  left: 0;
  bottom: 20px;
  margin: 0 auto;
  color: rgb(135, 181, 250);
}
</style>
