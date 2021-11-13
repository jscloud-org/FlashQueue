export declare class FlashQ<T> {
    private storage;
    private head;
    private tail;
    constructor();
    /**
     * Enqueue or insert an item to the queue
     * @param item
     * @returns true if operation successfull
     */
    enqueue(item: T): boolean;
    /**
     * Dequeue next item in Order
     * @returns {T} next item in queue
     */
    dequeue(): T | undefined;
    private getItem;
    private deleteItem;
    private setItem;
    /**
     * Peek the next item but not remove it from the queue
     * @returns next item in queue
     */
    peek(): any;
    size(): number;
}
