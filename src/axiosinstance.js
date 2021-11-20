import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://mypetsapi.herokuapp.com/read'
});

export default instance;