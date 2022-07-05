<script setup>
import { ref } from 'vue'

const show = ref(true)
const list = ref([1, 2, 3,])
</script>

<template>
  <button @click="show = !show">Ocultar lista</button>
  <button @click="list.push(list.length + 1)">Añadir</button>
  <button @click="list.pop()">Elimina</button>
  <button @click="list.reverse()">Revierte</button>

  <ul v-if="show && list.length" id="hi">
    <li v-for="item of list">{{ item }}</li>
  </ul>
  <p v-else-if="list.length" id="help">
    Lista oculta,haz click para recuperarla.
  </p>
  <p v-else>List is empty.</p>
</template>

<style lang="css" scoped>
#help {
  color: white;
}

::marker{
  color:azure;
}

body{
  color:white;
}
</style>



<!-- Crud de prueba  --> 
