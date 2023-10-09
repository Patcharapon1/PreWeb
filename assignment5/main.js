var st = 0;
var cl = 0;
function postFunction() {
    if (st == 0) {
        var a = document.getElementById("text1").value;
        document.getElementById("topic1").innerHTML = a;
        st++;
    }
    else if (st == 1) {
        var a = document.getElementById("text1").value;
        document.getElementById("comment1").innerHTML = a;
        st++;
    }
    else if (st == 2) {
        var a = document.getElementById("text1").value;
        document.getElementById("comment2").innerHTML = a;
        st++;
    }
}
function clearFunction() {
    if(cl == 0)
    {
        var a = document.getElementById("text1").value;
        document.getElementById("topic1").innerHTML = "";
        document.getElementById("comment1").innerHTML = "";
        document.getElementById("comment2").innerHTML = "";
        st = 0;
    }
}
