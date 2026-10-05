console.log('Hi 1');

setTimeout((() => {
    return () => {
    console.log("Hi 2");
    }
})(), 5000);

console.log("Hi 3");

// (() => {
//     console.log((() => {
//     console.log('test');
// }) ());
// })();

setTimeout(() => {
    console.log("Hi 2");
}, 5000);