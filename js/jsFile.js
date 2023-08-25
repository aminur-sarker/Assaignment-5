let totalValue = 0;

// Apply button disable and enable
document.getElementById('coupon-btn').disabled = true;

// // make purchase button
document.getElementById('makePurchase').disabled = true;

function clickedOverProduct(target) {
    const selectedProduct = document.getElementById('selectedProductName');
    const productName = target.childNodes[1].childNodes[3].childNodes[3].innerText;
    const li = document.createElement('li');
    li.innerText = productName;
    selectedProduct.appendChild(li);



    const productPrice = target.childNodes[1].childNodes[3].childNodes[5].innerText.split(" ")[0];
    totalValue = parseFloat(totalValue) + parseFloat(productPrice);
    document.getElementById('totalPriceValue').innerText = totalValue.toFixed(2);
    const grantTotal = document.getElementById('totalAmount');
    grantTotal.innerText = totalValue.toFixed(2);

    document.getElementById('makePurchase').disabled = false;

    if (totalValue >= 200) {
        document.getElementById("coupon-btn").disabled = false;
        document.getElementById("coupon-btn").addEventListener('click', function () {
            const promoCode = document.getElementById('couponText').value;
            const grantTotal = document.getElementById('totalAmount');
            if (promoCode === 'SELL200') {
                const discount = document.getElementById('discountInnerText');
                discount.innerText = (totalValue * 0.2).toFixed(2);
                grantTotal.innerText = parseFloat(totalValue) - parseFloat(discount.innerText);
            }
        });
    }
}