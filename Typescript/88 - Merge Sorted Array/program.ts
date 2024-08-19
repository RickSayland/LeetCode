/**
 Do not return anything, modify nums1 in-place instead.
 */
 function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    nums1.length = m; // Set the length of nums1 to m to remove any trailing zeroes
    nums1.push(...nums2); // Add all elements from nums2 to nums1
    nums1.sort((a, b) => a - b); // Sort the array in ascending order
 };

/**TEST CASES */
let nums1 = [1,2,3,0,0,0];
let m = 3;
let nums2 = [2,5,6];
let n = 3;
let solution = [1,2,2,3,5,6];
merge(nums1,m,nums2,n);
console.log(nums1);
console.log(solution);

nums1 = [1];
m = 1;
nums2 = [];
n = 0;
solution = [1];
merge(nums1,m,nums2,n);
console.log(nums1);
console.log(solution);

nums1 = [0];
m = 0;
nums2 = [1];
n = 1;
solution = [1];
merge(nums1,m,nums2,n);
console.log(nums1);
console.log(solution);