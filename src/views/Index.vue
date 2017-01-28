<template lang="pug">
  .container
    .columns.is-multiline
      .column.is-3(v-for="pass in futurePasses")
        router-link(:to="`/pass/${pass.id}`")
          pass(v-bind:pass="pass")
</template>

<script>
  import Pass from "components/Pass"
  import moment from "moment"
  import { mapState } from "vuex"

  export default {
    components: {
      Pass
    },
    computed: {
      ...mapState(["passes"]),
      futurePasses() {
        let now = moment()
        // TODO: use now property
        return Object.values(this.passes).filter(pass => moment(pass.start_time).isAfter(now))
      }
    },
    watch: {
      '$route': 'fetchData'
    },
    created() {
      this.fetchData()
    },
    methods: {
      fetchData() {
        this.$store.dispatch("refreshData")
      }
    }
  }
</script>
