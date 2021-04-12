// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".btn-disabled.svelte-suqtex{\n  --tw-bg-opacity: 1;\n  background-color: rgba(107, 114, 128, var(--tw-bg-opacity));\n  border-style: none;\n  cursor: not-allowed;\n  --tw-text-opacity: 1;\n  color: rgba(255, 255, 255, var(--tw-text-opacity));\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}