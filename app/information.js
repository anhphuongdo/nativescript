import { Observable } from 'tns-core-modules';
import { onNavigatingTo } from './main-page';
const httpModule = require("@nativescript/core/http");
import { addtada, getdata, getdatajson, getsize } from './data.js';
export function onPageLoaded(args){
  const page = args.object;
 // const viewModel = new Observable();
  page.bindingContext = onNavigatingTo();
  alert("Page loaded")
}
export function addnew(args){
  const button = args.object;
   const page = button.page;
   const title = page.getViewById('title').text;
   const image = page.getViewById('image').text;
   const description = page.getViewById('description').text;
   var newItem1 = {
    title_photo: "iêttjet",
    source_photo: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Yen_Bai_-_dogs_-_P1390010.JPG"
  }
  addtada(newItem1)
    //console.dir(newNews);
    // getdata.array.forEach(element => {
    //   console.dir(element);
    // });
 //   onNavigatingTo();
    alert("Add successfully!")
} 
// export function addPhoto(args) {
//     const button = args.object;
//     const page = button.page;
//     const url = "https://raw.githubusercontent.com/anhphuongdo/data/main/photo.json";
//     const title = page.getViewById('title').text;
//     const image = page.getViewById('image').text;
//     const description = page.getViewById('description').text;
//     const newNews = {
//       title: title,
//       description: description,
//       image: image
//   };
//     // Get the values from the form
//     const jsonData = JSON.stringify(newNews);
  
//     // Create a new photo object
//    // const photo = new Photo(title, image, description);
//    const options = {
//     url: url,
//     method: "PUT",
//     headers: {
//         "Content-Type": "application/json"
//     },
//     content: jsonData
// };
// const request = httpModule.request(options);
//     // Add the photo to the PhotoData object
//    // photoData.addPhoto(photo);
  
//     // Clear the form fields
//     // page.getViewById('title').text = '';
//     // page.getViewById('image').text = '';
//     // page.getViewById('description').text = '';
//     request.then((response) => {
//       console.log(`Status: ${response.statusCode}`);
//       console.log(`Headers: ${response.headers}`);
//       console.log(`Content: ${response.content}`);
//   }, (error) => {
//       console.log(`Error: ${error}`);
//   });
//     // Hide the information view
//     // const infoView = page.getViewById('info-view');
//     // infoView.visibility = 'collapse';
//   } 
  