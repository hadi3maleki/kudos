import axios  from 'axios';
export const BaseApiUrl = {
    dev: 'http://172.16.0.52:6060/api',// https://quera.iran.liara.run
    prod: 'https://prod.quera.iran.liara.run'
};

export const AXIOS = axios.create({
    baseURL:process.env.NODE_ENV === 'development' ? BaseApiUrl.dev : BaseApiUrl.prod,
    timeout:2000

}) 