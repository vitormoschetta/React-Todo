import { Link } from 'react-router-dom';
import { IUserService } from '../../services/UserLocalStorageService';
import UserNav from './NavUser';


export default function Navbar(props: IUserService) {         

    return (
        <div className="uk-container">
            <nav className="uk-navbar">
                <div className="uk-navbar-letf">
                    <Link to="/" className="uk-navbar-item uk-logo">Home</Link>
                </div>
                <div className="uk-navbar-letf">
                    <Link to="/todos" className="uk-navbar-item uk-logo">Todos</Link>
                </div>
                <UserNav userLocalStorageService={props.userLocalStorageService}/>                
            </nav>
        </div>
    );
}
