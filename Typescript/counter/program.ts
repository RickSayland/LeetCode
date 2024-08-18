function createCounter(n: number): () => number {

    return function() {
        return n++;

    }
}


/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */

/**TEST CASES */
const counter1 = createCounter(10)
console.log(counter1());
console.log(counter1());
console.log(counter1());

const counter2 = createCounter(-2)
console.log(counter2());
console.log(counter2());
console.log(counter2());