import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-7fb77.firebaseio.com/',
});

export default instance;
