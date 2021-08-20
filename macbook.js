

//Event handler for Memory area
document.getElementById('eightGB-memory').addEventListener('click', function(){
    document.getElementById('memory-cost').innerText = 0;
})

document.getElementById('sixteenGB-memory').addEventListener('click', function(){
    document.getElementById('memory-cost').innerText = 180;
})



//Event handler for storage area
document.getElementById('storage256GB').addEventListener('click', function(){
    document.getElementById('storage-cost').innerText = 0;    
})
document.getElementById('storage512GB').addEventListener('click', function(){
    document.getElementById('storage-cost').innerText = 100;    
})
document.getElementById('storage1TB').addEventListener('click', function(){
    document.getElementById('storage-cost').innerText = 180;    
})




//Event handler for delivery cost
document.getElementById('free-delivery').addEventListener('click', function(){
    document.getElementById('delivery-cost').innerText = 0;
})
document.getElementById('premium-delivery').addEventListener('click', function(){
    document.getElementById('delivery-cost').innerText = 20;
})



/* //Event for promo code discount button
document.getElementById('apply-btn').addEventListener('click', function(){
    const discountInput = document.getElementById('discount-total-cost').innerText;
    const discountTotal = parseFloat(discountInput);

    const promoCode = document.getElementById('promo-code').value;

    if(promoCode == 'steavekaku'){
        document.getElementById('discount-total-cost').innerText = discountTotal - (0.2 * discountTotal);
        document.getElementById('promo-code').value = ' ';
    }
}) */