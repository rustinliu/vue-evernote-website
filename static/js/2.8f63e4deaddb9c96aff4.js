webpackJsonp([2],{C3fl:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o("Dd8w"),a=o.n(n),i=o("NYxO"),s={name:"NotebookList",data:function(){return{}},computed:a()({},Object(i.c)(["notebooks"])),created:function(){this.getNotebooks()},methods:a()({},Object(i.b)(["addNotebook","updateNotebook","deleteNotebook","getNotebooks","checkLogin"]),{onCreate:function(){var t=this;this.$prompt("请输入新笔记标题","创建笔记本",{confirmButtonText:"确定",cancelButtonText:"取消",inputPattern:/^.{1,30}$/,inputErrorMessage:"笔记本标题不能为空,且不能超过30个字符"}).then(function(e){var o=e.value;t.addNotebook({title:o})})},onEdit:function(t){var e=this;this.$prompt("请输入新笔记标题","修改笔记本",{confirmButtonText:"确定",cancelButtonText:"取消",inputPattern:/^.{1,30}$/,inputErrorMessage:"笔记本标题不能为空,且不能超过30个字符",inputValue:t.title}).then(function(o){var n=o.value;e.updateNotebook({notebookId:t.id,title:n})})},onDelete:function(t){var e=this;this.$confirm("确认要删除笔记本吗?","删除笔记本",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){e.deleteNotebook(t)})}})},c={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"detail",attrs:{id:"notebook-list"}},[o("header",[o("a",{staticClass:"btn",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.onCreate.apply(null,arguments)}}},[o("i",{staticClass:"iconfont icon-plus"}),t._v(" 新建笔记本")])]),t._v(" "),o("main",[o("div",{staticClass:"layout"},[o("h3",[t._v("笔记本列表"+t._s(t.notebooks.length))]),t._v(" "),o("div",{staticClass:"book-list"},t._l(t.notebooks,function(e){return o("router-link",{key:e.id,staticClass:"notebook",attrs:{to:"/note/?notebookId="+e.id}},[o("div",[o("span",{staticClass:"iconfont icon-notebook"}),t._v(" "+t._s(e.title)+"\n                        "),o("span",[t._v(t._s(e.noteCounts)+" ")]),t._v(" "),o("span",{staticClass:"action",on:{click:function(o){return o.stopPropagation(),o.preventDefault(),t.onEdit(e)}}},[t._v("编辑")]),t._v(" "),o("span",{staticClass:"action",on:{click:function(o){return o.stopPropagation(),o.preventDefault(),t.onDelete(e)}}},[t._v("删除")]),t._v(" "),o("span",{staticClass:"date"},[t._v(t._s(e.friendlyCreatedAt))])])])}),1)])])])},staticRenderFns:[]};var r=o("VU/8")(s,c,!1,function(t){o("CPD+")},"data-v-aff78088",null);e.default=r.exports},"CPD+":function(t,e){}});
//# sourceMappingURL=2.8f63e4deaddb9c96aff4.js.map