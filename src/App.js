import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          price: 99,
          title: 'Watch',
          qty: 1,
          image: 'https://m.media-amazon.com/images/I/612pVM7fuFL._SX300_SY300_QL70_FMwebp_.jpg',
          id: 1
        },
        {
          price: 999,
          title: 'Phone',
          qty: 1,
          image: 'https://www.apple.com/newsroom/images/product/iphone/geo/Apple-iPhone-14-Pro-iPhone-14-Pro-Max-deep-purple-220907-geo_inline.jpg.large.jpg',
          id: 2
        },
        {
          price: 999,
          title: 'Laptop',
          qty: 1,
          image: 'https://m.media-amazon.com/images/I/91oF9q-jE5L.jpg',
          id: 3
        },
      ]
    }
  }

  handelIncQty = (item) => {
    const { products } = this.state;
    const index = products.indexOf(item);
    products[index].qty += 1;

    this.setState({
      products
    })
  }

  handelDecQty = (item) => {
    const { products } = this.state;
    const index = products.indexOf(item);
    if (products[index].qty <= 0) {
      return;
    }
    products[index].qty -= 1;

    this.setState({
      products
    })
  }

  handelDelete = (item) => {
    const { products } = this.state;
    const index = products.indexOf(item);

    products.splice(index, 1);
    this.setState({
      products
    })
  }

  cartCount = () => {
    const { products } = this.state;
    let count = 0
    products.forEach((product) => {
      count += product.qty;
    });

    return count;
  }

  cartTotal = () =>{
    const {products} = this.state;
    let total = 0;
    products.map((item)=>{
      return total = total + item.qty * item.price ;
    });
    return total;
  }

  render() {
    const { products } = this.state
    return (
      <div className="App">
        <Navbar
          count={this.cartCount()}
        />
        <Cart
          products={products}
          increaseQty={this.handelIncQty}
          decreaseQty={this.handelDecQty}
          deleteItem={this.handelDelete}
        />
        <div>Total: {this.cartTotal()}</div>
      </div>
    );
  }
}

export default App;
