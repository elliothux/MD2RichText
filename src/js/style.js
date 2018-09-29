
window.CodeMirror = require('./codemirror/lib/codemirror.js');
require('./codemirror/mode/css/css.js');

require('./csslint.js');


window.addEventListener('load', () => {
  var styleEditor = document.getElementById('style-edit');
  var styleCSS = document.getElementById('style-css');
  var textarea = styleEditor.getElementsByTagName('textarea')[0];
  var codeMirror = CodeMirror.fromTextArea(textarea, {
      mode: "css",
      lineNumbers: true,
      lineWrapping: true,
    });

  styleCSS.innerText = getSavedStyle() || getDefaultStyle();

  document.getElementById('edit-style-button')
    .addEventListener('click', function () {
      styleEditor.className = 'show';
      codeMirror.setValue(getSavedStyle() || getDefaultStyle());
    });
  document.getElementById('confirm-style')
    .addEventListener('click', function () {
      var s = codeMirror.getValue();
      const info = lint(s);
      if (info.length) {
        console.log(info);
        return alert("CSS Sytanx Error:\n\n" + info.map(i => i.message).join("\n"));
      }
      applyCSS(styleCSS, s);
      setSavedStyle(s);
      styleEditor.className = 'hide';
    });
  document.getElementById('reset-style')
    .addEventListener('click', function () {
      codeMirror.setValue(getDefaultStyle());
    });
});


function applyCSS(node, style) {
  node.innerHTML = style;
}

function lint(css) {
  var v = window.CSSLint.verify(css, {
    "adjoining-classes": 0,
    "box-model": 0,
    "box-sizing": 0,
    "bulletproof-font-face": 0,
    "compatible-vendor-prefixes": 0,
    "display-property-grouping": 0,
    "duplicate-background-images": 0,
    "duplicate-properties": 0,
    "empty-rules": 0,
    "errors": 2,
    "fallback-colors": 0,
    "floats": 0,
    "font-faces": 0,
    "font-sizes": 0,
    "gradients": 0,
    "ids": 0,
    "import": 0,
    "import-ie-limit": 0,
    "important": 0,
    "known-properties": 0,
    "order-alphabetical": 0,
    "outline-none": 0,
    "overqualified-elements": 0,
    "performant-transitions": 0,
    "qualified-headings": 0,
    "regex-selectors": 0,
    "rules-count": 0,
    "selector-max": 0,
    "selector-max-approaching": 0,
    "selector-newline": 0,
    "shorthand": 0,
    "star-property-hack": 0,
    "text-indent": 0,
    "underscore-property-hack": 0,
    "unique-headings": 0,
    "universal-selector": 0,
    "unqualified-attributes": 0,
    "vendor-prefix": 0,
    "zero-units": 0
  });
  return v.messages;
}

function getDefaultStyle() {
  return "a {\n" +
    "    color: #1e6bb8;\n" +
    "    text-decoration: none;\n" +
    "}\n" +
    "\n" +
    "img {\n" +
    "  border-radius: 6px;\n" +
    "  border: 2px solid #EEE;\n" +
    "  max-width: 100%;\n" +
    "}\n" +
    "\n" +
    "h1, h2, h3, h4, h5, h6 {\n" +
    "    margin-top: 1.5rem;\n" +
    "    margin-bottom: 1rem;\n" +
    "    font-weight: normal;\n" +
    "    color: #159957;\n" +
    "}\n" +
    "\n" +
    "p {\n" +
    "  margin-bottom: 15px;\n" +
    "  margin-top: 15px;\n" +
    "}\n" +
    "\n" +
    "pre p {\n" +
    "  margin: 0;\n" +
    "}\n" +
    "\n" +
    "pre ul,\n" +
    "pre ol {\n" +
    "    margin: 0;\n" +
    "    padding-top: 12px;\n" +
    "    padding-bottom: 12px;\n" +
    "}\n" +
    "\n" +
    "pre code, pre tt {\n" +
    "    display: inline;\n" +
    "    padding: 0;\n" +
    "    margin: 0;\n" +
    "    overflow: initial;\n" +
    "    line-height: inherit;\n" +
    "    word-wrap: normal;\n" +
    "    border: 0;\n" +
    "}\n" +
    "\n" +
    "pre code:before, pre code:after, pre tt:before, pre tt:after {\n" +
    "    content: normal;\n" +
    "}\n" +
    "\n" +
    "ul, ol {\n" +
    "    margin-top: 0;\n" +
    "}\n" +
    "\n" +
    "blockquote {\n" +
    "  padding: 15px 1rem;\n" +
    "  font-size: 14px;\n" +
    "  line-height: 18px;\n" +
    "  padding-right: 15px;\n" +
    "  margin-left: 0;\n" +
    "  color: #819198;\n" +
    "  border-left: 6px solid #dce6f0;\n" +
    "  background: #f2f7fb;\n" +
    "}\n" +
    "\n" +
    "blockquote > :first-child {\n" +
    "    margin-top: 0;\n" +
    "}\n" +
    "\n" +
    "blockquote > :last-child {\n" +
    "    margin-bottom: 0;\n" +
    "}\n" +
    "\n" +
    "table {\n" +
    "    display: block;\n" +
    "    width: 100%;\n" +
    "    overflow: auto;\n" +
    "    word-break: normal;\n" +
    "    word-break: keep-all;\n" +
    "}\n" +
    "\n" +
    "table th {\n" +
    "    font-weight: bold;\n" +
    "}\n" +
    "\n" +
    "table th, table td {\n" +
    "    padding: 0.5rem 1rem;\n" +
    "    border: 1px solid #e9ebec;\n" +
    "}\n" +
    "\n" +
    "dl {\n" +
    "    padding: 0;\n" +
    "}\n" +
    "\n" +
    "dl dt {\n" +
    "    padding: 0;\n" +
    "    margin-top: 1rem;\n" +
    "    font-size: 1rem;\n" +
    "    font-weight: bold;\n" +
    "}\n" +
    "\n" +
    "dl dd {\n" +
    "    padding: 0;\n" +
    "    margin-bottom: 1rem;\n" +
    "}\n" +
    "\n" +
    "hr {\n" +
    "  height: 1px;\n" +
    "  margin: 1.5rem 0;\n" +
    "  border: none;\n" +
    "  border-top: 1px dashed #A5A5A5;\n" +
    "}\n"
}

function getSavedStyle() {
  return window.localStorage.getItem('style');
}

function setSavedStyle(style) {
  return window.localStorage.setItem('style', style);
}
