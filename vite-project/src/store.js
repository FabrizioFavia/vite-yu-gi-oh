import { reactive } from "vue"

export const store = reactive({
    cardNumber: 20,
    archetype: "Abyss Actor",
    urlAPI: "https://db.ygoprodeck.com/api/v7/cardinfo.php",
    archetypeAPI: "https://db.ygoprodeck.com/api/v7/archetypes.php",
    cardsResponse: [],
    archetypes: [],

});
