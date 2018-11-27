export function Amount(value) {
    const number = Number(value);

    var amount = {
        valueOf: function valueOf() {
            return number.valueOf();
        },
        toString: function toString() {
            return number.toString();
        }
    };
    
    Object.freeze(amount);

    return amount;
}