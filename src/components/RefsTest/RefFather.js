import React, { useRef, useEffect } from 'react'
import HocSon from './HocSon'

// Refs 转发使用是有条件的，因为你传的 Ref 并不知道到最后会传给谁，因此其实这是有破坏性的，因此除非非常简单的叶子节点在进行使用
// 其实在 HOC(高阶组件中使用 ref 转发还是很有方便的，因为使用 forwardRef 是分开接收的)
export default function RefFather() {
  const refButton = useRef();
  useEffect(() => {
      const btn = refButton.current;
      const timeId = setTimeout(() => {
          btn.style.color = 'red'
      }, 3000)
      return () => {
          clearTimeout(timeId);
      }
  }, []);
  return (
    <HocSon ref={refButton} name="refButton" />
  )
}
