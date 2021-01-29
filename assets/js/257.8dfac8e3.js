(window.webpackJsonp=window.webpackJsonp||[]).push([[257],{655:function(t,a,v){"use strict";v.r(a);var _=v(42),s=Object(_.a)({},(function(){var t=this,a=t.$createElement,v=t._self._c||a;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"数据类型"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#数据类型"}},[t._v("#")]),t._v(" 数据类型")]),t._v(" "),v("p",[t._v("通常，Unix Shell 命令用文本字符串来相互交流。一个命令需要通过标准输出（通常称为 'stdout'）输出文本，然后另一个将会从标准输入（通常称为 'stdin'）来读取文本。用这种方法，两个命令相互交流。")]),t._v(" "),v("p",[t._v("我们可以反思一下这种基于字符串的交流方式。")]),t._v(" "),v("p",[t._v("Nu 在其命令中采用了这种方法，并将其扩展为包括其他类型的数据。 目前，Nu 支持两种数据类型：简单数据和结构化数据。")]),t._v(" "),v("h2",{attrs:{id:"简单数据"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#简单数据"}},[t._v("#")]),t._v(" 简单数据")]),t._v(" "),v("p",[t._v("就像大多数编程语言一样， Nu 使用一组简单的和结构化的数据类型对数据建模。简单数据类型包含整数、浮点数、字符串、布尔数、日期和路径。它同样包含一个用来表示文件大小的特殊类型。")]),t._v(" "),v("h3",{attrs:{id:"整数-integers"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#整数-integers"}},[t._v("#")]),t._v(" 整数 Integers")]),t._v(" "),v("p",[t._v("整数（或舍入）数字，例如 1、5、100。")]),t._v(" "),v("h3",{attrs:{id:"实数-decimal"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#实数-decimal"}},[t._v("#")]),t._v(" 实数 Decimal")]),t._v(" "),v("p",[t._v("实数是具有小数部分的数字。例如 1.5、2.0 和 15.333。")]),t._v(" "),v("h3",{attrs:{id:"字符串-strings"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#字符串-strings"}},[t._v("#")]),t._v(" 字符串 Strings")]),t._v(" "),v("p",[t._v('字符串是用来表示文本的基本方法。它们使用一对双引号包括。例如 "Rust"、"myname.txt" 和 "中华人民共和国"。')]),t._v(" "),v("p",[t._v("Nu 中的字符串默认支持 Unicode，所以你可以轻松传递 UTF-8 文本。")]),t._v(" "),v("h3",{attrs:{id:"行-lines"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#行-lines"}},[t._v("#")]),t._v(" 行 Lines")]),t._v(" "),v("p",[t._v("Lines 是隐式带有依赖操作系统的换行符的字符串。")]),t._v(" "),v("h3",{attrs:{id:"列路径-column-paths"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#列路径-column-paths"}},[t._v("#")]),t._v(" 列路径 Column paths")]),t._v(" "),v("p",[t._v("列路径是用来指定表中特定子表、列、行或单元格的路径。")]),t._v(" "),v("p",[t._v("例如， "),v("code",[t._v("open data.toml | get foo.0.bar")]),t._v(" 中的 "),v("code",[t._v("foo.0.bar")]),t._v("。")]),t._v(" "),v("h3",{attrs:{id:"模式-patterns"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#模式-patterns"}},[t._v("#")]),t._v(" 模式 Patterns")]),t._v(" "),v("p",[t._v("模式，有时候也叫通配符模式，是一种经常在 Shell 中用来匹配文件名的方法。包含 "),v("code",[t._v("*")]),t._v(" 的通配符意味着匹配任何字串，"),v("code",[t._v("?")]),t._v(" 表示匹配一个单个的字符。\n例如 "),v("code",[t._v("ls test*")]),t._v(" 中的 "),v("code",[t._v("test*")]),t._v(" 就是一个模式。")]),t._v(" "),v("h3",{attrs:{id:"布尔数-booleans"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#布尔数-booleans"}},[t._v("#")]),t._v(" 布尔数 Booleans")]),t._v(" "),v("p",[t._v("布尔数只有 真 或 假 两种状态。比起直接书写值，它通常作为一次比较的结果。")]),t._v(" "),v("p",[t._v("它的两种值分别为 "),v("code",[t._v("$true")]),t._v(" 和 "),v("code",[t._v("$false")]),t._v("。")]),t._v(" "),v("h3",{attrs:{id:"日期-dates"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#日期-dates"}},[t._v("#")]),t._v(" 日期 Dates")]),t._v(" "),v("p",[t._v("日期和时间通过 Date 类型来控制。Date 值是依赖于时区的，默认使用 UTC 时区。")]),t._v(" "),v("h3",{attrs:{id:"持续时间-duration"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#持续时间-duration"}},[t._v("#")]),t._v(" 持续时间 Duration")]),t._v(" "),v("p",[t._v("持续时间表示一定长度的时间段。一秒、五周、一年等等都是持续时间。")]),t._v(" "),v("p",[t._v("例如 "),v("code",[t._v("1w")]),t._v(" 表示 one week，即一周。")]),t._v(" "),v("p",[t._v("这个表显示了目前支持的时间单位：")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("Duration")]),t._v(" "),v("th",[t._v("Length")]),t._v(" "),v("th",[t._v("中文")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("1sec")]),t._v(" "),v("td",[t._v("one second")]),t._v(" "),v("td",[t._v("一秒")])]),t._v(" "),v("tr",[v("td",[t._v("1min")]),t._v(" "),v("td",[t._v("one minute")]),t._v(" "),v("td",[t._v("一分")])]),t._v(" "),v("tr",[v("td",[t._v("1hr")]),t._v(" "),v("td",[t._v("one hour")]),t._v(" "),v("td",[t._v("一时")])]),t._v(" "),v("tr",[v("td",[t._v("1day")]),t._v(" "),v("td",[t._v("one day")]),t._v(" "),v("td",[t._v("一日")])]),t._v(" "),v("tr",[v("td",[t._v("1wk")]),t._v(" "),v("td",[t._v("one week")]),t._v(" "),v("td",[t._v("一周")])]),t._v(" "),v("tr",[v("td",[t._v("1mon")]),t._v(" "),v("td",[t._v("one month")]),t._v(" "),v("td",[t._v("一月")])]),t._v(" "),v("tr",[v("td",[t._v("1yr")]),t._v(" "),v("td",[t._v("one year")]),t._v(" "),v("td",[t._v("一年")])])])]),t._v(" "),v("h3",{attrs:{id:"范围-ranges"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#范围-ranges"}},[t._v("#")]),t._v(" 范围 Ranges")]),t._v(" "),v("p",[t._v("你可以用它来表示一个范围的数值。它所描述的区间是闭区间，"),v("code",[t._v("1..4")]),t._v(" 表示 "),v("code",[t._v("1,2,3,4")]),t._v("。")]),t._v(" "),v("p",[t._v("例如 "),v("code",[t._v("ls | range 1..4")]),t._v("。")]),t._v(" "),v("h3",{attrs:{id:"路径-paths"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#路径-paths"}},[t._v("#")]),t._v(" 路径 Paths")]),t._v(" "),v("p",[t._v("路径是与平台相关的一种表示文件路径的方法。例如 "),v("code",[t._v("/usr/bin")]),t._v(" 和 "),v("code",[t._v("C:\\Users\\file.txt")]),t._v("。")]),t._v(" "),v("h3",{attrs:{id:"字节量-bytes"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#字节量-bytes"}},[t._v("#")]),t._v(" 字节量 Bytes")]),t._v(" "),v("p",[t._v("文件大小使用一种名为字节量的特殊整数描述。例如 "),v("code",[t._v("100")]),t._v(", "),v("code",[t._v("15kb")]),t._v(", "),v("code",[t._v("100mb")]),t._v(" 等。")]),t._v(" "),v("h3",{attrs:{id:"二进制数据-binary-data"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#二进制数据-binary-data"}},[t._v("#")]),t._v(" 二进制数据 Binary data")]),t._v(" "),v("p",[t._v("二进制数据，例如一个镜像文件的数据，是一组原始的字节。")]),t._v(" "),v("h2",{attrs:{id:"结构化数据"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#结构化数据"}},[t._v("#")]),t._v(" 结构化数据")]),t._v(" "),v("p",[t._v("结构化数据是根据简单数据构建的。 例如，结构化数据提供了一种表示同一值中多个整数的方法，而不是单个整数。 当前支持的结构化数据类型有：行，列表和块。")]),t._v(" "),v("h3",{attrs:{id:"行-rows"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#行-rows"}},[t._v("#")]),t._v(" 行 Rows")]),t._v(" "),v("p",[t._v("行数据类型表示你将在表中的一行数据中看到的内容。 它具有不同的数据元素，并且每个数据元素都有一个列名。")]),t._v(" "),v("h3",{attrs:{id:"列表-lists"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#列表-lists"}},[t._v("#")]),t._v(" 列表 Lists")]),t._v(" "),v("p",[t._v("列表持有多于一个的值，它们可以是简单数据，也可以是行。列表和行的组合通常也被称为表。")]),t._v(" "),v("p",[t._v("例如，一列字符串：")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("> echo [sam fred george]\n───┬────────\n 0 │ sam\n 1 │ fred\n 2 │ george\n───┴────────\n")])])]),v("h3",{attrs:{id:"块-blocks"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#块-blocks"}},[t._v("#")]),t._v(" 块 Blocks")]),t._v(" "),v("p",[t._v("块表示 Nu 的一个代码块。例如，在命令 "),v("code",[t._v("each { echo $it }")]),t._v(" 中，块是花括号所包含的部分 "),v("code",[t._v("{ echo $it }")]),t._v("。块在表示对数据的每一行执行的代码时非常有用。")])])}),[],!1,null,null,null);a.default=s.exports}}]);