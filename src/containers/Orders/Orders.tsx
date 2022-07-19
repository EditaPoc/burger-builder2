import React, { Component } from 'react';

import Order from '../../components/Order/Order';
import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import { ingredientProperties } from '../Checkout/Checkout';


  
  interface Props {
    ingredients: ingredientProperties;
    id: React.Key | null | undefined;
    price: number;
  }

  interface State {
    orders: [] ;
    loading: boolean;
  }
class Orders extends Component<Props> {
    state: State = {
        orders: [],
        loading: true,
    }


    componentDidMount() {
        axios.get('/orders.json')
            .then( res => {
                //console.log(res.data); gaunam javascript objects
                //verciam objekta i arejus
                const fetchedOrders = [];
                for (let key in res.data) {
                    fetchedOrders.push({
                        ...res.data[key],
                        id: key
                    });
                }
                this.setState({loading: false, orders: fetchedOrders});
            })
            .catch( err => {
                this.setState({loading: false});
            });
    }
    render () {
        return (
            <div>
                {this.state.orders.map((order: { id: React.Key | null | undefined; ingredients: ingredientProperties; price: number; }) => (
                    <Order
                        key={order.id}
                        ingredients={order.ingredients}
                        price={order.price}
                        name={{}} amount={0} />

                ))}
            </div>
        );
    }
}


export default withErrorHandler(Orders, axios);