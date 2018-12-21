import * as AssertionConcern from "./assertion-concern";

export function createDate(year, month, day) {
    const MICROSECONDS_TO_DAYS = 864e+5;

    AssertionConcern.assertArgumentIsInteger(
        year,
        "The year must be an integer."
    );
    AssertionConcern.assertArgumentIsInteger(
        month,
        "The month must be an integer."
    );
    AssertionConcern.assertArgumentIsInRange(
        month,
        {
            min: 1,
            max: 12
        },
        "The month must be between 1 and 12"
    );
    AssertionConcern.assertArgumentIsInteger(
        day,
        "The day must be an integer."
    );
    AssertionConcern.assertArgumentIsInRange(
        month,
        {
            min: 1,
            max: 31
        },
        "The day must be between 1 and 31"
    );

    var obj = {
        year,
        month,
        day,
        valueOf: function valueOf() {
            var date = new Date(year, month - 1, day),
                days = date.getTime() / MICROSECONDS_TO_DAYS;
            return +(days.toFixed());
        },
        toString: function toString() {
            return year.toString().padStart(4, '0') + 
                month.toString().padStart(2, '0') +
                day.toString().padStart(2, '0');
        }
    };

    AssertionConcern.assertArgumentIsValidDate(
        obj,
        "The date must be valid"
    );

    Object.freeze(obj);

    return obj;
}