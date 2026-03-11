
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
  document.getElementById("p-result")!.textContent = `${p}`;
  document.getElementById("deltaSymbol-result")!.textContent = `${deltaSymbol}`;

  if (deltaSymbol < 0) {
    const theta = Math.acos(Math.min(Math.max(-q / (2 * Math.sqrt((-(p / 3)) ** 3)), -1), 1)) / 3;
    const x1 = 2 * Math.sqrt(-p / 3) * Math.cos(theta) - b / (3 * a);
    const x2 = 2 * Math.sqrt(-p / 3) * Math.cos(theta + (2 * Math.PI / 3)) - b / (3 * a);
    const x3 = 2 * Math.sqrt(-p / 3) * Math.cos(theta + (4 * Math.PI / 3)) - b / (3 * a);
    (document.getElementById("x1-result") as HTMLParagraphElement).textContent = `${x1}`;
    (document.getElementById("x2-result") as HTMLParagraphElement).textContent = `${x2}`;
    (document.getElementById("x3-result") as HTMLParagraphElement).textContent = `${x3}`;

  } else if (deltaSymbol > 0) {
    const x1 = Math.cbrt(-q / 2 + Math.sqrt(deltaSymbol)) + Math.cbrt(-q / 2 - Math.sqrt(deltaSymbol)) - b / (3 * a);
    (document.getElementById("x1-result") as HTMLParagraphElement).textContent = `${x1}`;
    (document.getElementById("x2-result") as HTMLParagraphElement).textContent = `${"complex"}`;
    (document.getElementById("x3-result") as HTMLParagraphElement).textContent = `${"complex"}`;
  } else {

    if (q === 0 && p === 0) {
      const x1 = Math.cbrt((-q / 2) + Math.sqrt(deltaSymbol)) + Math.cbrt((-q / 2) - Math.sqrt(deltaSymbol)) - b / (3 * a);
      (document.getElementById("x1-result") as HTMLParagraphElement).textContent = `${x1}`;
      (document.getElementById("x2-result") as HTMLParagraphElement).textContent = `${x1}`;
      (document.getElementById("x3-result") as HTMLParagraphElement).textContent = `${x1}`;

    } else {
      const x1 = Math.cbrt((-q / 2) + Math.sqrt(deltaSymbol)) + Math.cbrt((-q / 2) - Math.sqrt(deltaSymbol)) - b / (3 * a); // Cardano
      const x2 = -Math.cbrt(-q / 2) - b / (3 * a); // Single root
      (document.getElementById("x1-result") as HTMLParagraphElement).textContent = `${x1}`;
      (document.getElementById("x2-result") as HTMLParagraphElement).textContent = `${x2}`;
      (document.getElementById("x3-result") as HTMLParagraphElement).textContent = `${x2}`;

    }
  }
});
