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

class Item {

    constructor(price) {
        this.price = price;
    }

    calculateTaxCost() {
        return 0;
    }

    calculatePackageCost() {
        return 0;
    }

    calculateShippingCost() {
        return 0;
    }

    calculateDiscount() {
        return 0;
    }

}

class GroceryItem extends Item {
    constructor(price) {
        super(price);
    }

    calculateTaxCost() {
        return this.price * 0.3;
    }

    calculatePackageCost() {
        return this.price * 0.4;
    }

    calculateShippingCost() {
        return this.price * 0.3;
    }

    calculateDiscount() {
        return 10;
    }
}

class FragranceItem extends Item {
    constructor(price) {
        super(price);
    }

    calculateTaxCost() {
        return this.price * 0.13;
    }

    calculatePackageCost() {
        return this.price * 0.41;
    }

    calculateShippingCost() {
        return this.price * 0.23;
    }

    calculateDiscount() {
        return 0;
    }
}

class SkinCare extends Item {
    constructor(price) {
        super(price);
    }

    calculateTaxCost() {
        return this.price * 0.33;
    }

    calculatePackageCost() {
        return this.price * 0.14;
    }

    calculateShippingCost() {
        return this.price * 0.93;
    }

    calculateDiscount() {
        return 0;
    }
}


class ElectronicsItem extends Item {
    constructor(price) {
        super(price);
    }

    calculateTaxCost() {
        return this.price * 1.33;
    }

    calculatePackageCost() {
        return this.price * 0.74;
    }

    calculateShippingCost() {
        return this.price * 0.53;
    }

    calculateDiscount() {
        return -300;
    }
}



/**
 *
 * @param
 * @returns {number}
 */
function calculateTotalCost(item) {

    let totalCost = item.price;
    totalCost += item.calculateTaxCost();
    totalCost += item.calculatePackageCost();
    totalCost += item.calculateShippingCost();
    totalCost = totalCost - item.calculateDiscount();
    return totalCost;
}

function getItemInstance(itemJSON) {
    switch (itemJSON.category) {
        case "fragrances":
            return new FragranceItem(itemJSON.price);
        case "skincare":
            return new SkinCare(itemJSON.price);
        case "groceries":
            return new GroceryItem(itemJSON.price);
        case "electronics":
            return new ElectronicsItem(itemJSON.price);

    }
}

const item1 = {"id": 11, "title": "perfume Oil", "category": "fragrances", "price": 13};
const item2 = {"id": 11, "title": "perfume Oil", "category": "electronics", "price": 103};



const itemInstance = getItemInstance(item2);
const totalCost = calculateTotalCost(itemInstance);
console.log(totalCost);
/*
const item2 = {"id": 11, "title": "perfume Oil", "category": "electronics", "price": 103};
const totalCost = calculateTotalCost(item2);
console.log(totalCost);*/
