<template>
    <section>

        <div v-for="movie in moviedata" :key="movie">

                <movie-genre-carousel v-bind:moviedata="movie" type="adventure"></movie-genre-carousel>
                 <card>
                    <img :src="require(`@/assets/img/${movie.image}`)">
                </card>

            </div>
            <!--<card>
                <img :src="require(`@/assets/img/${moviedata.image}`)">
            </card>-->
            

    </section>
</template>

<script>
import Card from '../UI/card.vue';

export default {
    data(){
        return {
    
        }
    },
    props: ['type', 'moviedata'],
    components: {
        Card
    }

}


</script>

<style scoped>

    div{
        display: inline-block;
    }


</style>