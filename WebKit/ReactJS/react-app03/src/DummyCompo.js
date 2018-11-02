import React, {Component} from 'react';

class DummyCompo extends Component{

    constructor(){
        super();
        this.state={
            internalMsg: "This is an internal message",
            len:0
        };
        this.updateIntMsgLEn = this.updateIntMsgLEn.bind(this);
    }
    updateIntMsgLEn(){
        this.setState({len:this.state.internalMsg.length});
    }
    componentWillMount(){
        console.log((new Date())+" component will mount shortly!");
    }
    componentDidMount(){
        console.log((new Date())+" component mounted!");
    }
    componentWillReceiveProps(){
        console.log((new Date())+" component will receive props!");
    }
    componentWillUpdate(){
        console.log((new Date())+" component updated!");
    }

    componentWillUnmount(){
        console.log((new Date())+" component died!");
    }
    render(){
        console.log((new Date())+" component rendering!");
        return(
            <React.Fragment>
            <p>Internal Message: <strong>{this.state.internalMsg}</strong></p>
            <p>Internal Message Len: <strong>{this.state.len}</strong></p>
            <p>Parent Message: <strong>{this.props.message}</strong></p>
            </React.Fragment>
        );
    }
}

export default DummyCompo;