
<template>
  <input type="checkbox" id="active" />
  <label id="menu-on-id" for="active" class="menu-btn"><span></span></label>
  <label id="menu-off-id" for="active" class="close"></label>
  <div class="wrapper">
    <ul>
      <li v-for="item in menu" :key="item.name">
        <router-link :to="item.uri" @click="changeUri">
          {{ item.name }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "compMenu",
  data() {
    return {
      menu: [
        { name: "Home", uri: "/" },
        { name: "Portfolio", uri: "/portfolio" },
        { name: "About", uri: "/about" },
        { name: "Contact", uri: "/contact-us" },
      ],
    };
  },
  methods: {
    changeUri() {
      document.getElementById("active").checked = false;
    },
  },
};
</script>


<style scoped src="@/assets/styles/manu.css">
</style>

