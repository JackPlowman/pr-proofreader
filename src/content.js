document.addEventListener("DOMContentLoaded", () => {
  const diffElements = document.querySelectorAll(".diff-table .blob-code");
  diffElements.forEach((diffElement) => {
    const text = diffElement.textContent;
    // Use a spell-check library to check the text
    // Highlight misspelled words
  });
});
