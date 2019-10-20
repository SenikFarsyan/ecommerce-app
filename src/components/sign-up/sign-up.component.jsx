import React, { useState } from 'react';
import { connect } from 'react-redux';

//components
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

//actions
import { signUpStart } from '../../redux/user/user.actions';

//styles
import './sign-up.styles.scss';

const SignUp = ({ signUpStart }) => {
  const [userCredentials, setCredentials] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const { displayName, email, password, confirmPassword } = userCredentials;

  const handleChange = e => {
    const { name, value } = e.target;
    setCredentials({ ...userCredentials, [name]: value });
  };
  const handleSubmit = async e => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert('Passwords don;t match');
      return;
    }

    signUpStart({ displayName, email, password });
  };

  return (
    <div className='sign-up'>
      <h2 className='title'>I do not have account</h2>
      <span>SIgn up with your email and password</span>
      <form className='sign-up-form' onSubmit={handleSubmit}>
        <FormInput
          type='text'
          name='displayName'
          value={displayName}
          handleChange={handleChange}
          label='Display name'
          required
        />
        <FormInput
          type='email'
          name='email'
          value={email}
          handleChange={handleChange}
          label='Email'
          required
        />
        <FormInput
          type='password'
          name='password'
          value={password}
          handleChange={handleChange}
          label='Password'
          required
        />
        <FormInput
          type='password'
          name='confirmPassword'
          value={confirmPassword}
          handleChange={handleChange}
          label='Confirm Password'
          required
        />
        <CustomButton type='submit'>SIGN UP</CustomButton>
      </form>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(SignUp);
