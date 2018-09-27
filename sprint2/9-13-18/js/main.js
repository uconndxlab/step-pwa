// // makes sure the js loads
// console.log("js loaded");

// //define static variables
// var form = document.querySelector(".step-form");
// var saveButton = document.querySelector("#save-button");
// var readButton = document.querySelector("#read-button");
// var nameOutput = document.querySelector("#name-output");
// var nameSave = document.querySelector("#saved-output");

// function fancylog(string){
// 	var theText = document.createTextNode(string);
// 	var theH = document.createElement("h1");
// 	theH.appendChild(theText);
// 	document.querySelector("#log").appendChild(theH);
// }

// //funciton to save and retrieve input
// function save(){
// 	//records input
// 	var name = document.querySelector("#name-input").value;
// 	//save input to local storage
// 	localStorage.setItem("savedName", name);
// 	//run animation
// 	nameSave.classList.remove("hide");
// 	nameSave.classList.add("animate");
// }

// //reset animation
// function animate(id){
// 	id.classList.remove("animate");
// 	id.classList.add("hide");
// }

// function read(){
// 	//retrieve input from local storage
// 	var retrievedName = localStorage.getItem("savedName");
// 	//log the retrieved name
// 	nameOutput.innerHTML = retrievedName;
// 	//run animation
// 	nameOutput.classList.remove("hide");
// 	nameOutput.classList.add("animate");
// }


// //disable default submit behavior (can press enter)
// saveButton.addEventListener("click", function(event){
// 	event.preventDefault();
// })
// readButton.addEventListener("click", function(event){
// 	event.preventDefault();
// })

// //run save() and clear form, as long as there is an entry in the textbox
// saveButton.addEventListener("click", function(){
// 	if (document.querySelector("#name-input").value == ""){
// 		alert("Please enter a name!");
// 	}
// 	else{
// 		save();
// 		form.reset();
// 		setTimeout(function(){
// 			animate(nameSave)
// 		}, 1500);
// 	}
	
// });

// readButton.addEventListener("click", function(){
// 	read();
// 	setTimeout(function(){
// 		animate(nameOutput)
// 	}, 1500);
// });









let form = document.querySelector("#step-form");
let log = document.querySelector("#log");
let button1 = document.querySelector("#active-supervision"); 
let button2 = document.querySelector("#opportunities");
let button3 = document.querySelector("#praise");
let button4 = document.querySelector("#physical"); 
let button5 = document.querySelector("#routines");
let button6 = document.querySelector("#prompt-expectations");
let button7 = document.querySelector("#strategies");


form.addEventListener("submit",function(e){
	e.preventDefault();
  
  let results = {};
  
  let formData = new FormData(form);
 	
  for(var pair of formData.entries()) {
     results[pair[0]] = pair[1];
  }
 

 	let savedResults = JSON.stringify(results);

 	localStorage.setItem("savedResults", savedResults);

 	log.innerHTML = localStorage.getItem("savedResults");
  
  
});

button1.addEventListener("touchstart", function(){
  this.focus();
});
button2.addEventListener("touchstart", function(){
  this.focus();
});
button3.addEventListener("touchstart", function(){
  this.focus();
});
button4.addEventListener("touchstart", function(){
  this.focus();
});
button5.addEventListener("touchstart", function(){
  this.focus();
});
button6.addEventListener("touchstart", function(){
  this.focus();
});
button7.addEventListener("touchstart", function(){
  this.focus();
});











