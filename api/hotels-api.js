import axios from 'axios';

export { getHotels };

function getHotels() {
    const url = '/api/hotels';

   return axios.get(url).then(res => res.data);
}