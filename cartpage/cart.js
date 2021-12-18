                //   fixed nav bar start
                window.onscroll = function(){myFunction()};
                var navbar = document.querySelector(".main-nav");
                var sticky = navbar.offsetTop;
                
                function myFunction(){
                    if(window.pageYOffset>=sticky){
                        navbar.classList.add("sticky");
                        
                    }
                    else{
                        navbar.classList.remove("sticky");
                    }
                }
                            // fixed nav bar closed

                            $('.slider').slick({
                                infinite: true,
                                slidesToShow: 3,
                                slidesToScroll: 3
                              });