export function setupDropDownSystem(parentElement, visibilityClass) {
  Array.from(parentElement.children).forEach(child => {
    child.children[0].addEventListener("click", () => {
      Array.from(parentElement.children).forEach(otherChild => {
        if (child !== otherChild) otherChild.children[1].classList.remove(visibilityClass);
      });
      child.children[1].classList.toggle(visibilityClass);
    });
  });
  
  parentElement.addEventListener("click", event => event.stopPropagation());
  window.addEventListener("click", () => {
    Array.from(parentElement.children).forEach(child => {
      child.children[1].classList.remove(visibilityClass);
    });
  });
}
