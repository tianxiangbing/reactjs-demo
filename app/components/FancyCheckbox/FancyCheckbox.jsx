import React from 'react';

let FancyCheckbox = React.createClass({
    render(){
        var {checked,title,...other}=this.props;
        var fancyClass = checked ?"FancyChecked":"FancyUnChecked";
        let fancyTitle = checked ?"X"+title:"0"+title;
        return (
            <div>
                <div {...this.props} className={fancyClass} onClick={this.props.onClick}>
                  {this.props.children}
                </div>
                <label>
                  <input {...other} checked={checked} className={fancyClass} type="checkbox"/>
                    {fancyTitle}
                </label>
            </div>
        );
    }
});

export default FancyCheckbox;