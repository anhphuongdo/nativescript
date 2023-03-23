import { addrangedata, addtada, deleteitem, getdata, getdatajson, getpush, getsize, loaddata, push } from './data.js';
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
  alert(selectedItem.id)
  alert(getsize());
  deleteitem(selectedItem.id);
  alert("delete successfully");
  


  // Navigate to the information view
  // const navigationEntry = {
  //   moduleName: 'information',
  //   context: { title: "Add new photo" }
  // };
  // page.frame.navigate(navigationEntry);

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
   // currentData : currentData
  }
  
  };
  alert("ferfef");
  frameModule.Frame.topmost().navigate(navigationEntry);
}
export function showEditView(args) {
  const button = args.object;
  const page = button.page;
  const selectedItem = page.bindingContext;
  // Navigate to the information view
  // var kiet = {
  //   id:selectedItem.id,
  //   title_photo: selectedItem.title_photo,
  //   source_photo: selectedItem.source_photo,
  //   description_photo: selectedItem.description_photo
  // }
  // console.dir(kiet);
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