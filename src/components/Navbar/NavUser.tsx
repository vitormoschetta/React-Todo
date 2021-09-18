import { useContext } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from '../../contexts/AuthContext';
import { UserService } from "../../services/UserService";
import '../../styles/global.css'


export default function UserNav() {

    const { user, setUser } = useContext(AuthContext)
    const userService = new UserService()

    function logout() { 
        setUser(null) 
        userService.removeUserLocalStorage('user')
    }

    if (user) {
        return (
            <div className="uk-navbar-right">
                <label className="uk-navbar-item uk-logo">{user.name}</label>
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