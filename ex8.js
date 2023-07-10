'use strict';

// Put your code here! :)
function number1() {
  return 1;
}

function number2() {
  return 2;
}

function add(a, b) {
  return a + b;
}

console.log(add(number1(), number2()));

function add2(a, b) {
    return add(a(), b());
}

function constant(v) {
    return function() {
        return v;
    };
}

function addn1(fns) {
    while(fns.length > 2) {
        let [a, b, ...rest] = fns;
        fns = [
            function() {
                return add2(a, b);
            },
            ...rest
        ];
    }
    return add2(fns[0], fns[1]);
}

console.log(addn1([1, 2, 3, 4, 5].map(constant)));

function addn2(fns) {
    if(fns.length === 2) {
        return add2(constant(fns[0]), constant(fns[1]));
    }
    return addn2(fns.slice(0, 2));
}

console.log(addn2([1, 2, 3, 4, 5]));

function addn3(fns) {
    return fns.reduce((acc, cur) => {
        return add2(constant(acc), constant(cur));
    }
    );
}

console.log(addn3([1, 2, 3, 4, 5]));

const array = [1,1,2,2,3,3,4,4,5,5,6,6,7,7];

console.log(array);

const noDuplicationArray = array.filter((item, index, array) => {
    return array.indexOf(item) === index;
});

console.log(noDuplicationArray);

const evenArray = array.filter((item) => {
    return item % 2 === 0;
});

console.log(evenArray);
