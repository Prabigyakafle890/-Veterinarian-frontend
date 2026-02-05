import  {useMutation} from '@tanstack/react-query';
import {useNavigate} from 'react-router-dom';   
import { LoginUser } from '../services/authApi';
import { useAuthStore, } from '../../../store/authStore';
import type { LoginCredentials, AuthResponse } from '../types';
import type { AuthState } from '../../../store/authStore';
import  axios from 'axios';

export const useAuth = () => {
    const navigate = useNavigate(); 
    const setAuth= useAuthStore((state:AuthState)=>state.setAuthData);

    const LoginMutation = useMutation({
        mutationFn: (credentials: LoginCredentials) => LoginUser(credentials),

        onSuccess: (data: AuthResponse) => {
            setAuth(data.user, data.token);
            navigate('/dashboard'); 
        },

        onError: (error) => {
            if(axios.isAxiosError(error) && error.response){
            alert(error.response?.data?.message || 'Login failed. Please try again.');
        }
        else{
            alert('An unexpected error occurred. Please try again.');
        }
         
    },
    });

    return {
        login:LoginMutation.mutate,
        isPending:LoginMutation.isPending,
        error:LoginMutation.error,
    }
}