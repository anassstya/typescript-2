"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var Cart = /** @class */ (function () {
    function Cart() {
        this.items = [];
    }
    Cart.prototype.add = function (item) {
        this.items.push(item);
    };
    Object.defineProperty(Cart.prototype, "items1", {
        get: function () {
            return __spreadArray([], this.items, true);
        },
        enumerable: false,
        configurable: true
    });
    Cart.prototype.countSum = function () {
        var sum = 0;
        for (var i in __spreadArray([], this.items, true)) {
            sum += __spreadArray([], this.items, true)[i].price;
        }
        return "\u0421\u0443\u043C\u043C\u0430 \u0431\u0435\u0437 \u0441\u043A\u0438\u0434\u043E\u043A \u0432\u0441\u0435\u0445 \u0442\u043E\u0432\u0430\u0440\u043E\u0432".concat(sum);
    };
    Cart.prototype.countSumObj = function (id) {
        for (var i in __spreadArray([], this.items, true)) {
            if (id == __spreadArray([], this.items, true)[i].id) {
                return "\u0426\u0435\u043D\u0430 (\u043E\u0442\u0434\u0435\u043B\u044C\u043D\u043E\u0433\u043E \u0442\u043E\u0432\u0430\u0440\u0430) \u0431\u0435\u0437 \u0441\u043A\u0438\u0434\u043A\u0438 ".concat(__spreadArray([], this.items, true)[i].price);
            }
        }
    };
    Cart.prototype.countSumDisc = function (id, discount) {
        for (var i in __spreadArray([], this.items, true)) {
            if (id == __spreadArray([], this.items, true)[i].id) {
                return "\u0426\u0435\u043D\u0430 (\u043E\u0442\u0434\u0435\u043B\u044C\u043D\u043E\u0433\u043E \u0442\u043E\u0432\u0430\u0440\u0430) \u0441\u043E \u0441\u043A\u0438\u0434\u043A\u043E\u0439 ".concat(__spreadArray([], this.items, true)[i].price - (__spreadArray([], this.items, true)[i].price * (discount / 100)));
            }
        }
    };
    Cart.prototype.countDisc = function (discount) {
        var sumNoDisc = 0;
        for (var i in __spreadArray([], this.items, true)) {
            sumNoDisc += __spreadArray([], this.items, true)[i].price;
        }
        return "\u0421\u0443\u043C\u043C\u0430 \u0432\u0441\u0435\u0445 \u0442\u043E\u0432\u0430\u0440\u043E\u0432 \u0441\u043E \u0441\u043A\u0438\u0434\u043A\u043E\u0439 ".concat(sumNoDisc - (sumNoDisc * (discount / 100)));
    };
    Cart.prototype.deleteObj = function (id) {
        this.items = this.items.filter(function (item) { return item.id !== id; });
        return this.items;
    };
    return Cart;
}());
exports.default = Cart;
//# sourceMappingURL=cart.js.map