// Task 1

function computeClosestToZero(ts) {
    if (ts.length === 0) {
        return 0;
    }
    let closestTemp = ts[0];

    for (let i = 0; i < ts.length; i++) {
        const currentTemp = ts[i];

        if (Math.abs(currentTemp) < Math.abs(closestTemp) || (Math.abs(currentTemp) === Math.abs(closestTemp) && currentTemp > closestTemp)) {
            closestTemp = currentTemp;
        }
    }
    return closestTemp;
}

ts = [-5, -5, 5, 5, 6, -5];
res = computeClosestToZero(ts);
console.log(res);

// Task 2

const calculateTotalPrice = (prices, discount) => {
    if (prices.length === 0) {
        return 0;
    }
    maxPriceItem = prices[0];
    let totalPrice = 0;
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] > maxPriceItem) {
            maxPriceItem = prices[i];
            discountPrice = (maxPriceItem * (discount / 100))
        }
        totalPrice += prices[i];
    }
    return totalPrice - discountPrice;
}

prices = [981, 76, 996, 140];
discount = 10;
res = calculateTotalPrice(prices, discount);
console.log(res)