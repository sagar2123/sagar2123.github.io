import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {observer, inject} from 'mobx-react';

@inject('store')
@observer
class App extends Component {

    constructor(props) {
        super(props);
        this.select = this.select.bind(this);
    }

    select(e, obj) {
        this.props.store.selectedProduct(obj);
    }

  render() {
    console.log(this.props.store.products);
    var productsList = this.props.store.products.map((obj, index) => {
        // obj.img = this.convertImage();
        return <div key={obj.id} className="col-md-4 col-lg-4 col-sm-4">  
            <div className="product-card" onClick={e => this.select(e,obj)}>
              <img src={obj.img} className="product-img" alt=""/>
              <h6>{obj.name}</h6>
            </div>
        </div>
      }, this
    )

    if(this.props.store.selectedProducts){
        var selectedProductsList = this.props.store.selectedProducts.map((object, index) =>{
            return <div key={object.id} className="col-md-6 col-lg-6 col-sm-6">  
                    <img src={object.img} className="selected-product-card-img" alt=""/>
                     <h6>{object.name}</h6>
                     </div>
        })
    }
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
          <div className="row">
              <div className="col-md-12 col-lg-12 col-sm-12">
                    <h2 className="heading"> Selected Items</h2>
            </div>
              {selectedProductsList}
              <div className="col-md-12 col-lg-12 col-sm-12">
                    {(this.props.store.selectedProducts.length===2)?<button className='highlighted-button' onClick={() => this.props.store.compareItems()}>Compare</button>:''}
            </div>
          </div>  
        </div>
      </div>
    );
  }
}

export default App;
