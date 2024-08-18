function createHelloWorld() {
    
    return function(...args: any[]): string {
        return "Hello World"
    };
};

/**TEST CASES */
const f1 = createHelloWorld();
console.log(f1());

const f2 = createHelloWorld();
console.log(f2());