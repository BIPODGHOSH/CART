import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';
// import * as firebase from "firebase";
import db from './index'
import { collection, query, getDocs } from "firebase/firestore";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
      loading: true
    };
  }

  componentDidMount() {
    let fetchData = async () => {
      const q = query(collection(db, "products"));

      const querySnapshot = await getDocs(q);
      const products = querySnapshot.docs.map((doc) => {
        // doc.data() is never undefined for query doc snapshots
        const data = doc.data();
        data["id"] = doc.id;
        console.log(doc.id, " => ", doc.data());
        return data;
        
      });
      this.setState({ products: products, loading: false });
    }
    fetchData();
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
    let count = 0;

    products.forEach(product => {
      count += product.qty;
    });

    return count;
  }

  cartTotal = () => {
    const { products } = this.state;
    let total = 0;
    products.map((item) => {
      return total = total + item.qty * item.price;
    });
    return total;
  }

  render() {
    const { products, loading } = this.state
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
        {loading && <h1>Loading Products...</h1>}
        <div style={{ fontSize: 30, marginLeft: 600 }}>Total: {this.cartTotal()}</div>
      </div>
    );
  }
}

export default App;
