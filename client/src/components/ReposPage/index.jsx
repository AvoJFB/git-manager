import React from 'react';
import axios from 'axios';
import RepoItem from '../RepoItem';
import config from '../../../config';
import './styles.css';

export default class ReposPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repoNames: [],
    };

    this.handleRepoDelete = this.handleRepoDelete.bind(this);
  }

  async componentWillMount() {
    const res = await axios.get(`${config.API_URL}/repos`);
    this.setState({
      repoNames: res.data,
    });
  }

  async handleRepoDelete(deleteRepoName) {
    try {
      const res = await axios.delete(`${config.API_URL}/repos/${deleteRepoName}`, { withCredentials: true });
      console.log(res);
      this.state.repoNames.filter(repoName => repoName !== deleteRepoName);
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <div>
        <h2>Repos Page</h2>
        <br />
        {this.state.repoNames ?
          <ul className="repos-list">
            {this.state.repoNames.map(repo => (<li key={repo}>
              <RepoItem onDeleteRepo={this.handleRepoDelete} repo={repo} />
            </li>))}
          </ul> : <h3>No Repos</h3>}
      </div>
    );
  }
}
