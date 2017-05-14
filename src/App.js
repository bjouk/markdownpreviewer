import React, { Component } from 'react';
import DOMPurify from 'dompurify'
import logo from './logo.svg';
import './App.css';
import {Grid,Row,Col,FormControl} from 'react-bootstrap';
var marked = require('marked');

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state={text:''}
		this.handleInput=this.handleInput.bind(this)
	}
	handleInput(event){
		this.setState({text: event.target.value})

	}
  render() {	
    return (<div>
    	<h1>Markdown Previewer</h1>
    	<Grid>
    	<Row>
    	<Col xs={6} md={6}>
    	<TextInputer value={this.state.text} handleInput={this.handleInput}/>
    	</Col>
    	<Col xs={6} md={6}>
    	<MarkDownPreviewer value={this.state.text}/>
    	</Col>
    	</Row>
    	</Grid>
    	</div>
    );
  }
}

class MarkDownPreviewer extends React.Component{
	constructor(props) {
		super(props);
		
	}
	render() {
		let textMark=marked(this.props.value)
    return (
    	<div className="content" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(textMark)}}>
    	</div>
    	);
    }
  }
class TextInputer extends React.Component{
	constructor(props) {
		super(props);
	}
	render() {
    return (<FormControl bsSize='large' componentClass="textarea" type='text' value={this.props.value} onChange={this.props.handleInput}></FormControl>
    );
  }
}

export default App;