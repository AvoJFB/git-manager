import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import config from '../../../config';

export default class NewRepo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  async handleSubmit(event) {
    event.preventDefault();
    const repo = {
      name: this.state.name,
    };
    try {
      await axios.post(`${config.API_URL}/repos`, repo);
      console.log(`Repository ${repo.name} created succesfully`);
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="form-horizontal text-center">
          <legend>Create Repository</legend>
          <div className="form-group">
            <div className="col-lg-6 col-lg-offset-3">
              <input
                value={this.state.name}
                onChange={this.handleInputChange}
                type="text"
                className="form-control"
                name="name"
                placeholder="Name"
              />
            </div>
          </div>
          <div className="form-group">
            <div className="col-lg-6 col-lg-offset-3">
              <Link to="/"><button type="reset" className="btn btn-default">Cancel</button></Link>
              <button
                type="submit"
                className="btn btn-primary"
              >Submit</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
