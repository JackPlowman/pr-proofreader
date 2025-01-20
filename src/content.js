import Harper from 'harper.js';

const harper = new Harper({
  sensitivity: 'medium',
  language: 'en-US'
});

function analyzeText(text) {
  const analysis = harper.analyze(text);
  return {
    spellCheck: analysis.getSpellingIssues(),
    grammar: analysis.getGrammarIssues(),
    style: analysis.getStyleSuggestions()
  };
}

function highlightIssues(element, issues) {
  const text = element.textContent;
  let html = text;

  issues.forEach(issue => {
    const span = `<span class="pr-issue"
      style="background-color: #ffd7d7;"
      title="${issue.reason}">
      ${issue.text}
    </span>`;
    html = html.replace(issue.text, span);
  });

  element.innerHTML = html;
}

function readGitHubContent() {
  // Read repository info
  const repoInfo = {
    owner: document.querySelector('meta[name="octolytics-dimension-repository_owner"]')?.content,
    name: document.querySelector('meta[name="octolytics-dimension-repository_name"]')?.content,
    branch: document.querySelector('.branch-name')?.textContent?.trim()
  };

  // Read file content if on a file page
  const fileContent = document.querySelector('.blob-wrapper')?.textContent;

  // Read PR content if on a PR page
  const prContent = {
    title: document.querySelector('.js-issue-title')?.textContent?.trim(),
    description: document.querySelector('.comment-body')?.textContent?.trim(),
    changes: Array.from(document.querySelectorAll('.diff-table')).map(diff => ({
      filename: diff.closest('.file')?.querySelector('.file-header')?.getAttribute('data-path'),
      content: diff.textContent
    }))
  };

  return { repoInfo, fileContent, prContent };
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', async () => {
  const diffElements = document.querySelectorAll('.diff-table td.blob-code-addition');

  diffElements.forEach(async (element) => {
    const text = element.textContent;
    const analysis = await analyzeText(text);

    if (analysis.spellCheck.length > 0 || analysis.grammar.length > 0) {
      highlightIssues(element, [...analysis.spellCheck, ...analysis.grammar]);
      console.log('Issues found:', analysis);
    }
  });

  const content = readGitHubContent();
  console.log('GitHub content:', content);
});
