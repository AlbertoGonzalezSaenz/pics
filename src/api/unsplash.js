import axios from 'axios'

export default axios.create({
    baseURL : 'https://api.unsplash.com',
    headers : {
        Authorization : 'Client-ID NGVbq1wpFNyCDzw9v8QPTpb3QG8kWfKXSMtE9N55db0'
    }
})