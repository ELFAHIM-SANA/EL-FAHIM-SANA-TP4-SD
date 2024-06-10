import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{

    public products : any;
    public keyword:string ="";

   constructor() {
   }
    ngOnInit(): void {
        this.products = [
          {"id" : 1 , "name" : "Computer" , "price" : 4300},
          {"id" : 2 , "name" : "Printer" , "price" : 4000},
          {"id" : 3 , "name" : "Laptop" , "price" : 14300},
          {"id" : 4 , "name" : "Smart phone" , "price" : 5000},
          {"id" : 5 , "name" : "Mouse" , "price" : 1000},
          {"id" : 6 , "name" : "Computer" , "price" : 12000},
        ];
    }

    deleteProduct(p : any){
      let index = this.products.indexOf(p);
      this.products.splice(index,1);
    }

    search(){
       console.log(this.keyword);
       let result = [];
       for (let p of this.products){
         if(p.name.includes(this.keyword)){
             result.push(p);
         }
       }
       this.products = result;
    }

}















