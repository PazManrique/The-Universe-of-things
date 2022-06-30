<script>
import Card from '../components/my_components/Card.vue'
import Nav from '../components/my_components/Nav.vue'
import Header from '../components/my_components/Header.vue'
import Banner from '../components/my_components/Banner.vue'
import SuperHeroeOfTheMonth from '../components/my_components/SuperHeroeOfTheMonth.vue'
import IconPencil from '../components/icons/IconPencil.vue'

export default {
  data() {
    return {
      superHeroeList: [
      ],
    }
  },
  components: { Card, Nav, Header, Banner, SuperHeroeOfTheMonth, IconPencil },
  created() {
    fetch('https://akabab.github.io/superhero-api/api/all.json')
      .then((response) => response.json())
      .then((data) => {
        this.superHeroeList = data
      })
      .catch(function (error) {
        console.log('Hubo un problema con la petición Fetch:' + error.message)
      })
  },
}
</script>

<template>
  <main>
    <Nav />
    <Header />
    <Banner />
    <SuperHeroeOfTheMonth />
    <div class="d-flex flex-wrap ms-5 me-5 justify-content-center" >

      <div v-for="heroe in superHeroeList" :key="key">
        <Card :heroe="heroe" />
      </div>
      </div>

      <IconPencil />
  </main>
</template>
<style>


</style>
