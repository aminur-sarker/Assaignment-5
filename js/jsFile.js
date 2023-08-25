let totalValue = 0;

    // Apply button disable and enable
    document.getElementById('coupon-btn').disabled = true;

// // make purchase button
   document.getElementById('makePurchase').disabled = true;

function anotherFile(target) {
    const selectedProduct = document.getElementById('selectedProductName');
    const productName = target.childNodes[1].childNodes[3].childNodes[3].innerText;
    const li = document.createElement('li');
    li.innerText = productName;
    selectedProduct.appendChild(li);



    const productPrice = target.childNodes[1].childNodes[3].childNodes[5].innerText.split(" ")[0];

    totalValue = parseFloat(totalValue) + parseFloat(productPrice);

    document.getElementById('totalPriceValue').innerText = totalValue.toFixed(2);

    if (totalValue >= 200) {
        document.getElementById("coupon-btn").disabled = false;
    }
    document.getElementById('makePurchase').disabled = false;
}



// const promoCode = document.getElementById('couponText').innerText;
// if(promoCode === 'SELL200'){

// }