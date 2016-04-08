import React from 'react';

let Select = React.createClass({
    render(){
        return(
          <select defaultValue={['B','C']} multiple={true}>
              <option value="A">Apple</option>
              <option value="B">Banana</option>
              <option value="C">Car</option>
          </select>
        );
    }
});
export default Select;