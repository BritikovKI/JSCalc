"use strict";
let numbers = ['1','2','3','4','5','6','7','8','9','0']


function sum(num1, num2) {
    return (parseFloat(num1) + parseFloat(num2))
}

function div(num1, num2) {
    return (num1/num2)
}

function mult(num1, num2) {
    return (num1*num2)
}
function sub(num1, num2) {
    return (num1-num2)
}




export default function count(num1, num2, sign) {
    let res;
        if(sign == "+")
        {
            res = sum(num1,num2);
        }
        if(sign == "-")
        {
            res = sub(num1,num2);
        }
        if(sign == "*")
        {
            res = mult(num1 ,num2);
        }
        if(sign == "/")
        {
            if(num2 == 0){
                res ="Деление на ноль!";

                return res
            }
            res = div(num1,num2);

        }
        return res;
    }
