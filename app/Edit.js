import { edititem } from "./data";


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
   alert("chay thanh cong");
}
export function Editbtn(args){
    const button = args.object;
    const page = button.page;
    const context = page.navigationContext;
    const title = page.getViewById('titleEdit').text;
    let image = page.getViewById('imageEdit').text;
   const description = page.getViewById('descriptionEdit').text;
    edititem(context.id, title,image,description);
    alert("edit successfully");
    
}