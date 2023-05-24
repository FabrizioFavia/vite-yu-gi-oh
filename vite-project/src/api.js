import axios from 'axios'

export function cardAPI(store) {
    axios.get(store.urlAPI,
        { params: { num: store.cardNumber, offset: 0 } }
    ).then(r => {
        store.cardsResponse = r.data.data;
        console.log(r.data.data);
    })
};

export function archetypeAPI(store) {
    axios.get(store.archetypeAPI).then(r => {
        store.archetypes = r.data;
        console.log("archetipi: ", store.archetypes)
    })

}