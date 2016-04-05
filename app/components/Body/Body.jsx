import styles from './_Body.scss';
import React from 'react';
import Menu from '../Menu/Menu';
import TickTock from "../TickTock/TickTock";
import FacyCheckbox from "../FancyCheckbox/FancyCheckbox";

let { PropTypes } = React;


var Body = React.createClass({
  render() {
    return (
      <div className={styles.body}>
        <h1 className={styles.header}>React Seed test123</h1>
        <p>定时器:<TickTock></TickTock></p>
        <p>Here is some example data:</p>
        <Menu items={this.props.items} />
        <h2>Getting1 123</h2>
        <FacyCheckbox title="123" checked={true} onClick={console.log.bind(console)}>
          Hello,World!
        </FacyCheckbox>
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