import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
        <legend>Login</legend>
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
            <Link to="/"><button type="reset" className="btn btn-default">Cancel</button></Link>
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

export default Login;
