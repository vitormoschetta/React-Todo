import { createContext, ReactNode, useEffect, useState } from "react"
import { IUser } from "../models/User";


interface AuthContextProps {
    userContext: IUser | undefined
    setUserContext: any
}

interface AuthContextProviderProps {
    children: ReactNode
}

export const AuthContext = createContext({} as AuthContextProps)

export default function AuthContextProvider(props: AuthContextProviderProps) {

    const [userContext, setUserContext] = useState<IUser>()

    return (
        <AuthContext.Provider value={{ userContext, setUserContext }}>
            {props.children}
        </AuthContext.Provider>
    )
}