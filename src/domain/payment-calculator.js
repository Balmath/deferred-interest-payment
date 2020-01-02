import * as Amount from "./amount";
import * as CalendarDay from "./calendar-day";

export function init() {
    var payment = 0.0;

    function doGetPayment() {
        return payment;
    }

    function doAddPurchase(purchaseAmount) {
        payment += Amount.create(purchaseAmount);
    }

    function doAddBalanceDeferredInterest(balanceAmount, expirationDate) {
        const amount = Amount.create(balanceAmount),
            currentDate = new Date(Date.now()),
            currentDay = CalendarDay.initWithDate(currentDate),
            expirationDay = CalendarDay.initWithDate(expirationDate);
        let remainingMonth = 1;

        if (expirationDay < currentDay) {
            throw new Error("expirationDate must be later than now");
        }

        remainingMonth = CalendarDay.diffInMonth(expirationDay, currentDay);
        remainingMonth = Math.max(1, remainingMonth);
        payment += Amount.create(amount / remainingMonth);
    }

    return {
        getPayment: doGetPayment,
        addPurchase: doAddPurchase,
        addBalanceDeferredInterest: doAddBalanceDeferredInterest
    };
}