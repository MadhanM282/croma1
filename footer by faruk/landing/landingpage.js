
document.querySelector("#search").addEventListener("click", press);
function press() {
    var val = document.querySelector("#inp").value;
    if (val === "laptop") {

        window.location.href = "laptop.html"
    }
    if (val === "mobile" || "phone" || "mobiles") {
        window.location.href = "mobile.html"
    }
    if (val === "tv") {
        window.location.href = "tv.html"
    }
    if (val === "audio") {
        window.location.href = "audio.html"
    }
    // else {
    //     alert("Oops! Match is not found")
    // }
    // console.log(val);

}


window.onscroll = function () { myFunction() };
var navbar = document.querySelector(".main-nav");
var sticky = navbar.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");

    }
    else {
        navbar.classList.remove("sticky");
    }
}


var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}







var mobiles = [
    {
        name :"Apple iPhone 11 (64GB ROM, 4GB RAM, MHDF3HN/A, Purple)",
        img:"https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1605262065/Croma%20Assets/Communication/Mobiles/Images/9001728409630.png/mxw_1440,f_auto",
        id:"PRODUCT ID: 230110",
        price:"49,900.00 ",
        price1:"55,000.00"
    },
    {
        name :"Apple iPhone 12 (64GB ROM, 4GB RAM, MGJ63HN/A, White)",
        img:"https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1605272155/Croma%20Assets/Communication/Mobiles/Images/8999513391134.png/mxw_1440,f_auto",
        id:"PRODUCT ID: 229920",
        price:"63,900.00 ",
        price1:"75,000.00"
    },
    {
        name :"Apple iPhone 12 (128GB ROM, 4GB RAM, MGJE3HN/A, Blue)",
        img:"https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1605269941/Croma%20Assets/Communication/Mobiles/Images/8999510638622.png/mxw_1440,f_auto",
        id:"PRODUCT ID: 229927",
        price:"68,900.00",
        price1:"80,000.00"
    },
    {
        name:"OnePlus 9R (128GB ROM, 8GB RAM, LE2101, Lake Blue)",
        img:"https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1638446751/Croma%20Assets/Communication/Mobiles/Images/233912_biu7qr.png/mxw_1440,f_auto",
        id:"PRODUCT ID: 233912",
        price:"39,999.00",
        price1:"45,000.00"
    }
  ];
  
  
  mobiles.map(function(elem){
    var div=document.createElement("div");
    div.className="box";
    var image=document.createElement("img");
    image.setAttribute("src",elem.img);
    var name=document.createElement("h3");
    name.textContent=elem.name;
    name.className="line";
    var div2=document.createElement("div");
    div2.className="flex";
    var price=document.createElement("h3");
    price.textContent="₹"+elem.price;
    var price1=document.createElement("h3");
    price1.className="price1";
    price1.textContent="₹"+elem.price1;
    var star=document.createElement("div");
    star.className="star";
    star.textContent="★★★★★";
    div2.append(price,price1);
    div.append(image,name,div2,star);
    var cont=document.querySelector(".cont");
    cont.append(div);
  
  
  });
  function itemPage(){
      console.log("here");
  }
  
  
  
  var laptops = [
      {
          name:"Apple MacBook Air M1 Chip macOS Big Sur Laptop (8GB RAM, 256GB SSD, Apple M1 GPU, 33.78cm, MGN63HN/A, Space Grey)",
          img:"https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1606585888/Croma%20Assets/Computers%20Peripherals/Laptop/Images/9009479057438.png/mxw_1440,f_auto",
          id:"PRODUCT ID: 230955",
          price:"84,990.00",
          price1:"95,000.00"
      },
      {
          name:"Apple MacBook Pro 16 M1 Pro Chip macOS Monterey Laptop (16GB RAM, 1TB SSD, M1 GPU, 41.05cm, MK193HN/A, Space Grey)",
          img:"https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1634724136/Croma%20Assets/Computers%20Peripherals/Laptop/Images/245227_uj3uci.png/mxw_1440,f_auto",
          id:"PRODUCT ID: 245227",
          price:"259,900.00",
          price1:"265,000.00"
      },
      {
          name:"Apple MacBook Air (MGNE3HN/A) M1 Chip macOS Big Sur Laptop (8GB RAM, 512GB SSD, Apple M1 GPU, 33.78cm, Gold)",
          img:"https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1606585908/Croma%20Assets/Computers%20Peripherals/Laptop/Images/9009479385118.png/mxw_1440,f_auto",
          id:"PRODUCT ID: 230956",
          price:"109,490.00",
          price1:"115,000.00"
      },
      {
          name:"Apple MacBook Pro MWP52HN/A Core i5 10th Gen macOS Catalina Laptop (16 GB RAM, 1 TB SSD, Intel Iris Plus 645 Graphics, 33.78cm, Space Grey)",
          img:"https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1605340528/Croma%20Assets/Computers%20Peripherals/Laptop/Images/8935963787294.png/mxw_1125,f_auto",
          id:"PRODUCT ID: 225876",
          price:"175,490.00",
          price1:"185,000.00",
      }
  ];

  
  laptops.map(function(elem){
    var div=document.createElement("div");
    div.className="box";
    var image=document.createElement("img");
    image.setAttribute("src",elem.img);
    var name=document.createElement("h3");
    name.className="line";
    name.textContent=elem.name;
    var div2=document.createElement("div");
    div2.className="flex";
    var price=document.createElement("h3");
    price.textContent="₹"+elem.price;
    var price1=document.createElement("h3");
    price1.className="price1";
    price1.textContent="₹"+elem.price1;
    var star=document.createElement("div");
    star.className="star";
    star.textContent="★★★★★";
    div2.append(price,price1);
    div.append(image,name,div2,star);
    var cont=document.querySelector(".cont1");
    cont.append(div);
   
  
  });
  
  
  
  
  
  
  
  
  
  var tv = [
      {
          name:"Sony Bravia X75 Series 108cm (43 Inch) Ultra HD 4K LED Android Smart TV (Dolby Audio & Alexa Compatibility, KD-43X75, Black)",
          image:"https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1639116597/Croma%20Assets/Entertainment/Television/Images/234281_xhvfqz.png/mxw_1125,f_auto",
          id:"PRODUCT ID: 234281",
          price:"56,800.00",
          price1:"60,000.00",
      },
      {
          name:"Kodak 7XPRO Series 80cm (32 Inch) HD Ready Flat Panel Android Smart TV (Digital Noise Filter, 32HDX7XPRO, Black)",
          image:"https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1639037755/Croma%20Assets/Entertainment/Television/Images/246056_a89my8.png/mxw_1125,f_auto",
          id:"PRODUCT ID: 246056",
          price:"15,490.00",
          price1:"18,000.00",
      },
       {
          name:"Treeview Classic 80cm (31.5 Inches) HD Ready Flat Panel Standard TV (Multiple Picture Mode, IND3201AT, Black)",
          image:"https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1637827938/Croma%20Assets/Entertainment/Television/Images/245646_ixdral.png/mxw_1125,f_auto",
          id:"PRODUCT ID: 245646",
          price:"11,490.00",
          price1:"15,000.00",
      },
       {
          name:"Sony Bravia X85J Series 139cm (55 Inch) Ultra HD 4K LED Google Smart TV (Dolby Vision Atmos & Alexa Compatibility, KD-55X85J, Black)",
          image:"https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1639116591/Croma%20Assets/Entertainment/Television/Images/237753_gjtdux.png/mxw_1125,f_auto",
          id:"PRODUCT ID: 237753",
          price:"104,490.00",
          price1:"115,000.00",
      }
  ];
  
 
  
  tv.map(function(elem){
    var div=document.createElement("div");
    div.className="box";
    var image=document.createElement("img");
    image.setAttribute("src",elem.image);
    var name=document.createElement("h3");
    name.className="line";
    name.textContent=elem.name;
    var div2=document.createElement("div");
    div2.className="flex";
    var price=document.createElement("h3");
    price.textContent="₹"+elem.price;
    var price1=document.createElement("h3");
    price1.className="price1";
    price1.textContent="₹"+elem.price1;
    var star=document.createElement("div");
    star.className="star";
    star.textContent="★★★★★";
    div2.append(price,price1);
    div.append(image,name,div2,star);
    var cont=document.querySelector(".cont2");
    cont.append(div);
  
  
  });
  
  
  var audio = [
      {
          name:"Apple Airpods Pro In-Ear Active Noise Cancellation Truly Wireless Earbuds with Mic (Bluetooth 5.0, with Wireless Charging Case, MWP22HN/A, White)",
          image:"https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1605170750/Croma%20Assets/Entertainment/Headphones%20and%20Earphones/Images/8937376841758.png/mxw_1125,f_auto",
          id:"PRODUCT ID: 222222",
          price:"20,900.00",
          price1:"25,000.00",
      },
       {
          name:"Boat Stone 5 Watts Portable Bluetooth Speaker (Stereo Channel,Bluetooth 5.0, Quick Switch, 5481100067, 193, Red)",
          image:"https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1606073981/Croma%20Assets/Entertainment/Speakers%20and%20Media%20Players/Images/8975798992926.png/mxw_1125,f_auto",
          id:"PRODUCT ID: 225910",
          price:"899.00",
          price1:."1,500.00",
      },
       {
          name:"OnePlus Bullets Wireless Z Bass Edition In-Ear Wireless Earphone with Mic (Bluetooth 5.0, Quick Switch, 5481100067, Bold Black)",
          image:"https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1637933045/Croma%20Assets/Entertainment/Headphones%20and%20Earphones/Images/242300_pnmjdi.png/mxw_1125,f_auto",
          id:"PRODUCT ID: 242300",
          price:"1,999.00",
          price1:"2,999.00",
      },
       {
          name:"Philips On-Ear Noise Isolation Wireless Headphone with Mic (Bluetooth 5.0, Bass Boost Button, TAH4205BK/00, Black)",
          image:"https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1633977153/Croma%20Assets/Entertainment/Headphones%20and%20Earphones/Images/242883_czv27v.png/mxw_1125,f_auto",
          id:"PRODUCT ID: 242883",
          price:"1,799.00",
          price1:"2,000.00",
      }
  ]

  
  
  audio.map(function(elem){
    var div=document.createElement("div");
    div.className="box";
    var image=document.createElement("img");
    image.setAttribute("src",elem.image);
    var name=document.createElement("h3");
    name.className="line";
    name.textContent=elem.name;
    var div2=document.createElement("div");
    div2.className="flex";
    var price=document.createElement("h3");
    price.textContent="₹"+elem.price;
    var price1=document.createElement("h3");
    price1.className="price1";
    price1.textContent="₹"+elem.price1;
    var star=document.createElement("div");
    star.className="star";
    star.textContent="★★★★★";
    div2.append(price,price1);
    div.append(image,name,div2,star);
    var cont=document.querySelector(".cont3");
    cont.append(div);
    ☆☆☆☆☆
  
  
  });
  