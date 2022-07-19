const products = [
    {"id": 11, "title": "perfume Oil", "category": "fragrances", "price": 13},
    {"id": 12, "title": "Brown Perfume", "category": "fragrances", "price": 40},
    {"id": 13, "title": "Fog Scent Xpressio Perfume", "category": "fragrances", "price": 13}, {
        "id": 14, "title": "Non-Alcoholic Concentrated Perfume Oil", "category": "fragrances", "price": 120
    }, {"id": 15, "title": "Eau De Perfume Spray", "category": "fragrances", "price": 30}, {
        "id": 16, "title": "Hyaluronic Acid Serum", "category": "skincare", "price": 19
    }, {"id": 17, "title": "Tree Oil 30ml", "category": "skincare", "price": 12}, {
        "id": 18, "title": "Oil Free Moisturizer 100ml", "category": "skincare", "price": 40
    }, {"id": 19, "title": "Skin Beauty Serum.", "category": "skincare", "price": 46}, {
        "id": 20, "title": "Freckle Treatment Cream- 15gm", "category": "skincare", "price": 70
    }, {"id": 21, "title": "- Daal Masoor 500 grams", "category": "groceries", "price": 20}, {
        "id": 22, "title": "Elbow Macaroni - 400 gm", "category": "groceries", "price": 14
    }, {"id": 23, "title": "Orange Essence Food Flavou", "category": "groceries", "price": 14}, {
        "id": 24, "title": "cereals muesli fruit nuts", "category": "groceries", "price": 46
    }, {"id": 25, "title": "Gulab Powder 50 Gram", "category": "groceries", "price": 70}]


function groupByCategory(items) {

    const groupedObjects = {};

    for (const item of items) {
        let existingGroup = groupedObjects[item.category];
        if (!existingGroup) {
            groupedObjects[item.category] = [];
            existingGroup = groupedObjects[item.category];
        }
        existingGroup.push(item);
    }
    return groupedObjects;
}


function groupByAndExtract(items, keyClassifier, groupOperator) {
    const groupedObjects = {};

    for (const item of items) {
        const keyUsedForGrouping = keyClassifier(item);
        let existingGroup = groupedObjects[keyUsedForGrouping];
        if (!existingGroup) {
            groupedObjects[keyUsedForGrouping] = [];
            existingGroup = groupedObjects[keyUsedForGrouping];
        }
        existingGroup.push(item);
    }

    for (let key in groupedObjects) {
        groupedObjects[key] = groupOperator(groupedObjects[key]);
    }

    return groupedObjects;
}

function maxExtractor(items) {
    return Math.max(...items.map(iteem => iteem.price));
}

function priceClassifier(item) {

    if (item.price > 10 && item.price < 20) {
        return 'L'
    }

    if (item.price > 20 && item.price < 40) {
        return 'M'
    }

    if (item.price > 40) {
        return 'H'
    }

    return "VL";

}

const objectsMaxWithinPriceRange = groupByAndExtract(products, priceClassifier, maxExtractor);
console.table(objectsMaxWithinPriceRange);
