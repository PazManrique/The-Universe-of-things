<script setup>
import { RouterLink, RouterView } from 'vue-router'


//import HelloWorld from '@/components/HelloWorld.vue'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
   <i class="fa-solid fa-car-burst"></i>
    <div class="wrapper">
      <!-- <HelloWorld msg="You did it!" /> -->

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/favorites"> Favorites</RouterLink>
       
  
      

       
    
        
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style lang="scss">
body{
  background-color: hsl(0, 0%, 0%);
  
}

*{
  margin:0;
  padding: 0;
}


</style>
