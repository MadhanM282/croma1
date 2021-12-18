var mobiles = [
    {
        name :"Apple iPhone 11 (64GB ROM, 4GB RAM, MHDF3HN/A, Purple)",
        img:"https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1605262065/Croma%20Assets/Communication/Mobiles/Images/9001728409630.png/mxw_1440,f_auto",
        id:"PRODUCT ID: 230110",
        price:"49,900.00 ",
        price1:"55000.00"
    },
    {
        name :"Apple iPhone 12 (64GB ROM, 4GB RAM, MGJ63HN/A, White)",
        img:"https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1605272155/Croma%20Assets/Communication/Mobiles/Images/8999513391134.png/mxw_1440,f_auto",
        id:"PRODUCT ID: 229920",
        price:"63,900.00 ",
        price1:"75000.00"
    },
    {
        name :"Apple iPhone 12 (128GB ROM, 4GB RAM, MGJE3HN/A, Blue)",
        img:"https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1605269941/Croma%20Assets/Communication/Mobiles/Images/8999510638622.png/mxw_1440,f_auto",
        id:"PRODUCT ID: 229927",
        price:"68,900.00",
        price1:"80000.00"
    },
    {
        name:"OnePlus 9R (128GB ROM, 8GB RAM, LE2101, Lake Blue)",
        img:"https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1638446751/Croma%20Assets/Communication/Mobiles/Images/233912_biu7qr.png/mxw_1440,f_auto",
        id:"PRODUCT ID: 233912",
        price:"39,999.00",
        price1:"45000.00"
    }
  ];
  
  mobiles.map(function(elem){
    var div=document.createElement("div");
    div.className="box";
    var image=document.createElement("img");
    image.setAttribute("src",elem.img);
    var name=document.createElement("h3");
    name.textContent=elem.name;
    var div2=document.createElement("div");
    div2.className="flex";
    var price=document.createElement("h3");
    price.textContent="₹"+elem.price;
    var price1=document.createElement("h3");
    price1.className="price1";
    price1.textContent="₹"+elem.price1;
    div2.append(price,price1);
    div.append(image,name,div2);
    var cont=document.querySelector("#cont");
    cont.append(div);
    var body=document.querySelector("body");
    body.append(cont);
  
  });