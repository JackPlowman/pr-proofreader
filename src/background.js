chrome.runtime.onInstalled.addListener(() => {
  console.log("GitHub Reader extension installed");
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete' && tab.url.includes('github.com')) {
    chrome.scripting.executeScript({
      target: { tabId },
      function: () => {
        console.log('GitHub page loaded');
      }
    });
  }
});
