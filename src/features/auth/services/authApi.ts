import axiosInstance from '../../../api/axiosInstance';
import type { LoginCredentials, AuthResponse } from '../types';

export const LoginUser= async (credentials:LoginCredentials):Promise<AuthResponse>=>{
    const response= await axiosInstance.post<AuthResponse>('/auth/login',credentials);
    return response.data;
};