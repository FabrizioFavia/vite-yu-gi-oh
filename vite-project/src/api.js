import axios from 'axios'

export function cardAPI(store) {
    let paramsAPI = { num: store.cardNumber, offset: 0 };

    if (store.cardArchetype) {
        paramsAPI.archetype = store.cardArchetype
    }

    axios.get(store.urlAPI,
        { params: paramsAPI }
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