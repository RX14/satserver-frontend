<template lang="pug">
  div.card
    header.card-header
      p.card-header-title {{pass.satellite.name}}
    .card-content
      .content
        small.
          {{time}}
          <p/>
          Max elevation {{round(pass.max_elevation)}} degrees
</template>

<script>
  import moment from "moment"
  import "moment-range"

  export default {
    props: ["pass"],
    methods: {
      round: Math.round
    },
    computed: {
      time() {
        let start = moment(this.pass.start_time)
        let end = moment(this.pass.end_time)
        let duration = moment.range(start, end)

        return `${start.calendar()} for ${duration.diff("minutes")} minutes`
      }
    }
  }
</script>

<style scoped>
</style>
