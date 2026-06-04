const iceworldBtn = document.querySelector("#iceworldBtn");
const zootropolisBtn = document.querySelector("#zootropolisBtn");
const jungleBtn = document.querySelector("#jungleBtn");

iceworldBtn.addEventListener("click", function () {
  window.location.href = "/Zootropolis/iceworld/iceworld.html";
});

zootropolisBtn.addEventListener("click", function () {
  window.location.href = "/Zootropolis/City/city.html";
});

jungleBtn.addEventListener("click", function () {
  window.location.href = "/Zootropolis/jungle/jungle.html";
});
