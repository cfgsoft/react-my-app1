import React, { Component } from 'react';

class Hello extends React.Component {
  render() {
    return (
    <div>
    	<h1>Привет, Dima</h1>
    	<p>Имя: {this.props.name}</p>
    	<p>Возраст: {this.props.age}</p>
     </div>);
  }
}

export default Hello;