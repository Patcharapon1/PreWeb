window.onload = pageLoad;

function pageLoad(){
	var xhr = new XMLHttpRequest(); 
    xhr.open("GET", "cloth.json"); 
    xhr.onload = function() { 
        var jsdata = JSON.parse(xhr.responseText);
        console.log(jsdata);
        showData(jsdata);
    }; 
    xhr.onerror = function() { alert("ERROR!"); }; 
    xhr.send();
}

function showData(top){
	console.log(Object.keys(top).length);
    var showdiv = document.querySelectorAll("#layer div")
    var keys = Object.keys(top);
    for(var i =0; i< keys.length;i++){
        var temp = document.createElement("p");
        temp.innerHTML = top[keys[i]].brandname +"<br/> price : " +top[keys[i]].price ;
        
        var img = document.createElement("img");
        img.src = "pic/"+top[keys[i]].pic;

        showdiv[i].appendChild(img);
        showdiv[i].appendChild(temp);
    }
}

