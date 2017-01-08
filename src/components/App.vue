<template lang="pug">
  #app
    section.hero.is-primary
      .hero-body
        .container
          h1.title
            | SatServer
      .hero-foot

    section.section
      .container
        .columns.is-multiline
          .column.is-3(v-for="pass in passes")
            pass(v-bind:pass="pass")
</template>

<script>
  import Pass from "components/Pass"
  import { mapState } from "vuex"

  export default {
    components: {
      Pass
    },
    computed: mapState(["passes"])
  }
</script>

<style>
</style>

<style src="bulma/css/bulma.css"></style>
<!-- <style src="font-awesome/css/font-awesome.css"></style> -->
