
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

const theta: number = (1/3)*Math.acos(-q / (2 * Math.sqrt(-(p / 3) * (p / 3) * (p / 3))));
const theta = (1/3)*Math.acos(-q / (2 * Math.sqrt(-(p / 3) ** 3)));
const pResult = document.getElementById("p-result") as HTMLParagraphElement;
pResult.textContent = p.toString(); 
const qResult = document.getElementById("q-result") as HTMLParagraphElement;
qResult.textContent = q.toString();3) ** 3;

const deltaSymbol = document.getElementById("deltaSymbol-result") as HTMLParagraphElement;
deltaSymbolResult.textContent = deltaSymbol.toString();

if (deltaSymbol < 0) {
  const x1= 2 * Math.sqrt(-p / 3) * Math.cos(theta) - b / (3 * a);
  const x2 = 2 * Math.sqrt(-p / 3) * Math.cos(theta + (2 * Math.PI / 3)) - b / (3 * a);
  const x3 = 2 * Math.sqrt(-p / 3) * Math.cos(theta + (4 * Math.PI / 3)) - b / (3 * a);
  const x1Result = document.getElementById("x1-result") as HTMLParagraphElement;
  rootOneResult.textContent = x1.toString();
  const x2Result = document.getElementById("x2-result") as HTMLParagraphElement;
  x2Result.textContent = x2.toString();
  const x3Result = document.getElementById("x3-result") as HTMLParagraphElement;
  x3Result.textContent = x3.toString();\

} else if (deltaSymbol> 0) {
  const rootOne = Math.cbrt(-q / 2 + Math.sqrt(deltaSymbol)) + Math.cbrt(-q / 2 - Math.sqrt(deltaSymbol)) - b / (3 * a);
  const x1Result= document.getElementById("root1-result") as HTMLParagraphElement;
x1Result.textContent = rootOne.toString();
  const x2Result = document.getElementById("x2-result) as HTMLParagraphElement;
  x2Result.textContent = "Complex";
  const x3esult = document.getElementById("x3-result") as HTMLParagraphElement;
  x3esult.textContent = "Complex";
} else {
  if (q === 0 && p === 0) {
    const rootOne = Math.cbrt((-q / 2) + Math.sqrt(deltaSymbol)) + Math.cbrt((-q / 2) - Math.sqrt(deltaSymbol)) - b / (3 * a);
    const rootOneResult = document.getElementById("root1-result") as HTMLParagraphElement;
    rootOneResult.textContent = rootOne.toString();
    const rootTwoResult = document.getElementById("root2-result") as HTMLParagraphElement;
    rootTwoResult.textContent = rootOne.toString();
    const rootThreeResult = document.getElementById("root3-result") as HTMLParagraphElement;
    rootThreeResult.textContent = rootOne.toString();
  } else {
    const rootOne = Math.cbrt((-q / 2) + Math.sqrt(deltaSymbol)) + Math.cbrt((-q / 2) - Math.sqrt(deltaSymbol)) - b / (3 * a); // Cardano
    const rootTwo = -Math.cbrt(-q / 2) - b / (3 * a); // Single root
    const rootOneResult = document.getElementById("root1-result") as HTMLParagraphElement;
    rootOneResult.textContent = rootOne.toString();
    const rootTwoResult = document.getElementById("root2-result") as HTMLParagraphElement;
    rootTwoResult.textContent = rootTwo.toString();
    const rootThreeResult = document.getElementById("root3-result") as HTMLParagraphElement;
    rootThreeResult.textContent = rootTwo.toString();
  }

//run the with if stratemtns 
// id index tag 
const x1 = (2*Math.sqrt(-p/3)*Math.cosθ - (b/(3*a)));
const x2 = (2*Math.sqrt(-p/3)*Math.cos(θ+(2*Math.pi)/3) - (b/(3*a)));
const x3 = (2*Math.sqrt(-p/3)*Math.cos(θ+(4*Math.pi)/3) - (b/(3*a)));
form?.addEventListener("submit", (event) => {
console.log(`The roots of the cubic equation are: ${x1}, ${x2}, ${x3}`);\

});

