import { Component } from "react";

export default class Clock extends Component {
  constructor(props) {
    super(props);
    // 每个组件的 state 只能在自己的组件中被修改，或者把组件的 state 传递给下层组件，因此组件之间的数据流是单层的
    this.state = {
      date: 0,
      count: 1,
      sumCount: 0,
    };
  }
  tick() {
    // 通过 setState 进行修改状态,注意这里是单独修改 data 这一个属性
    // 因为 state 的每个数据状态，对应一个显示页面状态，所以在修改 state 的状态的同时要进行重新 render， 因此使用 setState 进行修改 state
    this.setState((state) => ({
      date: state.date + 1,
    }));
  }
  // 注意当多次修改 setState 的时候， 会压缩到一起执行，因此当使用上一次修改的 state 数据，会出现异常
  // 这时候需要使用回调函数的方式进行操作
  updateCount() {
    this.setState({ count: 10 });
    this.setState((state) => ({ sumCount: state.count }));
  }
  // 阻止默认行为， 需要手动 preventDefault
  redirectOut(event){
    event.preventDefault();
    console.log('@@@@event', event);
  }
  // 因为 React 绑定监听需要绑定一个函数所以，传值可以通过闭包的方式进行传值
  getParams(id){
    return (event) => {
      event.preventDefault();
      console.log('@@@@id', id);
      console.log('@@@@event', event);
    }
  }
  // 挂载完毕生命周期函数， 会在 DOM 挂载完毕的时候执行
  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.tick();
    }, 2000);
  }
  // 将要卸载生命周期函数，会在将要卸载 Dom 函数的时候执行
  componentWillUnmount() {
    clearInterval(this.intervalId);
  }
  render() {
    return (
      <div>
        {this.state.date}
        {/* class 组件传值的使用方式 */}
        <p>{this.props.hello}</p>
        <p>count: {this.state.count}</p>
        <p>sumCount: {this.state.sumCount}</p>
        {/* 在 React 中绑定一个事件需要传入一个函数，而不是函数调用 */}
        <button onClick={this.updateCount.bind(this)}>修改 count</button>
        <br/>
        <a href="https://www.baidu.com" onClick={this.redirectOut}>baidu.com</a>
        <br/>
        <a onClick={this.getParams(3)} href="#">click here</a>
      </div>
    );
  }
}