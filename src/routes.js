import { Switch, Route } from 'react-router-dom';
import Awnings from './pages/Awnings';
import Contact from './pages/Contact';
import Enclosures from './pages/Enclosures';
import Furniture from './pages/Furniture';
import SpecialOrders from './pages/SpecialOrders';
import Home from './pages/Home';
import ShopPage from './pages/shop';
import Dice from './pages/DicePage/dice';
import Loto from './pages/Loto/loto';
import Coin from './pages/Coin/coin';
import Display from './pages/Colors/display';
import Lights from './pages/Lights';
import BoxMaker from './pages/BoxMaker';
import Todo from './pages/Todo';
import Deck from './pages/Deck';
import Jokes from './pages/Jokes';
import TodoHooks from './pages/Todo-hooks';
import LoginPage from './pages/LoginPage';
import TodoHooks2 from './pages/Todo/Todo-hooks2';
import Contact2 from './pages/Contact';

const Routes = () => (
    <Switch>
        <Route path='/awnings' component={Awnings} />
        <Route path='/contact' component={Contact}/>
        <Route path='/enclosures' component={Enclosures}/>
        <Route path='/furniture' component={Furniture}/>
        <Route path='/specialorders' component={SpecialOrders}/>
        <Route path='/shoppage' component={ShopPage} />
        <Route path='/dice' component={Dice} />
        <Route path='/loto' component={Loto} />
        <Route path='/coin' component={Coin} />
        <Route path='/colors' component={Display} />
        <Route path='/lights' component={Lights} />
        <Route path='/boxmaker' component={BoxMaker} />
        <Route path='/todo' component={Todo} />
        <Route path='/deck' component={Deck} />
        <Route path='/jokes' component={Jokes} />
        <Route path='/todohooks' component={TodoHooks} />
        <Route path='/todohooks2' component={TodoHooks2} />
        <Route path='/login' component={LoginPage}/>
        <Route path='/contact' component={Contact2}/>
        <Route exact path='/' component={Home} />
      </Switch>
  
);
export default Routes;