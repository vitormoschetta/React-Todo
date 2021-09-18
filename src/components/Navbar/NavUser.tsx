import { useContext } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from '../../contexts/AuthContext';
import { IUserService } from '../../services/UserService';
import '../../styles/global.css'


export default function UserNav(props: IUserService) {

    const { userService } = props
    const { user, setUser } = useContext(AuthContext)    

    function onLogout() {
        setUser(null)
        userService.remove()
    }

    if (user) {
        return (
            <div className="uk-navbar-right">
                <label className="uk-navbar-item uk-logo">{user.username}</label>
                <label className="uk-navbar-item uk-logo cursor-pointer" onClick={onLogout}>Sair</label>
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