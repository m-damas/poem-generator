function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "The poem will go here",
    autoStart: true,
    delay: 0.5,
    cursor: "",
  });
}
let poemFormElement = document.querySelector("#form-generator");
poemFormElement.addEventListener("submit", generatePoem);
