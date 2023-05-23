import { reactive } from "vue"

let cardNumber = 20;
export const store = reactive({
    urlAPI: "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=" + cardNumber + "&offset=0",
    cardsResponse: [],

});