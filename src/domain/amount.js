export function Amount(value) {
    var number = Number(value);
    var amount = { number };
    Object.freeze(amount);
    return amount;
}