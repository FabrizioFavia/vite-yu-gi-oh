import axios from 'axios'

export function cardAPI(store) {
    axios.get(store.urlAPI,
        { params: { num: store.cardNumber, offset: 0 } }
    ).then(r => {
        store.cardsResponse = r.data.data;
    })
}