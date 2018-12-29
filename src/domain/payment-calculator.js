import * as Amount from "./amount";
import * as CalendarDay from "./calendar-day";

export function init() {
    var payment = 0.0;

    function doGetPayment() {
        return payment;
    }

    function doAddPurchase(purchaseAmount) {
        var amount = Amount.create(purchaseAmount);

        payment += amount.valueOf();
    }

    function doAddBalanceDeferredInterest(balanceAmount, expirationDate) {
        const currentDate = new Date(Date.now()),
            currentDay = CalendarDay.initWithDate(currentDate),
            expirationDay = CalendarDay.initWithDate(expirationDate);
        let remainingMonth = 1;

        if (expirationDay < currentDay) {
            throw new Error("expirationDate must be later than now");
        }

        remainingMonth = CalendarDay.diffInMonth(expirationDay, currentDay);
        remainingMonth = Math.max(1, remainingMonth);
        payment += balanceAmount / remainingMonth;
    }

    return {
        getPayment: doGetPayment,
        addPurchase: doAddPurchase,
        addBalanceDeferredInterest: doAddBalanceDeferredInterest
    };
}