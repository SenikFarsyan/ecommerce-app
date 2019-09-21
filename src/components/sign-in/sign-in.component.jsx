import React, { Component } from 'react';
import { connect } from 'react-redux';
//components
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

//actions for saga
import {
  googleSignInStart,
  emailSignInStart
} from '../../redux/user/user.actions';

//styles
import './sign-in.styles.scss';

class SignIn extends Component {
  state = {
    email: '',
    password: ''
  };
  handleSubmit = async e => {
    e.preventDefault();
    const { emailSignInStart } = this.props;
    const { email, password } = this.state;

    emailSignInStart(email, password);
  };
  handleChange = e => {
    const { value, name } = e.target;
    this.setState({
      [name]: value
    });
  };
  render() {
    const { email, password } = this.state;
    const { googleSignInStart } = this.props;
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type='email'
            name='email'
            label='email'
            handleChange={this.handleChange}
            value={email}
            required
          />
          <FormInput
            type='password'
            name='password'
            label='password'
            handleChange={this.handleChange}
            value={password}
            required
          />
          <div className='buttons'>
            <CustomButton type='submit'>Sign in</CustomButton>
            <CustomButton
              type='button'
              onClick={googleSignInStart}
              isGoogleSignIn
            >
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) =>
      dispatch(emailSignInStart({ email, password }))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(SignIn);
