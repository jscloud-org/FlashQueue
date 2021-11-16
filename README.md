# FlashQ: a javascript Queue library

![Version npm](https://img.shields.io/npm/v/ws.svg?logo=npm)(https://www.npmjs.com/package/@js-cloud/flashq)
![CI](https://img.shields.io/github/workflow/status/websockets/ws/CI/master?label=CI&logo=github)(https://github.com/jscloud-org/FlashQueue/actions/workflows/npm-packages-workflow.yml)
![npm](https://img.shields.io/npm/dw/@js-cloud/flashq?label=installs&style=plastic)
![GitHub issues](https://img.shields.io/github/issues-raw/jscloud-org/flashqueue)
![GitHub](https://img.shields.io/github/license/jscloud-org/flashqueue?style=plastic)


FlashQ is a simple to use, blazing fast library which included different implementations of Queue datastructure for perfomance focused applications.

## Table of Contents

- [About](#about)
- [Installation](#installation)
- [Modules](#modules)
  - [FlashQ](#flashq)
  - [AutoQ](#autoq)
- [FAQ](#faq)
- [Contribute](#contribute)
- [Support](#support)
- [License](#license)



## About

JS Cloud Suite is an open source project developed with an aim to simplify the effort of creating scalable and performance oriented cloud applications. This suite hosts a series of libraries, which can be integrated into any projects to enable cloud capabilities. We currently do not support in house hosted solutions, but with our tools and libraries, you can build customized solutions your own. All you need to have is a simple server setup (in old PCs, laptops, raspberry Pis, AWS EC2, etc).

You can also contribute to this project. Navigate to [contribute](#contribute) section to know how.

**This library is developed using Node.js and do not support any other frameworks yet. In order to install and use this library you are required to have a working installation of node.js (preferrably latest version).**

## Installation

Open up a terminal and install this library like this,

```javascript
npm install @js-cloud/flashq
```


## Modules

### FlashQ

Fastest implementation of queue using plain javascript objects. If you want a simpe and fast queue which works in traditional way, `FlashQ` might be the one for you.

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

## Contribute

We welcome feedback, bug reports, and pull requests!

For pull requests, please stick to the following guidelines:

* Add tests for any new features and bug fixes. Ideally, each PR should increase the test coverage.
* Follow the existing code style. (Run `npm run format` and `npm run lint` before checking in your code).
* Put a reasonable amount of comments into the code.
* Fork this repo on your GitHub user account, do your changes there and then create a PR against main repository.
* Separate unrelated changes into multiple pull requests.

Please note that by contributing any code or documentation to this repository (by
raising pull requests, or otherwise) you explicitly agree to the.