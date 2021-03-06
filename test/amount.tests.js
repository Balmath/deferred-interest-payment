import * as Amount from "../src/domain/amount";
import test from "ava";

test("AmountValueShouldBeTheExpected", (assert) => {
    const amount = Amount.init(42),
        expected = 42;

    assert.is(amount.valueOf(), expected);
});

test("AmountValueShouldThrowIfInvalidNumber", (assert) => {
    const error = assert.throws(() => {
        Amount.init("Wrong!");
    });

    assert.is(error.message, "An amount must be a positive number.");
});

test("AmountValueShouldThrowIfNegative", (assert) => {
    const error1 = assert.throws(() => {
            Amount.init(-42);
        }),
        error2 = assert.throws(() => {
            Amount.init(-0.001);
        });

    assert.is(error1.message, "An amount must be a positive number.");
    assert.is(error2.message, "An amount must be a positive number.");
});

test("AmountShouldConvertFromString", (assert) => {
    const amount = Amount.init("42.38"),
        expected = 42.38;

    assert.is(amount.valueOf(), expected);
});

test("AmountShouldConvertFromAnotherAmount", (assert) => {
    const amount1 = Amount.init("42.38"),
        amount2 = Amount.init(amount1);

    assert.is(amount1.valueOf(), amount2.valueOf());
});

test("AmountShouldConvertToString", (assert) => {
    const amount = Amount.init(42),
        expected = "42.00";

    assert.is(amount.toString(), expected);
});

test("AmountShouldNotBeModified", (assert) => {
    const amount = Amount.init(42);

    assert.throws(() => { 
        amount.number = 54;
    }, TypeError);
});

test("AmountShouldTrimAfterSecondDecimal", (assert) => {
    const amount1 = Amount.init(42.123),
        amount2 = Amount.init(42.987),
        expected1 = 42.12,
        expected2 = 42.99;

    assert.is(amount1.valueOf(), expected1);
    assert.is(amount2.valueOf(), expected2);
});