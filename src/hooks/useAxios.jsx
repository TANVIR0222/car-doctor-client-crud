import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
    baseURL : 'http://localhost:5173',
    withCredentials:true,

})

const useAxios = () => {
    const {logout} = useAuth();
    const navigate = useNavigate();
    useEffect(() => {
        axios.interceptors.request( res => {
            return res;
        },error =>{
            console.log(error.responce);
            if(error.responce.status === 401 || error.responce.status === 403){
                console.log('log out the user ');
                logout()
                .then(() => {
                    navigate('/login')
                })
                .then(error => {console.log(error)})
            }
        })
    }, []);

    return axiosSecure;
};

export default useAxios;