// -- 1 -- //
document
  .querySelector('button[data-action="open-modal"]')
  .addEventListener("click", (event) => {
    document.querySelector(".js-backdrop").classList.remove("hidden");
    document.querySelector(".js-backdrop").style.pointerEvents = "initial";
  });

document
  .querySelector('button[data-action="close-modal"]')
  .addEventListener("click", (event) => {
    document.querySelector(".js-backdrop").classList.add("hidden");
    document.querySelector(".js-backdrop").style.pointerEvents = "none";
  });

// -- 2 -- //
document.querySelector(".js-backdrop").addEventListener("click", (event) => {
  document.querySelector(".js-backdrop").classList.add("hidden");
  document.querySelector(".js-backdrop").style.pointerEvents = "none";
});

// -- 3 -- //
const redInput = document.querySelector('input[value="red"]');
const whiteInput = document.querySelector('input[value="white"]');
const greenInput = document.querySelector('input[value="green"]');
redInput.addEventListener(
  "input",
  (event) => (document.querySelector("body").style.background = "red")
);
whiteInput.addEventListener(
  "input",
  (event) => (document.querySelector("body").style.background = "white")
);
greenInput.addEventListener(
  "input",
  (event) => (document.querySelector("body").style.background = "green")
);

// -- 4 -- //
const input = document.querySelector("#name-input");
input.addEventListener("input", (event) => {
  document.querySelector("#name-output").textContent = event.target.value;
  if (event.target.value === "") {
    document.querySelector("#name-output").textContent = "незнайомець";
  }
});

const input2 = document.querySelector("#validation-input");
input2.addEventListener("change", (event) => {
  if (event.target.value.length === 6) {
    event.target.classList.add("valid");
    event.target.classList.remove("invalid");
  } else {
    event.target.classList.add("invalid");
    event.target.classList.remove("valid");
  }
});

// -- 5 -- //
const input3 = document.querySelector("#font-size-control");
input3.addEventListener("input", (event) => document.querySelector("#text").style.fontSize = `${event.target.value}px`);
