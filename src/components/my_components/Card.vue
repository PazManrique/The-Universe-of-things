<script>
export default {
  props: {
    heroe: Object,
  },
}
</script>

<template>

<div class="d-flex justify-content-center" >

  <div :id="heroe.id" class="card text-bg-success mb-3" style="max-width: 18rem;">
  
    <div class="d-flex justify-content-between">
      <h5 class="card-title"> {{heroe.name}}</h5>
      <h6>Power: {{heroe.powerstats.power}}</h6>
    </div>
    <img :src="heroe.images.md"
      class="card-img-top"
      :alt="heroe.name"
    />
    <ul class="list-group list-group-flush">
      <li class="list-group-item">
        <i class="fa-solid fa-brain" style="color: purple"></i> Intelligence: {{heroe.powerstats.intelligence}}
      </li>
      <li class="list-group-item">
        <i class="fa-solid fa-hand-back-fist" style="color: chocolate"></i> Strength: {{heroe.powerstats.strength}}
        
      </li>
      <li class="list-group-item">
        <i class="fa-solid fa-person-running" style="color: green"></i> Speed: {{heroe.powerstats.speed}}
      </li>
      <li class="list-group-item">
        <i class="fa-solid fa-battery-quarter" style="color: blue"></i>
        Durability: {{heroe.powerstats.durability}}
      </li>
      <li class="list-group-item">
        <i class="fa-solid fa-bomb" style="color: red"></i>Combat: {{heroe.powerstats.combat}}
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

body {
  padding: 1vw;
  padding-left: 30vh;
  margin-top: 2vw;
  
}

</style>
