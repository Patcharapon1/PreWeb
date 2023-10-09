window.onload = pageLoad;
function pageLoad(){
	var form = document.getElementById("myForm");
	form.onsubmit = validateForm;
    // form.onsubmit = checkpass;
}

function validateForm() {
    var p1 = document.forms["myForm"]["password"].value;
    var p2 = document.forms["myForm"]["repassword"].value;
    var m = document.getElementById("errormsg");

    if(p1!=p2)
    {
        alert("Password not match,try again");
        m.innerHTML = "password not match";
        return false;
    }
    else
    {
        alert("Register success!!!");
    }
    
}
