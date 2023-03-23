const applicationSettings = require("@nativescript/core/application-settings");
const application = require("@nativescript/core/application");
import {getdatajson} from './data.js';

export function onNavigatingTo(args){  
  const page = args.object;
  const rootView = application.getRootView();
  const isDarkMode = applicationSettings.getBoolean("isDarkMode", false);
  if(isDarkMode){
    application.systemAppearanceChanged(rootView,"dark");
  }else{
    application.systemAppearanceChanged(rootView,"light");
  }

  getdatajson(page);
}
export function showInfoView(args) {
  const button = args.object;
  const page = button.page;

  const navigationEntry = {
    moduleName: 'information',
    context: { title: "Add new photo" }
  };
  page.frame.navigate(navigationEntry);
};


const frameModule = require("@nativescript/core/ui/frame");
export function showDetailView(args) {
  const selectedItem = args.view.bindingContext;
  const navigationEntry = {
  moduleName: "detail-page",
  context: {
    id:selectedItem.id,
    title_photo: selectedItem.title_photo,
    source_photo: selectedItem.source_photo,
    description_photo: selectedItem.description_photo,
  }
  };
  frameModule.Frame.topmost().navigate(navigationEntry);
};

export function showSettingView(args) {
  const isDarkMode = applicationSettings.getBoolean("isDarkMode", false);
  const navigationEntry = {
  moduleName: "setting-page",
  context: {
    isDarkMode : isDarkMode,
    title: "Setting Page"}
  };
  frameModule.Frame.topmost().navigate(navigationEntry);
};