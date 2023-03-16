
//const knownFolders = require("tns-core-modules/file-system").knownFolders;
// function readJSONFile(filename) {
//   const fs = require("tns-core-modules/file-system");
//   const file = fs.knownFolders.currentApp().getFile(filename);
//   const contents = file.readTextSync();
//   return JSON.parse(contents);
// }

// const jsonData = readJSONFile("photo.json");

// const observableArray = require("tns-core-modules/data/observable-array").ObservableArray;
// const dataItems = new observableArray(jsonData);

// var ObservableModule = require("tns-core-modules/data/observable")
// var observable = new ObservableModule.Observable();

// var observableArrayModule = require("tns-core-modules/data/observable-array");
// var observableArray = new observableArrayModule.ObservableArray([]);

// var dialogsModule = require("ui/dialogs");
// var ObservableModule = require("data/observable");
// var ObservableArray = require("data/observable-array").ObservableArray;

// var photos = new ObservableModule.fromOject({
//   traicay: new ObservableArray([
//     {
//       "id": 1,
//       "title_photo": "Pineapple",
//       "source_photo": "https:\/\/images.unsplash.com\/photo-1550258987-190a2d41a8ba",
//       "description_photo": "The pineapple (Ananas comosus) is a tropical plant with an edible fruit and the most economically significant plant in the family Bromeliaceae. The pineapple is indigenous to South America, where it has been cultivated for many centuries. The introduction of the pineapple to Europe in the 17th century made it a significant cultural icon of luxury. Since the 1820s, pineapple has been commercially grown in greenhouses and many tropical plantations. Further, it is the third most important tropical fruit in world production. In the 20th century, Hawaii was a dominant producer of pineapples, especially for the US; however, by 2016, Costa Rica, Brazil, and the Philippines accounted for nearly one-third of the world's production of pineapples.\\n Pineapples grow as a small shrub; the individual flowers of the unpollinated plant fuse to form a multiple fruit. The plant is normally propagated from the offset produced at the top of the fruit, or from a side shoot, and typically mature within a year."
//     },
//     {
//       "id": 2,
//       "title_photo": "Cherry",
//       "source_photo": "https:\/\/images.unsplash.com\/photo-1528821128474-27f963b062bf",
//       "description_photo": "A cherry is the fruit of many plants of the genus Prunus, and is a fleshy drupe (stone fruit).\\n Commercial cherries are obtained from cultivars of several species, such as the sweet Prunus avium and the sour Prunus cerasus. The name 'cherry' also refers to the cherry tree and its wood, and is sometimes applied to almonds and visually similar flowering trees in the genus Prunus, as in \\\"ornamental cherry\\\" or \\\"cherry blossom\\\". Wild cherry may refer to any of the cherry species growing outside cultivation, although Prunus avium is often referred to specifically by the name \\\"wild cherry\\\" in the British Isles."
//     },
//     {
//       "id": 3,
//       "title_photo": "Orange",
//       "source_photo": "https:\/\/images.unsplash.com\/photo-1552841847-0e031d33a283",
//       "description_photo": "Orange"
//     }
//   ])
// });
// var photos = 
//     [
//       {
//         "id": 1,
//         "title_photo": "Pineapple",
//         "source_photo": "https:\/\/images.unsplash.com\/photo-1550258987-190a2d41a8ba",
//         "description_photo": "The pineapple (Ananas comosus) is a tropical plant with an edible fruit and the most economically significant plant in the family Bromeliaceae. The pineapple is indigenous to South America, where it has been cultivated for many centuries. The introduction of the pineapple to Europe in the 17th century made it a significant cultural icon of luxury. Since the 1820s, pineapple has been commercially grown in greenhouses and many tropical plantations. Further, it is the third most important tropical fruit in world production. In the 20th century, Hawaii was a dominant producer of pineapples, especially for the US; however, by 2016, Costa Rica, Brazil, and the Philippines accounted for nearly one-third of the world's production of pineapples.\\n Pineapples grow as a small shrub; the individual flowers of the unpollinated plant fuse to form a multiple fruit. The plant is normally propagated from the offset produced at the top of the fruit, or from a side shoot, and typically mature within a year."
//       },
//       {
//         "id": 2,
//         "title_photo": "Cherry",
//         "source_photo": "https:\/\/images.unsplash.com\/photo-1528821128474-27f963b062bf",
//         "description_photo": "A cherry is the fruit of many plants of the genus Prunus, and is a fleshy drupe (stone fruit).\\n Commercial cherries are obtained from cultivars of several species, such as the sweet Prunus avium and the sour Prunus cerasus. The name 'cherry' also refers to the cherry tree and its wood, and is sometimes applied to almonds and visually similar flowering trees in the genus Prunus, as in \\\"ornamental cherry\\\" or \\\"cherry blossom\\\". Wild cherry may refer to any of the cherry species growing outside cultivation, although Prunus avium is often referred to specifically by the name \\\"wild cherry\\\" in the British Isles."
//       },
//       {
//         "id": 3,
//         "title_photo": "Orange",
//         "source_photo": "https:\/\/images.unsplash.com\/photo-1552841847-0e031d33a283",
//         "description_photo": "Orange"
//       },
//       {
//         "id": 4,
//         "title_photo": "Avocado",
//         "source_photo": "https:\/\/images.unsplash.com\/photo-1519162808019-7de1683fa2ad",
//         "description_photo": "Avocado"
//       },
//       { 
//         "id": 5,
//         "title_photo": "Strawberry",
//         "source_photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Garden_strawberry_%28Fragaria_%C3%97_ananassa%29_single2.jpg/220px-Garden_strawberry_%28Fragaria_%C3%97_ananassa%29_single2.jpg",
//         "description_photo": "The first garden strawberry was grown in Brittany, France, during the late 18th century. Prior to this, wild strawberries and cultivated selections from wild strawberry species were the common source of the fruit."
//       },
//       {
//         "id": 6,
//         "title_photo": "Apple",
//         "source_photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Fuji_apple.jpg/1024px-Fuji_apple.jpg",
//         "description_photo": "The apple is a deciduous tree, generally standing 2 to 4.5 m (6 to 15 ft) tall in cultivation and up to 9 m (30 ft) in the wild. When cultivated, the size, shape and branch density are determined by rootstock selection and trimming method. The leaves are alternately arranged dark green-colored simple ovals with serrated margins and slightly downy undersides."
//       },
//       {
//         "id": 7,
//         "title_photo": "Pomegranate",
//         "source_photo": "https:\/\/images.unsplash.com\/photo-1530730459653-e0edd4c6072e",
//         "description_photo": "Pomegranate"
//       },
//       {
//         "id": 8,
//         "title_photo": "Papaya",
//         "source_photo": "https:\/\/images.unsplash.com\/photo-1517282009859-f000ec3b26fe",
//         "description_photo": "Papaya"
//       },
//       {
//         "id": 9,
//         "title_photo": "Pear",
//         "source_photo": "https:\/\/images.unsplash.com\/photo-1601876819102-99560f772713",
//         "description_photo": "Pear"
//       },
//       {
//         "id": 10,
//         "title_photo": "Blueberry",
//         "article_image": "https:\/\/images.unsplash.com\/photo-1600046438510-46961a84f4b2",
//         "article_description": "Blueberry"
//       },
//       {
//         "id": 11,
//         "title_photo": "Durian",
//         "source_photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Durian_in_black.jpg/220px-Durian_in_black.jpg",
//         "description_photo": "Named in some regions as the king of fruits, the durian is distinctive for its large size, strong odour, and thorn-covered rind."
//       },
//       {
//         "id": 12,
//         "title_photo": "Plum",
//         "source_photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Plums_African_Rose_-_whole%2C_halved_and_slice.jpg/800px-Plums_African_Rose_-_whole%2C_halved_and_slice.jpg",
//         "description_photo": "Plums are a diverse group of species. The commercially important plum trees are medium-sized, usually pruned to 5–6 metres (16–20 ft) height. The tree is of medium hardiness."
//       },
//       {
//         "id": 13,
//         "title_photo": "Cucumber",
//         "source_photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Cucumber_BNC.jpg/220px-Cucumber_BNC.jpg",
//         "description_photo": "The cucumber is a creeping vine that roots in the ground and grows up trellises or other supporting frames, wrapping around supports with thin, spiraling tendrils. The plant may also root in a soilless medium, whereby it will sprawl along the ground in lieu of a supporting structure. The vine has large leaves that form a canopy over the fruits"
//       },
//       {
//         "id": 14,
//         "title_photo": "Mango",
//         "source_photo": "https://upload.wikimedia.org/wikipedia/commons/9/90/Hapus_Mango.jpg",
//         "description_photo": "A mango is an edible stone fruit produced by the tropical tree Mangifera indica. It is believed to have originated between northwestern Myanmar, Bangladesh, and northeastern India"
//       },
//       {
//         "id": 15,
//         "title_photo": "Grape",
//         "source_photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Grapes%2C_Rostov-on-Don%2C_Russia.jpg/800px-Grapes%2C_Rostov-on-Don%2C_Russia.jpg",
//         "description_photo": "A grape is a fruit, botanically a berry, of the deciduous woody vines of the flowering plant genus Vitis. Grapes are a non-climacteric type of fruit, generally occurring in clusters."
//       },
//       {
//         "id": 16,
//         "title_photo": "Watermelon",
//         "source_photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Taiwan_2009_Tainan_City_Organic_Farm_Watermelon_FRD_7962.jpg/398px-Taiwan_2009_Tainan_City_Organic_Farm_Watermelon_FRD_7962.jpg.jpg",
//         "description_photo": "The watermelon is an annual that has a prostrate or climbing habit. Stems are up to 3 metres (10 feet) long and new growth has yellow or brown hairs. "
//       },
//       {
//         "id": 17,
//         "title_photo": "Banana",
//         "source_photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Bananas_white_background_DS.jpg/800px-Bananas_white_background_DS.jpg",
//         "description_photo": "The banana plant is the largest herbaceous flowering plant. All the above-ground parts of a banana plant grow from a structure usually called a 'corm'"
//       },
//       {
//         "id": 18,
//         "title_photo": "Grape fruit",
//         "source_photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Citrus_paradisi_%28Grapefruit%2C_pink%29_white_bg.jpg/800px-Citrus_paradisi_%28Grapefruit%2C_pink%29_white_bg.jpg",
//         "description_photo": "The evergreen grapefruit trees usually grow to around 5–6 m (16–20 ft) tall, although they may reach 13–15 m (43–49 ft). The leaves are long (up to 15 cm (5.9 in)), thin, glossy, and dark green."
//       }
//     ];

/* var listView = frameModule.topmost().currentPage.getViewById("list");
var photoObservableArray = new observableArray.ObservableArray();

for (var i = 0; i < people.length; i++) {
  photoObservableArray.push(observable.fromObject(people[i]));
}
listView.items = peopleObservableArray; */


/* var viewModel = new Observable({
  photos: new ObservableArray(photos)
}); */
const fromObject = require("tns-core-modules/data/observable").fromObject;
 function pageLoaded(args){
  var page = args.object;
  const vm = fromObject({
    // Setting the listview binding source
    myTitles: [
        { title: "The Da Vinci Code" },
        { title: "Harry Potter and the Chamber of Secrets" },
        { title: "The Alchemist" },
        { title: "The Godfather" },
        { title: "Goodnight Moon" },
        { title: "The Hobbit" }
    ]
});
page.bindingContext = vm;
}; 
 exports.pageLoaded = pageLoaded;

function onListViewLoaded(args) {
  const listView = args.object;
}
exports.onListViewLoaded = onListViewLoaded;
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
