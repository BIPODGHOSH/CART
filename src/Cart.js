import React from 'react';
import CartItem from './CartItem';

const Cart = (props) => {



    const { products } = props;
    return (
        <div className="cart">

            {/* <CartItem />
                <CartItem /> */}
            {products.map((product) => {
                return <CartItem
                    products={product}
                    key={product.id}
                    increaseQty={props.increaseQty}
                    decreaseQty={props.decreaseQty}
                    deleteItem={props.deleteItem}
                />
            })}
        </div>
    );

}

export default Cart;