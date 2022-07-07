import { defineStore } from 'pinia'

export const userFavStore = defineStore({
  id: 'ClickFavorito',
  state: () => ({
    favorites: [],
  }),
  actions: {
    addFavorites(heroe) {
      this.favorites.push(heroe)
    },
    deleteFavorites(heroe) {
      this.favorites.splice(this.favorites.indexOf(heroe), 1)
    },
  },
})

//Definiendo favoritos, en el store.
//
