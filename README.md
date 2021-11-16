# FlashQ: a javascript Queue library

[![Version npm](https://img.shields.io/npm/v/ws.svg?logo=npm)](https://www.npmjs.com/package/@js-cloud/flashq)

[![CI](https://img.shields.io/github/workflow/status/websockets/ws/CI/master?label=CI&logo=github)](https://github.com/jscloud-org/FlashQueue/actions/workflows/npm-packages-workflow.yml)

![npm](https://img.shields.io/npm/dw/@js-cloud/flashq?label=installs&style=plastic)
FlashQ is a simple to use, blazing fast library which included different implementations of Queue datastructure for perfomance focused applications.

![GitHub issues](https://img.shields.io/github/issues-raw/jscloud-org/flashqueue)

![GitHub](https://img.shields.io/github/license/jscloud-org/flashqueue?style=plastic)


A superfast and lightweight Queue (FIFO) implementations in JavaScript.

## Table of Contents

- [About](#about)
- [Installation](#installation)
- [Modules](#modules)
  - [FlashQ](#flashq)
  - [AutoQ](#autoq)
- [License](#license)



## About

This library is developed by Jerry S Joseph as an Open-Source project. 

## Installation

Open up a terminal and install this library like this,

```javascript
npm install @js-cloud/flashq
```


## Modules

### FlashQ

Time complexity -> O(1) for enqueing 
                   O(1) for dequeing

Fastest implementation of queue using plain javascript objects. 


## Usage

### ES6 import

FlashQ supports treeshaking via es6 modules.
    
```js
import {FlashQ} from '@js-cloud/flashq'

const fq=new FlashQ(); //if type is unknown
            
            //OR

const fq=new FlashQ<number>(); //if type is known
```

### CommonJS require

FlashQ supports treeshaking via es6 modules.
    
```javascript
const {FlashQ} = require('@js-cloud/flashq');

const fq=new FlashQ(); //if type is unknown
            
            //OR

const fq=new FlashQ<number>(); //if type is known
        
```

### Enqueing item

```javascript
fq.enqueue(1);
fq.enqueue('item');     
```


### Dequeuing item

```javascript
console.log(fq.dequeue())    //1
console.log(fq.dequeue()); //'item'    
```

### Peek into the queue

```javascript
fq.enqueue(1);
fq.enqueue('item'); 

console.log(fq.peek())      //1
console.log(fq.dequeue())    //1
    
console.log(fq.peek())      //'item'
console.log(fq.dequeue()); //'item'    
```

## AutoQ

Automatic queue is an extension of `FlashQ` which automatically call given callbacks when an item in enqueued in the queue. It also has the ability to pause and resume the queue processing.
The queue has various states (IDLE, PAUSED, RUNNING), which describes the current state in which the queue is. As soon as the queue recieves first item, it starts 
processing the queue and starts ejecting items.

* `IDLE` -> the queue is empty and will immediately dequeue any incoming request.
* `PAUSED` -> the queue is paused and will hold every incoming requesting in FIFO manner (order will be preserved).
* `RUNNING` -> the queue is running and will dequeue incoming request sequentially

### ES6 import

FlashQ supports treeshaking via es6 modules.
    
```js
import {AutoQ} from '@js-cloud/flashq'

const aq=new AutoQ(); //if type is unknown
            
            //OR

const aq=new AutoQ<number>(); //if type is known
```

### CommonJS require

FlashQ supports treeshaking via es6 modules.
    
```javascript
const {AutoQ} = require('@js-cloud/flashq');

const aq=new AutoQ(); //if type is unknown
            
            //OR

const aq=new AutoQ<number>(); //if type is known
        
```


### Enqueing item

```javascript
aq.enqueue(1);
aq.enqueue('item');     
```

### Auto dequeing of items

```javascript
aq.onDequeue((item) => {
    console.log('dequeue event ->', item);

}) 
```

### Pause / Resume Queue

```javascript
aq.pauseQueue();
aq.resumeQueue();
```

### Dequeuing item manually

```javascript
console.log(aq.dequeue())    //1
console.log(aq.dequeue()); //'item'    
```

### Peek into the queue

```javascript
aq.enqueue(1);
aq.enqueue('item'); 

console.log(aq.peek())      //1
console.log(aq.dequeue())    //1
    
console.log(aq.peek())      //'item'
console.log(aq.dequeue()); //'item'    
```
