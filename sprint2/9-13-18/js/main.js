// makes sure the js loads
console.log("js loaded");

//define static variables
var form = document.querySelector(".step-form");
var saveButton = document.querySelector("#save-button");
var readButton = document.querySelector("#read-button");
var nameOutput = document.querySelector("#name-output");
var nameSave = document.querySelector("#saved-output");

function fancylog(string){
	var theText = document.createTextNode(string);
	var theH = document.createElement("h1");
	theH.appendChild(theText);
	document.querySelector("#log").appendChild(theH);
}

//funciton to save and retrieve input
function save(){
	//records input
	var name = document.querySelector("#name-input").value;
	//save input to local storage
	localStorage.setItem("savedName", name);
	//run animation
	nameSave.classList.remove("hide");
	nameSave.classList.add("animate");
}

//reset animation
function animate(id){
	id.classList.remove("animate");
	id.classList.add("hide");
}

function read(){
	//retrieve input from local storage
	var retrievedName = localStorage.getItem("savedName");
	//log the retrieved name
	nameOutput.innerHTML = retrievedName;
	//run animation
	nameOutput.classList.remove("hide");
	nameOutput.classList.add("animate");
}


//disable default submit behavior (can press enter)
saveButton.addEventListener("click", function(event){
	event.preventDefault();
})
readButton.addEventListener("click", function(event){
	event.preventDefault();
})

//run save() and clear form, as long as there is an entry in the textbox
saveButton.addEventListener("click", function(){
	if (document.querySelector("#name-input").value == ""){
		alert("Please enter a name!");
	}
	else{
		save();
		form.reset();
		setTimeout(function(){
			animate(nameSave)
		}, 1500);
	}
	
});

readButton.addEventListener("click", function(){
	read();
	setTimeout(function(){
		animate(nameOutput)
	}, 1500);
});