import * as AssertionConcern from "./assertion-concern";

export function init(value) {
    const number = Number(Number.parseFloat(value).toFixed(2));

    AssertionConcern.assertArgumentIsPositiveNumber(
        number,
        "An amount must be a positive number."
    );

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