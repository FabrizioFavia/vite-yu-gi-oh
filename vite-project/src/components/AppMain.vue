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
        <div v-for="card in store.cardsResponse">
            <div>
                <img :src="card.card_images[0].image_url" alt="">
                <h3>{{ card.name }}</h3>
                <p>{{ card.type }}</p>
            </div>

        </div>



    </main>
</template>