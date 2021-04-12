// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".active.svelte-1bs6wu2{\n  --tw-bg-opacity: 1;\n  background-color: rgba(37, 99, 235, var(--tw-bg-opacity));\n  --tw-text-opacity: 1;\n  color: rgba(255, 255, 255, var(--tw-text-opacity));\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}