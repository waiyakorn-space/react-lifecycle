import React, { Component } from 'react'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('constructor')
    console.log('---------------')
    this.state ={
      favoritecolor:'green',
      show: true
    }
  }

  delHeader = () =>{
    this.setState({show: false}) 
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

  // changeColor = () => {
  //   console.log('changeColor triggered')
  //   console.log('---------------')
  //   this.setState({favoritecolor:'orange'})
  // }

  // shouldComponentUpdate(){
  //   return true;
  // }

  getSnapshotBeforeUpdate(prevProps,prevState){
    console.log('getSnapshotBeforeUpdate')
    console.log('---------------',prevProps)
    return document.getElementById('div1').innerHTML =
    "Before the update, the favorite color was " + prevState.favoritecolor;
  }
  
  componentDidUpdate(){
    console.log('componentDidUpdate')
    console.log('---------------')
    return document.getElementById('div2').innerHTML =
    "The updated favorite color is " + this.state.favoritecolor;
    
  }

  render(){
    console.log('render')
    console.log('---------------')

    let myHeader;
    if(this.state.show){
      myHeader = <Header />;
    }

    return (
    <>
      {myHeader}
      <button onClick={this.delHeader}>Delete Header</button>
      <h1>My favorite color is {this.state.favoritecolor}</h1>
      {/* <button onClick={this.changeColor}>Change color</button> */}
      <div id="div1"></div>
      <div id="div2"></div>
    </>
    );
  }
}

class Header extends Component{
  componentWillUnmount(){
    alert('the header component is about to unmounted.');
  }

  render(){
    return(
      <h1>This is Header</h1>
    )
  }
}

export default App;