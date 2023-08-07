/* 
1.
for(var i=0; i<10; i++){
    setTimeout(()=> console.log(i), 0);
}

2.
function printWithDelay (value) {
    setTimeout(()=> console.log(value), 0);
}
for (var i = 0; i<10; i++) {
    printWithDelay(i);
}

3.
const result = 0.1+0.2;
console.log(result);

const strResult = (0.1+0.2).toFixed(2);
const result = parseFloat(strResult);
console.log(result);

(function(){
    var a=b=5;
})();
console.log(b)

var y = 1;
if (function f() {}){
    y += typeof f;
}
console.log(y)

a = [1,2,3]
console.log("1: ",a[9])
console.log(a.length);
console.log(a)
a[9] = 10;
console.log("2: ",a[9])
console.log(a.length);
console.log(a)
*/

let i;
for (i=0; i<3; i++){
    const log = () => {
        console.log(i);
    }
    setTimeout(log, 1000);
}
