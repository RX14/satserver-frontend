<template lang="pug">
  #app
    section.hero.is-primary
      .hero-body
        .container
          h1.title
            | SatServer
      .hero-foot
        .container
          nav.tabs.is-boxed
            ul
              router-link(to="/" tag="li" exact)
                a Home
              router-link(to="/foo" tag="li" exact)
                a Foo

    section.section
      router-view
</template>

<style src="bulma/css/bulma.css"></style>
<!-- <style src="font-awesome/css/font-awesome.css"></style> -->
