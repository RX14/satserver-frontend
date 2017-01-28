<template lang="pug">
  div.card
    header.card-header
      p.card-header-title {{ typeName(file.type) }}
    .card-image
      figure.image
        img(v-bind:src="file.url" alt="Thing")
</template>

<script>
  export default {
    props: ["file"],
    methods: {
      typeName(type) {
        switch (type) {
        case 0:
          return "raw"
        case 1:
          return "mcir"
        case 2:
          return "sea"
        case 3:
          return "therm"
        }
      }
    }
  }
</script>
