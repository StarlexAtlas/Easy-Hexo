(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{166:function(t,e,s){t.exports=s.p+"assets/img/1.2c388fd0.png"},167:function(t,e,s){t.exports=s.p+"assets/img/2.be3f2e72.png"},168:function(t,e,s){t.exports=s.p+"assets/img/3.7f737e5e.png"},169:function(t,e,s){t.exports=s.p+"assets/img/4.d771774c.png"},228:function(t,e,s){"use strict";s.r(e);var a=[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"持续集成-continuous-integration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#持续集成-continuous-integration","aria-hidden":"true"}},[this._v("#")]),this._v(" 持续集成 Continuous Integration")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("TIP")]),this._v(" "),e("p",[this._v("利用 Travis CI 将 Hexo 持续集成部署到 GitHub Pages. 👷")]),this._v(" "),e("p",[this._v("（当你觉得有必要提高部署效率时，才使用 CI。萌新可略过。）")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"什么是持续集成？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#什么是持续集成？","aria-hidden":"true"}},[this._v("#")]),this._v(" 什么是持续集成？")])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("持续集成（英语：Continuous integration，缩写 CI）是一种软件工程流程，是将所有软件工程师对于软件的工作副本持续集成到共享主线（mainline）的一种举措。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("简单来说，我们通过持续集成，能够简化 Hexo 发布博客的步骤，即：将清除缓存 "),e("code",[this._v("hexo clean")]),this._v("，生成静态文件 "),e("code",[this._v("hexo generate")]),this._v(" 和部署到 GitHub Pages "),e("code",[this._v("hexo deploy")]),this._v(" 这些步骤通过持续集成工具来帮助我们自动执行。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("这样我们在本地对博客文件进行修改、新增博文内容或者新增博客文章，只需要通过 "),e("code",[this._v("git")]),this._v(" 推送到 GitHub 仓库之后，持续集成工具就可以帮助我们在线构建博客静态文件并直接部署到 GitHub Pages。这之后，我们发布博客内容就不需要本地三步走了。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("👷 本章我们所利用的持续集成平台是 Travis CI.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"注册-travis-ci-账号，绑定-github-账户"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#注册-travis-ci-账号，绑定-github-账户","aria-hidden":"true"}},[this._v("#")]),this._v(" 注册 Travis CI 账号，绑定 GitHub 账户")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:s(166),alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"配置文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置文件","aria-hidden":"true"}},[this._v("#")]),this._v(" 配置文件")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"配置本地和远程仓库"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置本地和远程仓库","aria-hidden":"true"}},[this._v("#")]),this._v(" 配置本地和远程仓库")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"warning custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("WARNING")]),this._v(" "),e("p",[this._v("由于 GitHub Pages 的限制，每个人的默认博客仓库 "),e("code",[this._v("xxx.github.io")]),this._v(" 只允许将静态文件托管在仓库的 master 分支。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("备份博客源文件")]),this._v(" "),e("li",[this._v("在本地仓库创建 "),e("code",[this._v("hexo")]),this._v(" 分支")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 克隆项目到本地")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/xxx/xxx.github.io.git\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 创建并切换到 hexo 分支")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout -b hexo\n")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[t._v("在 "),s("code",[t._v("hexo")]),t._v(" 分支保存博客项目的源代码\n"),s("ul",[s("li",[t._v("将 "),s("code",[t._v("hexo")]),t._v(" 分支下的文件除 "),s("code",[t._v(".git")]),t._v(" 目录外全部删除")]),t._v(" "),s("li",[t._v("将博客源码文件拷贝到该目录下，并提交 Commit 到 "),s("code",[t._v("hexo")]),t._v(" 分支.")])])]),t._v(" "),s("li",[t._v("将本地 "),s("code",[t._v("hexo")]),t._v(" 分支内容提交到 GitHub 远程仓库")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[this._v("# 提交本地 hexo 分支到远程仓库的 hexo 分支")]),this._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[this._v("git")]),this._v(" push origin hexo:hexo\n")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[t._v("在 "),s("code",[t._v("hexo")]),t._v(" 分支保存博客项目的源代码")]),t._v(" "),s("li",[t._v("在 "),s("code",[t._v("master")]),t._v(" 分支保持项目的静态文件（即 "),s("code",[t._v("public")]),t._v(" 文件夹下的内容）")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"配置持续集成文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置持续集成文件","aria-hidden":"true"}},[this._v("#")]),this._v(" 配置持续集成文件")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v(".travis.yml")]),this._v(" 是 Travis CI 的部署配置文件，Travis CI 部署时会自动读取我们每次 Commit 中是否包含 "),e("code",[this._v(".travis.yml")]),this._v("，有此文件才会开始部署。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"创建-travis-yml-配置文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#创建-travis-yml-配置文件","aria-hidden":"true"}},[this._v("#")]),this._v(" 创建 "),e("code",[this._v(".travis.yml")]),this._v(" 配置文件")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("在博客项目源代码分支下（"),e("code",[this._v("hexo")]),this._v(" 分支）创建文件 "),e("code",[this._v(".travis.yml")]),this._v("，并添加如下内容：")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("language")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" node_js\n\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("sudo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" required\n\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("node_js")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" stable\n\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("install")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" npm install\n\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("branches")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("only")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" hexo\n\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("before_install")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" \n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" export TZ='Asia/Shanghai'\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" npm install hexo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("cli "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("g\n\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("install")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" npm install\n\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" hexo clean\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" hexo generate\n\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("deploy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("provider")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" pages\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("skip_cleanup")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("github_token")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $GITHUB_TOKEN\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("local_dir")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" public\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $GIT_NAME\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("email")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $GIT_EMAIL\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("keep-history")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("target-branch")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" master\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("on")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("branch")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" hexo\n")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[s("code",[t._v("language")]),t._v("：编译语言、环境；"),s("code",[t._v("node_js")]),t._v("：Node.js 版本；"),s("code",[t._v("sudo")]),t._v("：需要管理员权限；")]),t._v(" "),s("li",[s("code",[t._v("install")]),t._v("：安装环境 npm；")]),t._v(" "),s("li",[s("code",[t._v("branches")]),t._v("：工作仓库分支（hexo 分支）；")]),t._v(" "),s("li",[s("code",[t._v("before_install")]),t._v("：配置时区为中国时区东八区（UTC + 8），安装组件 "),s("code",[t._v("hexo")]),t._v("；")]),t._v(" "),s("li",[s("code",[t._v("install")]),t._v("：安装依赖 "),s("code",[t._v("npm install")]),t._v("；")]),t._v(" "),s("li",[s("code",[t._v("script")]),t._v("：执行脚本，清除缓存，生成静态文件并放在 "),s("code",[t._v("public")]),t._v(" 文件夹下；")]),t._v(" "),s("li",[s("code",[t._v("deploy")]),t._v("：执行部署。")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"warning custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("ul",[s("li",[t._v("其他文档可能提到了利用 "),s("code",[t._v("hexo-deployer-git")]),t._v(" 进行部署，但是由于 Travis CI 本身支持直接部署到 GitHub Pages 的工具，因此无需另行安装 "),s("code",[t._v("hexo-deployer-git")]),t._v(" 了；")]),t._v(" "),s("li",[t._v("其他文档也可能提到在 "),s("code",[t._v(".travis.yml")]),t._v(" 中加入如下内容，来缓存 "),s("code",[t._v("node_modules")]),t._v(" 下的内容，从而加快编译速度。但是经过我的尝试，"),s("code",[t._v("node_modules")]),t._v(" 经常会由于没有及时更新，在添加其他组件之后出现「博客生成静态文件步骤」失败的情况，因此建议不进行缓存处理。")])]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("cache")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("directories")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" node_modules\n")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"在-travis-ci-中配置变量"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#在-travis-ci-中配置变量","aria-hidden":"true"}},[this._v("#")]),this._v(" 在 Travis CI 中配置变量")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[s("code",[t._v("$GIT_NAME")]),t._v("："),s("code",[t._v("git")]),t._v(" 用户名")]),t._v(" "),s("li",[s("code",[t._v("$GIT_EMAIL")]),t._v("："),s("code",[t._v("git")]),t._v(" 用户邮箱")]),t._v(" "),s("li",[s("code",[t._v("$GITHUB_TOKEN")]),t._v("：GitHub 通行证 (token) 字符串")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[this._v("git")]),this._v(" config --global user.name\n"),e("span",{pre:!0,attrs:{class:"token function"}},[this._v("git")]),this._v(" config --global user.email\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:s(167),alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[this._v("填入 Token 描述，并给予 Token 第一项 "),e("code",[this._v("repo")]),this._v(" 的全部权限")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:s(168),alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("将生成的 Token 复制，保存（生成 Token 的页面只有一次机会看见，请保存妥当。）")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("在 Travis CI 仓库配置中，将三个变量填入设置（位于 "),e("code",[this._v("Settings > Environment Variables")]),this._v(" 处并保存：")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:s(169),alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"自动部署"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#自动部署","aria-hidden":"true"}},[this._v("#")]),this._v(" 自动部署")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 切换到 hexo 分支")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout hexo\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 提交新博文")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" add "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v(".")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Publish new post."')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 推送到远程仓库")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("这样，在每次我们将博客的源文件通过 "),e("code",[this._v("git")]),this._v(" 推送到 GitHub 的 "),e("code",[this._v("hexo")]),this._v(" 分支上后，Travis CI 就会自动检测并主动开始构建我们的博客静态文件，并自动部署到 GitHub Pages 中。")])}],n=s(0),r=Object(n.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/EasyHexo/Easy-Hexo",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://img.shields.io/badge/Maintained--by-EasyHexo-42B983.svg?longCache=true&style=flat-square",alt:""}}),s("OutboundLink")],1),t._v(" "),s("a",{attrs:{href:"https://github.com/spencerwooo",target:"_blank",rel:"noopener noreferrer"}},[s("img",{attrs:{src:"https://img.shields.io/badge/Author-SpencerWoo-E87A90.svg?longCache=true&style=flat-square",alt:""}}),s("OutboundLink")],1)]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),s("p",[t._v("首先，我们到 "),s("a",{attrs:{href:"https://travis-ci.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Travis CI"),s("OutboundLink")],1),t._v(" 官网，用自己的 GitHub 账户直接关联登录，并允许 Travis CI 查看自己的公有仓库。")]),t._v(" "),s("p",[t._v("然后我们到 "),s("a",{attrs:{href:"https://travis-ci.org/account/repositories",target:"_blank",rel:"noopener noreferrer"}},[t._v("Travis CI 账户页面"),s("OutboundLink")],1),t._v(" 开启我们的博客仓库。如图。")]),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),s("p",[t._v("为了方便下面步骤的进行，我们进行这样的配置：")]),t._v(" "),t._m(12),t._v(" "),t._m(13),t._m(14),t._v(" "),t._m(15),s("p",[t._v("经过这样的配置，我们博客仓库项目文件应该是这样的：")]),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),t._m(18),t._v(" "),t._m(19),t._v(" "),t._m(20),t._v(" "),t._m(21),s("p",[t._v("解释一下：")]),t._v(" "),t._m(22),t._v(" "),t._m(23),t._v(" "),t._m(24),t._v(" "),s("p",[t._v("在配置文件中我们使用了三个变量：")]),t._v(" "),t._m(25),t._v(" "),s("p",[t._v("其中前两项可以通过在本地终端中这样查看：")]),t._v(" "),t._m(26),s("p",[t._v("如下图所示：")]),t._v(" "),t._m(27),t._v(" "),s("p",[t._v("最后一项 GitHub 通行证 (token) 我们在 GitHub 中进行申请：")]),t._v(" "),s("ul",[s("li",[t._v("访问 "),s("a",{attrs:{href:"https://github.com/settings/tokens",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub 账户设置 > Tokens"),s("OutboundLink")],1)]),t._v(" "),s("li",[t._v("生成新 Token: Generate new token")]),t._v(" "),t._m(28)]),t._v(" "),t._m(29),t._v(" "),t._m(30),t._v(" "),t._m(31),t._v(" "),t._m(32),t._v(" "),t._m(33),t._v(" "),s("p",[t._v("经过以上步骤的配置，发布博客的命令就变更为：")]),t._v(" "),t._m(34),t._m(35),t._v(" "),s("p",[t._v("除了方便部署，我们同时还在 GitHub 上面成功开启了我们博客源代码的备份，一箭双雕。👷")])])},a,!1,null,null,null);r.options.__file="1-5-continuous-integration.md";e.default=r.exports}}]);