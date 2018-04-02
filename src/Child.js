import React, { Component } from 'react';


class Child extends Component{

    constructor(props){
        super()
        console.log('Child :  constructor Invoked');
    }

    componentWillMount(){
        console.log('Child :  componentWillMount Invoked');
    }

    componentDidMount(){
        console.log('Child :  componentDidMount Invoked');
    }

   componentWillReceiveProps(newProps, newState){

    console.log('Child :  componentWillReceiveProps Invoked');
    console.log('newProps : ', oldProps);
    console.log('old props : ', this.props);

   }

   shouldComponentUpdate(nextProps, nextState){
    console.log('Child :  shouldComponentUpdate Invoked');
    return true;
    }

    componentWillUpdate(){
        console.log('Child :  componentWillUpdate Invoked');
    }

    componentDidUpdate(prevProps, prevState){
        console.log('Child :  componentDidUpdate Invoked');
    }

    componentWillUnmount(){
        console.log('Child :  componentWillUnmount Invoked');
    }

    render(){
        console.log('Child :  render Invoked');
        return(
            <div>Name : {this.props.name} </div>
        )
    }

   

}

export default Child;

