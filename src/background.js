self.addEventListener("install", (event) => {
  console.log("GitHub Reader extension installed");
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === "complete" && tab.url.includes("github.com")) {
    chrome.scripting.executeScript({
      target: { tabId },
      files: ["dist/content.bundle.js"],
    });
  }
});
