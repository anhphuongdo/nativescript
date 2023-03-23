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
export function edititem(id,edit_title, edit_source, edit_des){
  // const item = databaset.getItem(id + 1 - getsize());
  //   item.title_photo = edit_title;
  //   item.source_photo = edit_source;
  //   item.description_photo = edit_des;
    // databaset.setItem(id + 1 - getsize(),item);
    console.log(id);
    for(i = 0; i < databaset.length; i++){
      if(databaset.getItem(i).id == id){
        const item = databaset.getItem(i);
        item.title_photo = edit_title;
        item.source_photo = edit_source;
        item.description_photo = edit_des;
        databaset.setItem(i,item);
        break;
      }
     
    }

}

export function deleteitem(id){
 //databaset.filter(item => item.title_photo !== value);
 for(i = 0; i < databaset.length; i++){
  if(databaset.getItem(i).id == id){
    databaset.splice(i,1);
    break;
  }
 }
  
}
export function adddatafirst(item){
  databaset.unshift(item)
}
export function getdata(arr){
  var a = [];
  for(i = 0; i < arr.length; i++){

      a.push(arr.getItem(i));

  }
    return a;
}
export function getsize(){
    return databaset.length;

}

export function getdatajson(page){
  var tintuc = new ObservableArray(databaset.slice());
  tintuc.reverse();
    console.log(databaset.getItem(0));
    var viewModel = fromObject({
      myItems: getdata(tintuc)
    })
    page.bindingContext = viewModel;  

}
