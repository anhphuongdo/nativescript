import { onNavigatingTo } from './main-page';
import { addtada, getsize } from './data.js';
import { showMainView } from './Edit.js';
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
   var newItem = {
    id: getsize() + 1,
    title_photo: title,
    source_photo:image,
    description_photo: description
  }
  console.dir(newItem);
  addtada(newItem) 
  showMainView(args);
    alert("Add successfully!")

} 

  