import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import Main from './Main';
import Compare from './Compare';
import { Provider } from 'mobx-react';
import registerServiceWorker from './registerServiceWorker';
import ProductStore from './store/productStore';
const store = new ProductStore();

ReactDOM.render((<Provider store= {store}>  
    <Main/>
</Provider>), document.getElementById('root'));
registerServiceWorker();
