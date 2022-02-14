const imgEl = document.getElementById("sm-main-image");
let arr = [1,2,3,4]
let i=1;
setInterval(()=>{
    if(i>4) i=1;
    imgEl.src=`/lib/assets/images/sc-${i}.webp`;
    i+=1;
},5000)


const heroShopBtn = document.getElementById("carousel-btn");

heroShopBtn.addEventListener("click", () => {
  window.location = "/lib/components/products/products.html";
});