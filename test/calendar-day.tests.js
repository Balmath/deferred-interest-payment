import * as CalendarDay from "../src/domain/calendar-day";
import test from "ava";

test("CalendarDayShouldBeCorrectlyInitialized", (assert) => {
    const year = 2018,
        month = 3,
        day = 28,
        calendarDay = CalendarDay.initWithYearMonthDay(year, month, day);

    assert.is(calendarDay.year, year);
    assert.is(calendarDay.month, month);
    assert.is(calendarDay.day, day);
});

test("CalendarDayShouldBeCorrectlyInitializedWithADate", (assert) => {
    const date = new Date("Mar 28, 2018"),
        calendarDay = CalendarDay.initWithDate(date);

    assert.is(calendarDay.year, 2018);
    assert.is(calendarDay.month, 3);
    assert.is(calendarDay.day, 28);
});

test("CalendarDayShouldBeCorrectlyInitializedWithAnotherOne", (assert) => {
    const year = 2018,
        month = 3,
        day = 28,
        otherCalendarDay = CalendarDay.initWithYearMonthDay(year, month, day),
        calendarDay = CalendarDay.initWithCalendarDay(otherCalendarDay);

    assert.is(calendarDay.year, year);
    assert.is(calendarDay.month, month);
    assert.is(calendarDay.day, day);
});

test("CalendarDayShouldConvertToString", (assert) => {
    const year = 2018,
        month = 3,
        day = 28,
        calendarDay = CalendarDay.initWithYearMonthDay(year, month, day);
    
    assert.is(calendarDay.toString(), "20180328");
});

test("CalendarDayShouldConvertToValue", (assert) => {
    const year = 2018,
        month = 3,
        day = 28,
        calendarDay = CalendarDay.initWithYearMonthDay(year, month, day);
    
    assert.is(calendarDay.valueOf(), 17618);
});