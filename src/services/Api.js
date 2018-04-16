import axios from 'axios'

const instance = axios.create({
    baseURL:'http://vuestartback'
});

export default instance

