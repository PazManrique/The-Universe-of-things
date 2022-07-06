<script>
import { mapState } from 'pinia'
import { userFavStore } from '../../stores/favorites'
export default {computed: { ...mapState(userFavStore, { favorites: 'favorites' }) },}




</script>




<template>
  

</template>



<style lang="scss" scoped>

</style>
