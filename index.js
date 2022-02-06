function menuFunc() {
    var x = document.getElementById("menu");
    var btn = document.getElementById("menu-btn")
  if (x.style.top === "0px") {
    x.style.top = "-160px"
    btn.style.transform = "rotate(0deg)"
  } else {
    x.style.top = "0px"
    btn.style.transform = "rotate(-90deg)"
  }
  }