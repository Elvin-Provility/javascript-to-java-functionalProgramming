/***
 *  Tax
 *  category grocery - GST - 5%
 *  fragrance GST - 30%
 *  skincare GST - 4%
 *
 *  Packaging
 category grocery - 100g  - 4%
 fragrance  - 100g - 2%
 skincare  - 100g - 3%

 Shipping
 ---------------
 category grocery - volume m3  - 20
 fragrance  -  - 117
 skincare   1m3 - 42
 *
 grocery - 2% discount per kg
 *
 */


function calculateTotalCost(item) {

    let totalCost = item.price;
    totalCost += calculateTaxCost(item);
    totalCost += calculatePackageCost(item);
    totalCost += calculateShippingCost(item);
    totalCost = totalCost - calculateDiscount(item);
    return totalCost;
}


function calculateTaxCost(item) {
    if (item.category == 'fragrances') {
        return item.price * 0.30;
    }

    if (item.category == 'groceries') {
        return item.price * 0.05;
    }

    if (item.category == 'skincare') {
        return item.price * 0.04;
    }

    if (item.category == 'electronics') {
        return item.price * 0.40;
    }

    return 25;
}


function calculatePackageCost(item) {
    if (item.category == 'fragrances') {
        return item.price * 0.20;
    }

    if (item.category == 'groceries') {
        return item.price * 0.04;
    }

    if (item.category == 'skincare') {
        return item.price * 0.03;
    }

    if (item.category == 'electronics') {
        return item.price * 0.50;
    }

    return 25;
}


function calculateShippingCost(item) {
    if (item.category == 'fragrances') {
        return item.price * 0.20;
    }

    if (item.category == 'groceries') {
        return item.price * 0.04;
    }

    if (item.category == 'skincare') {
        return item.price * 0.03;
    }

    if (item.category == 'electronics') {
        return item.price * 0.10;
    }

    return 10;
}


function calculateDiscount(item) {
    if (item.category == 'groceries') {
        return item.price * 0.08;
    }

    if (item.category == 'electronics') {
        return -100;
    }

    return 0;
}

const item1 = {"id": 11, "title": "perfume Oil", "category": "fragrances", "price": 13};
const item2 = {"id": 11, "title": "perfume Oil", "category": "electronics", "price": 103};
const totalCost = calculateTotalCost(item2);
console.log(totalCost);
