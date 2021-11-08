
let freicken = document.getElementById("freicken")
let vvc = document.getElementById("vvc")
let lidl = document.getElementById("lidl")
let fcp = document.getElementById("fcp")
let freickenBackground = document.getElementById("FreickenVideo")
let lidlBackground = document.getElementById("LidlVideo")
let vvcBackground = document.getElementById("VianaViceCityVideo")
let fcpBackground = document.getElementById("FcpVideo")


freicken.onmouseover = function () {

  freickenBackground.style.display = "block";
  lidlBackground.style.display = "none";
  vvcBackground.style.display ="none";
  fcpBackground.style.display = "none";

}

vvc.onmouseover = function () {

  freickenBackground.style.display = "none";
  lidlBackground.style.display = "none";
  vvcBackground.style.display = "block";
  fcpBackground.style.display = "none";
  
  

};

lidl.onmouseover = function () {

  lidlBackground.style.display = "block";
  freickenBackground.style.display = "none";
  vvcBackground.style.display ="none";
  fcpBackground.style.display = "none";
  



};

fcp.onmouseover = function () {

  fcpBackground.style.display = "block";
  lidlBackground.style.display = "none";
  freickenBackground.style.display = "none";
  vvcBackground.style.display ="none";

};

