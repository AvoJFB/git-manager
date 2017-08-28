import React from 'react';
import axios from 'axios';
import config from '../../config';

class RepoPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.match.params.name,
    };
  }

  async componentWillMount() {
    const res = await axios.get(`${config.API_URL}/repos/${this.state.name}`);
    console.log(res);
  }

  render() {
    return (
      <div>
        <h3>{this.state.name}</h3>
      </div>
    );
  }
}

export default RepoPage;
