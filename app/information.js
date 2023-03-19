import { Observable } from 'tns-core-modules';
import { onNavigatingTo } from './main-page';
const httpModule = require("@nativescript/core/http");
export function onPageLoaded(args){
  const page = args.object;
  const viewModel = new Observable();
  page.bindingContext = onNavigatingTo();
  alert("Page loaded")
}

export function addPhoto(args) {
    const button = args.object;
    const page = button.page;
    const url = "https://raw.githubusercontent.com/anhphuongdo/data/main/photo.json";
    const title = page.getViewById('title').text;
    const image = page.getViewById('image').text;
    const description = page.getViewById('description').text;
    const newNews = {
      title: title,
      description: description,
      image: image
  };
    // Get the values from the form
    const jsonData = JSON.stringify(newNews);
  
    // Create a new photo object
   // const photo = new Photo(title, image, description);
   const options = {
    url: url,
    method: "PUT",
    headers: {
        "Content-Type": "application/json"
    },
    content: jsonData
};
const request = httpModule.request(options);
    // Add the photo to the PhotoData object
   // photoData.addPhoto(photo);
  
    // Clear the form fields
    // page.getViewById('title').text = '';
    // page.getViewById('image').text = '';
    // page.getViewById('description').text = '';
    request.then((response) => {
      console.log(`Status: ${response.statusCode}`);
      console.log(`Headers: ${response.headers}`);
      console.log(`Content: ${response.content}`);
  }, (error) => {
      console.log(`Error: ${error}`);
  });
    // Hide the information view
    // const infoView = page.getViewById('info-view');
    // infoView.visibility = 'collapse';
  } 
  export function addnew(args){
    const button = args.object;
    const page = button.page;
    const fs = require("tns-core-modules/file-system");

    // // Read the existing news data from the JSON file
    // const newsData = fs.readFileSync('./file.json', 'utf8');
    // const news = JSON.parse(newsData);
    
    // // Add the new news item to the news array
    // const newNews = {
    //     id: 10,
    //     title: 'New News Title',
    //     description: 'New News Description',
    //     image: 'new-news-image.jpg'
    // };
    // news.push(newNews);
    
    // // Write the updated news data back to the JSON file
    // fs.writeFileSync('./file.json', JSON.stringify(news));
   // const fileName = "~/photo.json";
      const file = require("./photo.json");
          
      file.key = "new value";
          
      fs.writeFile(fileName, JSON.stringify(file), function writeJSON(err) {
        if (err) return console.log(err);
        console.log(JSON.stringify(file));
        console.log('writing to ' + fileName);
      });
  } 