import React from 'react';
import CartItem from './CartItem';

class Cart extends React.Component {

    constructor() {
        super(); //if
        this.state = {
            products: [
                {
                    price: 99,
                    title: 'Watch',
                    qty: 1,
                    image: '',
                    id: 1
                },
                {
                    price: 999,
                    title: 'Phone',
                    qty: 1,
                    image: '',
                    id: 2
                },
                {
                    price: 999,
                    title: 'Laptop',
                    qty: 1,
                    image: '',
                    id: 3
                },
            ]
        }
    }

    render() {
        const { products } = this.state;
        return (
            <div className="cart">

                {/* <CartItem />
                <CartItem /> */}
                {products.map((product) => {
                    return <CartItem
                        product={product}
                        key={product.id} 
                    />
                })}
            </div>
        );
    }
}

export default Cart;