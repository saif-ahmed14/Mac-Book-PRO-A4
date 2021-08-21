//Function for Memory Cost Calculation
function totalMemoryCost(extraMemory) {
    const storageCost = parseFloat(document.getElementById('storage-cost').innerText);
    const deliveryCost = parseFloat(document.getElementById('delivery-cost').innerText);

    if (extraMemory == 0) {
        const totalAmount = 1299 + extraMemory + storageCost + deliveryCost;
        document.getElementById('total-cost').innerText = totalAmount;
        document.getElementById('discount-total-cost').innerText = totalAmount;
    }
    else if (extraMemory == 180) {
        const totalAmount = 1299 + extraMemory + storageCost + deliveryCost;
        document.getElementById('total-cost').innerText = totalAmount;
        document.getElementById('discount-total-cost').innerText = totalAmount;
    }
}


//Function for Storage Cost Calculation
function totalStorageCost(extraStorage) {
    const memoryCost = parseFloat(document.getElementById('memory-cost').innerText);
    const deliveryCost = parseFloat(document.getElementById('delivery-cost').innerText);

    if (extraStorage == 0) {
        const totalAmount = 1299 + extraStorage + memoryCost + deliveryCost
        document.getElementById('total-cost').innerText = totalAmount;
        document.getElementById('discount-total-cost').innerText = totalAmount;
    }
    else if (extraStorage == 100) {
        const totalAmount = 1299 + extraStorage + memoryCost + deliveryCost;
        document.getElementById('total-cost').innerText = totalAmount;
        document.getElementById('discount-total-cost').innerText = totalAmount;
    }
    else if (extraStorage == 180) {
        const totalAmount = 1299 + extraStorage + memoryCost + deliveryCost;
        document.getElementById('total-cost').innerText = totalAmount;
        document.getElementById('discount-total-cost').innerText = totalAmount;
    }
}


//Function for Extra Delivery Cost Calculation
function totalDeliveryCost(extraDelivery) {
    const memoryCost = parseFloat(document.getElementById('memory-cost').innerText);
    const storageCost = parseFloat(document.getElementById('storage-cost').innerText);

    if (extraDelivery == 0) {
        const totalAmount = 1299 + extraDelivery + memoryCost + storageCost;
        document.getElementById('total-cost').innerText = totalAmount;
        document.getElementById('discount-total-cost').innerText = totalAmount;
    }
    else if (extraDelivery == 20) {
        const totalAmount = 1299 + extraDelivery + memoryCost + storageCost;
        document.getElementById('total-cost').innerText = totalAmount;
        document.getElementById('discount-total-cost').innerText = totalAmount;
    }
}


//Event Handler for 8GB Memory Option
document.getElementById('eightGB-memory').addEventListener('click', function () {
    document.getElementById('memory-cost').innerText = 0;
    totalMemoryCost(0);
})

//Event Handler for 16GB Memory Option
document.getElementById('sixteenGB-memory').addEventListener('click', function () {
    document.getElementById('memory-cost').innerText = 180;
    totalMemoryCost(180);
})



//Event Handler for 256GB Storage Option
document.getElementById('storage256GB').addEventListener('click', function () {
    document.getElementById('storage-cost').innerText = 0;
    totalStorageCost(0);

})

//Event Handler for 512GB Storage Option
document.getElementById('storage512GB').addEventListener('click', function () {
    document.getElementById('storage-cost').innerText = 100;
    totalStorageCost(100);
})

//Event Handler for 1TB Storage Option
document.getElementById('storage1TB').addEventListener('click', function () {
    document.getElementById('storage-cost').innerText = 180;
    totalStorageCost(180);
})


//Event Handler for Free Delivery Cost
document.getElementById('free-delivery').addEventListener('click', function () {
    document.getElementById('delivery-cost').innerText = 0;
    totalDeliveryCost(0);
})

//Event Handler for Argent Delivery Cost
document.getElementById('quick-delivery').addEventListener('click', function () {
    document.getElementById('delivery-cost').innerText = 20;
    totalDeliveryCost(20);
})


//Event Handler for Promo Code Discount Button
document.getElementById('apply-btn').addEventListener('click', function () {
    const withoutDiscountAmount = parseFloat(document.getElementById('total-cost').innerText);
    const promoCode = document.getElementById('promo-code').value;

    if (promoCode == 'steavekaku') {
        document.getElementById('discount-total-cost').innerText = withoutDiscountAmount - (0.2 * withoutDiscountAmount);
    }
    document.getElementById('promo-code').value = '';
})