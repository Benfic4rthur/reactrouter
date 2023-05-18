import './Navbar.css';
import { NavLink } from 'react-router-dom';
const Navbar = () => {
    return <nav>
    <NavLink to="/">Home</NavLink> {/* Usasse o NavLink para navegar entre as páginas e ter o efeito ativo */}
    <NavLink to="/about">About</NavLink>
    </nav>;
};

export default Navbar;
