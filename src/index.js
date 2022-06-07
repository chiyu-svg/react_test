// 为什么 React 没有被使用依然需要引入？  因为 JSX 只是 React.createElement(component, props, ...children) 的语法糖，因此在编译的时候，需要确保 React 在作用域内
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// ReactDOM 负责更新 DOM 来与 React 元素保持一致
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // 这个组件会在 dev Server 让组件渲染两次
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
