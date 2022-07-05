<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/home"></RouterLink>
        <RouterLink to="/favorites"> </RouterLink>
       
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style lang="scss">
body {
  background-color: hsl(0, 0%, 0%);
}


</style>
