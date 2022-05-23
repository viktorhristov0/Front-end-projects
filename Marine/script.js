let btn = document.getElementById('btn');

btn.addEventListener('click', function(){
    let width = parseFloat(document.getElementById('width-input').value);
    let height = parseFloat(document.getElementById('height-input').value);
    
   const finalPrice = 25/((100/(height + 1)) * Math.floor(57/(width + 1)));
   const finalPrice1 = 25/(((100/(width + 1)) * Math.floor(57/(height + 1))));

    if(finalPrice < (50/100)){
        document.getElementById('price-output').value = (50/100).toFixed(2);
    }
    else if(finalPrice1 < (50/100)){
        document.getElementById('price-output').value = (50/100).toFixed(2);
    }
   else if (finalPrice > finalPrice1){
       document.getElementById('price-output').value = (finalPrice1).toFixed(2);
   }
   else if (finalPrice1 > finalPrice){
       document.getElementById('price-output').value = (finalPrice).toFixed(2);
   }
   else if (finalPrice == finalPrice1){
       document.getElementById('price-output').value = (finalPrice1).toFixed(2);
   }

console.log(finalPrice);
console.log(finalPrice1);

})



