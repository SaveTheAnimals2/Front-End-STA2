import axios from 'axios';

function axiosWithAuth()
{
    return axios.create({
        baseURL: 'https://save-the-animal-buildweek.herokuapp.com/api/',
        headers: {
            authorization: localStorage.getItem('token')
        }
    })
}

export default axiosWithAuth;