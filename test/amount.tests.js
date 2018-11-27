import test from 'ava';
import { Amount } from '../src/domain/amount';

test('AmountValueShouldBeTheExpected', t => {
    const expected = 42;
    const amount = Amount(expected);
    t.is(amount.valueOf(), expected);
});

test('AmountValueShouldBeNan', t => {
    const amount = Amount("Wrong!");
    t.true(Number.isNaN(amount.valueOf()));
});

test('AmountShouldConvertFromString', t => {
    const amount = Amount("42.387");
    const expected = 42.387;
    t.is(amount.valueOf(), expected);
});

test('AmountShouldConvertFromAnotherAmount', t => {
    const amount1 = Amount("42.38");
    const amount2 = Amount(amount1);
    t.is(amount1.valueOf(), amount2.valueOf());
});

test('AmountShouldConvertToString', t => {
    const amount = Amount(42);
    const expected = "42";
    t.is(amount.toString(), expected);
});

test('AmountShouldNotBeModified', t => {
    const amount = Amount(42);
    t.throws(() => { amount.number = 54 }, TypeError);
});