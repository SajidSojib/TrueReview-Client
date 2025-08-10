import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Firebase/AuthProvider';
import Swal from 'sweetalert2';
import axios from 'axios';

const axiosSecure = axios.create({
    baseURL: "https://true-review-server.vercel.app",
    // baseURL: "http://localhost:9000",
})
const useAxiosSecure = () => {
    const { user } = useContext(AuthContext)

    axiosSecure.interceptors.request.use(config => {
            config.headers.Authorization = `Bearer ${user.accessToken}`
        return config;
    })
    
    axiosSecure.interceptors.response.use(res => res, async err => {
        if(err.response.status === 401 || err.response.status === 403) {
            // await logOutUser()
            // navigate('/login')
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: err.response.data.message,
            })
        }
        return Promise.reject(err)
    })
    return axiosSecure
};

export default useAxiosSecure;