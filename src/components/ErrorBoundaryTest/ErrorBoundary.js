import React, { Component } from "react";

/**
 * 错误边界一个组件， 且目前来看只能是 class 组件， 并且错误触发处理，打印错误异常都是固定的写法。
 */
export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.log(`error: ${error}, errorInfo: ${errorInfo}`);
  }
  render() {
    if (this.state.hasError) {
      return <h1 style={{ color: "red" }}>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}
