function menuFunc() {
    var x = document.getElementById("menu");
  if (x.style.top === "0px") {
    // x.style.display = "flex";
    x.style.top = "-160px"
  } else {
    // x.style.display = "none";
    x.style.top = "0px"
  }
  }
