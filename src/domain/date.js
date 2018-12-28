import * as AssertionConcern from "./assertion-concern";

function validateCreateDateArguments(year, month, day) {
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
}

export function createDate(year, month, day) {
    const MICROSECONDS_TO_DAYS = 864e+5;

    validateCreateDateArguments(year, month, day);

    var obj = {
        year,
        month,
        day,
        valueOf: function valueOf() {
            var date = new Date(year, month - 1, day),
                days = date.getTime() / MICROSECONDS_TO_DAYS;

            return Number(days.toFixed());
        },
        toString: function toString() {
            return year.toString().padStart(4, "0") + 
                month.toString().padStart(2, "0") +
                day.toString().padStart(2, "0");
        }
    };

    AssertionConcern.assertArgumentIsValidDate(
        obj,
        "The date must be valid"
    );

    Object.freeze(obj);

    return obj;
}

export function diffInMonth(leftDate, rightDate) {
    var diff = 0,
        sign = 1;

    diff = (leftDate.year - rightDate.year) * 12;
    diff += leftDate.month - rightDate.month;
    sign = diff / Math.abs(diff);
    if (sign > 0 && leftDate.day - rightDate.day < 0) {
        diff -= 1;
    } else {
        diff += 1;
    }
    
    return diff;
}