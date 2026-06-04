const iceworldBtn = document.querySelector("#iceworldBtn");
const zootropolisBtn = document.querySelector("#zootropolisBtn");
const jungleBtn = document.querySelector("#jungleBtn");

iceworldBtn.addEventListener("click", function () {
  console.log("Iceworld selected");

  // Later kan je hier je Iceworld pagina koppelen
  // window.location.href = "/iceworld/iceworld.html";
});

zootropolisBtn.addEventListener("click", function () {
  console.log("Zootropolis City selected");

  // Later kan je hier je Zootropolis City pagina koppelen
  // window.location.href = "/zootropoliscity/zootropoliscity.html";
});

jungleBtn.addEventListener("click", function () {
  window.location.href = "/jungle/jungle.html";
});