
function mostraMercado() {
    let x = document.getElementById("mostraDiv");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }


  function myFunction() {
    let y = document.getElementById("mostraPreco");
    if (y.style.display === "none") {
      y.style.display = "block";
    } else {
      y.style.display = "none";
    }
  }






if (element.classList) {
  element.classList.toggle("mystyle");
} else {
  // For IE9
  var classes = element.className.split(" ");
  var i = classes.indexOf("mystyle");

  if (i >= 0)
    classes.splice(i, 1);
  else
    classes.push("mystyle");
    element.className = classes.join(" ");
}




