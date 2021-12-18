// document.querySelector("#search").addEventListener("click",press);
//       function press(){
//         var val = document.querySelector("#inp").value;
//         if(val === "laptop"){
          
//           window.location.href = "laptop.html"
//         }
//         if(val === "mobile"||"phone"||"mobiles"){
//             window.location.href = "mobile.html"
//         }
//         if(val === "tv"){
//           window.location.href = "tv.html"
//         }
//         if(val === "audio"||"earphones"||"bluetooth"||"music"){
//           window.location.href = "audio.html"
//         }
//         else{
//           alert("Oops! Match is not found")
//         }
//         console.log(val); 

//       } 
//       // document.querySelector(".croma").addEventListener("click",function croma(){
//       //   window.location.href = 'oldnav.html'
//       // });
//       // function croma(){
//       //   window.location.href = 'old nav.html'
//       // }


//       // nav fix

//         //   fixed nav bar start
//                 window.onscroll = function(){myFunction()};
//                 var navbar = document.querySelector(".main-nav");
//                 var sticky = navbar.offsetTop;
                
//                 function myFunction(){
//                     if(window.pageYOffset>=sticky){
//                         navbar.classList.add("sticky");
                        
//                     }
//                     else{
//                         navbar.classList.remove("sticky");
//                     }
//                 }
//                             // fixed nav bar closed

//       //                       // foer sliding images
//       //                       var repeat = function(activeClass){
//       //                         let active = document.getElementsByClassName('active');
//       //                         let i = 1;
                        
//       //                         var repeater = () => {
//       //                           setTimeout(function(){
//       //                             [...active].forEach((activeSlide) => {
//       //                               activeSlide.classList.remove('active');
//       //                             });
                        
//       //                           slides[i].classList.add('active');
//       //                           btns[i].classList.add('active');
//       //                           i++;
                        
//       //                           if(slides.length == i){
//       //                             i = 0;
//       //                           }
//       //                           if(i >= slides.length){
//       //                             return;
//       //                           }
//       //                           repeater();
//       //                         }, 2000);
//       //                         }
//       //                         repeater();
//       //                       }
//       //                       repeat();

//       //                       // glide

//       // new Glider(document.querySelector('.glider'), {
//       //   slidesToShow: 5,
//       //   slidesToScroll: 5,
//       //   draggable: true,
//       //   dots: '.dots',
//       //   arrows: {
//       //     prev: '.glider-prev',
//       //     next: '.glider-next'
//       //   }
//       // });
//       var slideIndex = 0;
//                         showSlides();

//                         function showSlides() {
//                             var i;
//                             var slides = document.getElementsByClassName("mySlides");
//                             var dots = document.getElementsByClassName("dot");
//                             for (i = 0; i < slides.length; i++) {
//                                 slides[i].style.display = "none";
//                             }
//                             slideIndex++;
//                             if (slideIndex > slides.length) { slideIndex = 1 }
//                             for (i = 0; i < dots.length; i++) {
//                                 dots[i].className = dots[i].className.replace(" active", "");
//                             }
//                             slides[slideIndex - 1].style.display = "block";
//                             dots[slideIndex - 1].className += " active";
//                             setTimeout(showSlides, 2000); // Change image every 2 seconds
//                         }
