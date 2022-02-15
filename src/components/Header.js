import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
  return (
    <header className="App-header">
      <ul className="container">
        <li key="home">
          <Link to="/">My Site</Link>
        </li>
        <li key="new">
          <Link to="/new">New Post</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;