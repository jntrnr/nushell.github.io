(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{508:function(s,t,a){"use strict";a.r(t);var e=a(42),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("splits contents across multiple columns via the separator.")]),s._v(" "),a("p",[s._v("Syntax: "),a("code",[s._v("split column <separator> ...args{flags}")])]),s._v(" "),a("h2",{attrs:{id:"parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[s._v("#")]),s._v(" Parameters")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("<separator>")]),s._v(": string that denotes what separates columns")]),s._v(" "),a("li",[a("code",[s._v("args")]),s._v(": column names to give the new columns. If not specified they will be set to "),a("code",[s._v("Column1")]),s._v(" "),a("code",[s._v("Column2")]),s._v(" ...")])]),s._v(" "),a("h2",{attrs:{id:"flags"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#flags"}},[s._v("#")]),s._v(" Flags")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("--collapse-empty\n  Removes empty columns\n")])])]),a("h2",{attrs:{id:"examples"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[s._v("#")]),s._v(" Examples")]),s._v(" "),a("p",[s._v("If we have file structured like this:")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.12643678160919541")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.6851851851851852")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.273972602739726")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.28735632183908044")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.09259259259259259")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.6986301369863014")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.8045977011494253")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.8148148148148148")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.7397260273972602")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.28735632183908044")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.09259259259259259")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.547945205479452")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.6896551724137931")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.7037037037037037")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.2465753424657535")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.6896551724137931")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.8333333333333334")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.4657534246575342")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.9080459770114943")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.3333333333333333")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.4931506849315068")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.9310344827586207")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.1296296296296295")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.7123287671232876")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.3448275862068966")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.018518518518518517")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.6575342465753424")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.0459770114942528")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.0925925925925926")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.6164383561643836")]),s._v("\n")])])]),a("p",[s._v("We can build a table from it using the "),a("code",[s._v("split column")]),s._v(" command")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("open")]),s._v(" coordinates.txt "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" lines "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("split")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("column")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('" | "')]),s._v("\n───┬─────────────────────┬──────────────────────┬────────────────────\n "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# │ Column1             │ Column2              │ Column3")]),s._v("\n───┼─────────────────────┼──────────────────────┼────────────────────\n "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" │ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.12643678160919541")]),s._v(" │ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.6851851851851852")]),s._v("   │ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.273972602739726")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" │ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.28735632183908044")]),s._v(" │ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.09259259259259259")]),s._v("  │ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.6986301369863014")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" │ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.8045977011494253")]),s._v("  │ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.8148148148148148")]),s._v("   │ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.7397260273972602")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" │ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.28735632183908044")]),s._v(" │ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.09259259259259259")]),s._v("  │ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.547945205479452")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" │ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.6896551724137931")]),s._v("  │ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.7037037037037037")]),s._v("   │ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.2465753424657535")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" │ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.6896551724137931")]),s._v("  │ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.8333333333333334")]),s._v("   │ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.4657534246575342")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v(" │ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.9080459770114943")]),s._v("  │ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.3333333333333333")]),s._v("   │ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.4931506849315068")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v(" │ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.9310344827586207")]),s._v("  │ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.1296296296296295")]),s._v("   │ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.7123287671232876")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v(" │ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.3448275862068966")]),s._v("  │ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.018518518518518517")]),s._v(" │ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.6575342465753424")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9")]),s._v(" │ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.0459770114942528")]),s._v("  │ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.0925925925925926")]),s._v("   │ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.6164383561643836")]),s._v("\n───┴─────────────────────┴──────────────────────┴────────────────────\n")])])]),a("p",[s._v("And give names to the columns")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("open")]),s._v(" coordinates.txt "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" lines "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("split")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("column")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('" | "')]),s._v(" x y z\n───┬─────────────────────┬──────────────────────┬────────────────────\n "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# │ x                   │ y                    │ z")]),s._v("\n───┼─────────────────────┼──────────────────────┼────────────────────\n "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" │ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.12643678160919541")]),s._v(" │ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.6851851851851852")]),s._v("   │ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.273972602739726")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" │ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.28735632183908044")]),s._v(" │ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.09259259259259259")]),s._v("  │ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.6986301369863014")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" │ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.8045977011494253")]),s._v("  │ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.8148148148148148")]),s._v("   │ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.7397260273972602")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" │ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.28735632183908044")]),s._v(" │ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.09259259259259259")]),s._v("  │ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.547945205479452")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" │ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.6896551724137931")]),s._v("  │ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.7037037037037037")]),s._v("   │ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.2465753424657535")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" │ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.6896551724137931")]),s._v("  │ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.8333333333333334")]),s._v("   │ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.4657534246575342")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v(" │ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.9080459770114943")]),s._v("  │ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.3333333333333333")]),s._v("   │ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.4931506849315068")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v(" │ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.9310344827586207")]),s._v("  │ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.1296296296296295")]),s._v("   │ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.7123287671232876")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v(" │ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.3448275862068966")]),s._v("  │ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.018518518518518517")]),s._v(" │ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.6575342465753424")]),s._v("\n "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9")]),s._v(" │ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.0459770114942528")]),s._v("  │ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.0925925925925926")]),s._v("   │ "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.6164383561643836")]),s._v("\n───┴─────────────────────┴──────────────────────┴────────────────────\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);