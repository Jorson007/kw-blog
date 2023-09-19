(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{428:function(e,t,a){"use strict";a.r(t);var n=a(56),s=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"flutter路由"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#flutter路由"}},[e._v("#")]),e._v(" Flutter路由")]),e._v(" "),a("p",[e._v("路由即页面跳转，本篇主要介绍两个方面："),a("strong",[e._v("路由导航__和__路由传值")])]),e._v(" "),a("p",[e._v("首先Flutter的路由导航分以下三种：")]),e._v(" "),a("h3",{attrs:{id:"动态路由"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#动态路由"}},[e._v("#")]),e._v(" 动态路由")]),e._v(" "),a("p",[e._v("动态路由无需在MaterialApp内的routes中注册即可直接使用，示例如下：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("    //从当前页跳转到HomePage\n    Navigator.of(context).push(MaterialPageRoute(\n        builder: (context) => Homepage(),\n    ));\n\n    //返回\n    Navigator.of(context).pop();\n")])])]),a("h3",{attrs:{id:"静态路由"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#静态路由"}},[e._v("#")]),e._v(" 静态路由")]),e._v(" "),a("p",[e._v("需要先在MaterialApp中申明路由名称以及对应跳转的页面，示例如下：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('    return MaterialApp(\n      routes: {\n        "/login":(context)=>LoginPage(),\n        "/home":(context)=>HomePage(),\n        "/my":(context)=>MyPage(),\n      },\n      home:RootPage()\n    );\n')])])]),a("h3",{attrs:{id:"路由拦截"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#路由拦截"}},[e._v("#")]),e._v(" 路由拦截")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('    onGenerateRoute: (RouteSettings settings) {\n        String routeName = settings.name;\n        switch (routeName) {\n            case "/":\n                return MaterialPageRoute(builder: (context) {\n                    return HomePage(settings.arguments);\n                });\n            case "settings":\n                return MaterialPageRoute(builder: (context) {\n                    return LoginPage(settings.arguments);\n                });\n            default:\n                return MaterialPageRoute(builder: (context) {\n                    return RootPage(settings.arguments);\n                });\n    }\n')])])]),a("p",[e._v("路由传值包括页面跳转传值和页面返回传值")]),e._v(" "),a("p",[e._v("页面跳转传值：")]),e._v(" "),a("ol",[a("li",[e._v("构造函数传值")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("    //LoginPage -> Homepage\n    Navigator.of(context).push(MaterialPageRoute(\n        builder: (context) => Homepage(title:'首页'),\n    ));\n    //HomePage 取值\n    class HomePage extends StatelessWidget {\n        HomePage({Key key, this.title}) : super(key: key);\n        final title;\n    }\n}\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[e._v("ModalRoute传值")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('    //LoginPage -> Homepage\n    Navigator.of(context).push(MaterialPageRoute(\n        settings: RouteSettings(name:"home",arguments:"首页"}),\n        builder: (context) => HomePage(),\n    ));\n    //HomePage 取值\n    dynamic arguments = ModalRoute.of(context).settings.arguments;\n')])])]),a("p",[e._v("页面返回传值")]),e._v(" "),a("p",[e._v("调用pop时直接传参:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('    // Homepage-> LoginPage\n    Navigator.of(context).pop("Test");\n\n    //LoginPage 取值\n    Navigator.of(context).push(MaterialPageRoute(\n        builder: (context) => LoginPage(),\n    )).then((value){ // 获取pop的传值\n        print(value);\n    });\n')])])])])}),[],!1,null,null,null);t.default=s.exports}}]);