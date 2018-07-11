import React, { Component } from 'react';

class Hello extends React.Component {
	constructor(props) {
    	super(props);

        this.state = {welcome: "Добро пожаловать на сайт!",
                      label: "Нажми!"};

        this.press = this.press.bind(this);
    }

    press(){
    	let className = (this.state.class==="off")?"on":"off";
        this.setState({class: className});
        this.setState({welcome: "Нажали"});
    }

    render() {  	
    	return (    	
    	<div>
        	<h2>{this.state.welcome}</h2>
    		<h1>Привет, Dima</h1>
    		<p>Имя: {this.props.name}</p>
    		<p>Возраст: {this.props.age}</p>
    		<button onClick={this.press} 
    		        className={this.state.class}
    		>
    		        {this.state.label}
    		 </button>
     	</div>);
  	}
}

Hello.defaultProps = {name: 'Dmitry', age: 40}

export default Hello;