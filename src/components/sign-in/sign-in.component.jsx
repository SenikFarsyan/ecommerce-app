import React, { Component } from 'react';

//components
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

//styles
import './sign-in.styles.scss';

class SignIn extends Component {
  state = {
    email: '',
    password: ''
  };
  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      email: '',
      password: ''
    });
  };
  handleChange = e => {
    const { value, name } = e.target;
    this.setState({
      [name]: value
    });
  };
  render() {
    const { email, password } = this.state;
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
          <CustomButton type='submit'>Sign in</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignIn;
