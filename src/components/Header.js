import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const styles = {
    header: {
      fontFamily: "'Srisakdi', cursive",
      paddingLeft: "10px",
      fontSize: "50px",
      align: 'center'
    }
  }

  return (
    <nav>
      <div className="nav-wrapper blue">
        <a style={styles.header} href="/" className="brand-logo">Quotie</a>
        <ul id="nav" className="right">
          <li><Link to='/'>QOD</Link></li>
          <li><Link to='/search'>Search</Link></li>
          <li><Link to='/favorites'>Favorites</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;