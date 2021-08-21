//Function for memory cost
function totalMemoryCost(extraMemory) {
    const previousStorageCost = parseFloat(document.getElementById('storage-cost').innerText);
    const previousDeliveryCost = parseFloat(document.getElementById('delivery-cost').innerText);

    if (extraMemory == 0) {
        document.getElementById('total-cost').innerText = 1299 + 0;
    }
    else if (extraMemory == 180) {
        document.getElementById('total-cost').innerText = 1299 + 180 + previousStorageCost + previousDeliveryCost;
    }
}


//Function for storage cost
function totalStorageCost(extraStorage) {
    const previousMemoryCost = parseFloat(document.getElementById('memory-cost').innerText);
    const previousDeliveryCost = parseFloat(document.getElementById('delivery-cost').innerText);

    if (extraStorage == 0) {
        document.getElementById('total-cost').innerText = 1299 + 0 + previousMemoryCost + previousDeliveryCost;
    }
    else if (extraStorage == 100) {
        document.getElementById('total-cost').innerText = 1299 + 100 + previousMemoryCost + previousDeliveryCost;
    }
    else if (extraStorage == 180) {
        document.getElementById('total-cost').innerText = 1299 + 180 + previousMemoryCost + previousDeliveryCost;
    }
}


//Function for storage cost
function totalDeliveryCost(extraDelivery) {
    const previousMemoryCost = parseFloat(document.getElementById('memory-cost').innerText);
    const previousStorageCost = parseFloat(document.getElementById('storage-cost').innerText);

    if (extraDelivery == 0) {
        document.getElementById('total-cost').innerText = 1299 + 0 + previousMemoryCost + previousStorageCost;
    }
    else if (extraDelivery == 20) {
        document.getElementById('total-cost').innerText = 1299 + 20 + previousMemoryCost + previousStorageCost;
    }
}


//Event handler for Memory area
document.getElementById('eightGB-memory').addEventListener('click', function () {
    document.getElementById('memory-cost').innerText = 0;
    totalMemoryCost(0);
})

document.getElementById('sixteenGB-memory').addEventListener('click', function () {
    document.getElementById('memory-cost').innerText = 180;
    totalMemoryCost(180);
})



//Event handler for storage area
document.getElementById('storage256GB').addEventListener('click', function () {
    document.getElementById('storage-cost').innerText = 0;
    totalStorageCost(0);

})
document.getElementById('storage512GB').addEventListener('click', function () {
    document.getElementById('storage-cost').innerText = 100;
    totalStorageCost(100);
})
document.getElementById('storage1TB').addEventListener('click', function () {
    document.getElementById('storage-cost').innerText = 180;
    totalStorageCost(180);
})


//Event handler for delivery cost
document.getElementById('free-delivery').addEventListener('click', function () {
    document.getElementById('delivery-cost').innerText = 0;
    totalDeliveryCost(0);
})
document.getElementById('premium-delivery').addEventListener('click', function () {
    document.getElementById('delivery-cost').innerText = 20;
    totalDeliveryCost(20);
})


//Event for promo code discount button
document.getElementById('apply-btn').addEventListener('click', function () {
    const discountInput = document.getElementById('discount-total-cost').innerText;
    const discountTotal = parseFloat(discountInput);
    const promoCode = document.getElementById('promo-code').value;

    if (promoCode == 'steavekaku') {
        document.getElementById('discount-total-cost').innerText = discountTotal - (0.2 * discountTotal);
        document.getElementById('promo-code').value = ' ';
    }
})