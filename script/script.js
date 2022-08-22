var navLinks = document.getElementById("navLinks");
       function showmenu(){
        navLinks.style.right="0"; 
       }
       function hidemenu(){
        navLinks.style.right="-200px"; 
       }

// -------Smooth Scroll-----------
       const scroll = new SmoothScroll('.navbar a[href*="#"]',{
              speed: 500
       });
       const scroll1 = new SmoothScroll('.Contact a[href*="#"]',{
              speed: 500
       });
       const scroll2 = new SmoothScroll('.headtxt a[href*="#"]',{
              speed: 500
       });

// ---------Dark Theme----------

var icon = document.getElementById('darkmode')
icon.onclick = function(){
       document.body.classList.toggle('darktheme')
       // if(document.body.classList.contains('darktheme')){
       //        icon.src = 'images/sun.png'
       // }
       // else{
       //        icon.src = 'images/moon.png'
       // }
}