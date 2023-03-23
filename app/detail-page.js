import { deleteitem } from './data.js';
import { showMainView } from './Edit.js';
export function onNavigatingToDetail(args){
    const page = args.object;
     const context = page.navigationContext;
    var newItem1 = {
        id:context.id,
        title_photo: context.title_photo,
        source_photo: context.source_photo,
        description_photo: context.description_photo
      }
      page.bindingContext = newItem1;
}
export function DeleteF(args) {
  const button = args.object;
  const page = button.page;
  const selectedItem = page.bindingContext;

  deleteitem(selectedItem.id);
  showMainView(args);
  alert("delete successfully");
};
const frameModule = require("@nativescript/core/ui/frame");
export function onNavigatingToEdit(args){
 
  //const page = args.object;
  const button = args.object;
  const page = button.page;
  const selectedItem = page.bindingContext;
  const navigationEntry = {
  moduleName: 'Edit',
  context: {
    id:selectedItem.id,
    title_photo: selectedItem.title_photo,
    source_photo: selectedItem.source_photo,
    description_photo: selectedItem.description_photo,
  }
  
  };
  frameModule.Frame.topmost().navigate(navigationEntry);
}
export function showEditView(args) {
  const button = args.object;
  const page = button.page;
  const selectedItem = page.bindingContext;
  const navigationEntry = {
    moduleName: 'Edit',
    context: {
      id:selectedItem.id,
      title_photo: selectedItem.title_photo,
      source_photo: selectedItem.source_photo,
      description_photo: selectedItem.description_photo,
     }
  };
  page.frame.navigate(navigationEntry);
};