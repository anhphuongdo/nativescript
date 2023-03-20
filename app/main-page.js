import { Observable, fromObject } from "@nativescript/core";
const httpModule = require("@nativescript/core/http");
import { ObservableArray } from "tns-core-modules";
import { addtada, getdata, getdatajson, loaddata } from './data.js';
// const database = [];
// module.exports = database;
export function onPageLoaded(args){
  const page = args.object;
 // const viewModel = new Observable();
  page.bindingContext = onNavigatingTo();
  alert("Page loaded")
}
export function onNavigatingTo(args){  
  const page = args.object;
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

export function showDetailView(args) {
  const button = args.object;
  const page = button.page;

  // Navigate to the information view
  const navigationEntry = {
    moduleName: 'detail-page',
    context: { title: "Show detail of news" }
  };
  page.frame.navigate(navigationEntry);
};