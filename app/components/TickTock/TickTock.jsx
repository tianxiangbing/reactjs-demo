"use strict";
import React from 'react';
let SetIntervalMixin = {
    componentWillMount(){
        this.intervals= [];
    },
    setInterval(){
        this.intervals.push(setInterval.apply(null,arguments));
    },
    componentWillUnmount(){
        this.interval.map(clearInterval);
    }
}
let TickTock = React.createClass({
    mixins:[SetIntervalMixin],
    getInitialState(){
        return {seconds:0};
    },
    componentDidMount(){
        this.setInterval(this.tick,1000);
    },
    tick(){
        this.setState({seconds:this.state.seconds+1});
    },
    render(){
        return(
            <p>{this.state.seconds}</p>
        )
    }
});
export default TickTock;