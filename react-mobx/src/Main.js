import React,{Component} from 'react';
import {observer, inject} from 'mobx-react';
import App from './App';
import Compare from './Compare';

@inject('store')
@observer
class Main extends Component{
    render() {
        return (
            <div>{this.props.store.comparePage? <Compare  />: <App />}
            </div>     
        )
    }
}

export default Main;