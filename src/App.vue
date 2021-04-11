
<template>
 <the-header></the-header>
  <section>
    <hero></hero>
  </section>
</template>

<script>

import TheHeader from './components/layout/the-header.vue';

export default {

  data(){
    return {
      movieData: [
        {
          "id": 550,
          "original_title": "Fight Club",
          "title": "Fight Club",
          "year": 1999,
          "image": "url",
          "genre": ["action", "stuff"],
        }
      ]
    }
  },
  components: {
    TheHeader
  }
 
}
</script>


<style>  

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
