const buttons = document.querySelectorAll(".btn");
const body = document.querySelector("body");

buttons.forEach((button) => {
  console.log(button);
  button.addEventListener("click", (e) => {
    console.log(e);
    console.log(e.target);

    if (e.target.id === "primary") {
      body.style.backgroundColor = "blue";
    } else if (e.target.id === "secondary") {
      body.style.backgroundColor = "green";
    } else if (e.target.id === "success") {
      body.style.backgroundColor = "lightgreen";
    } else if (e.target.id === "danger") {
      body.style.backgroundColor = "lightcoral";
    } else if (e.target.id === "warning") {
      body.style.backgroundColor = "lightyellow";
    }
  });
});
