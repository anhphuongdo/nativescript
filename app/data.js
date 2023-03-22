import { Observable, fromObject } from "@nativescript/core";
const httpModule = require("@nativescript/core/http");
import { ObservableArray, ChangedData } from "tns-core-modules/data/observable-array";


const database = [];
var databaset = new ObservableArray();
let jsonData;
     jsonData = require('./news.json');
      jsonData.forEach(function(item) {
          var newItem = {
        id:item.id,
        title_photo: item.title_photo,
        source_photo: item.source_photo,
        description_photo: item.description_photo
      }
      addtada(newItem);
      });
export function addtada(item){
    //database.push(item);
    databaset.push(item);
}
export function deleteitem(value){
 //databaset.filter(item => item.title_photo !== value);
  databaset.splice(value + 1 - getsize(),1);
}
export function adddatafirst(item){
  databaset.unshift(item)
}
export function getdata(){
  var a = [];
  for(i = 0; i < databaset.length; i++){

      a.push(databaset.getItem(i));

  }
    return a;
}
export function getsize(){
    return databaset.length;

}

export function getdatajson(page){
    console.log(databaset.getItem(0));
    var viewModel = fromObject({
      myItems: getdata()
    })
    page.bindingContext = viewModel;

}
