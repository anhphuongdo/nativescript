export function onNavigatingToSetting(args){
    const page = args.object;
    const context = page.navigationContext;
        var newItem1 = {
        isDarkMode : context.isDarkMode,
        title : context.title
    }
    const isDarkMode = applicationSettings.getBoolean("isDarkMode", false);
    const mySwitch = page.getViewById("darkModeSwitch");
    if(isDarkMode){
        mySwitch.checked = true;
    }else{
        mySwitch.checked = false;
    }
    page.bindingContext = newItem1;
  }
       
const application = require("@nativescript/core/application");
const applicationSettings = require("@nativescript/core/application-settings");
export function onSwitchChange(args){
    const page = args.object;
    const rootView = application.getRootView();
    const mySwitch = page.getViewById("darkModeSwitch");
    const isDarkMode = applicationSettings.getBoolean("isDarkMode", false);
    mySwitch.on("checkedChange", (args) => {
        var isChecked = args.object.checked;
        if(isChecked){
            application.systemAppearanceChanged(rootView,"dark");
            applicationSettings.setBoolean("isDarkMode", true);
        }else{
            application.systemAppearanceChanged(rootView,"light");
            applicationSettings.setBoolean("isDarkMode", false);
        }
    });

}


