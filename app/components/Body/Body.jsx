import styles from './_Body.scss';
import React from 'react';
import Menu from '../Menu/Menu';
import TickTock from "../TickTock/TickTock";
import FacyCheckbox from "../FancyCheckbox/FancyCheckbox";
import Input from "../Input/Input";
import Select from "../Select/Select";
import InnerComponent from '../InnerComponent/InnerComponent';

let { PropTypes } = React;


var Body = React.createClass({
  getInitialState(){
    return {value:{foo:'bar'}};
  },
  onParentCallback(e){
    this.setState({value:e});
    console.log('parent:'+e);
    console.log('parent-state:'+this.state.value);
  },
  onClick(e){
    var value = this.state.value;
    value.foo+='bar';
    this.setState({value:value});
  },
  render() {
    return (
      <div className={styles.body}>
        <h1 className={styles.header}>React Seed test123</h1>
        <p>定时器:<TickTock></TickTock></p>
        <p>Here is some example data:</p>
        <Input parentCallback={this.onParentCallback}/>
        <Select/>
        <Menu items={this.props.items} />
        <h2>Getting1 123</h2>
        <FacyCheckbox title="123" checked={true} onClick={console.log.bind(console)}>
          Hello,World!
        </FacyCheckbox>
        InnerComponent=========
        <InnerComponent value={this.state.value}/>
        <a onClick={this.onClick}>Click me change Foo</a>
        <p>Here's a couple of things you can do to get familiar with the project:</p>
        <ol>
          <li>Change some of the text the body component. You can find it here: <pre>./app/components/Body/Body.jsx</pre></li>
          <li>Style up the Body component. Give it a background color. (You shouldn't need to reload your browser to view the changes). Find the Sass file here: <pre>./app/components/Body/_Body.scss</pre></li>
          <li>Change the data rendered above. Look in: <pre>./app/components/App/App.jsx</pre> Understand how data flows from the actions into the stores and then into the Body component.</li>
        </ol>
      </div>
    );
  },
  defaultProps : {
    items: []
  },
  propTypes : {
    items: PropTypes.array.isRequired
  }
});

export default Body;
