# FlashQ - JS-Cloud
A superfast and lightweight Queue (FIFO) implementations in JavaScript.

## About 
This library is developed by Jerry S Joseph as an Open-Source project. 

## Installation

Open up a terminal and install this library like this,

```javascript
npm install @js-cloud/flashq
```


## Usage

### ES6 import
FlashQ supports treeshaking via es6 modules.
    
```javascript
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




License
-------

    Copyright 2021 Jerin Sebastian

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
