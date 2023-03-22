import { Observable } from 'tns-core-modules';
import { onNavigatingTo } from './main-page';
const httpModule = require("@nativescript/core/http");
import { adddatafirst, addtada, getdata, getdatajson, getsize } from './data.js';
import { getString } from '@nativescript/core/application-settings';
export function onPageLoaded(args){
  const page = args.object;
  page.bindingContext = onNavigatingTo();
  alert("Page loaded")
}
export function addnew(args){
  const button = args.object;
   const page = button.page;
   const title = page.getViewById('title').text;
   let image = page.getViewById('image').text;
   const description = page.getViewById('description').text;
   const kiet = getString(image,"");
   var newItem = {
    id: getsize() + 1,
    title_photo: "http://lsx.vn/wp-content/uploads/2022/08/Vi-pham-ban-quyen-game.jpg",
    source_photo:"http://lsx.vn/wp-content/uploads/2022/08/Vi-pham-ban-quyen-game.jpg",
    description_photo: description
  }
  console.dir(newItem);
  adddatafirst(newItem)
    alert("Add successfully!")
} 

  