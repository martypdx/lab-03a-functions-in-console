
console.log('start the file');

const myName = 'Marty Nelson';

console.log('My name is', myName);

let x = 6;

isEvenOrOdd(x);

// for(/* initializer */; /*test*/; /*post-loop action*/) {

// }

// for(let i = 0; i < x; i++) {
//     console.log(i);
// }

// const colors = ['yellow', 'red', 'blue', 'purple'];

// console.log('color by index 1:', colors[1]);

// for(let i = 0; i < colors.length; i++) {
//     const color = colors[i];
//     console.log('color at index', i, color);
// }


for(let i = 1; i <= x; i++) {
    isEvenOrOdd(i);
}

function iAmNeverCalled() {
    console.log(iDontExist);
}

function isEvenOrOdd(n) {
    if(n % 2 === 0) {
        console.log(n, 'is even');
    }
    else {
        console.log(n, 'is odd');
    }
}

isEvenOrOdd(4);
