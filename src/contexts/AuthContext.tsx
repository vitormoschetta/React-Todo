import { createContext, ReactNode, useState } from "react"

interface UserProps {
    id: string
    name: string
}

interface AuthContextProps {
    user: UserProps | undefined
    setUser: any
}

interface AuthContextProviderProps {
    children: ReactNode
}

export const AuthContext = createContext({} as AuthContextProps)

export default function AuthContextProvider(props: AuthContextProviderProps) {

    const [user, setUser] = useState<UserProps>();

    // useEffect(() => {
    //     setUser(user)
    // }, [user])

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {props.children}
        </AuthContext.Provider>
    )
}