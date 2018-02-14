import React, {Component} from 'react';
import './Form.css';

class MainForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userSearch: ''
    } 
  }

  handleChange(event) {
    const {name, value} = event.target;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div className="form-container">
        <form>
          <input 
            name="userSearch" 
            type="text" 
            onChange={ event => this.handleChange(event) } 
            placeholder="enter ingredient" />
          {/* <buttton>img</buttton> */}
        </form>
      </div>
    )
  }
}

export default MainForm;