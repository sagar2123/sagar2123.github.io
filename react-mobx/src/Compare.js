import React,{Component} from 'react';
import {observer, inject} from 'mobx-react';

@inject('store')
@observer
class Compare extends Component{
    render() {
        return(
            <div className="container">
                <div className="row">
                    {this.props.store.selectedProducts.map((obj,index)=>{
                        return <div key={obj.id} className="col-md-6 col-lg-6 col-sm-6">  
                            <div className="product-compare-card">
                                <img src={obj.img} className="product-compare-img" alt="" />
                            </div>
                            <div className="product-compare-container">
                                 <h3 className="text-center">Name : {obj.name}</h3>
                                 <h3 className="text-center">Height : {obj.height}</h3>
                                 <h3 className="text-center">Width : {obj.width}</h3>
                                 <h3 className="text-center">Color : {obj.color}</h3>
                                 <h3 className="text-center">Type : {obj.type}</h3>
                                 <h3 className="text-center">Material : {obj.material}</h3>
                                 <h3 className="text-center">Price : {obj.price}</h3>
                            </div>
                        </div>
                    })}
                </div>
                <div className="row">
                    <div  className="col-md-12 col-lg-12 col-sm-12 padding-sides">  
                        <button className='highlighted-button' onClick={() => this.props.store.compareItems()}>Go Back</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Compare;