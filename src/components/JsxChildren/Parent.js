import React from 'react'


export default function Parent(props) {
  const { children: childrens } = props;
  // 如果传入多个元素，会把子组件转成一个数据，每个子元素都是传入的标签
  console.log('@@@@childrens', childrens);
  return (
    <div>
      { childrens[0] }
      { childrens[1] }
    </div>
  )
}
