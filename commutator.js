"use strict";
import count from "./calculator.js"

function counter(num1, num2) {
    let res;

    if ( num1=="" || num2=="" ) {
        document.getElementById("result").innerText = "Неправильное выражение";
        document.getElementById("result").style["visibility"] = "visible";

        return
    }
    else {
        res = count(num1,num2,get_operation())

    }
    document.getElementById("num1").innerText = "";
    document.getElementById("num2").innerText = "";
    document.getElementById("result").innerText = res;
    document.getElementById("result").style["visibility"] = "visible";
    return
}



function get_operation() {
    let radio = document.getElementsByName("radiobutton");
    let sign;
    for (let i = 0; i < radio.length; i++) {
        if (radio[i].checked) {
            sign = radio[i].value;
        }
    }
    return sign;
}


document.getElementById("cnt").onclick = ()=>{counter(document.getElementById('num1').value, document.getElementById('num2').value);};