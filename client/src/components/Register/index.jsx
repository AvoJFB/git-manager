import React from 'react';
import { Link } from 'react-router-dom';

export default class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      username: '',
      password: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    return (
      <form className="form-horizontal text-center">
        <legend>Register</legend>
        <div className="form-group">
          <div className="col-lg-6 col-lg-offset-3">
            <input
              value={this.state.firstName}
              onChange={this.handleInputChange}
              type="text"
              className="form-control"
              name="firstName"
              placeholder="First Name"
            />
          </div>
        </div>
        <div className="form-group">
          <div className="col-lg-6 col-lg-offset-3">
            <input
              value={this.state.lastName}
              onChange={this.handleInputChange}
              type="text"
              className="form-control"
              name="lastName"
              placeholder="Last Name"
            />
          </div>
        </div>
        <div className="form-group">
          <div className="col-lg-6 col-lg-offset-3">
            <input
              value={this.state.username}
              onChange={this.handleInputChange}
              type="text"
              className="form-control"
              name="username"
              placeholder="Username"
            />
          </div>
        </div>
        <div className="form-group">
          <div className="col-lg-6 col-lg-offset-3">
            <input
              value={this.state.password}
              onChange={this.handleInputChange}
              type="password"
              className="form-control"
              name="password"
              placeholder="Password"
            />
          </div>
        </div>
        <div className="form-group">
          <div className="col-lg-6 col-lg-offset-3">
            <Link to="/">
              <button type="reset" className="btn btn-default">Cancel</button>
            </Link>
            <button
              type="submit"
              className="btn btn-primary"
            >Submit</button>
          </div>
        </div>
      </form>
    );
  }
}
