
<template>
  <div class="container">
    <div class="row">
      <header class="d-flex flex-wrap justify-content-center py-3 mb-4">
        <div class="col-md-6">
          <a
            href="/"
            class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
          >
            <span class="fs-4">GS</span>
          </a>
        </div>
        <div class="col-auto">
          <ul class="nav nav-pills">
            <li class="nav-item" v-for="item in menus" :key="item.name">
              <router-link
                :to="item.uri"
                :class="item.style"
                @click="change_uri(item)"
                >{{ item.name }}</router-link
              >
            </li>
          </ul>
        </div>
      </header>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      menus: [
        { name: "Portfolio", style: "link ", uri: "/portfolio" },
        { name: "About", style: "link ", uri: "/about" },
        { name: "Contact", style: "link ", uri: "/contact-us" },
      ],
      current_uri: "",
    };
  },
  mounted: function () {
    this.current_uri = window.location.pathname;
  },
  watch: {
    current_uri() {
      for (let i = 0; i < this.menus.length; i++) {
        if (this.menus[i].uri == this.current_uri) {
          this.menus[i].style = "link selected";
        } else {
          this.menus[i].style = "link";
        }
      }
    },
  },
  computed: {},
  methods: {
    change_uri(menu_item) {
      this.current_uri = menu_item.uri;
    },
  },
};
</script>



<style scoped>
.link {
  display: inline-block;
  position: relative;
  text-decoration: none;
  padding: 10px 20px;
  color: blue;
}

.link:hover {
  font-weight: bold;
  transform: scaleY(1.3);
  transition: transform 0.4s;
}

.selected {
  font-weight: bold;
  text-decoration-line: underline;
  text-decoration-style: solid;
  transform: scaleY(1.3);
}
</style>
