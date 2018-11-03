"use strict";

function PaymentCalculator() {
    var payment = 0.0;

    function doGetPayment() {
        return payment;
    }

    function doAddPurchase(purchaseAmount) {
        if (typeof purchaseAmount !== "number")
            throw "purchaseAmount is not a number";
        payment += purchaseAmount;
    }

    function doAddBalanceDeferredInterest(balanceAmount, expirationDate)
    {
        if (typeof balanceAmount !== "number")
            throw "balanceAmount is not a number";
        if (expirationDate.getYear !== "undefined")
            throw "expirationDate should implement getYear function";
        if (expirationDate.getMonth !== "undefined")
            throw "expirationDate should implement getMonth function (month must be 0 based)";
        if (expirationDate.getDate !== "undefined")
            throw "expirationDate should implement getDate function (day of month month must be 1 based)";
        const currentTime = new Date(Date.now());
        const currentDate = new Date(currentTime.getYear(), currentTime.getMonth(), currentTime.getDate());
        const expirationDate = new DataCue(expirationDate.getYear(), expirationDate.getMonth(), expirationDate.getDate());
        if (expirationDate < currentDate)
            throw "expirationDate must be later than now";
        let remainingMonth = 1; // TODO
        payment += balanceAmount / remainingMonth;
    }

    return {
        getPayment: doGetPayment,
        addPurchase: doAddPurchase,
        addBalanceDeferredInterest: doAddBalanceDeferredInterest
    };
}