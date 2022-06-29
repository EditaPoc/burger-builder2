import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://my-burger-builder-9fb9c-default-rtdb.europe-west1.firebasedatabase.app/'
});

export default instance;