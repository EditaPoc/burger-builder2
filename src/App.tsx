import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import ContactData from './containers/Checkout/ContactData/ContactData';
import Checkout from './containers/Checkout/Checkout';


class App extends Component {
  render () {
  return (
    <div>
      <Layout>
        {/* <BurgerBuilder />
        <Checkout /> */}
       
        <Switch>
        <Route path="checkout" component={Checkout} />
        <Route path="/" component={BurgerBuilder} />
        {/* <Route path="/contact-data" element={<ContactData />} /> */}
        </Switch>
        
      </Layout>
    </div>
  );
}
}

export default App;
