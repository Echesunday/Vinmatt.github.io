let slideIndex = 0;

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 2000);
}
showSlides();
const images = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg',
    'image4.jpg',
    'image5.jpg',
    // Add more image filenames here
];

  var div1 = document.getElementById("div1")
    function menue(){
      div1.style.top = "0px"
    }
    function hide(){
        div1.style.top = "-600px"
      }


     var displays = document.querySelector(".firstdis");
     function firstone(){
        if(displays.style.display == "none"){
            displays.style.display = "block"
        }else{
            displays.style.display = "none"
        }
     }
   
     var dis = document.querySelector(".seconddis");
     function toch(){
        if(dis.style.display == "none"){
            dis.style.display = "block"
        }else{
            dis.style.display = "none"
        }
     }

       
     var sold = document.querySelector(".saw");
     function like(){
        if(sold.style.display == "none"){
            sold.style.display = "block"
        }else{
            sold.style.display = "none"
        }
     }   
     
     var sold = document.querySelector(".saw");
     function like(){
        if(sold.style.display == "none"){
            sold.style.display = "block"
        }else{
            sold.style.display = "none"
        }
     }

    
      