$(document).ready(function(){
  $(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if(scroll > 300){
      $(".nav").css("background-color" , "rgba(0, 0, 0, 1)");
    }
    else{
      $(".nav").css("background-color" , "transparent");
    }
    });
});

document.getElementById("icon").addEventListener('click',myFunction);
var x = document.getElementById("res");
 var scroll = $(window).scrollTop();
function myFunction(){
 if(x.style.display == "none"){
    if(scroll < 300){
      x.style.display = "block";
      document.getElementById("nav").style.backgroundColor = "rgba(0, 0, 0, 1)";
    }
 }
  else
  x.style.display = "none";
}

class portofolio{

  constructor(img,name){
    this.image = img;
    this.name = name;
  }

    getImage(){
    return this.image;
  }

  getName(){
    return this.name;
  }

}

//portfolio
//first object
var fir = document.getElementById('first');
var obj1 = new portofolio("portfolio pics/Capture.PNG","Course Shopping");

var image=document.createElement("img");
image.src = obj1.getImage();
image.style.width="100%";
image.style.height="auto";

var text=document.createElement("p");
var a = document.createElement("a");
a.innerHTML = obj1.getName();
a.href="portfolio/ready projects/shoppingcart/index.html";
a.setAttribute('target', '_blank');
a.style.textDecoration="none";
a.style.color="black";
text.appendChild(a);
text.style.fontSize="30px";

fir.appendChild(image);
fir.appendChild(text);

//second object
var sec = document.getElementById('second');
var obj2 = new portofolio("portfolio pics/Capture2.PNG","Gym Coming");

var image=document.createElement("img");
image.src = obj2.getImage();
image.style.width="100%";
image.style.height="auto";

var text=document.createElement("p");
var a = document.createElement("a");
a.innerHTML = obj2.getName();
a.href="portfolio/ready projects/Gym Coming soon project/index.html";
a.setAttribute('target', '_blank');
a.style.textDecoration="none";
a.style.color="black";
text.appendChild(a);
text.style.fontSize="30px";

sec.appendChild(image);
sec.appendChild(text);

//third object
var thir = document.getElementById('third');
var obj3 = new portofolio("portfolio pics/Capture3.PNG","Tweet Storage");

var image=document.createElement("img");
image.src = obj3.getImage();
image.style.width="100%";
image.style.height="auto";

var text=document.createElement("p");
var a = document.createElement("a");
a.innerHTML = obj3.getName();
a.href="portfolio/ready projects/LocalStorageForm/index.html";
a.setAttribute('target', '_blank');
a.style.textDecoration="none";
a.style.color="black";
text.appendChild(a);
text.style.fontSize="30px";

thir.appendChild(image);
thir.appendChild(text);
