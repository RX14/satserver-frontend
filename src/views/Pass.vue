<template lang="pug">
  .container
    .columns
      .column.is-3
        pass(v-bind:pass="pass" v-if="pass")
    .columns
      .column.is-3(v-for="file in files")
        file(v-bind:file="file")
</template>

<script>
  import Pass from "components/Pass"
  import File from "components/File"
  import { mapState } from "vuex"

  export default {
    props: ["id"],
    components: {
      Pass,
      File
    },
    computed: {
      ...mapState({
        pass(state) {
          return state.passes[this.id]
        },
        files(state) {
          return state.files[this.id] || []
        }
      })
    },
    watch: {
      '$route': 'fetchData'
    },
    created() {
      this.fetchData()
    },
    methods: {
      fetchData() {
        this.$store.dispatch("getPass", this.id)
        this.$store.dispatch("getFiles", this.id)
      }
    }
  }
</script>
