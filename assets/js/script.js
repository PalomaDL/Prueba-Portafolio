$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

function iconPressed(clicked_id) {
  var currentID = clicked_id;
  /* alert(currentID); */
  if (currentID == "iconAndroid") {
    /* alert("yes"); */
    document.getElementById("divDefault").style.display = "none";
    document.getElementById("divAndroid").style.display = "block";
    document.getElementById("divPC").style.display = "none";
    document.getElementById("divGrafico").style.display = "none";
  } else if (currentID == "iconPC") {
    document.getElementById("divDefault").style.display = "none";
    document.getElementById("divAndroid").style.display = "none";
    document.getElementById("divPC").style.display = "block";
    document.getElementById("divGrafico").style.display = "none";
  } else if (currentID == "iconDsgn") {
    document.getElementById("divDefault").style.display = "none";
    document.getElementById("divAndroid").style.display = "none";
    document.getElementById("divPC").style.display = "none";
    document.getElementById("divGrafico").style.display = "block";
  } else {

  }
}
  /* switch (currentID) {
case "iconAndroid":
alert("Android");
$("#divDefault").hide(fast);
$("#divPC").hide(fast);
$("#divGrafico").hide(fast);
$("divAndroid").show(fast);
break;
case "iconPC":
alert("PC");
$("#divDefault").hide(fast);
$("#divPC").show(fast);
$("#divGrafico").hide(fast);
$("divAndroid").hide(fast);
break;
case "iconDsgn":
alert("design");
$("#divDefault").hide(fast);
$("#divPC").hide(fast);
$("#divGrafico").show(fast);
$("divAndroid").hide(fast);
break;
default:
$("#divDefault").show(fast);
$("#divPC").hide(fast);
$("#divGrafico").hide(fast);
$("divAndroid").hide(fast);
break;
} */



/* function iconPressed() {
    //función que se ejecuta al presionar el botón pre seleccionada
    document.getElementById("categories").style.display = "none";
    document.getElementById("categoryPreSeleccionada").style.display = "block"; */