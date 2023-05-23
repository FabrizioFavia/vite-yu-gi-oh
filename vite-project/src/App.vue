<script>
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'
import { store } from './store';
import axios from 'axios';

export default {
  components: {
    AppHeader,
    AppMain
  },
  data() {
    return {
      store
    }

  },

  mounted() {
    axios.get(this.store.urlAPI).then(r => {
      this.store.cardsResponse = r.data.data;
      console.log(this.store.cardsResponse)
      /* console.log(this.store.cardsResponse[0].card_images[0].image_url) */
    })

  }
}
</script>

<template>
  <AppHeader />
  <AppMain />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
