<script>
export default {
  props: {
    heroe: Object,
  },
}
</script>

<template>
  <div class="d-flex justify-content-center">
      <div id="bomb" class="card mb-5 mt-5" style="width: 18rem">
        <div class="d-flex justify-content-between">
          <h5 class="card-title">{{ heroe.name }}</h5>
          <h6>Power: 100</h6>
      </div>
      <img
        src="https://vignette.wikia.nocookie.net/marvel/images/a/ab/A-Bomb_(Rick_Jones).jpg/revision/latest?cb=20110404170428&path-prefix=es"
        class="card-img-top"
        alt="..."/>

      <ul class="list-group list-group-flush">
           <li class="list-group-item">
               <i class="fa-solid fa-brain" style="color: purple"></i> Intelligence:
          {{ heroe.powerstats.intelligence }}
           </li>
           <li class="list-group-item">
              <i class="fa-solid fa-hand-back-fist" style="color: chocolate"></i>
          Strength: {{ heroe.powerstats.strength }}
           </li>
           <li class="list-group-item">
              <i class="fa-solid fa-person-running" style="color: green"></i> Speed:
          {{ heroe.powerstats.speed }}
            </li>
          <li class="list-group-item">
              <i class="fa-solid fa-battery-quarter" style="color: blue"></i>
          Durability: {{ heroe.powerstats.durability }}
          </li>
          <li class="list-group-item">
              <i class="fa-solid fa-bomb" style="color: red"></i>Combat:
          {{ heroe.powerstats.combat }}
          </li>
      </ul>

       <div class="card-body">
               <a href="#" class="card-link">
              <i class="fa-solid fa-heart" style="color: crimson"></i> </a>
           </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
img {
  width: 30%;
}
body {
  padding: 1vw;
  padding-left: 30vh;
  margin-top: 2vw;
}
</style>
