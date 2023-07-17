import React from 'react'


const CartItem = (props) => {

    const { price, title, qty, image } = props.products; //object destructureing
    const { products, increaseQty, decreaseQty, deleteItem } = props

    return (
        <div className='cart-item'>
            <div className='left-block'>
                <img style={style.image} alt='poster' src={image} />
            </div>
            <div className='right-block'>
                <div style={{ fontSize: 25 }}>{title}</div>
                <div style={{ color: '777' }}>RS {price}</div>
                <div style={{ color: '777' }}>QTY {qty}</div>

                <div className='cart-item-actions'>
                    {/* buttons */}
                    <img alt='increase'
                        className='action-icons'
                        src='https://as1.ftcdn.net/v2/jpg/05/54/61/58/1000_F_554615828_4zU96F41Cqijoshu6pL1LtorLaWvCU1W.jpg'
                        onClick={() => { increaseQty(products) }}
                    />
                    <img alt='decrease'
                        className='action-icons'
                        src='https://as2.ftcdn.net/v2/jpg/05/76/53/69/1000_F_576536915_r4ZywQsvWlqSIeZJlSKOXT9FM7fXMG31.jpg'
                        onClick={() => { decreaseQty(products) }}
                    />
                    <img alt='delete'
                        className='action-icons'
                        src='https://as2.ftcdn.net/v2/jpg/01/90/89/15/1000_F_190891550_N7uKp2aHE3mOc20dmtDytj7atgvbhdOu.jpg'
                        onClick={() => { deleteItem(products) }}
                    />
                </div>
            </div>


        </div>
    )


}

const style = {
    image: {
        height: 100,
        width: 100,
        borderRadius: 4,
    }
}

export default CartItem;