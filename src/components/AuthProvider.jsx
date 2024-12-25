import React, { useState, useContext, createContext } from "react";
import api from "../api/axiosInstance";

const AuthContext = createContext();

export const AuthProvider = ({ children }) =>  {
    const [authToken, setAuthToken] = useState('');

    const login = async (credentials) => {
        const response = await api.post('/users/login', credentials);
        const {accessToken} = response.data;

        if (accessToken) {
            setAuthToken(accessToken);
        }
    }

    const logout = async () => {

    }


    return (
        <AuthContext.Provider value={{ authToken, login, logout}} >
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
  
    if (context === undefined) {
      throw new Error('useAuth must be used inside of a AuthProvider');
    }
  
    return context;
  }