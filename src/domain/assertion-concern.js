export function assertArgumentIsNumber(value, message) {
    if (Number.isNaN(Number(value))) {
        throw new Error(message);
    }
}

export function assertArgumentIsPositiveNumber(value, message) {
    assertArgumentIsNumber(value, message);
    if (Object.is(value, -0) || value < 0) {
        throw new Error(message);
    }
}

export function assertArgumentIsInteger(value, message) {
    if (!(/^(-|\+)?(([1-9][0-9]*)|0|Infinity)$/u).test(value)) {
        throw new Error(message);
    }
}

export function assertArgumentIsInRange(value, range, message) {
    if (value < range.min || value > range.max) {
        throw new Error(message);
    }
}

export function assertArgumentIsValidDate(value, message) {
    var monthIndex = value.month - 1,
        date = new Date(value.year, monthIndex, value.day);

    if (date.getFullYear() !== value.year ||
        date.getMonth() !== monthIndex ||
        date.getDate() !== value.day) {
        throw new Error(message);
    }
}