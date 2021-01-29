(window.webpackJsonp=window.webpackJsonp||[]).push([[254],{652:function(s,a,e){"use strict";e.r(a);var t=e(42),n=Object(t.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"在系统中四处移动"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#在系统中四处移动"}},[s._v("#")]),s._v(" 在系统中四处移动")]),s._v(" "),e("p",[s._v("早前的 Shell 允许你在系统中四处移动并且运行命令，像 Nu 这样的现代 Shell 同样允许你这么干。让我们看看这些你可能会在与系统交互时用到的命令。")]),s._v(" "),e("h2",{attrs:{id:"观察目录内容"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#观察目录内容"}},[s._v("#")]),s._v(" 观察目录内容")]),s._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v("\n")])])]),e("p",[s._v("正如我们在其他章节所看到的， "),e("code",[s._v("ls")]),s._v(" 用来观察一个路径下的内容。 Nu 将会以一个表的形式返回你可看到的内容。")]),s._v(" "),e("p",[e("code",[s._v("ls")]),s._v(' 命令通常可以携带一个可选的参数，来改变你希望观察的目标。例如，我们可以列出以 ".md" 结尾的文件：')]),s._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" *.md\n───┬────────────────────┬──────┬─────────┬────────────\n "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# │ name               │ type │ size    │ modified ")]),s._v("\n───┼────────────────────┼──────┼─────────┼────────────\n "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" │ CODE_OF_CONDUCT.md │ File │  "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.4")]),s._v(" KB │ "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" days ago \n "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" │ CONTRIBUTING.md    │ File │   "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("886")]),s._v(" B │ "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" days ago \n "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" │ README.md          │ File │ "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("15.0")]),s._v(" KB │ "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" days ago \n "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" │ TODO.md            │ File │  "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.6")]),s._v(" KB │ "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" days ago \n───┴────────────────────┴──────┴─────────┴────────────\n")])])]),e("p",[s._v('在可选参数 "*.md" 前的星号 (*) 有时候也被叫做通配符。它匹配任何东西。你可以将 "*.md" 认作 "在当前目录下以 .md 结尾的文件"')]),s._v(" "),e("p",[s._v("Nu 也可以很好地使用现代通配符，来允许你访问更深的目录。")]),s._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" **/*.md\n────┬───────────────────────────────────────────┬──────┬─────────┬────────────\n "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  │ name                                      │ type │ size    │ modified ")]),s._v("\n────┼───────────────────────────────────────────┼──────┼─────────┼────────────\n  "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" │ .github/ISSUE_TEMPLATE/bug_report.md      │ File │   "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("592")]),s._v(" B │ "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" days ago \n  "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" │ .github/ISSUE_TEMPLATE/feature_request.md │ File │   "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("595")]),s._v(" B │ "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" days ago \n  "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" │ CODE_OF_CONDUCT.md                        │ File │  "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.4")]),s._v(" KB │ "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" days ago \n  "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" │ CONTRIBUTING.md                           │ File │   "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("886")]),s._v(" B │ "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" days ago \n  "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" │ README.md                                 │ File │ "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("15.0")]),s._v(" KB │ "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" days ago \n  "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" │ TODO.md                                   │ File │  "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.6")]),s._v(" KB │ "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" days ago \n  "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v(" │ crates/nu-source/README.md                │ File │  "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.7")]),s._v(" KB │ "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" days ago \n  "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v(" │ docker/packaging/README.md                │ File │  "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.5")]),s._v(" KB │ "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" days ago \n  "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v(" │ docs/commands/README.md                   │ File │   "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("929")]),s._v(" B │ "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" days ago \n  "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("9")]),s._v(" │ docs/commands/alias.md                    │ File │  "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.7")]),s._v(" KB │ "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" days ago \n "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" │ docs/commands/append.md                   │ File │  "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.4")]),s._v(" KB │ "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" days ago\n")])])]),e("p",[s._v('这里我们在寻找任何以 ".md" 结尾的，双星号表示 "任何在当前目录下的子孙目录"。')]),s._v(" "),e("h2",{attrs:{id:"改变当前目录"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#改变当前目录"}},[s._v("#")]),s._v(" 改变当前目录")]),s._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" new_directory\n")])])]),e("p",[s._v("为了将当前目录改成另一个，我们使用 "),e("code",[s._v("cd")]),s._v(" 命令。就像其他 Shell 一样，我们可以使用一个目录名，或者用 "),e("code",[s._v("..")]),s._v(" 来向上一个目录。")]),s._v(" "),e("h2",{attrs:{id:"文件系统命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#文件系统命令"}},[s._v("#")]),s._v(" 文件系统命令")]),s._v(" "),e("p",[s._v("Nu 也提供了可跨平台工作的基本文件系统命令。")]),s._v(" "),e("p",[s._v("我们可以通过 "),e("code",[s._v("mv")]),s._v(" 命令将文件从一个地方移动到另一个地方：")]),s._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" item location\n")])])]),e("p",[s._v("我们可以把文件复制到另一个地方：")]),s._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" item location\n")])])]),e("p",[s._v("也可以移除一个项目：")]),s._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" item\n")])])]),e("p",[s._v("这三条命令同样接受与 "),e("code",[s._v("ls")]),s._v(" 相同的通配符参数。")]),s._v(" "),e("p",[s._v("最后，我们可以通过 "),e("code",[s._v("mkdir")]),s._v(" 来新建一个目录：")]),s._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" new_directory\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);