export function setupDropDownSystem(activators, dropDownClass, visibilityClass) {
  if (activators.length < 0) return;

  activators.forEach(activator => {
    activator.addEventListener("click", event => event.stopPropagation());

    const activatorButton = activator.querySelector("button");
    if (activatorButton === null) throw new Error("Activator button not found");

    const dropDown = activator.querySelector(`.${dropDownClass}`);
    if (dropDown === null) throw new Error("Drop down not found");

    activatorButton.addEventListener("click", () => {
      // Hide other drop-downs in the activators list
      activators.forEach(otherActivator => {
        const otherDropDown = otherActivator.querySelector(`.${dropDownClass}`);
        if (otherDropDown === null) throw new Error("Drop down not found");

        if (activator !== otherActivator) otherDropDown.classList.remove(visibilityClass);
      });

      // Reveal/Hide drop-down
      dropDown.classList.toggle(visibilityClass);
    });
  });

  // Hide drop-down when clicking elsewhere  
  window.addEventListener("click", () => {
    activators.forEach(activator => {
      const dropDown = activator.querySelector(`.${dropDownClass}`);
      if (dropDown === null) throw new Error("Drop down not found");

      dropDown.classList.remove(visibilityClass);
    });
  });
}
