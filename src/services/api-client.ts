import axios from "axios";

export default axios.create({
    params: {
        baseURL: 'https://api.rawg.io/api',
        key:'4d4bf2a6f7014b18a241f61f14c6600f',
    },
});