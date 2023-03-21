import { Observable, fromObject } from "@nativescript/core";
const httpModule = require("@nativescript/core/http");
import { ObservableArray, ChangedData } from "tns-core-modules/data/observable-array";


const database = [];
var databaset = new ObservableArray();
export function addtada(item){
    //database.push(item);
    databaset.push(item);
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
    return database;

}
// const lap = 0;
// export function push(){
//    lap++;
// }
// export function getpush(){
//   return lap;
// }
export function getdatajson(page){
   // const page = args.object;
    let jsonData;
    //var mang = [];
    // httpModule.getFile("https://raw.githubusercontent.com/anhphuongdo/nativescript/main/app/news.json").then(function (file) {
    //jsonData = JSON.parse(file.readTextSync());
    jsonData = require('./news.json');
   // var items = [];

    jsonData.forEach(function(item) {
      // Thêm thông tin của từng `item` vào một đối tượng
      var newItem = {
        title_photo: item.title_photo,
        source_photo: item.source_photo,
        description_photo: item.description_photo
      }
     
    
      // Thêm đối tượng mới vào array `myItems`
      addtada(newItem);
      });
      
      // var newItem1 = {
      //   title_photo: "iêttjet",
      //   source_photo: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Yen_Bai_-_dogs_-_P1390010.JPG"
      // }
     // addtada(newItem1)
      //alert(getsize());
     // var databaset;
    //  return mang;
    var viewModel = fromObject({
      myItems: getdata()
    })
    page.bindingContext = viewModel;
    // var viewModel = new Observable.fromObject({
    //     myItems: databaset
    // })
    // page.bindingContext = viewModel;
    
//  }
//   , function (err) {
//     console.log(err);
//   });
}
// export function addrangedata(){
//     var a = getdatajson();
//     a.forEach(item => {
//       addtada(item);
//     })
// }
// const tt = 0;
// export function loaddata(page){
//    if(tt == 0){
//     var a = [];
//    let jsonData = require('./news.json');
//   jsonData.forEach(function(item) {
//     // Thêm thông tin của từng `item` vào một đối tượng
//     var newItem = {
//       title_photo: item.title_photo,
//       source_photo: item.source_photo,
//       description_photo: item.description_photo
//     }
//       addtada(newItem);
//   })
//        var viewModel = fromObject({
//       myItems: getdata()
//     })
//     page.bindingContext = viewModel;
//     tt++;
//    }
//    else{
//     var viewModel = fromObject({
//       myItems: getdata()
//     })
//     page.bindingContext = viewModel;
//    }
// }
