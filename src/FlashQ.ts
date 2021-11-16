import Queue from './Queue';

export class FlashQ<T> extends Queue<T> {

    constructor(){
        super();
    }


    public enqueue(item:T):boolean{
        return this.enqueueImpl(item);
    }


    public dequeue():T|undefined{
        return this.dequeueImpl();
    }

}


