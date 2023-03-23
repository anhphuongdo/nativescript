import { Color, getViewById } from "@nativescript/core";
import { fromObject } from "@nativescript/core";

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
/*     const vm = fromObject({
        items: [
            { id: 1, name: "Ter Stegen", role: "Goalkeeper" },
            { id: 3, name: "Piqué", role: "Defender" },
            { id: 4, name: "I. Rakitic", role: "Midfielder" }
        ],
        index: 2,
        selectedItem: ""
    });
    page.bindingContext = vm; */
    //const isDarkMode = applicationSettings.getBoolean("isDarkMode", false);

  }

/*   export function onListPickerLoaded(args) {
    const listPicker = args.object;
    listPicker.on("selectedIndexChange", (lpargs) => {
        const picker = lpargs.object;
        console.log(`ListPicker selected value: ${picker.selectedValue} ListPicker selected index: ${picker.selectedIndex}`);
    });
}
  
  function changeBackground(newBgColor) {
    const page = frame.Frame.topmost().currentPage;
    page.backgroundSpanUnderStatusBar = true;
    page.background = new Color(newBgColor);
  } */
  


     

    /* applicationSettings.setBoolean("isDarkMode", true); */


const application = require("@nativescript/core/application");
const applicationSettings = require("@nativescript/core/application-settings");

export function onSwitchChange(args){
    const page = args.object;
    const mySwitch = page.getViewById("darkModeSwitch");
        mySwitch.on("checkedChange", (args) => {
            var isChecked = args.object.checked;
            if (isChecked) {
                applicationSettings.setBoolean("isDarkMode", true);
                application.setCssFileName("./dark.css");
            } else {
                applicationSettings.setBoolean("isDarkMode", false);
                application.setCssFileName("./app.css");
            }
    });
}


