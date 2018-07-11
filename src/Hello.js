import React from 'react';

class Hello extends React.Component {
	constructor(props) {
    	super(props);

        this.state = {welcome: "Добро пожаловать на сайт!",
                      label: "Нажми!",
                  	  date: new Date()};

        this.press = this.press.bind(this);
    }

	componentWillReceiveProps(nextProps) {
		console.log("componentWillReceiveProps()");
	}
	componentWillMount(){
	   console.log("componentWillMount()");
	}
	componentDidMount(){
	   console.log("componentDidMount()");

	   /*this.timerId = setInterval(()=> this.tick(), 5000);*/
	}
	componentWillUnmount(){
	   console.log("componentWillUnmount()");
	}
	shouldComponentUpdate(){
	   console.log("shouldComponentUpdate()");
	   return true;
	}
	componentWillUpdate(){
	   console.log("componentWillUpdate()");
	}
	componentDidUpdate(){
	   console.log("componentDidUpdate()");
	}

    press(e){
    	let className = (this.state.class==="off")?"on":"off";
        this.setState({class: className});
        this.setState({welcome: "Нажали",
        	           date: new Date()
                      });        

        /*console.log(e);*/
    }

    tick() {
      this.setState({
        date: new Date()
      });
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
    		 <h2>Текущее время {this.state.date.toLocaleTimeString()}.</h2>
     	</div>);
  	}
}

Hello.defaultProps = {name: 'Dmitry', age: 40}

export default Hello;