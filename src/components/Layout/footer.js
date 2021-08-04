import { Link } from 'react-router-dom';
import './layout.scss';

const Footer = () => {
  return (
    <div className="footer-container">
      <div><Link to='/disclaimer'>Disclaimer</Link></div>
      <div>Adress</div>
    </div>
  )
}

export default Footer;
