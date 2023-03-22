import { Observable } from 'tns-core-modules';
import { onNavigatingTo } from './main-page';
const httpModule = require("@nativescript/core/http");
import { adddatafirst, addtada, getdata, getdatajson, getsize } from './data.js';
export function onPageLoaded(args){
  const page = args.object;
  page.bindingContext = onNavigatingTo();
  alert("Page loaded")
}
export function addnew(args){
  const button = args.object;
   const page = button.page;
   const title = page.getViewById('title').text;
   const image = page.getViewById('image').text;
   const description = page.getViewById('description').text;
   var newItem = {
    title_photo: title,
    source_photo:image,
    description_photo: description
  }
  console.dir(newItem);
  adddatafirst(newItem)
    alert("Add successfully!")
} 

  