import { reactive } from "vue"

export const store = reactive({
    cardNumber: 20,
    urlAPI: "https://db.ygoprodeck.com/api/v7/cardinfo.php",
    cardsResponse: [],

});

