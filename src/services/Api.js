import axios from 'axios'

const instance = axios.create({
    baseURL:'https://VueBack/'
});

export default instance

