// document.getElementById("title").style.visibility="";
document.getElementById("yesbtn").onclick = function () {
  // alert("Clicked");
  document.getElementById("title").style.visibility = "hidden";
  document.getElementById("imbox").src = "./linus.gif";
  document.getElementById("nobtn").style.backgroundColor = "rgb(233, 233, 237)";
  document.getElementById("yesbtn").style.backgroundColor =
    "rgb(168, 255, 168)";
};
document.getElementById("nobtn").onclick = function () {
  document.getElementById("yesbtn").style.backgroundColor =
    "rgb(233, 233, 237)";

  document.getElementById("nobtn").style.backgroundColor = "rgb(255, 145, 145)";
  document.getElementById("title").style.visibility = "hidden";
  document.getElementById("imbox").src = "./linus.gif";
};
