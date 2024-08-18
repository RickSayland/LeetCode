type ToBeOrNotToBe = {
    toBe: (val: any) => boolean;
    notToBe: (val: any) => boolean;
};

function expect(val: any): ToBeOrNotToBe {
    const obj: ToBeOrNotToBe = {
        toBe: (value: any) => {
            if(value === val)
                return value === val;
            else
                throw new Error("Not Equal");
        },
        notToBe: (value: any) => {
            if(value !== val)
                return value !== val;
            else
                throw new Error("Equal");
        },
    };
    return obj;
};

/**TEST CASES */
console.log(expect(5).toBe(5));
console.log(expect(5).toBe(null));
console.log(expect(5).notToBe(null));