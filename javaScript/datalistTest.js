// Get the <datalist> and <input> elements.
var dataList = document.getElementById('json-products');
var input = document.getElementById('ajax');

// Create a new XMLHttpRequest.
var request = new XMLHttpRequest();

// Handle state changes for the request.
request.onreadystatechange = function(){
    if(request.status == 200 && request.readyState == 4){
      txt = request.responseText;
    }
  };

// Set up and make the request.
request.open("GET","/Users/bartholomeu/Documents/Gits/projetoFinal/API/listaMercado.json",true);
request.send();
