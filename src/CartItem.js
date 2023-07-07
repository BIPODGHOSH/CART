import React from 'react'

class CartItem extends React.Component{
    render () {
        return (
            <div className='cart-item'>
                <div className='left-block'>
                    <img style={style.image}/>
                </div>
                <div className='right-block'>
                    <div style={ {fontSize : 25} }>Phone</div>
                    <div style={ {color : '777'} }>RS 9999</div>
                    <div style={ {color : '777'} }>QTY 1</div>

                    <div className='cart-item-actions'>

                    </div>
                </div>

                
            </div>
        )
    }

}

const style = {
    image : {
        height : 100,
        width : 100,
        borderRadius : 4,
        background : 'red'

    }
}

export default CartItem;