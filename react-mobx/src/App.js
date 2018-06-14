import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {observer} from 'mobx-react';

@observer
class App extends Component {

  render() {
      console.log(this.props.store.products)
    var productsList = this.props.store.products.map(function(obj) {
        // obj.img = this.convertImage();
        return <div key={obj.id} className="col-md-4 col-lg-4 col-sm-4">  
            <div className="product-card">
              <img src={obj.img} className="product-img" alt=""/>
              <h6>{obj.name}</h6>
            </div>
        </div>
      }
    )
    return (
      <div className="App">
        <div className="container">
            <div className="row">
                <div className="col-md-12 col-lg-12 col-sm-12">
                    <h1 className="text-center heading">Select any two products you want to compare</h1>
            </div>
          </div> 
            <div className="row">
              {productsList}
          </div>  
        </div>
      </div>
    );
  }
}

export default App;
