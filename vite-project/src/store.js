import { reactive } from "vue"

export const store = reactive({
    cardArchetype: "",
    cardNumber: 20,
    urlAPI: "https://db.ygoprodeck.com/api/v7/cardinfo.php",
    archetypeAPI: "https://db.ygoprodeck.com/api/v7/archetypes.php",
    cardsResponse: [],
    archetypes: [],

});
