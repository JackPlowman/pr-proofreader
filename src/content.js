import { spellCheckDocument } from "cspell-lib";

const diffElements = document.querySelectorAll(".diff-table .blob-code");
console.log("You are checking the spelling of: ", diffElements);
diffElements.forEach((diffElement) => {
  const text = diffElement.textContent;
  const issues = checkSpelling(text);
  console.log("Issues: ", issues);
  // checkSpelling(text).then((issues) => {
  //   if (issues.length > 0) {
  //     diffElement.style.backgroundColor = "red";
  //   }
  // });
});

function checkSpelling(phrase) {
  const result = spellCheckDocument(
    { uri: "text.txt", text: phrase, languageId: "plaintext", locale: "en" },
    { generateSuggestions: true, noConfigSearch: true },
    { suggestionsTimeout: 2000 },
  );
  return result.issues;
}
