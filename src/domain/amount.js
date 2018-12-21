import * as AssertionConcern from "./assertion-concern";

export function createAmount(value) {
    const number = Number(Number.parseFloat(value).toFixed(2));

    AssertionConcern.assertArgumentIsNumber(
        number, 
        "An amount must be represented by a number."
    );
    AssertionConcern.assertArgumentIsPositiveNumber(
        number,
        "An amount must be positive."
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