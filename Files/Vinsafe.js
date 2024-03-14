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
 
   