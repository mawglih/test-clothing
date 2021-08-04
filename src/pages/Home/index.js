import Directory from '../../components/Directory';
import ShopPage from '../shop';
import './homepage.scss';

const Home = () => (
  <div className="homepage">
    <Directory/>
    <ShopPage />
  </div>
);

export default Home;
