class Queue {
    
    constructor()
    {
        this.queue = [];
    }

    enqueue(element)
    {
        this.queue.push(element);
        return this.queue;
    }

    dequeue()
    {
        return this.queue.shift();
    }

    peek()
    {
        return this.queue[0];
    }

    size()
    {
        return this.queue.length;
    }

    isEmpty()
    {
        return this.queue.length === 0;
    }

    print()
    {
        return this.queue;
    }
}

const queue = new Queue();
console.log(queue.enqueue('KEKW')); //['KEKW']
console.log(queue.enqueue('Pepega')); //['KEKW','Pepega']
console.log(queue.enqueue('5Head')); //['KEKW','Pepega','5Head']
console.log(queue.dequeue()); //KEKW
console.log(queue.peek());  //Pepega
console.log(queue.isEmpty());   //false
console.log(queue.print()); //['Pepega','5Head']