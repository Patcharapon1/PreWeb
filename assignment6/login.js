window.onload = loginLoad;
function loginLoad() {
	var form = document.getElementById("myLogin");
	form.onsubmit = checkLogin;
}

function checkLogin() {
	//ถ้าตรวจสอบแล้วพบว่ามีการ login ไม่ถูกต้อง ให้ return false ด้วย
	var user1= document.forms["myLogin"]["username"].value;
	var pass1 = document.forms["myLogin"]["password"].value;


	const queryString = window.location.search;

	const urlParams = new URLSearchParams(queryString);
	const user2 = urlParams.get('username');
	const pass2 = urlParams.get('password');
	if(user1 == user2 && pass1 == pass2)
	{
		alert("Find!!!");
		
	}
	else
	{
		alert("Error!!!");
		return false;
	}
}

