import React, { Component } from 'react';
import Child from './Child';

class Parent extends Component{

    constructor(props){
        super(props);
        console.log('Parent :  constructor Invoked');
        this.state = {
            name : 'Manendra'
        }

        

    }

    componentWillMount(){
        console.log('Parent :  componentWillMount Invoked');
    }

    componentWillReceiveProps(nextProps, nextState){
        console.log('Parent :  componentWillReceiveProps Invoked');
        //console.log('nextProps : ', nextProps);
        //console.log('nextState : ', nextState);
    }
    shouldComponentUpdate(nextProps, nextState){
        return true;
    }
    
    setName(){
        this.setState({ name : 'Shobhit'}, () => { });
        //this.forceUpdate();
    }

    unMountChild(){
        this.setState({ name : 'Amit'}, () => { });
    }
    

    render(){
        console.log('Parent :  render Invoked');

        if(this.state.name === 'Amit'){
            return (<div>Hello World</div>)
        }

        return (
                <div> Parent Name : {this.state.name}
                    <Child name={this.state.name}/>
                    <button onClick={this.setName.bind(this)}>Change State</button>
                    <button onClick={this.unMountChild.bind(this)}>Unmount Child</button>
                </div>
                    
            );
    }

    componentDidMount(){
        console.log('Parent :  componentDidMount Invoked');
    }
}

export default Parent;