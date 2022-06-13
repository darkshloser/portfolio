<template>
  <div>
    <h3 class="font-section centered-text title-size">Intro</h3>
    <div v-html="html_portfolio_intro" class="font-cormorant text-size"></div>
    <br />
  </div>
</template>

<script>
export default {
  name: "Intro",
  data() {
    return {
      html_portfolio_intro: `
      <p>Very early in my career in software development, I had the opportunity to work on all aspects of software products not only on the design and development side but also meeting clients for new features and doing support activities.</p>
      <p>This path was very intense and valuable to take at the beginning of my career. It gave me a broader overview of the entire development lifecycle and possible pitfalls which can accrue along the way.</p>
      <br/>
      <p>I’ve listed highlights of some of my previous projects and the tech stacks, which I’ve used in the section below.</p>
      <p><u>Feel free to get in touch with me.</u></p>
      `,
    };
  },
};
</script>

<style scoped>
.title-size {
  font-size: 1.75rem;
}
.text-size {
  font-size: 1rem;
}
</style>
