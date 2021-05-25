import React, { Component } from 'react'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('constructor')
    console.log('---------------')
    this.state ={
      favoritecolor:'green'
    }
  }

  // static getDerivedStateFromProps(props,state){
  //   console.log('getDerivedStateFromProps')
  //   console.log(props,state)
  //   console.log('---------------')
  //   return{
  //     favoritecolor: props.favcol //จาก index.js
  //   }
  // }

  componentDidMount(){
    console.log('componentDidMount')
    console.log('---------------')
    setTimeout(()=>{
      this.setState({favoritecolor:'yellow'});
    },3000);
  }

  render(){
    console.log('render')
    console.log('---------------')
    return (
    <>
      <h1>My favorite color is {this.state.favoritecolor}</h1>
    </>
    );
  }
}

export default App;
