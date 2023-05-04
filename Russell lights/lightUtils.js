export const turnOfAllLightsExcept = (onLights, allLights) => {
  //turn off all lights
  for (const light of allLights) {
    light.classList.remove("on");
  }

  //turn back on the ones in the array
  for (const light of onLights) {
    light.classList.add("on");
  }
};
