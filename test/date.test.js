import {createDate} from "../src/domain/date";
import test from "ava";

test("DateShouldBeCorrectlyCreated", (assert) => {
    const year = 2018,
          month = 3,
          day = 28,
          date = createDate(year, month, day);

    assert.is(date.year, year);
    assert.is(date.month, month);
    assert.is(date.day, day);
});

test("DateShouldConvertToString", (assert) => {
    const year = 2018,
          month = 3,
          day = 28,
          date = createDate(year, month, day);
    
    assert.is(date.toString(), "20180328");
});

test("DateShouldConvertToValue", (assert) => {
    const year = 2018,
          month = 3,
          day = 28,
          date = createDate(year, month, day);
    
    assert.is(date.valueOf(), 17618);
});