import { Link } from 'react-router-dom';


function Navbar() {
    return (
        <div className="uk-container">
            <nav className="uk-navbar">
                <div className="uk-navbar-letf">
                    <Link to="/" className="uk-navbar-item uk-logo">Home</Link>
                </div>
                <div className="uk-navbar-letf">
                    <Link to="/todos" className="uk-navbar-item uk-logo">Todos</Link>
                </div>                
            </nav>
        </div>
    );
}

export default Navbar;
