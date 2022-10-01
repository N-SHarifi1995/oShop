import axios from 'axios'

export default () => {
    return axios.create({
        baseURL: 'https://limitless-lake-55070.herokuapp.com'
       

    })
}