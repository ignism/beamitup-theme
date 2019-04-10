module.exports = {
  "HTML": {
    "beautifiers": [
      "Pretty Diff",
      "JS-Beautify"
    ],
    "indent_size": 2,
    "indent_style": "space",
    "max_preserve_newlines": 1,
    "newline_before_tags": [],
    "quotes": "double",
    "space_after_anon_function": true,
    "wrap_attributes_indent_size": 0,
    "wrap_line_length": 0
  },
  "CSS": {
    "beautifiers": [
      "Prettier",
      "Pretty Diff",
      "JS-Beautify"
    ],
    "end_with_newline": true,
    "indent_size": 2,
    "indent_style": "space",
    "max_preserve_newlines": 2,
    "preserve_newlines": true,
    "quotes": "double",
    "selector_separator_newline": true,
  },
  "Twig": {
    "beautifiers": [
      "Pretty Diff"
    ],
    "align_assignments": true,
    "break_chained_methods": true,
    "end_with_comma": false,
    "indent_comments": true,
    "indent_size": 2,
    "indent_style": "space",
    "max_preserve_newlines": 2,
    "multiline_ternary": "never",
    "quotes": "double",
    "space_after_anon_function": true
  },
  "JSON": {
    "beautifiers": [
      "Prettier",
      "Pretty Diff",
      "JS-Beautify"
    ],
    "arrow_parens": "always",
    "brace_style": "expand",
    "break_chained_methods": false,
    "end_with_comma": false,
    "end_with_newline": true,
    "end_with_semicolon": false,
    "indent_size": 2,
    "indent_style": "space",
    "jslint_happy": true,
    "keep_array_indentation": true,
    "max_preserve_newlines": 2,
    "multiline_ternary": "never",
    "object_curly_spacing": true,
    "preserve_newlines": true,
    "quotes": "double",
    "space_after_anon_function": true,
    "space_before_conditional": true,
    "space_in_empty_paren": false,
    "space_in_paren": true
  },
  "JavaScript": {
    "beautifiers": [
      "Prettier",
      "Pretty Diff",
      "JS-Beautify",
      "ESLint"
    ],
    "arrow_parens": "always",
    "brace_style": "collapse",
    "break_chained_methods": false,
    "end_with_comma": false,
    "end_with_newline": true,
    "end_with_semicolon": false,
    "indent_size": 2,
    "indent_style": "space",
    "jslint_happy": true,
    "keep_array_indentation": true,
    "max_preserve_newlines": 2,
    "multiline_ternary": "never",
    "object_curly_spacing": true,
    "preserve_newlines": true,
    "quotes": "single",
    "remove_trailing_whitespace": true,
    "space_after_anon_function": true,
    "space_before_conditional": true,
    "space_in_empty_paren": false,
    "space_in_paren": false
  },
  "PHP": {
    "beautifiers": [
      "PHP-CS-Fixer"
    ]
  }
}