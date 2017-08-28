import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import config from '../../config';

class ReposPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repoNames: [],
    };
  }

  async componentWillMount() {
    const res = await axios.get(`${config.API_URL}/repos`);
    this.setState({
      repoNames: res.data,
    });
  }

  render() {
    return (
      <div>
        <h2>Repos Page</h2>
        {this.state.repoNames ?
          <ul>
            {this.state.repoNames.map(repo => <li key={repo}>{repo}<Link to={`repos/${repo}`}><button>Open</button></Link></li>)}
          </ul> : <h3>No Repos</h3>}
      </div>
    );
  }
}

export default ReposPage;
