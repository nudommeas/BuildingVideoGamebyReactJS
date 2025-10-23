import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key: 'b6ef5cb44ff140ca963ae9b890c1f1bf'
    }
})