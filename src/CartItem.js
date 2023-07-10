import React from 'react'


class CartItem extends React.Component {

    

    increaseQty = () => {
        // setState mehode 1
        this.setState({
            qty: this.state.qty + 1
        });
    }

    decreaseQty = () => {
        // setState method 2 (if you need prevus state then use this method)
        this.setState((prevusState) => {
            if(prevusState.qty > 1){
                return {
                    qty: prevusState.qty - 1
                }
            }
            
        })
    }

    deleteItem = () =>{
        this.setState({
            state : null
        })
    }


    render() {

        const { price, title, qty } = this.props.product; //object destructureing

        return (
            <div className='cart-item'>
                <div className='left-block'>
                    <img style={style.image} />
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
                            onClick={this.increaseQty} 
                        />
                        <img alt='decrease'
                            className='action-icons'
                            src='https://as2.ftcdn.net/v2/jpg/05/76/53/69/1000_F_576536915_r4ZywQsvWlqSIeZJlSKOXT9FM7fXMG31.jpg'
                            onClick={this.decreaseQty}
                        />
                        <img alt='delete'
                            className='action-icons'
                            src='https://as2.ftcdn.net/v2/jpg/01/90/89/15/1000_F_190891550_N7uKp2aHE3mOc20dmtDytj7atgvbhdOu.jpg' 
                            onClick={this.deleteItem}
                            />
                    </div>
                </div>


            </div>
        )
    }

}

const style = {
    image: {
        height: 100,
        width: 100,
        borderRadius: 4,
        background: 'red'

    }
}

export default CartItem;