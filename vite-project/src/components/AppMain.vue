<script>

import { store } from '../store';
import { cardAPI } from '../api';


export default {
    name: "AppMain",

    data() {
        return {
            store,
            cardAPI
        }
    },

}
</script>

<template>
    <main>
        <div class="row d-flex justify-content-center p-3">
            <div class="col-12 col-lg-3 col-md-6">
                <label for="cardNumber">Numero carte in pagina</label>
                <select id="cardNumber" @change="cardAPI(store)" v-model="store.cardNumber" class="form-select"
                    aria-label="Default select example">
                    <option value="20">20</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                    <option value="200">200</option>

                </select>
            </div>
        </div>
        <div class="mainContainer d-flex flex-wrap">

            <div v-for="card in store.cardsResponse">
                <div class="oneCard d-flex flex-column align-items-center">
                    <img class="cardImg" :src="card.card_images[0].image_url" alt="">
                    <h3 class="mt-4 text-white w-100">{{ card.name.toUpperCase() }}</h3>
                    <p class="mt-2">{{ card.type }}</p>
                </div>
            </div>
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