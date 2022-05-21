<template>
  <div class="position-fixed bottom-0 end-0 p-3" style="z-index: 11">
    <div
      id="liveToast"
      class="toast hide"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
    >
      <div class="toast-body"><slot></slot></div>
    </div>
  </div>
</template>

<script>
export default {
  params: {
    type: {
      default: this.types.info,
    },
  },
  data() {
    return {
      types: {
        info: "INFO",
        warning: "WARNING",
        critical: "CRITICAL",
      },
    };
  },
  methods: {
    getStyle(type) {
      if (type == this.types.info) {
        console.log("Type info");
      } else if (type == this.types.warning) {
        console.log("Type warning");
      } else {
        console.log("Type critical");
      }
      return;
    },
  },
};
</script>