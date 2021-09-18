import { Link } from 'react-router-dom';
import UserNav from './NavUser';


export default function Navbar() {    

    return (
        <div className="uk-container">
            <nav className="uk-navbar">
                <div className="uk-navbar-letf">
                    <Link to="/" className="uk-navbar-item uk-logo">Home</Link>
                </div>
                <div className="uk-navbar-letf">
                    <Link to="/todos" className="uk-navbar-item uk-logo">Todos</Link>
                </div>
                <UserNav />                
            </nav>
        </div>
    );
}
