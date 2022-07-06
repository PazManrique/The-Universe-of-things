<script>
import { mapState } from 'pinia'
import { userFavStore } from '../stores/favorites'

export default {
  data() {
    return {
      superHeroeList: [],
    }
  },

  computed: {
    ...mapState(userFavStore, ['heroe', 'favorite']),
  },

  
}
</script>

<template>
<Nav></Nav>
</template>

<style lang="css" scoped></style>
