// const small = 1;
// const medium = 2;
// const large = 3;

const enum Size {Small=1,Medium,Large};//using const in enum the compiler will generate the more optimized code
let mysize: Size = Size.Medium;
console.log(mysize);