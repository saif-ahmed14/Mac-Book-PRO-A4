//Function for memory cost
function totalMemoryCost(extraMemory) {
    const previousStorageCost = parseFloat(document.getElementById('storage-cost').innerText);
    const previousDeliveryCost = parseFloat(document.getElementById('delivery-cost').innerText);

    if (extraMemory == 0) {
        const totalAmount = 1299 + 0 + previousStorageCost + previousDeliveryCost;
        document.getElementById('total-cost').innerText = totalAmount;
        document.getElementById('discount-total-cost').innerText = totalAmount;
    }
    else if (extraMemory == 180) {
        const totalAmount = 1299 + 180 + previousStorageCost + previousDeliveryCost;
        document.getElementById('total-cost').innerText = totalAmount;
        document.getElementById('discount-total-cost').innerText = totalAmount;
    }
}


//Function for storage cost
function totalStorageCost(extraStorage) {
    const previousMemoryCost = parseFloat(document.getElementById('memory-cost').innerText);
    const previousDeliveryCost = parseFloat(document.getElementById('delivery-cost').innerText);

    if (extraStorage == 0) {
        const totalAmount = 1299 + 0 + previousMemoryCost + previousDeliveryCost
        document.getElementById('total-cost').innerText = totalAmount;
        document.getElementById('discount-total-cost').innerText = totalAmount;
    }
    else if (extraStorage == 100) {
        const totalAmount = 1299 + 100 + previousMemoryCost + previousDeliveryCost;
        document.getElementById('total-cost').innerText = totalAmount;
        document.getElementById('discount-total-cost').innerText = totalAmount;
    }
    else if (extraStorage == 180) {
        const totalAmount = 1299 + 180 + previousMemoryCost + previousDeliveryCost;
        document.getElementById('total-cost').innerText = totalAmount;
        document.getElementById('discount-total-cost').innerText = totalAmount;
    }
}


//Function for storage cost
function totalDeliveryCost(extraDelivery) {
    const previousMemoryCost = parseFloat(document.getElementById('memory-cost').innerText);
    const previousStorageCost = parseFloat(document.getElementById('storage-cost').innerText);

    if (extraDelivery == 0) {
        const totalAmount = 1299 + 0 + previousMemoryCost + previousStorageCost;
        document.getElementById('total-cost').innerText = totalAmount;
        document.getElementById('discount-total-cost').innerText = totalAmount;
    }
    else if (extraDelivery == 20) {
        const totalAmount = 1299 + 20 + previousMemoryCost + previousStorageCost;
        document.getElementById('total-cost').innerText = totalAmount;
        document.getElementById('discount-total-cost').innerText = totalAmount;
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
    const withoutDiscountAmount = parseFloat(document.getElementById('total-cost').innerText);
    const promoCode = document.getElementById('promo-code').value;

    if (promoCode == 'steavekaku') {
        document.getElementById('discount-total-cost').innerText = withoutDiscountAmount - (0.2 * withoutDiscountAmount);
    }
    document.getElementById('promo-code').value = '';
})