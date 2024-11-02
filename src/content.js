document.addEventListener("DOMContentLoaded", () => {
  const diffElements = document.querySelectorAll(".diff-table .blob-code");
  diffElements.forEach((diffElement) => {
    const text = diffElement.textContent;
    checkSpelling(text).then((issues) => {
      if (issues.length > 0) {
        diffElement.style.backgroundColor = "red";
      }
    });
  });
});

function checkSpelling(phrase) {
  const result = spellCheckDocument(
    { uri: "text.txt", text: phrase, languageId: "plaintext", locale: "en" },
    { generateSuggestions: true, noConfigSearch: true },
    { suggestionsTimeout: 2000 },
  );
  return result.issues;
}
