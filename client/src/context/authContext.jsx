import { createContext, useContext, useState } from "react";
import { registerRequest } from "../api/auth";

export const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error("useAuth must be used wishin an AuthProvider");
    }
    return context;
}

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState();

    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const singup = async (user) => {
        try {
            const res = await registerRequest(user);
            setUser(res.data.user);
            setIsAuthenticated(true);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <AuthContext.Provider value={{
            singup,
            isAuthenticated,
            user
        }}>
            {children}
        </AuthContext.Provider>
    )
}