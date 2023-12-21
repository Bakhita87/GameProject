import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    
    params: {
        
        key:'4d4bf2a6f7014b18a241f61f14c6600f',
    },
});