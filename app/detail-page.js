export function onNavigatingToDetail(args){
    const page = args.object;
     const context = page.navigationContext;
    var newItem1 = {
        title_photo: context.title_photo ,
        source_photo: context.source_photo,
        description_photo: context.description_photo
      }
      page.bindingContext = newItem1;
}