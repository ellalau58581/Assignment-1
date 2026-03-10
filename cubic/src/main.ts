
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
  const delta = (q / 2) ** 2 + (p / 3) ** 3;

  const acosInput = Math.min(Math.max(-q / (2 * Math.sqrt(-p / 3) ** 3), -1), 1);
  const theta = Math.acos(acosInput) / 3;
  document.getElementById("q-result")!.textContent = `${q}`;

  const deltaSymbol = (q / 2) ** 2 + (p / 3) ** 3;
  document.getElementById("deltaSymbol-result")!.textContent = `${deltaSymbol}`;

  if (deltaSymbol < 0) {
    const x1 = 2 * Math.sqrt(-p / 3) * Math.cos(theta) - b / (3 * a);
    const x2 = 2 * Math.sqrt(-p / 3) * Math.cos(theta + (2 * Math.PI / 3)) - b / (3 * a);
    const x3 = 2 * Math.sqrt(-p / 3) * Math.cos(theta + (4 * Math.PI / 3)) - b / (3 * a);
    const x1Result = document.getElementById("x1-result") as HTMLParagraphElement;
    const x2Result = document.getElementById("x2-result") as HTMLParagraphElement;
    const x3Result = document.getElementById("x3-result") as HTMLParagraphElement;
    x1Result.textContent = roundToInteger(x1).toString();
    x2Result.textContent = roundToInteger(x2).toString();
    x3Result.textContent = roundToInteger(x3).toString();

  } else if (deltaSymbol > 0) {
    const x1 = Math.cbrt(-q / 2 + Math.sqrt(deltaSymbol)) + Math.cbrt(-q / 2 - Math.sqrt(deltaSymbol)) - b / (3 * a);
    const x1Result = document.getElementById("x1-result") as HTMLParagraphElement;
    x1Result.textContent = roundToInteger(x1).toString();
    const x2Result = document.getElementById("x2-result") as HTMLParagraphElement;
    x2Result.textContent = "Complex";
    const x3Result = document.getElementById("x3-result") as HTMLParagraphElement;
    x3Result.textContent = "Complex";
  } else {

    if (q === 0 && p === 0) {
      const x1 = Math.cbrt((-q / 2) + Math.sqrt(deltaSymbol)) + Math.cbrt((-q / 2) - Math.sqrt(deltaSymbol)) - b / (3 * a);
      const x1Result = document.getElementById("x1-result") as HTMLParagraphElement;
      x1Result.textContent = roundToInteger(x1).toString();
      const x2Result = document.getElementById("x2-result") as HTMLParagraphElement;
      x2Result.textContent = roundToInteger(x1).toString();
      const x3: number = 2 * Math.sqrt(-p / 3) * Math.cos(theta + (4 * Math.PI / 3)) - b / (3 * a);
      const x3Result = document.getElementById("x3-result") as HTMLParagraphElement;
      x3Result.textContent = roundToInteger(x1).toString();

    } else {
      const x1 = Math.cbrt((-q / 2) + Math.sqrt(deltaSymbol)) + Math.cbrt((-q / 2) - Math.sqrt(deltaSymbol)) - b / (3 * a); // Cardano
      const x2 = -Math.cbrt(-q / 2) - b / (3 * a); // Single root
      const x1Result = document.getElementById("x1-result") as HTMLParagraphElement;
      x1Result.textContent = x1.toString();
      const x2Result = document.getElementById("x2-result") as HTMLParagraphElement;
      x2Result.textContent = x2.toString();
      const x3Result = document.getElementById("x3-result") as HTMLParagraphElement;
      x3Result.textContent = x2.toString();
    }
  }

});

