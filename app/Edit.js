import { edititem } from "./data";
import {showInfoView} from './main-page';

export function Editview(args){
    const page = args.object;
    const context = page.navigationContext;
//    var newItem1 = {
//        id:context.id,
//        title_photo: context.title_photo,
//        source_photo: context.source_photo,
//        description_photo: context.description_photo
//      }
//      page.bindingContext = newItem1;
const title = page.getViewById('titleEdit');
   let image = page.getViewById('imageEdit');
   const description = page.getViewById('descriptionEdit');
   title.text = context.title_photo;
   description.text = context.description_photo;
   image.text = context.source_photo;
}
export function showMainView(args) {
    const button = args.object;
    const page = button.page;
  
    const navigationEntry = {
      moduleName: 'main-page',
      context: { title: "Add new photo" }
    };
    page.frame.navigate(navigationEntry);
  };
  
export function Editbtn(args){
    const button = args.object;
    const page = button.page;
    const context = page.navigationContext;
    const title = page.getViewById('titleEdit').text;
    let image = page.getViewById('imageEdit').text;
   const description = page.getViewById('descriptionEdit').text;
    edititem(context.id, title,image,description);
    showMainView(args);
    alert("edit successfully");
    

    
}
