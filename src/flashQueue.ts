
export default class FlashQueue<T>{

    storage:object
    head:number
    tail:number

    constructor(){
        this.storage={}
        this.head = this.tail = 0;
    }

    /**
     * Enqueue or insert an item
     * @param item 
     * @returns 
     */
    public enqueue(item:T):boolean{
        const index=this.tail;
        this.storage[index]=item;
        this.tail++;
        return true;
    }

    /**
     * Dequeue or remove an item
     * @returns 
     */
    public dequeue():T|undefined{
        if(this.head===this.tail)
            return undefined;
        const item= this.storage[this.head];
        delete this.storage[this.head];
        this.head++;
        if(this.head===this.tail)
            this.head=this.tail=0;
        return item;
    }

    public getObject(){
        return this.storage;
    }
    /**
     * Peek the next item
     * @returns 
     */
    public peek(){
        return this.storage[this.head];
    }

    public size(){
        return this.tail-this.head;
    }
}