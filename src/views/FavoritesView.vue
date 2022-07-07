<script>
import { mapState, mapWritableState } from 'pinia'
import { userFavStore } from '../stores/favorites'
import Header from '../components/my_components/Header.vue'
import Nav from '../components/my_components/Nav.vue'
import Rating from '../components/my_components/Rating.vue'
import Footer from '../components/my_components/Footer.vue'
import Card from '../components/my_components/Card.vue'
import Banner2 from '../components/my_components/Banner2.vue'

export default {
    data() {
        return {
            superHeroeList: [],
        };
    },
    computed: {
        ...mapWritableState(userFavStore, ['favorites']),
    },
    components: { Header, Nav, Rating, Footer, Card, Banner2 }
}
</script>

<template>
<Nav />
<Header />
<Banner2 />

<div class="d-flex flex-wrap ms-5 me-5 justify-content-center">
      <div class="d-flex flex-wrap ms-5 me-5">
        
        <div v-for="(heroe,key) in favorites" :key="key">
          <Card :heroe="heroe" />
        </div>
      </div>
    </div>

<Footer></Footer>
</template>

<style lang="css" scoped></style>
