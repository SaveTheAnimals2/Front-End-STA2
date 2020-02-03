import axios from 'axios';

function axiosWithAuth()
{
    return axios.create({
        baseURL: '',
        headers: {
            authorization: localStorage.getItem('token')
        }
    })
}

export default axiosWithAuth;