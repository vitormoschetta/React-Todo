import { useContext } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from '../../contexts/AuthContext';
import { IUserLocalStorageService } from '../../services/UserLocalStorageService';
import '../../styles/global.css'


export default function UserNav(props: IUserLocalStorageService) {

    const { userLocalStorageService } = props
    const { userContext, setUserContext } = useContext(AuthContext)

    function logout() {
        setUserContext(null)
        userLocalStorageService.removeUser()
    }

    if (userContext) {
        return (
            <div className="uk-navbar-right">
                <label className="uk-navbar-item uk-logo">{userContext.username}</label>
                <label className="uk-navbar-item uk-logo cursor-pointer" onClick={logout}>Sair</label>
            </div>
        )
    }

    return (
        <div className="uk-navbar-right">
            <label className="uk-navbar-item uk-logo">Visitante</label>
            <Link to="/login" className="uk-navbar-item uk-logo">Login</Link>
        </div>
    )
}