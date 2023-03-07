fetch('https://makeup-api.herokuapp.com/api/v1/products.json').then((data)=>{
//console.log(data);
return data.json();
}).then((completedata)=>{
    //console.log((completedata[2].brand);

let data1="";
completedata.map((values)=>{
    data1+=`<div class="card">
    <h1 class="title">${values.brand}</h1>
    <img src=${values.api_featured_image} alt="img" class="images">
    <p>${values.description}</p>
    <p class="category">${values.category}</p>
    <p class="product-price">${values.price}</p>
    <p class="product name">${values.name}</p>
    
    
  </div>`
});
document.getElementById("card").innerHTML=data1;
}).catch((err)=>{
    console.log(err);
})
