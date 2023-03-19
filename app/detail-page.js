import { onNavigatingTo} from "./main-page";

export function onNavigatingToDetail(args){
    const page = args.object;
    page.bindingContext = onNavigatingTo(args);
}