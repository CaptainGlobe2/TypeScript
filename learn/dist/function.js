"use strict";
function calculateTax(income, taxYear) {
    if ((taxYear || 2023) < 50000) {
        return income * 1.2;
    }
    return income * 1.3;
}
calculateTax(10000);
//# sourceMappingURL=function.js.map