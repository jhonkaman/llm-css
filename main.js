// main.js

// Add copy buttons to all code blocks
document.querySelectorAll('.code-block-wrapper').forEach((wrapper, index) => {
  const code = wrapper.querySelector('code');

  // Trim leading and trailing whitespace
  code.textContent = code.textContent.trim();

  const btn = document.createElement('button');
  btn.className = 'copy-btn';
  btn.textContent = 'Copy';
  btn.addEventListener('click', () => {
    navigator.clipboard.writeText(code.textContent).then(() => {
      btn.textContent = 'Copied!';
      btn.classList.add('copied');
      setTimeout(() => {
        btn.textContent = 'Copy';
        btn.classList.remove('copied');
      }, 2000);
    });
  });
  wrapper.appendChild(btn);
});

// Fetch and inject llm.css into second code block
fetch('llm.css')
  .then(response => response.text())
  .then(css => {
    const preCodeBlocks = document.querySelectorAll('pre code');
    if (preCodeBlocks.length >= 2) {
      preCodeBlocks[1].textContent = css;
    }
  });

// Add asterisk to title if URL doesn't contain jhonkaman
if (!window.location.href.includes('jhonkaman')) {
  document.title = '🟢 ' + document.title;
}
