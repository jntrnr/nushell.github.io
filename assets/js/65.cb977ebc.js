(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{465:function(s,t,a){"use strict";a.r(t);var e=a(42),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("Converts csv data into table. Use this when nushell cannot determine the input file extension.")]),s._v(" "),a("h2",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[s._v("#")]),s._v(" Example")]),s._v(" "),a("p",[s._v("Let's say we have the following file:")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" pets.txt\nanimal, name, age\ncat, Tom, "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v("\ndog, Alfred, "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("\nchameleon, Linda, "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n")])])]),a("p",[a("code",[s._v("pets.txt")]),s._v(" is actually a .csv file but it has the .txt extension, "),a("code",[s._v("open")]),s._v(" is not able to convert it into a table:")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("open")]),s._v(" pets.txt\nanimal, name, age\ncat, Tom, "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v("\ndog, Alfred, "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("\nchameleon, Linda, "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n")])])]),a("p",[s._v("To get a table from "),a("code",[s._v("pets.txt")]),s._v(" we need to use the "),a("code",[s._v("from csv")]),s._v(" command:")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("open")]),s._v(" pets.txt "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" from csv\n━━━┯━━━━━━━━━━━┯━━━━━━━━━┯━━━━━━\n "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# │ animal    │  name   │  age")]),s._v("\n───┼───────────┼─────────┼──────\n "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" │ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v("       │  Tom    │  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" │ dog       │  Alfred │  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" │ chameleon │  Linda  │  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n━━━┷━━━━━━━━━━━┷━━━━━━━━━┷━━━━━━\n")])])]),a("p",[s._v("To ignore the csv headers use "),a("code",[s._v("--headerless")]),s._v(":")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("━━━┯━━━━━━━━━━━┯━━━━━━━━━┯━━━━━━━━━\n "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# │ Column1   │ Column2 │ Column3")]),s._v("\n───┼───────────┼─────────┼─────────\n "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" │ dog       │  Alfred │  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" │ chameleon │  Linda  │  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n━━━┷━━━━━━━━━━━┷━━━━━━━━━┷━━━━━━━━━\n")])])]),a("p",[s._v("To split on a character other than ',' use "),a("code",[s._v("--separator")]),s._v(":")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("open")]),s._v(" pets.txt\nanimal"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" age\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" Tom"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v("\ndog"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" Alfred"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("\nchameleon"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" Linda"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n")])])]),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("open")]),s._v(" pets.txt "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" from csv --separator "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("';'")]),s._v("\n━━━┯━━━━━━━━━━━┯━━━━━━━━━┯━━━━━━\n "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# │ animal    │  name   │  age")]),s._v("\n───┼───────────┼─────────┼──────\n "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" │ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v("       │  Tom    │  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" │ dog       │  Alfred │  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" │ chameleon │  Linda  │  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n━━━┷━━━━━━━━━━━┷━━━━━━━━━┷━━━━━━\n")])])]),a("p",[s._v("To use this command to open a csv with separators other than a comma, use the "),a("code",[s._v("--raw")]),s._v(" switch of "),a("code",[s._v("open")]),s._v(" to open the csv, otherwise the csv will enter "),a("code",[s._v("from csv")]),s._v(" as a table split on commas rather than raw text.")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" pets.txt pets.csv\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("open")]),s._v(" pets.csv "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" from csv --separator "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("';'")]),s._v("\nerror: Expected a string from pipeline\n- shell:1:16\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("open")]),s._v(" pets.csv "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" from csv --separator "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("';'")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("                 ^^^^^^^^ requires string input\n- shell:1:0\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("open")]),s._v(" pets.csv "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" from csv --separator "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("';'")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("  value originates from here\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("open")]),s._v(" pets.csv --raw "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" from csv --separator "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("';'")]),s._v("\n━━━┯━━━━━━━━━━━┯━━━━━━━━━┯━━━━━━\n "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# │ animal    │  name   │  age")]),s._v("\n───┼───────────┼─────────┼──────\n "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" │ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v("       │  Tom    │  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" │ dog       │  Alfred │  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" │ chameleon │  Linda  │  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n━━━┷━━━━━━━━━━━┷━━━━━━━━━┷━━━━━━\n")])])]),a("p",[s._v("The string '\\t' can be used to separate on tabs. Note that this is the same as using the from tsv command.")]),s._v(" "),a("p",[s._v("Newlines '\\n' are not acceptable separators.")]),s._v(" "),a("p",[s._v("Note that separators are currently provided as strings and need to be wrapped in quotes.")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("open")]),s._v(" pets.csv --raw "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" from csv --separator "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n- shell:1:43\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("open")]),s._v(" pets.csv --raw "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" from csv --separator "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("                                            ^\n")])])]),a("p",[s._v("It is also considered an error to use a separator greater than one char:")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("open")]),s._v(" pets.txt "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" from csv --separator "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'123'")]),s._v("\nerror: Expected a single separator char from --separator\n- shell:1:37\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("open")]),s._v(" pets.txt "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" from csv --separator "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'123'")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("                                      ^^^^^ requires a single character string input\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);