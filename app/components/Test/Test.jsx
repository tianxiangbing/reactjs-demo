import React from 'react';

export default class Test extends React.Component {
    constructor(props){
        super(props);
        console.log('contructor');
        this.state={second:1};
        console.log(this.state)
    }
    tick(){
        console.log(this.state);
        this.setState({second:this.state.second +1});
    }
    componentDidMount(){
        this.interval = setInterval(this.tick.bind(this),1000);
    }
    componentWillUnMount(){
        clearInterval(this.interval);
    }
    render(){
        return(
            <div>
            我就像一个SB:{this.state.second}
            </div>
        )
    }
}