
// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    let ex = {};
    let error = { error: 'You are rich, my friend! We don\'t have so much coins for exchange' };
    let h = 50;
    let hCount = 0;
    let q = 25;
    let qCount = 0;
    let d = 10;
    let dCount = 0;
    let n = 5;
    let nCount = 0;
    let p = 1;
    let pCount = 0;
    if (currency >= 10000) {
        return error;
    }
    if (currency <= 0) {
        return ex;
    }
    if (currency > 49) {
        hCount = currency / h >> 0;
        ex['H'] = hCount;
        currency = currency - hCount * h;
    }
    if (currency > 24) {
        qCount = currency / q >> 0;
        ex['Q'] = qCount;
        currency = currency - qCount * q
    }
    if (currency > 9) {
        dCount = currency / d >> 0;
        ex['D'] = dCount;
        currency = currency - dCount * d;
    }
    if (currency > 4) {
        nCount = currency / n >> 0;
        ex['N'] = nCount;
        currency = currency - nCount * n;
    }
    if (currency > 0) {
        pCount = currency / p >> 0;
        ex['P'] = pCount;
        currency = currency - pCount * p;
    }
    return ex;
}
