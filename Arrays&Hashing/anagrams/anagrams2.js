let s = "racecar"; 
let t = "carrace";

console.log(s.split('').sort());
console.log(t.split('').sort());

let result = (s.split('').sort().join('') === t.split('').sort().join(''));
console.log(result);