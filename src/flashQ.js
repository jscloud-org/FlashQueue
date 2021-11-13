"use strict";
exports.__esModule = true;
exports.FlashQ = void 0;
var FlashQ = /** @class */ (function () {
    function FlashQ() {
        this.storage = {};
        this.head = this.tail = 0;
    }
    /**
     * Enqueue or insert an item to the queue
     * @param item
     * @returns true if operation successfull
     */
    FlashQ.prototype.enqueue = function (item) {
        var index = this.tail;
        this.setItem(index, item);
        this.tail++;
        return true;
    };
    /**
     * Dequeue next item in Order
     * @returns {T} next item in queue
     */
    FlashQ.prototype.dequeue = function () {
        if (this.head === this.tail)
            return undefined;
        var item = this.getItem(this.head);
        this.deleteItem(this.head);
        this.head++;
        if (this.head === this.tail)
            this.head = this.tail = 0;
        return item;
    };
    FlashQ.prototype.getItem = function (idx) {
        //@ts-ignore
        return this.storage[idx];
    };
    FlashQ.prototype.deleteItem = function (idx) {
        //@ts-ignore
        delete this.storage[idx];
    };
    FlashQ.prototype.setItem = function (idx, item) {
        //@ts-ignore
        this.storage[idx] = item;
    };
    /**
     * Peek the next item but not remove it from the queue
     * @returns next item in queue
     */
    FlashQ.prototype.peek = function () {
        return this.getItem(this.head);
    };
    FlashQ.prototype.size = function () {
        return this.tail - this.head;
    };
    return FlashQ;
}());
exports.FlashQ = FlashQ;
