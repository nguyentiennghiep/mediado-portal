

function calculate(arr) {
    const slp = arr.split(' ');
    const stack = [];
    for (let i = 0; i < slp.length; i++) {
        if (!isNaN(slp[i])) {
            stack.push(parseInt(slp[i]));
        } else {
            let value1 = stack.pop();
            let value2 = stack.pop();
            switch (slp[i]) {
                case "+": {
                    stack.push(value1 + value2);
                    break;
                }
                case "-": {
                    stack.push(-value1 + value2);
                    break;
                }
                case "*": {
                    stack.push(value1 * value2);
                    break;
                }
                case "/": {
                    stack.push(value2 / value1);
                    break;
                }
            }
        }
        console.log(stack);
    }
    // for (let i = 0; i < slp.length; i++) {
    //     if (isNaN(slp[i])) {
    //         let value1 = stack.pop();
    //         let value2 = stack.pop();
    //         switch (slp[i]) {
    //             case "+": {
    //                 stack.push(value1 + value2);
    //                 break;
    //             }
    //             case "-": {
    //                 stack.push(-value1 + value2);
    //                 break;
    //             }
    //             case "*": {
    //                 stack.push(value1 * value2);
    //                 break;
    //             }
    //             case "/": {
    //                 stack.push(value2 / value1);
    //                 break;
    //             }
    //         }
    //         console.log(stack);
    //     }
    // }
    // return stack.pop();
    // let stack = [];
    // let arr = input.split(" ");
    // for (let i = 0; i < arr.length; i++) {
    //     if (!isNaN(arr[i])) {
    //         stack.push(arr[i]);
    //     } else {
    //         let a = stack.pop();
    //         let b = stack.pop();
    //         if (arr[i] === "+") {
    //             stack.push(parseInt(a) + parseInt(b));
    //         } else if (arr[i] === "-") {
    //             stack.push(parseInt(b) - parseInt(a));
    //         } else if (arr[i] === "*") {
    //             stack.push(parseInt(a) * parseInt(b));
    //         } else if (arr[i] === "/") {
    //             stack.push(parseInt(b) / parseInt(a));
    //         } else if (arr[i] === "^") {
    //             stack.push(Math.pow(parseInt(b), parseInt(a)));
    //         }
    //     }
    // }
    // if (stack.length > 1) {
    //     return "error";
    // } else {
    //     return stack.pop();
    // }
    return stack.pop();
}

console.log(calculate('15 7 1 1 + - / 3 * 2 1 1 + + -'));