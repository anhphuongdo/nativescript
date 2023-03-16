export function onPageLoaded(args){
  alert("Page loaded")
}

  function addPhoto(args) {
    const button = args.object;
    const page = button.page;
  
    // Get the values from the form
    const title = page.getViewById('title').text;
    const image = page.getViewById('image').text;
    const description = page.getViewById('description').text;
  
    // Create a new photo object
    const photo = new Photo(title, image, description);
  
    // Add the photo to the PhotoData object
    photoData.addPhoto(photo);
  
    // Clear the form fields
    // page.getViewById('title').text = '';
    // page.getViewById('image').text = '';
    // page.getViewById('description').text = '';
  
    // Hide the information view
    const infoView = page.getViewById('info-view');
    infoView.visibility = 'collapse';
  }