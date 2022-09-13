

var form = document.getElementById("upload");

document.getElementById("upload").addEventListener("click", function(event) {
  console.log("Clicked");
  showUploadWidget();

});

function showUploadWidget() {
  cloudinary.openUploadWidget({
     cloudName: "do3uqxkxz",
     uploadPreset: "ehl82rn6",
     sources: [
         "local"
     ],
     googleApiKey: "<image_search_google_api_key>",
     showAdvancedOptions: true,
     cropping: true,
     multiple: false,
     defaultSource: "local",
     styles: {
         palette: {
             window: "#ffffff",
             sourceBg: "#f4f4f5",
             windowBorder: "#90a0b3",
             tabIcon: "#000000",
             inactiveTabIcon: "#555a5f",
             menuIcons: "#555a5f",
             link: "#0433ff",
             action: "#339933",
             inProgress: "#0433ff",
             complete: "#339933",
             error: "#cc0000",
             textDark: "#000000",
             textLight: "#fcfffd"
         },
         fonts: {
             default: null,
             "sans-serif": {
                 url: null,
                 active: true
             }
         }
     }
 },
  (err, info) => {
    if (!err) {    
      console.log("Upload Widget event - ", info);
    }
   });
  }


  // cloudinary.image("sheep.jpg", {transformation: [
  //   {height: 200, width: 300, crop: "fill"},
  //   {radius: 20}
  //   ]})