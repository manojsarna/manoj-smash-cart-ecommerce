const imgEl = document.getElementById("sm-main-image");
let arr = [1,2,3,4]
let i=1;
setInterval(()=>{
    if(i>4) i=1;
    imgEl.src=`/lib/assets/images/sc-${i}.webp`;
    console.log("inside i",i);
    i+=1;
},7000)
