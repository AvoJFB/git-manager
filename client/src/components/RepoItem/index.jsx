import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const RepoItem = ({ repo, onDeleteRepo }) => (
  <div>
    <span className="repo-name">{repo}</span>
    <br />
    <Link to={`repos/${repo}`}><button className="btn btn-primary">Open</button></Link>
    <button onClick={() => onDeleteRepo(repo)} className="btn btn-danger">Delete</button>
  </div>
);

export default RepoItem;
