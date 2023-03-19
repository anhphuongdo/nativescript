import { Observable, fromObject } from "@nativescript/core";
const httpModule = require("@nativescript/core/http");

export function onNavigatingTo(args){  
  const page = args.object;
  let jsonData;

  httpModule.getFile("https://raw.githubusercontent.com/anhphuongdo/data/main/photo.json").then(function (file) {
    jsonData = JSON.parse(file.readTextSync());
    var items = [];

    jsonData.forEach(function(item) {
      // Thêm thông tin của từng `item` vào một đối tượng
      var newItem = {
        title_photo: item.title_photo,
        source_photo: item.source_photo
      }
    
      // Thêm đối tượng mới vào array `myItems`
      items.push(newItem);
      });
    var viewModel = fromObject({
      myItems: items
    })
    page.bindingContext = viewModel;
  }, function (err) {
    console.log(err);
  });
}

export function onListViewLoaded(args) {
  const listView = args.object;
}


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
