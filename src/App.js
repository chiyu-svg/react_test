import React, { Suspense } from "react";
import "./App.css";
import HelloWorld from "./components/HelloWorld";
import Clock from "./components/Clock";
import SendForm from "./components/SendForm";
import { Father } from "./components/tree";
import ErrorBoundaryTest from "./components/ErrorBoundaryTest/ErrorTest";
import ErrorBoundary from "./components/ErrorBoundaryTest/ErrorBoundary";
import RefFather from "./components/RefsTest/RefFather";
import { Leaf, Tree } from "./components/HocComponent";
import PointSyntax from './components/PointSyntax'
import { Parent, SonOne, SonSecond } from './components/JsxChildren'
// ReactLazy 在其它组件加载后面执行
const ReactLazy = React.lazy(() => import("./components/reactLazy"));
function App() {
  const name = "zhansagn";
  // 其实是调用了 React.createElement() 返回一个 React 元素
  const element = <h1>{name}</h1>;

  return (
    <div className="App">
      {/* 渲染组件都是以大写字母开头，小写字母会被认为是 Dom 标签 */}
      <HelloWorld />
      <Clock hello="Hello world" />
      <SendForm />
      {/* context 共享数据 */}
      <Father />
      {/* 懒加载 */}
      <Suspense fallback={<div>Loading...</div>}>
        <ReactLazy />
      </Suspense>
      {/* 错误边界 */}
      <ErrorBoundary>
        <ErrorBoundaryTest />
      </ErrorBoundary>
      {/* Refs 转发 */}
      <RefFather />
      {/* HOC  */}
      <Leaf  name="I'am leaf sub Element" age={18}/>
      <Tree  name="I'am tree sub Element" age={39}/>
      {/* JSX 类型中的点语法 */}
      <PointSyntax.ShowState />
      <PointSyntax.UpdateStet value="I like apple"/>
      {/* JSX 传入子元素 */}
      <Parent>
        <SonOne />
        <SonSecond />
        <p>This is test Html element</p>
      </Parent>
    </div>
  );
}

export default App;
