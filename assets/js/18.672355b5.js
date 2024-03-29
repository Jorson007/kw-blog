(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{437:function(e,r,t){"use strict";t.r(r);var a=t(56),o=Object(a.a)({},(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"performselector和直接调用方法的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#performselector和直接调用方法的区别"}},[e._v("#")]),e._v(" performSelector和直接调用方法的区别")]),e._v(" "),t("p",[e._v("performSelector: withObject:是在iOS中的一种方法调用方式。他可以向一个对象传递任何消息，而不需要在编译的时候声明这些方法。所以这也是runtime的一种应用方式。")]),e._v(" "),t("p",[e._v("所以performSelector和直接调用方法的区别就在与runtime。直接调用编译是会自动校验。如果方法不存在，那么直接调用 在编译时候就能够发现，编译器会直接报错。\n但是使用performSelector的话一定是在运行时候才能发现，如果此方法不存在就会崩溃。所以如果使用performSelector的话他就会有个最佳伴侣- (BOOL)respondsToSelector:(SEL)aSelector;来在运行时判断对象是否响应此方法。")]),e._v(" "),t("h2",{attrs:{id:"performselector的使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#performselector的使用"}},[e._v("#")]),e._v(" performSelector的使用")]),e._v(" "),t("p",[e._v("无参数传递")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('[self performSelector:@selector(SelectorNoParameter)];\n\n- (void)SelectorNoParameter{\n    NSLog(@"SelectorNoParameter");\n}\n\n')])])]),t("p",[e._v("传递一个参数")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('[self performSelector:@selector(SelectorOneParameter:) withObject:@"firstParameter"];\n\n- (void)SelectorOneParameter:(NSString *)first{  \n    NSLog(@"Logs: %@", first);\n}\n\n')])])]),t("p",[e._v("传递两个参数")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('[self performSelector:@selector(SelectorFirstParameter:SecondParameter:) withObject:@"firstParameter" withObject:@"secondParameter"];\n\n- (void)SelectorFirstParameter:(NSString *)first SecondParameter:(NSString *)second{\n    NSLog(@"Logs %@ %@", first, second);\n}\n\n')])])]),t("h2",{attrs:{id:"performselector的位置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#performselector的位置"}},[e._v("#")]),e._v(" performSelector的位置")]),e._v(" "),t("p",[e._v("在NSObject.h中的方法\n1、 - (id)performSelector:(SEL)aSelector;\n2、 - (id)performSelector:(SEL)aSelector withObject:(id)object;\n3、 - (id)performSelector:(SEL)aSelector withObject:(id)object1 withObject:(id)object2;\n三个方法均为同步执行，与线程无关，在主线程和子线程中均可调用。等同于直接调用该方法。\n与直接调用方法区别：直接调用编译时会自动校验。performSelector在运行时去找方法，在编译时不做校验。")]),e._v(" "),t("p",[e._v("在NSRunloop.h中的方法\n1、- (void)performSelector:(SEL)aSelector withObject:(nullable id)anArgument afterDelay:(NSTimeInterval)delay inModes:(NSArray"),t("NSRunLoopMode",[e._v(" *)modes;\n2、- (void)performSelector:(SEL)aSelector withObject:(nullable id)anArgument afterDelay:(NSTimeInterval)delay;")])],1),e._v(" "),t("p",[e._v("3.1、这两个方法为异步执行，delay值为0，仍为异步执行。\n1、在主线程执行，方法调用成功。\n2、在子线程执行，需要开启子线程Runloop，方法才可以调用成功。\n注意：调用该方法之前或在该方法所在的VC释放时主动调用取消函数，以确保不会内存泄露。")]),e._v(" "),t("p",[e._v("在NSThread.h中的方法\n1、在主线程调用方法\n1、- (void)performSelectorOnMainThread:(SEL)aSelector withObject:(nullable id)arg waitUntilDone:(BOOL)wait modes:(nullable NSArray<NSString *> *)array;\n2、- (void)performSelectorOnMainThread:(SEL)aSelector withObject:(nullable id)arg waitUntilDone:(BOOL)wait;\n在主线程和子线程中均可执行，都会在主线程调用Selector方法。")]),e._v(" "),t("p",[e._v("1、在子线程中设置wait值\nwait=YES：当前线程被阻塞，主线程执行完Selector，接着执行。\nwait=NO：当前线程不被阻塞。")]),e._v(" "),t("p",[e._v("2、在主线程中设置wait值\nwait=YES：等待Selector执行完，再接着执行。\nwait=NO：不等待Selector执行完，接着执行。")]),e._v(" "),t("p",[e._v("在指定线程调用方法\n(void)performSelector:(SEL)aSelector onThread:(NSThread *)thr withObject:(nullable id)arg waitUntilDone:(BOOL)wait modes:(nullable NSArray<NSString *> *)array API_AVAILABLE(macos(10.5), ios(2.0), watchos(2.0), tvos(9.0));\n(void)performSelector:(SEL)aSelector onThread:(NSThread *)thr withObject:(nullable id)arg waitUntilDone:(BOOL)wait API_AVAILABLE(macos(10.5), ios(2.0), watchos(2.0), tvos(9.0));")]),e._v(" "),t("p",[e._v("开启子线程在后台运行\n(void)performSelectorInBackground:(SEL)aSelector withObject:(nullable id)arg API_AVAILABLE(macos(10.5), ios(2.0), watchos(2.0), tvos(9.0));")])])}),[],!1,null,null,null);r.default=o.exports}}]);