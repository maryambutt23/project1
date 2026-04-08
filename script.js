// Cart Array
let cart=[];

// Brands & Products
const brands=["Qalamkar","MNR","Coco","Breeze","Maryam hussain"];
const products=[
{name:"qalam1",price:8500,img:"images/brands/Qalamkar/qalam1.jpg",brand:"Qalamkar"},
{name:"qalam2",price:10700,img:"images/brands/Qalamkar/qalam2.jpg",brand:"Qalamkar"},
{name:"qalam3",price:12700,img:"images/brands/Qalamkar/qalam3.jpg",brand:"Qalamkar"},
{name:"qalam4",price:14700,img:"images/brands/Qalamkar/qalam4.jpg",brand:"Qalamkar"},
{name:"qalam5",price:16700,img:"images/brands/Qalamkar/qalam5.jpg",brand:"Qalamkar"},
{name:"qalam6",price:10700,img:"images/brands/Qalamkar/qalam6.jpg",brand:"Qalamkar"},
{name:"qalam7",price:17000,img:"images/brands/Qalamkar/qalam7.jpg",brand:"Qalamkar"},
{name:"qalam8",price:10700,img:"images/brands/Qalamkar/qalam8.jpg",brand:"Qalamkar"},
{name:"qalam9",price:11700,img:"images/brands/Qalamkar/qalam9.jpg",brand:"Qalamkar"},

{name:"MNR1",price:30000,img:"images/brands/MNR/mnr1.jpg",brand:"MNR"},
{name:"MNR2",price:24000,img:"images/brands/MNR/mnr2.jpg",brand:"MNR"},
{name:"MNR3",price:27000,img:"images/brands/MNR/mnr3.jpg",brand:"MNR"},
{name:"MNR4",price:15000,img:"images/brands/MNR/mnr4.jpg",brand:"MNR"},
{name:"MNR5",price:15000,img:"images/brands/MNR/mnr5.jpg",brand:"MNR"},

{name:"Coco1",price:8000,img:"images/brands/Coco/coco1.jpg",brand:"Coco"},
{name:"Coco2",price:7500,img:"images/brands/Coco/coco2.jpg",brand:"Coco"},
{name:"Coco3",price:7500,img:"images/brands/Coco/coco3.jpg",brand:"Coco"},
{name:"Coco4",price:7500,img:"images/brands/Coco/coco4.jpg",brand:"Coco"},
];

// Publicity Images
const publicityImages=["AB.jpg","BC.jpg","CD.jpg","DE.jpg","EF.jpg","FG.jpg","GH.jpg"];

// Brands Menu
const brandsMenu=document.getElementById("brands-menu");
brands.forEach(b=>{
  const li=document.createElement("li");
  li.innerText=b;
  li.onclick=()=>filterBrand(b);
  brandsMenu.appendChild(li);
});

// Display Products
const productCards=document.getElementById("product-cards");
function displayProducts(list){
  productCards.innerHTML="";
  list.forEach(p=>{
    const div=document.createElement("div");
    div.className="card";
    div.innerHTML=`<img src="${p.img}" alt="${p.name}">
                   <div class="overlay"></div>
                   <h3>${p.name}</h3>
                   <p>Rs ${p.price}</p>
                   <button onclick="addToCart('${p.name}',${p.price},'${p.img}')">Add to Cart</button>`;
    productCards.appendChild(div);
  });
}
displayProducts(products);
function filterBrand(brand){displayProducts(products.filter(p=>p.brand===brand));}

// Cart Functions
function addToCart(name,price,img){cart.push({name,price,img});updateCart();}
function updateCart(){
  const items=document.getElementById("cart-items");
  let total=0;
  items.innerHTML="";
  cart.forEach((item,index)=>{
    const li=document.createElement("li");
    li.innerHTML=`<div style="display:flex;align-items:center;">
                     <img src="${item.img}" alt="${item.name}">
                     <span>${item.name} - Rs ${item.price}</span>
                  </div>
                  <button onclick="removeItem(${index})">❌</button>`;
    items.appendChild(li);
    total+=item.price;
  });
  document.getElementById("total").innerText=total;
  document.getElementById("cart-count").innerText=cart.length;
}
function removeItem(index){cart.splice(index,1);updateCart();}
function openCart(){document.getElementById("cart").classList.toggle("active");}
function checkout(){
  if(cart.length===0){alert("Cart is empty");return;}
  let message="Order:%0A";
  cart.forEach(item=>{message+=`${item.name} - Rs ${item.price}%0A`;});
  window.open("https://wa.me/923029197159?text="+message);
}

// Hero Carousel
const heroImages=document.querySelectorAll(".hero-carousel img");
const heroDotsContainer=document.getElementById("hero-dots");
let heroIndex=0;
heroImages.forEach((img,i)=>{
  const dot=document.createElement("span");
  if(i===0)dot.classList.add("active");
  dot.onclick=()=>goToHero(i);
  heroDotsContainer.appendChild(dot);
});
const heroDots=document.querySelectorAll("#hero-dots span");
function showNextHero(){
  heroImages[heroIndex].classList.remove("active");
  heroDots[heroIndex].classList.remove("active");
  heroIndex=(heroIndex+1)%heroImages.length;
  heroImages[heroIndex].classList.add("active");
  heroDots[heroIndex].classList.add("active");
}
function goToHero(i){
  heroImages[heroIndex].classList.remove("active");
  heroDots[heroIndex].classList.remove("active");
  heroIndex=i;
  heroImages[heroIndex].classList.add("active");
  heroDots[heroIndex].classList.add("active");
}
setInterval(showNextHero,4000);

// Publicity Gallery
const publicityGallery=document.getElementById("publicity-gallery");
publicityImages.forEach(img=>{
  const image=document.createElement("img");
  image.src="images/publicity/"+img;
  publicityGallery.appendChild(image);
});
let scrollAmount=0;
let scrollInterval=setInterval(autoScrollGallery,50);
function autoScrollGallery(){
  scrollAmount+=2;
  if(scrollAmount>=publicityGallery.scrollWidth-publicityGallery.clientWidth)scrollAmount=0;
  publicityGallery.scrollTo({left:scrollAmount,behavior:'smooth'});
}
function scrollGallery(direction){
  scrollAmount+=direction*150;
  if(scrollAmount<0)scrollAmount=0;
  if(scrollAmount>publicityGallery.scrollWidth-publicityGallery.clientWidth)scrollAmount=publicityGallery.scrollWidth-publicityGallery.clientWidth;
  publicityGallery.scrollTo({left:scrollAmount,behavior:'smooth'});
}

// Responsive Menu
function toggleMenu(){document.querySelector('.nav-links').classList.toggle('active');}

li.onclick=()=>filterBrand(b);
brands.forEach(b=>{
  const li=document.createElement("li");
  li.innerText=b;

  li.onclick=function(e){

    // filter products
    filterBrand(b);

    // remove active from all
    document.querySelectorAll("#brands-menu li").forEach(item=>{
      item.classList.remove("active");
    });

    // add active to clicked
    this.classList.add("active");

    // scroll to products
    document.getElementById("products").scrollIntoView({
      behavior:"smooth"
    });
  };

  brandsMenu.appendChild(li);
});
function filterBrand(brand){
  if(brand==="All"){
    displayProducts(products);
  } else {
    displayProducts(products.filter(p=>p.brand===brand));
  }
}
function goHome(){

  // show all products
  displayProducts(products);

  // remove active from all brands
  document.querySelectorAll("#brands-menu li").forEach(item=>{
    item.classList.remove("active");
  });

  // scroll to top
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}
goHome();

function goHome(){

  displayProducts(products);

  document.querySelectorAll("#brands-menu li").forEach(item=>{
    item.classList.remove("active");
  });

  document.getElementById("home-btn").classList.add("active");

  window.scrollTo({ top: 0, behavior: "smooth" });
}
