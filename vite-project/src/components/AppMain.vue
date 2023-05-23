<script>

import { store } from '../store';

export default {
    name: "AppMain",

    data() {
        return {
            store
        }
    }

}
</script>

<template>
    <main>
        <div class="mainContainer d-flex flex-wrap">
            <div v-for="card in store.cardsResponse">
                <div class="oneCard d-flex flex-column align-items-center">
                    <img class="cardImg" :src="card.card_images[0].image_url" alt="">
                    <h3 class="mt-2 text-white w-100">{{ card.name.toUpperCase() }}</h3>
                    <p>{{ card.type }}</p>
                </div>
            </div>
        </div>



    </main>
</template>

<style lang="scss" scoped>
@use "../main.scss" as *;

.mainContainer {
    width: 1400px;
    margin: 0 auto;
    background-color: white;
    padding: 1em;
    gap: 29px;
}

main {
    width: 100%;
    background-color: $primaryColor;
}

.oneCard {
    width: 250px;
    height: 500px;
    background-color: $primaryColor;

    .cardImg {
        max-height: 350px;
    }
}
</style>