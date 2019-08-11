import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
//utils
import { auth } from '../../firebase/firebase.utils';

//icons
import { ReactComponent as Logo } from '../../assets/crown.svg';
//styles
import './header.styles.scss';

const Header = ({ currentUser }) => {
  return (
    <div className='header'>
      <Link to='/' className='logo-container'>
        <Logo className='logo' />
      </Link>
      <div className='options'>
        <Link className='option' to='/shop'>
          SHOP
        </Link>
        <Link className='option' to='/contact'>
          CONTACT
        </Link>
        {currentUser ? (
          <div className='option' onClick={() => auth.signOut()}>
            Sign Out
          </div>
        ) : (
          <Link className='option' to='signin'>
            SIGN IN
          </Link>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    currentUser: state.user.currentUser
  };
};

export default connect(mapStateToProps)(Header);
