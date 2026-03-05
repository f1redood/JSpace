var map = {
  "export": "#33f",
  "default": "#33f",
  "function": "#33f",
  "var": "#33f",
  "class": "#33f",
  "const": "#33f",
  "let": "#33f",
  "static": "#33f",

  "if": "#f5f",
  "else": "#f5f",
  "for": "#f5f",
  "of": "#f5f",
  "in": "#f5f",
  "while": "#f5f"
}

function highlightSyntax(text) {
  var res = "";
  for (var word of text) {
    if (word in map) {
      res += `<span style="color:${map[word]};">${word}</span>;`
    } else {
      res += `<span style="color:#fff;">${word}</span>`;
    }
  }
  return res;
}
