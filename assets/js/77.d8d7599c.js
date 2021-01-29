(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{476:function(t,s,a){"use strict";a.r(s);var o=a(42),e=Object(o.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("Converts content (string or binary) into a table. The source format is specified as a subcommand, like "),a("code",[t._v("from csv")]),t._v(" or "),a("code",[t._v("from json")]),t._v(".")]),t._v(" "),a("p",[t._v("Use this when nushell cannot determine the input file extension.")]),t._v(" "),a("h2",{attrs:{id:"available-subcommands"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#available-subcommands"}},[t._v("#")]),t._v(" Available Subcommands")]),t._v(" "),a("ul",[a("li",[t._v("from bson")]),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/book/commands/from-csv.html"}},[t._v("from csv")])],1),t._v(" "),a("li",[t._v("from eml")]),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/book/commands/from-ics.html"}},[t._v("from ics")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/book/commands/from-ini.html"}},[t._v("from ini")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/book/commands/from-json.html"}},[t._v("from json")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/book/commands/from-ods.html"}},[t._v("from ods")])],1),t._v(" "),a("li",[t._v("from sqlite")]),t._v(" "),a("li",[t._v("from ssv")]),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/book/commands/from-toml.html"}},[t._v("from toml")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/book/commands/from-tsv.html"}},[t._v("from tsv")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/book/commands/from-url.html"}},[t._v("from url")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/book/commands/from-vcf.html"}},[t._v("from vcf")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/book/commands/from-xlsx.html"}},[t._v("from xlsx")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/book/commands/from-xml.html"}},[t._v("from xml")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/book/commands/from-yaml.html"}},[t._v("from yaml")])],1)]),t._v(" "),a("p",[a("em",[t._v("Subcommands without links are currently missing their documentation.")])]),t._v(" "),a("h2",{attrs:{id:"example-for-from-csv"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-for-from-csv"}},[t._v("#")]),t._v(" Example for "),a("code",[t._v("from csv")])]),t._v(" "),a("p",[t._v("Let's say we have the following file:")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat")]),t._v(" pets.txt\nanimal, name, age\ncat, Tom, "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),t._v("\ndog, Alfred, "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("\nchameleon, Linda, "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n")])])]),a("p",[a("code",[t._v("pets.txt")]),t._v(" is actually a .csv file but it has the .txt extension, "),a("code",[t._v("open")]),t._v(" is not able to convert it into a table:")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("open")]),t._v(" pets.txt\nanimal, name, age\ncat, Tom, "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),t._v("\ndog, Alfred, "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("\nchameleon, Linda, "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n")])])]),a("p",[t._v("To get a table from "),a("code",[t._v("pets.txt")]),t._v(" we need to use the "),a("code",[t._v("from csv")]),t._v(" command:")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("open")]),t._v(" pets.txt "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" from csv\n━━━┯━━━━━━━━━━━┯━━━━━━━━━┯━━━━━━\n "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# │ animal    │  name   │  age")]),t._v("\n───┼───────────┼─────────┼──────\n "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" │ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat")]),t._v("       │  Tom    │  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" │ dog       │  Alfred │  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" │ chameleon │  Linda  │  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n━━━┷━━━━━━━━━━━┷━━━━━━━━━┷━━━━━━\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);