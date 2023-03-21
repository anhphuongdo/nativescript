import { Observable, fromObject } from "@nativescript/core";
const httpModule = require("@nativescript/core/http");
import { ObservableArray } from "@nativescript/core";
import { addtada, getdata, getdatajson, loaddata } from './data.js';

export function onNavigatingTo(args){  
  const page = args.object;
  if (args.context && args.context.currentData) {
    const savedData = JSON.parse(args.context.currentData);
    this.myItems.splice(0, this.myItems.length, ...savedData);
    
    // Cập nhật ListView với dữ liệu mới
    this.listView.notify({
        eventName: ObservableArray.changeEvent,
        object: this.myItems
    });
  };
  // if (args.isBackNavigation) {
  //   alert("feff");
  //   page.frame.reload();
  // }
    // Check if the page was navigated to from a back action
    // if (args.isBackNavigation) {
    //   // Reload the page
    //   var viewModel = fromObject({
    //     myItems: getdata()
    //   })
    //   page.bindingContext = viewModel;
    //   //frameModule.topmost().currentPage.reload();
    // }
    // else{
    //   getdatajson(page);
    //   var viewModel = fromObject({
    //    myItems: getdata()
    //  })
    //  page.bindingContext = viewModel;
    // }
    getdatajson(page);
    //   var viewModel = fromObject({
    //    myItems: getdata()
    //  })
    //  page.bindingContext = viewModel;
  
  //  getdatajson(page);
  //  var viewModel = fromObject({
  //   myItems: getdata()
  // })
  // page.bindingContext = viewModel;
}
// exports.navigatedTo = function(args) {
//   // Add a handler for the page's navigatedTo event
//   const page = args.object;
  
// };
export function showInfoView(args) {
  const button = args.object;
  const page = button.page;

  // Navigate to the information view
  const navigationEntry = {
    moduleName: 'information',
    context: { title: "Add new photo" }
  };
  page.frame.navigate(navigationEntry);
};


const frameModule = require("@nativescript/core/ui/frame");
export function showDetailView(args) {
  const currentData = JSON.stringify(this.myItems);
  const selectedItem = args.view.bindingContext;
  const navigationEntry = {
  moduleName: "detail-page",
  context: {
    title_photo: selectedItem.title_photo,
    source_photo: selectedItem.source_photo,
    description_photo: selectedItem.description_photo,
    currentData : currentData
  }
  };
  frameModule.Frame.topmost().navigate(navigationEntry);
};