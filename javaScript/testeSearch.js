window.addEventListener("load", function(){
	// Add a keyup event listener to our input element
	document.getElementById('name_input').addEventListener("keyup", function(event){hinter(event)});
	// create one global XHR object 
	// so we can abort old requests when a new one is make
	window.hinterXHR = new XMLHttpRequest();
});

// Autocomplete for form
function hinter(event) {
	let input = event.target;
	let huge_list = document.getElementById('huge_list');
	// minimum number of characters before we start to generate suggestions
	let min_characters = 0;

	if (!isNaN(input.value) || input.value.length < min_characters ) { 
		return;
	} else { 
		window.hinterXHR.abort();
		window.hinterXHR.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				let response = JSON.parse( this.responseText ); 
				huge_list.innerHTML = "";

				response.forEach(function(item) {
                    // Create a new <option> element.
                    let option = document.createElement('option');
                    option.value = item;
                    huge_list.appendChild(option);
                });
			}
		};
		window.hinterXHR.open("GET", "/query.php?query=" + input.value, true);
		window.hinterXHR.send()
	}
}

function validateForm(){

	// Get the input element
	let input = document.getElementById('name_input');
	// Get the datalist
	let huge_list = document.getElementById('huge_list');


	// If we find the input inside our list, we submit the form
	for (let element of huge_list.children) {
		if(element.value == input.value) {
			return true;
		}
	}

	// we send an error message
	alert("name input is invalid")
	return false;
}