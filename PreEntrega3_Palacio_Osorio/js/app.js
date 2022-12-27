const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const fd = new FormData(form);
  const obj = Object.fromEntries(fd);

  const json = JSON.stringify(obj);
  localStorage.setItem("form", json);

  window.location.href = "confirmacion.html";
});

const json = localStorage.getItem("form");
const obj = JSON.parse(json);

for (key in obj) {
  const marup = `
  <div>
    <span><b>${key}:</b> ${obj[key]}</span>
  </div>
  `;
  document.getElementById("confirm").innerHTML += marup;
}
