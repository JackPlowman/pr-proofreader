import { WorkerLinter } from "harper.js";

const lint = new WorkerLinter();

// Initialize when DOM is loaded
document.addEventListener("DOMContentLoaded", async () => {
  const diffElements = document.querySelectorAll(
    ".diff-table td.blob-code-addition",
  );
  console.log("Diff elements:", diffElements);
  lint.lint(diffElements);
  console.log("GitHub content:", content);
});
