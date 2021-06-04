
<template>
 <the-header></the-header>
  <section>
    <main-view v-bind:moviedata="moviedata"></main-view>
  </section>
</template>

<script>

import TheHeader from './components/layout/the-header.vue';
import MainView from './components/layout/the-main.vue';


export default {

  data(){
    return {
      moviedata: [
        {
          "id": 550,
          "original_title": "Iron Man",
          "title": "Iron Man",
          "year": 2010,
          "image": "iron-man.jpeg",
          "genre": ["action", "stuff"],
        },
        {
          "id": 551,
          "original_title": "Ant Man",
          "title": "Ant Man",
          "year": 2014,
          "image": "ant-man.png",
          "genre": ["action", "stuff"],
        },
         {
          "id": 552,
          "original_title": "Avengers End Game",
          "title": "Avengers End Game",
          "year": 2018,
          "image": "endgame.jpeg",
          "genre": ["action", "stuff"],
        },
         {
          "id": 553,
          "original_title": "Spiderman",
          "title": "Spiderman",
          "year": 2019,
          "image": "far-from-home.jpeg",
          "genre": ["action", "stuff"],
        },
         {
          "id": 554,
          "original_title": "Civil War",
          "title": "Civil War",
          "year": 2017,
          "image": "civil-war.jpeg",
          "genre": ["action", "stuff"],
        }
      ]
    }
  },
  components: {
    TheHeader,
    MainView,
  }
 
}
</script>


<style>  

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
</style>
