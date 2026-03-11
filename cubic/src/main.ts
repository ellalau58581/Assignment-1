
const form = document.getElementById("cubic-form") as HTMLFormElement;

form?.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(form);

  const a: number = Number(formData.get("a-value"));
  const b: number = Number(formData.get("b-value"));
  const c: number = Number(formData.get("c-value"));
  const d: number = Number(formData.get("d-value"));

  function roundToInteger(x: number): number {
    return Math.abs(x - Math.round(x)) < 1e-10 ? Math.round(x) : x;
    // fixes floating-point issue, and rounds to a number
  }

  if (a === 0) {
    alert("Coefficient 'a' cannot be zero.");
    return;
  }

  const p = (3 * a * c - b * b) / (3 * a * a);
  const q = (27 * a * a * d - 9 * a * b * c + 2 * b ** 3) / (27 * a ** 3);
  const deltaSymbol = (q / 2) ** 2 + (p / 3) ** 3;
  document.getElementById("q-result")!.textContent = `${q}`;
  document.getElementById("deltaSymbol-result")!.textContent = `${deltaSymbol}`;

  const x1Result = document.getElementById("x1-result") as HTMLParagraphElement;
  const x2Result = document.getElementById("x2-result") as HTMLParagraphElement;
  const x3Result = document.getElementById("x3-result") as HTMLParagraphElement;
  const eplison = 1e-12;
  if (deltaSymbol < -eplison) {
    const theta = Math.acos(Math.min(Math.max(-q / (2 * Math.sqrt((-(p / 3)) ** 3)), -1), 1)) / 3;
    const x1 = 2 * Math.sqrt(-p / 3) * Math.cos(theta) - b / (3 * a);
    const x2 = 2 fi* Math.sqrt(-p / 3) * Math.cos(theta + (2 * Math.PI / 3)) - b / (3 * a);
    const x3 = 2 * Math.sqrt(-p / 3) * Math.cos(theta + (4 * Math.PI / 3)) - b / (3 * a);
    x1Result.textContent = roundToInteger(x1).toString();
    x2Result.textContent = roundToInteger(x2).toString();
    x3Result.textContent = roundToInteger(x3).toString();

  } else if (deltaSymbol > eplison) {
    const x1 = Math.cbrt(-q / 2 + Math.sqrt(deltaSymbol)) + Math.cbrt(-q / 2 - Math.sqrt(deltaSymbol)) - b / (3 * a);
    x1Result.textContent = roundToInteger(x1).toString();
    x2Result.textContent = "Complex";
    x3Result.textContent = "Complex";
  } else {

    if (Math.abs(p) < eplison && Math.abs(q) < eplison) {
      const x1 = Math.cbrt((-q / 2) + Math.sqrt(deltaSymbol)) + Math.cbrt((-q / 2) - Math.sqrt(deltaSymbol)) - b / (3 * a);
      x1Result.textContent = roundToInteger(x1).toString();
      x2Result.textContent = roundToInteger(x1).toString();
      x3Result.textContent = roundToInteger(x1).toString();

    } else {
      const x1 = Math.cbrt((-q / 2) + Math.sqrt(deltaSymbol)) + Math.cbrt((-q / 2) - Math.sqrt(deltaSymbol)) - b / (3 * a); // Cardano
      const x2 = -Math.cbrt(-q / 2) - b / (3 * a); // Single root
      x1Result.textContent = roundToInteger(x1).toString();
      x2Result.textContent = roundToInteger(x2).toString();
      x3Result.textContent = roundToInteger(x2).toString();

    }
  }
  document.getElementById("p-table")!.textContent = p.toFixed(6);
  document.getElementById("q-table")!.textContent = q.toFixed(6);
  document.getElementById("discriminant-table")!.textContent = deltaSymbol.toFixed(6);
  document.getElementById("root1-table")!.textContent = x1.toFixed(6);
  document.getElementById("root2-table")!.textContent = x2.toFixed(6);
  document.getElementById("root3-table")!.textContent = x3.toFixed(6);
  document.getElementById("roots-table")!.style.display = "table";
});
