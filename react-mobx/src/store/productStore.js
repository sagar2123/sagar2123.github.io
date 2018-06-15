import { observable, computed } from "mobx";
import {action} from 'mobx';
import tb1 from '../assets/img/tb1.jpg';
import tb2 from '../assets/img/tb2.jpg';
import tb3 from '../assets/img/tb3.jpg';
import tb4 from '../assets/img/tb4.jpg';
import tb5 from '../assets/img/tb5.jpg';
import tb6 from '../assets/img/tb6.png';

class ProductStore {
    @observable comparePage = false;
    @observable selectedProducts = [];
    @observable products = [
    {
        "id": "1",
        "name": "Table 1",
        "height": "36inch",
        "width": "60inch",
        "color": "Brown",
        "type": "Foldable",
        "material": "Wood",
        "img": tb1,
        "price": "2000"
    },
    {
        "id": "2",
        "name": "Table 2",
        "height": "42inch",
        "width": "60inch",
        "color": "Black",
        "type": "Non Foldable",
        "material": "Steel",
        "img": tb2,
        "price": "2050"
    },
    {   
        "id": "3",
        "name": "Table 3",
        "height": "36inch",
        "width": "60inch",
        "color": "Purple",
        "type": "Foldable",
        "material": "Steel",
        "img": tb3,
        "price": "2400"
    },
    {
        "id": "4",
        "name": "Table 4",
        "height": "36inch",
        "width": "72inch",
        "color": "Brown",
        "type": "Non Foldable",
        "material": "Wood",
        "img": tb4,
        "price": "2450"
    },
    {
        "id": "5",
        "name": "Table 5",
        "height": "30inch",
        "width": "60inch",
        "color": "Pink",
        "type": "Foldable",
        "material": "Steel",
        "img": tb4,
        "price": "1800"
    },
    {
        "id": "6",
        "name": "Table 6",
        "height": "36inch",
        "width": "66inch",
        "color": "Dark Brown",
        "type": "Foldable",
        "material": "Cardboard",
        "img": tb4,
        "price": "2500"
    },
    {
        "id": "7",
        "name": "Table 7",
        "height": "24inch",
        "width": "36inch",
        "color": "Yellow",
        "type": "Foldable",
        "material": "Plastic",
        "img": tb5,
        "price": "3000"
    },
    {
        "id": "8",
        "name": "Table 8",
        "height": "24inch",
        "width": "42inch",
        "color": "Green",
        "type": "Foldable",
        "material": "Fibre",
        "img": tb6,
        "price": "4000"
    },
    {
        "id": "9",
        "name": "Table 9",
        "height": "30inch",
        "width": "54inch",
        "color": "Blue",
        "type": "Foldable",
        "material": "High speed Steel",
        "img": tb6,
        "price": "5000"
    }
  ];

    // @computed get total() {
    //     return this.price * this.amount;
    // }
    @action
    selectedProduct = (obj) => {
        if(this.selectedProducts.indexOf(obj)=== -1 && this.selectedProducts.length <2){
            this.selectedProducts.push(obj);
        }else if(this.selectedProducts.indexOf(obj)!== -1 && this.selectedProducts.length <=2){
            this.selectedProducts.splice(this.selectedProducts.indexOf(),1);
        }else{
            console.log("Stack full");
        }
    }

    @action
    compareItems = () => {
        this.comparePage = !this.comparePage;
    }
}

export default ProductStore;