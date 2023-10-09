window.onload = pageLoad;

var countadd = 0;

function pageLoad() {
	document.getElementById("add").onclick = add;
	document.getElementById("back").onclick = minus;
}
function add() {
	countadd++;
	AddProfile();
}
function minus() {
	countadd--;
	AddProfile();
}

function AddProfile() {
	var xhr = new XMLHttpRequest();
	xhr.open("GET", "profile.json");
	if (countadd == 0) {
		var hobby = document.getElementById("hobby");
		if (document.body.contains(hobby)) {
			hobby.parentNode.removeChild(hobby);
		}
		var personal = document.getElementById("personal");
		if (document.body.contains(personal)) {
			return false;
		}
		else {
			var personal = document.createElement("div");
			personal.id = "personal";
			document.getElementById("profileAll").appendChild(personal);

			xhr.onload = function () {
				var jsdata = JSON.parse(xhr.responseText);
				console.log(jsdata);
				showPersonal(jsdata);
			};
			xhr.onerror = function () { alert("ERROR!"); };
			xhr.send();
		}
	}
	else if (countadd == 1) {
		var personal = document.getElementById("personal");
		if (document.body.contains(personal)) {
			personal.parentNode.removeChild(personal);
		}

		var skill = document.getElementById("skill");
		if (document.body.contains(skill)) {
			skill.parentNode.removeChild(skill);
		}

		var Hobby = document.getElementById("ul");
		if (document.body.contains(Hobby)) {
			return false;
		}
		else {
			var Hobby = document.createElement("h3");
			Hobby.innerHTML = "Hobby<br/>";
			Hobby.id = "hobby";
			document.getElementById("profileAll").appendChild(Hobby);

			xhr.onload = function () {
				var jsdata = JSON.parse(xhr.responseText);
				console.log(jsdata);
				showHob(jsdata);
			};
			xhr.onerror = function () { alert("ERROR!"); };
			xhr.send();
		}

	}
	else if (countadd == 2) {
		var Hobby = document.getElementById("hobby");
		if (document.body.contains(Hobby)) {
			Hobby.parentNode.removeChild(Hobby);
		}

		var interest = document.getElementById("interest");
		if (document.body.contains(interest)) {
			interest.parentNode.removeChild(interest);
		}

		var skill = document.getElementById("h3");
		if (document.body.contains(skill)) {
			return false;
		}
		else {
			var skill = document.createElement("h3");
			skill.innerHTML = "Skill<br/>";
			skill.id = "skill";
			document.getElementById("profileAll").appendChild(skill);

			xhr.onload = function () {
				var jsdata = JSON.parse(xhr.responseText);
				console.log(jsdata);
				showSkill(jsdata);
			};
			xhr.onerror = function () { alert("ERROR!"); };
			xhr.send();
		}

	}
	else if (countadd == 3) {
		var skill = document.getElementById("skill");
		if (document.body.contains(skill)) {
			skill.parentNode.removeChild(skill);
		}

		var skill = document.getElementById("h3");
		if (document.body.contains(skill)) {
			return false;
		}
		else {
			var Interest = document.createElement("h3");
			Interest.innerHTML = "Interest<br/>";
			Interest.id = "interest";
			document.getElementById("profileAll").appendChild(Interest);

			xhr.onload = function () {
				var jsdata = JSON.parse(xhr.responseText);
				console.log(jsdata);
				showInterest(jsdata);
			};
			xhr.onerror = function () { alert("ERROR!"); };
			xhr.send();
		}
	}
	else if(countadd>=4) {
		countadd = 3;
		return false;
	}
	else{
		countadd = 0;
		return false;
	}
}
function showPersonal(personal) {
	console.log(Object.keys(personal).length);
	var showdiv = document.getElementById("personal")
	var keys = Object.keys(personal);
	for (var i = 0; i < 1; i++) {
		var img = document.createElement("img");
		img.id = "picme";
		img.src = personal[keys[i]].pic;

		var temp = document.createElement("p");
		temp.innerHTML = "Name : " + personal[keys[i]].name + "<hr class = 'hrprofile'> Birthday : " + personal[keys[i]].Birthday + "<hr class = 'hrprofile'>Education<p>" + personal[keys[i]].Education1 + "<p>" + personal[keys[i]].Education2 + "<p>" + personal[keys[i]].Education3 + "<p>" + personal[keys[i]].Education4;

		showdiv.appendChild(img);
		showdiv.appendChild(temp);
	}
}
function showHob(hob) {
	console.log(Object.keys(hob).length);
	var showdiv = document.getElementById("hobby")
	var keys = Object.keys(hob);
	for (var i = 1; i < 4; i++) {
		var temp = document.createElement("ul");
		temp.innerHTML = hob[keys[i]].hobby + "<br/>";

		var img = document.createElement("img");
        img.src = hob[keys[i]].pic;
		
		showdiv.appendChild(img);
		showdiv.appendChild(temp);
	}
}
function showSkill(skill) {
	console.log(Object.keys(skill).length);
	var showdiv = document.getElementById("skill")
	var keys = Object.keys(skill);
	for (var i = 4; i < 7; i++) {
		var temp = document.createElement("ul");
		temp.innerHTML = skill[keys[i]].skill + "<br/>";

		var img = document.createElement("img");
        img.src = skill[keys[i]].pic;
		
		showdiv.appendChild(img);
		showdiv.appendChild(temp);
	}
}
function showInterest(interest) {
	console.log(Object.keys(interest).length);
	var showdiv = document.getElementById("interest")
	var keys = Object.keys(interest);
	for (var i = 7; i < keys.length; i++) {
		var temp = document.createElement("ul");
		temp.innerHTML = interest[keys[i]].interest + "<br/>";

		var img = document.createElement("img");
        img.src = interest[keys[i]].pic;

		showdiv.appendChild(img);
		showdiv.appendChild(temp);
	}
}