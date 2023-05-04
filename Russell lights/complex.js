import { turnOfAllLightsExcept } from "./lightUtils.js";

//better dom ref
const allLights = document.querySelectorAll(".light");

//auto mode
let i = 0;
const sequence = [
  { lights: [allLights[0], allLights[1]], duration: 1 },
  { lights: [allLights[1], allLights[2]], duration: 0.7 },
  { lights: [], duration: 0.7 },
  { lights: [allLights[1]], duration: 0.7 },
  { lights: [], duration: 0.7 },
  { lights: [allLights[1]], duration: 0.7 },
  { lights: [], duration: 0.7 },
  { lights: [allLights[2]], duration: 4 },
]; //definition

let timer;

const autoStart = () => {
  timer = setInterval(() => {
    turnOfAllLightsExcept(sequence[i].lights, allLights);
    i++;

    //check if it gets past the end
    if (i > sequence.length - 1) {
      i = 0;
    }
  }, sequence[i].duration * 1000);
};

document.getElementById("autoStart").addEventListener("click", autoStart);
document.getElementById("autoStop").addEventListener("click", () => {
  //stop the timer
  console.log("Click");
  clearInterval(timer);
});
