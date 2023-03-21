import { showDetailView} from "./main-page";

export function onNavigatingToDetail(args){
    const page = args.object;
     const context = page.navigationContext;
    // if(context){
    //     alert(context.title_photo);
    //     const title_photo = context.title_photo;
        
    //     const title = findViewById("title_photo");
        
    //     title.text = "keitieeieti";
       
    //     const source_photo = context.source_photo;
    //     const source = findViewById("source");
    //     source.src = source_photo;

    //     const description_photo = context.description_photo;
    //     const description = findViewById("description");
    //     description.text = description_photo;
    // }
    var newItem1 = {
        title_photo: context.title_photo ,
        source_photo: context.source_photo,
        description_photo: context.description_photo
      }
    //   var viewModeldetail = fromObject({
    //     myItemsdetail: newItem1 
    //   })
      page.bindingContext = newItem1;
}