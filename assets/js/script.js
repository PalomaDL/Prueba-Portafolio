$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

$(function () {
  $('[data-toggle="popover"]').popover()
})

$('.popover-dismiss').popover({
  trigger: 'focus'
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
