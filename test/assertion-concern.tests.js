import * as AssertionConcern from "../src/domain/assertion-concern";
import test from "ava";

test("DoNotAssertIfParameterIsANumber", (assert) => {
    assert.notThrows(() => {
        AssertionConcern.assertArgumentIsNumber(42); 
    });
    assert.notThrows(() => {
        AssertionConcern.assertArgumentIsNumber("42"); 
    });
    assert.notThrows(() => {
        AssertionConcern.assertArgumentIsNumber(-42.0); 
    });
    assert.notThrows(() => {
        AssertionConcern.assertArgumentIsNumber([42]); 
    });
    assert.notThrows(() => {
        AssertionConcern.assertArgumentIsNumber(true); 
    });
    assert.notThrows(() => {
        AssertionConcern.assertArgumentIsNumber(null); 
    });
});

test("AssertIfParameterIsNotANumber", (assert) => {
    assert.throws(() => {
        // eslint-disable-next-line no-undefined
        AssertionConcern.assertArgumentIsNumber(undefined); 
    }, Error);
    assert.throws(() => {
        AssertionConcern.assertArgumentIsNumber({}); 
    }, Error);
    assert.throws(() => {
        AssertionConcern.assertArgumentIsNumber("42Magic"); 
    }, Error);
    assert.throws(() => {
        AssertionConcern.assertArgumentIsNumber([
            21,
            21
        ]); 
    }, Error);
    assert.throws(() => {
        AssertionConcern.assertArgumentIsNumber(/[a-z]/giu); 
    }, Error);
    assert.throws(() => {
        AssertionConcern.assertArgumentIsNumber(Symbol(42)); 
    }, Error);
});

test("DoNotAssertIfParameterIsAPositiveNumber", (assert) => {
    assert.notThrows(() => {
        AssertionConcern.assertArgumentIsPositiveNumber(42);
    });
    assert.notThrows(() => {
        AssertionConcern.assertArgumentIsPositiveNumber(0);
    });
    assert.notThrows(() => {
        AssertionConcern.assertArgumentIsPositiveNumber("42");
    });
});

test("AssertIfParameterIsNotAPositiveNumber", (assert) => {
    assert.throws(() => {
        AssertionConcern.assertArgumentIsPositiveNumber(-42);
    }, Error);
    assert.throws(() => {
        AssertionConcern.assertArgumentIsPositiveNumber(-0);
    }, Error);
    assert.throws(() => {
        AssertionConcern.assertArgumentIsPositiveNumber({});
    }, Error);
});