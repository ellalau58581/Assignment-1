const form = document.getElementById("cubic-form") as HTMLFormElement;

form?.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(form);

  const a: number = Number(formData.get("a-value"));
  const b: number = Number(formData.get("b-value"));
  const c: number = Number(formData.get("c-value"));
  const d: number = Number(formData.get("d-value"));

  const p = (3 * a * c - b * b) / (3 * a * a);
  const q = (27 * a ** 3 * d - 9 * a * b * c + 2 * b ** 3) / (27 * a ** 3);
});
//run the with if stratemtns 
// id index tag 
const x1 = (2*Math.sqrt(-p/3)*Math.cosθ - (b/(3*a)));
const x2 = (2*Math.sqrt(-p/3)*Math.cos(θ+(2*Math.pi)/3) - (b/(3*a)));
const x3 = (2*Math.sqrt(-p/3)*Math.cos(θ+(4*Math.pi)/3) - (b/(3*a)));
form?.addEventListener("submit", (event) => {
console.log(`The roots of the cubic equation are: ${x1}, ${x2}, ${x3}`);\

});

let deltaSymbol = (q ** 2) / 2 + (p/3) ** 3;
if (deltaSymbol > 0) {
  console.log("x");