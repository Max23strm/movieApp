import axios from "axios";

const movieDb= axios.create(
    {
        baseURL:'https://api.themoviedb.org/3/movie',
        params:{
            api_key:'3ca3d028a909311c84d9ae5d7a88ee6c',
            language:'en-US'
        }
    }
)

export default movieDb