import { AutoQueue } from '../src'

const fq = new AutoQueue<number>();

let k = 0;

fq.onDequeue((item) => {
    console.log('dequeue event ->', item, 'status ->', fq.getQueueStatus());

})

fq.resumeQueue();

for (let i = 0; i <= 10; i++) {
    fq.enqueue(i);
    if (i === 5)
        fq.pauseQueue();
}

console.log('status ->', fq.getQueueStatus());
console.log('backlog ->', fq.size());
fq.resumeQueue();