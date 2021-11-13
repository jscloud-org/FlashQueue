import FQ from "../dist/esm/flashQueue";

const fq = new FQ<number>();

for (let i = 0; i < 10000; i++) {
    fq.enqueue(i);
}

for (let i = 0; i < 5000; i++) {
    console.log('next item->', fq.dequeue());
}

console.log('peeking next item ->', fq.peek());
