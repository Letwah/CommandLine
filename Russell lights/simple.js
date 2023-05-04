const lights = document.querySelectorAll(".light");

const stopButton = document.querySelector("button.stop");
const cautionButton = document.querySelector("button.caution");
const goButton = document.querySelector("button.go");

const stopLight = document.querySelector(".light.stop");
const cautionLight = document.querySelector(".light.caution");
const goLight = document.querySelector(".light.go");

function turnAllOff(lights) {
  for (const light of lights) {
    light.classList.remove("on");
  }
}

function turnAllOffExcept(item) {
  for (const light of lights) {
    light === item ? light.classList.add("on") : light.classList.remove("on");
  }
}

stopButton.addEventListener("click", function () {
  turnAllOffExcept(stopLight);
  // stopLight.classList.add("on");
});

cautionButton.addEventListener("click", function () {
  turnAllOffExcept(cautionLight);
  // cautionLight.classList.add("on");
});

goButton.addEventListener("click", function () {
  turnAllOffExcept(goLight);
  // goLight.classList.add("on");
});

//sequence
let i = 0;
const sequence = [stopLight, cautionLight, goLight];
setInterval(() => {
  turnAllOffExcept(sequence[i]);
  i++;
}, 1000);
