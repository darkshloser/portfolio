<template>
  <div class="container">
    <span id="text1" ref="text1"></span>
    <span id="text2" ref="text2"></span>
  </div>
  <svg id="filters">
    <defs>
      <filter id="threshold">
        <feColorMatrix
          in="SourceGraphic"
          type="matrix"
          values="5 0 0 0 0
									0 5 0 0 0
									0 0 5 0 0
									0 0 0 255 -100"
        />
      </filter>
    </defs>
  </svg>
</template>


<script>
const elts = {
  text1: Object,
  text2: Object,
};
const texts = [
  "Dream it",
  "Plan it",
  "Design it",
  "Draft it",
  "Code it",
  "Build it",
  "Launch it",
];

const morphTime = 1;
const cooldownTime = 2;

let textIndex = texts.length - 1;
let time = new Date();
let morph = 0;
let cooldown = cooldownTime;

elts.text1.textContent = texts[textIndex % texts.length];
elts.text2.textContent = texts[(textIndex + 1) % texts.length];

function doMorph() {
  morph -= cooldown;
  cooldown = 0;

  let fraction = morph / morphTime;

  if (fraction > 1) {
    cooldown = cooldownTime;
    fraction = 1;
  }
  setMorph(fraction);
}

function setMorph(fraction) {
  elts.text2.style.filter = `blur(${Math.min(12 / fraction - 7, 100)}px)`;
  elts.text2.style.opacity = `${Math.pow(fraction, 2) * 100}%`;

  fraction = 1 - fraction;
  elts.text1.style.filter = `blur(${Math.min(12 / fraction - 7, 100)}px)`;
  elts.text1.style.opacity = `${Math.pow(fraction, 2) * 100}%`;

  elts.text1.textContent = texts[textIndex % texts.length];
  elts.text2.textContent = texts[(textIndex + 1) % texts.length];
}

function doCooldown() {
  morph = 0;

  elts.text2.style.filter = "";
  elts.text2.style.opacity = "100%";

  elts.text1.style.filter = "";
  elts.text1.style.opacity = "0%";
}
function animate() {
  window.requestAnimationFrame(animate);

  let newTime = new Date();
  let shouldIncrementIndex = cooldown > 0;
  let dt = (newTime - time) / 1000;
  time = newTime;

  cooldown -= dt;

  if (cooldown <= 0) {
    if (shouldIncrementIndex) {
      textIndex++;
    }
    doMorph();
  } else {
    doCooldown();
  }
}
export default {
  mounted: function () {
    elts.text1 = this.$refs["text1"];
    elts.text2 = this.$refs["text2"];
    elts.text1.textContent = texts[textIndex % texts.length];
    elts.text2.textContent = texts[(textIndex + 1) % texts.length];
    animate();
  },
  data() {
    return {};
  },
  computed: {},
  methods: {},
};
</script>


<style scoped>
#container {
  position: absolute;
  filter: url(#threshold) blur(0.8px);
}

#text1,
#text2 {
  position: absolute;
  font-family: "FrederickatheGreat-regular", sans-serif;
  font-size: 40pt;
  text-align: center;
  user-select: none;
  width: 100%;
  left: 0px;
  top: 40%;
  z-index: 0;
}
</style>
