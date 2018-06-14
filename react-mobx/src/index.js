import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import ProductStore from './store/productStore';
const store = new ProductStore();
ReactDOM.render(<App store={store} />, document.getElementById('root'));
registerServiceWorker();
