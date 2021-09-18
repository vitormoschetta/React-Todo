import { createContext, ReactNode, useEffect, useState } from "react"
import { IUser } from "../models/User";


interface AuthContextProps {
    user: IUser | undefined
    setUser: any
}

interface AuthContextProviderProps {
    children: ReactNode
}

export const AuthContext = createContext({} as AuthContextProps)

export default function AuthContextProvider(props: AuthContextProviderProps) {

    const [user, setUser] = useState<IUser>()

    // useEffect(() => {
    //     let userAuth = userService.getLocalStorage()
    //     if (userAuth) {
    //         setUser(userAuth)
    //     }
    // }, [user])

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {props.children}
        </AuthContext.Provider>
    )
}