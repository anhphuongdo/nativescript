export function onNavigatingToDetail(args){
    const page = args.object;
    const context = page.navigationContext;
    if(context){        
        const title_photo = context.title_photo;
        const title = page.getViewById("title");
        title.text = title_photo;

        const source_photo = context.source_photo;
        const source = page.getViewById("source");
        source.src = source_photo;

        const description_photo = context.description_photo;
        const description = page.getViewById("description");
        description.text = description_photo;
    }
}