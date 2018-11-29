export function createAmount(value) {
    const number = Number(Number.parseFloat(value).toFixed(2));

    if (Number.isNaN(number)) {
        throw new Error("An amount must be represented by a number.");
    }

    if (Object.is(number, -0) || number < 0) {
        throw new Error("An amount must be positive.");
    }

    var amount = {
        valueOf: function valueOf() {
            return number.valueOf();
        },
        toString: function toString() {
            return number.toFixed(2);
        }
    };
    
    Object.freeze(amount);

    return amount;
}