

function upDate(previewPic){
    /* 
       1) change the url for the background image of the div with the id = "image" 
       to the source file of the preview image
       
       2) Change the text  of the div with the id = "image" 
       to the alt text of the preview image 
       */
       document.getElementById('image').style.backgroundImage="url(" + previewPic.src + ")";
      document.getElementById('image').innerHTML = previewPic.alt;
     }
   
     function unDo(){
        /* 
       1) Update the url for the background image of the div with the id = "image" 
       back to the orginal-image. 
       
       2) Change the text  of the div with the id = "image" 
       back to the original text. 
       */
      document.getElementById('image').style.backgroundImage="url('')"
      document.getElementById('image').innerHTML ="Hover over an image below to display here."
       
     }