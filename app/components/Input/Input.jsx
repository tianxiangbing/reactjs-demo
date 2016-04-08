import React from 'react';

let Input = React.createClass({
    getInitialState(){
        return {value:'Hello!'};
    },
    handleChange(event){
        this.setState({value:event.target.value.substr(0,40)});
        console.log('child:'+event.target.value)
        this.props.parentCallback(event.target.value);
    },
    render(){
        var value = this.state.value;
        return (
            <input type="text" defaultValue={value} onChange={this.handleChange}/>
        );
    }
});
export default Input;