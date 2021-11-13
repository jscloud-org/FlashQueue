
import { FlashQ } from "./FlashQ";

export type DequeueCallback<T> = (item?: T) => void;
export type QueueStatus = "IDLE" | 'RUNNING' | 'PAUSED';

export class AutoQueue<T> extends FlashQ<T>{

    private queueStatus: QueueStatus
    private dequeueCallback?: DequeueCallback<T>

    constructor() {
        super();
        this.queueStatus = "IDLE";
    }

    public enqueue(item: any): boolean {
        this.enqueueImpl(item);
        if (this.queueStatus === 'IDLE')
            this.runQueue();
        return true;
    }

    private runQueue() {
        if (this.queueStatus === 'RUNNING')
            return;

        while (this.size() > 0 && this.queueStatus !== 'PAUSED' && this.dequeueCallback) {
            this.queueStatus = "RUNNING";
            this.dequeueCallback(this.dequeue());
        }

        this.queueStatus = 'IDLE';
    }

    public resumeQueue() {
        if (this.queueStatus !== 'PAUSED')
            return;
        this.queueStatus = 'IDLE';
        this.runQueue();
    }

    public pauseQueue() {
        this.queueStatus = "PAUSED";
    }

    public getQueueStatus() {
        return this.queueStatus;
    }

    public onDequeue(callback: DequeueCallback<T>) {
        this.dequeueCallback = callback;
    }

}


