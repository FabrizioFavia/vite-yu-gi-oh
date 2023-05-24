<script>

import { store } from '../store';
import { cardAPI } from '../api';
import { archetypeAPI } from '../api'


export default {
    name: "AppMain",

    data() {
        return {
            store,
            cardAPI,
            archetypeAPI,
        }
    },
    mounted() {
        archetypeAPI(store)
        cardAPI(store)
    },
    methods: {

    }

}
</script>

<template>
    <main>
        <div class="row d-flex justify-content-center p-3">
            <div class="col-12 col-lg-3 col-md-6">
                <label class="mb-2" for="cardNumber">Numero carte per pagina</label>
                <select id="cardNumber" @change="cardAPI(store)" v-model="store.cardNumber" class="form-select p-2"
                    aria-label="Default select example">
                    <option value="20">20</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                    <option value="200">200</option>

                </select>
            </div>
            <div class="col-12 col-lg-3 col-md-6">
                <label class="mb-2" for="archetype">Seleziona archetipo</label>
                <select @change="cardAPI(store)" id="archetype" v-model="store.cardArchetype" class="form-select p-2"
                    aria-label="Default select example">
                    <option value="">Seleziona un archetipo</option>
                    <template v-for="item in store.archetypes">
                        <option :value="item.archetype_name">{{ item.archetype_name }}</option>
                    </template>
                </select>
            </div>
        </div>
        <div class="mainContainer d-flex flex-wrap">

            <div v-for="card in store.cardsResponse">
                <div class="oneCard d-flex flex-column align-items-center">
                    <img class="cardImg" :src="card.card_images[0].image_url" alt="">
                    <h3 class="mt-4 text-white w-100">{{ card.name.toUpperCase() }}</h3>
                    <p class="mt-2">{{ card.archetype }}</p>
                </div>
            </div>

            <!-- <pre>{{ store.archetypes }}</pre> -->
        </div>



    </main>
</template>

<style lang="scss" scoped>
@use "../main.scss" as *;

.mainContainer {
    width: 1400px;
    margin: 60px auto;
    background-color: white;
    padding: 1em;
    gap: 29px;
}

main {
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: $primaryColor;
}

.oneCard {
    width: 250px;
    height: 500px;
    background-color: $primaryColor;

    .cardImg {
        max-height: 350px;
    }

    h3 {
        font-size: 22px;
        text-align: center;
    }
}
</style>