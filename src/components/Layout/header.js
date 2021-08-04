import { NavLink } from 'react-router-dom';
import './layout.scss';

const Header = props => {
  return (
    <div className="nav-container">
      <div className="logo-nav">Logo</div>
      <div className="all-links">
        <div><NavLink to="/shop" activeClassName="active-link" className="nav-link">Shop</NavLink></div>
        <div><NavLink to="/contact" activeClassName="active-link" className="nav-link">Contact</NavLink></div>
        <div><NavLink to="/login" activeClassName="active-link" className="nav-link">Sign In</NavLink></div>
      </div>
    </div>
  )
}

export default Header;
