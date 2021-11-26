const clock = document.querySelector("#clock");

const colors = [
  "#ef5777",
  "#575fcf",
  "#4bcffa",
  "#34e7e4",
  "#0be881",
  "#f53b57",
  "#3c40c6",
  "#0fbcf9",
  "#00d8d6",
  "#05c46b",
  "#ffc048",
  "#ffdd59",
  "#ff5e57",
  "#d2dae2",
  "#485460",
  "#ffa801",
  "#ffd32a",
  "#ff3f34"
];

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
  
  const color1 = Math.floor(Math.random() * colors.length);
  const color2 = Math.floor(Math.random() * colors.length);
  document.documentElement.style.setProperty("--color1", colors[color1]);
  document.documentElement.style.setProperty("--color2", colors[color2]);
}

getClock();
setInterval(getClock, 1000); //5초마다 실행

// setTimeout(getClock, 1000); //5초 뒤에 한 번 실행
