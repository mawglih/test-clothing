import { Component } from 'react';
import SHOP_DATA from '../../shop.data';

class ShopPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {

    return(
      <div>Shop Page</div>
    )
  }
}

export default ShopPage;
