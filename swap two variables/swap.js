function swap() {

    var swap1 = document.getElementById("swap1").value;
    var swap2 = document.getElementById("swap2").value;
    var swap3;
    document.getElementById("result1").innerHTML = "beforer swap : variable 1 = " + swap1 + " , variable 2 =  " + swap2;

    swap3 = swap1
    swap1 = swap2
    swap2 = swap3

    document.getElementById("result").innerHTML = "after swap : variable 1 = " + swap1 + " , variable 2 =  " + swap2;
}