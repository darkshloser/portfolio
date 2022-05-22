<template>
  <transition>
    <div
      class="p-3 mb-2 text-white toast-message"
      :class="appearance[toastStyle.toUpperCase()]"
      v-if="display"
    >
      {{ msg }}
      <slot v-if="msg.length == 0"></slot>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    display: {
      type: Boolean,
      required: true,
    },
    toastStyle: {
      type: String,
      default: "INFO",
    },
    msg: {
      type: String,
      required: false,
    },
  },
  data() {
    return {
      appearance: {
        SUCCESS: "bg-success",
        INFO: "bg-info",
        WARNING: "bg-warning",
        ERROR: "bg-danger",
      },
    };
  },
};
</script>


<style scoped>
.v-enter-from {
  opacity: 0;
}
.v-enter-active {
  transition: 1.4s;
}
.v-enter-to {
  opacity: 1;
}
.v-leave-from {
  opacity: 1;
}
.v-leave-active {
  transition: 0.7s;
}
.v-leave-to {
  opacity: 0;
}
.toast-message {
  position: fixed;
  right: 10%;
  bottom: 10px;
  height: 50px;
  background-color: lightblue;
  padding: 3px;
  text-align: center;
  border-radius: 30px;
  justify-content: center;
}
</style>
