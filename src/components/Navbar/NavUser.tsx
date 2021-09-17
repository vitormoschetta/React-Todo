import { useContext } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "../../App"


export default function UserNav() {

    const { user, setUser } = useContext(AuthContext)

    function logout() { setUser(null) }

    if (user) {
        return (
            <div className="uk-navbar-right">
                <label className="uk-navbar-item uk-logo">{user.name}</label>
                <button className="uk-navbar-item uk-logo" onClick={logout}>Sair</button>
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