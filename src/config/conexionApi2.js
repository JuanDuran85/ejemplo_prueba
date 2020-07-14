import axios from 'axios';
import store from '../store/store';

export function conexApi() {
    axios.get("http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=TU_API_KEY&format=json")
    .then(response => {
        console.log(response.data.artists.artist);
        store.dispatch('infoApi',response.data.artists.artist);
    })
    .catch(error => {
        console.error(error);
    })
}