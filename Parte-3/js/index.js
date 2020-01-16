function init()
{
	let button = $("#submit");
	button.addEventListener("click", function(event){
		event.preventDefault();
		let name= document.getElementsByClassName("userName");
		if(name[0].value==="")
		console.log("Sin Nombre");
	});
}
