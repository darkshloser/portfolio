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
      html_portfolio_intro: `<p>Lorem ipsum dolor sit amet, his no illum epicurei fabellas, no laudem civibus pro, ex eum ludus labitur. At mei etiam sadipscing, regione repudiandae pro ei. Nec ut vide omnesque phaedrum, mei suas dolore eu. Equidem commune no quo.</p><br/><p>Qui ludus cotidieque ei, ut purto mediocrem reformidans qui, has legere omnesque ei. Mea vero magna cotidieque at, vis noluisse prodesset ne, no pri graeco aperiri patrioque. Id per quando oblique. Sea suscipit iudicabit te. Has et euismod officiis posidonium. Altera patrioque persequeris et vim, habemus ancillae duo cu.</p>`,
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
