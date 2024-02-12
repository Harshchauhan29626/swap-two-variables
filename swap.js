function swap() {

    var swap1 = document.getElementById("swap1").value;
    var swap2 = document.getElementById("swap2").value;

    document.getElementById("result1").innerHTML = "beforer swap : variable 1 = " + swap1 + " , variable 2 =  " + swap2;

    [swap2, swap1] = [swap1, swap2]

    document.getElementById("result").innerHTML = "after swap : variable 1 = " + swap1 + " , variable 2 =  " + swap2;
}

// var a = 10, b = 20;
// let tem = b;

// b = a;
// a = tem;

// console.log(a, b);



// x = 40;
// y = 20;

// [y, x] = [x, y]

// console.log(x, y)
