<template>
    <div>
        <h2>main</h2>

            <!--<div v-for="movie in moviedata" :key="movie">

                <movie-genre-carousel v-bind:moviedata="movie" type="adventure"></movie-genre-carousel>
                

            </div> -->




             <movie-genre-carousel v-bind:moviedata="moviedata" type="adventure"></movie-genre-carousel>

             <movie-genre-carousel v-bind:moviedata="moviedata" type="adventure"></movie-genre-carousel>

             <movie-genre-carousel v-bind:moviedata="moviedata" type="adventure"></movie-genre-carousel>
    </div>
</template>

<script>
import MovieGenreCarousel from '../UI/movie-genre-carousel.vue';

export default {
 
    props:['moviedata'],
    components: {
        MovieGenreCarousel,
    }

}

</script>