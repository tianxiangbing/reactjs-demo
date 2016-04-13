import  React from 'react';
let InnerComponent = React.createClass({
  propsTypes:{
    value:React.PropTypes.object.isRequired
  },
  shouldComponentUpdate(nextProps,nextState){
    console.log(this.props.value.foo,nextProps.value.foo)
    console.log(this.props.value.foo !==nextProps.value.foo)
    console.log(this.props.value ===nextProps.value)
    return this.props.value.foo !==nextProps.value.foo;
  },
  render(){
    return <div>{this.props.value.foo}</div>;
  }
});
export default InnerComponent;
