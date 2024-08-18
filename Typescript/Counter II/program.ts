type Counter = {
    increment: () => number,
    decrement: () => number,
    reset: () => number,
}

function createCounter(init: number): Counter {
    let n = init;
    const obj: Counter = {
        increment: () => ++n,
        decrement: () => --n,
        reset: () => {
            n = init;
            return n;
        },
    };
    return obj;
};


/**TEST CASES */
const counter = createCounter(5)
console.log(counter.increment());
console.log(counter.reset());
console.log(counter.decrement());