import axios from "axios"

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:"f97953e4c65e46ac994a65fd71c773ed"
    }
})