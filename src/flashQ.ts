
export class FlashQ<T>{

    private storage: object
    private head: number
    private tail: number

    constructor(){
        this.storage={}
        this.head = this.tail = 0;
    }

    /**
     * Enqueue or insert an item to the queue
     * @param item 
     * @returns true if operation successfull
     */
    public enqueue(item:T):boolean{
        const index=this.tail;
        this.setItem(index, item);
        this.tail++;
        return true;
    }

    /**
     * Dequeue next item in Order
     * @returns {T} next item in queue
     */
    public dequeue():T|undefined{
        if(this.head===this.tail)
            return undefined;
        const item = this.getItem(this.head);
        this.deleteItem(this.head);
        this.head++;
        if(this.head===this.tail)
            this.head=this.tail=0;
        return item;
    }

    private getItem(idx: number) {
        //@ts-ignore
        return this.storage[idx];
    }

    private deleteItem(idx: number) {
        //@ts-ignore
        delete this.storage[idx];
    }

    private setItem(idx: number, item: any) {
        //@ts-ignore
        this.storage[idx] = item;
    }

    /**
     * Peek the next item but not remove it from the queue
     * @returns next item in queue
     */
    public peek(){
        return this.getItem(this.head);
    }

    public size(){
        return this.tail-this.head;
    }
}