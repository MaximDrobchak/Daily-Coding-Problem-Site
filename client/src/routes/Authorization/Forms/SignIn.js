import React, { useState, Fragment } from 'react';
import { useFormInput } from '../function';
import { auth } from '../../../firebase';
import { Input } from '../../';
import Button from '../../../components/Button';
const SignIn = () => {
  const email = useFormInput('');
  const password = useFormInput('');

  const [ error, setError ] = useState(null);

  const onSubmit = e => {
    e.preventDefault();

    auth
      .doSignInWithEmailAndPassword(email.value, password.value)
      .then(res => console.log(res))
      .catch(error => setError(error));
  };
  return (
    <Fragment>
      <form onSubmit={e => onSubmit(e)}>
        <h3>Sign In</h3>
        <Input type='email' {...email} placeholder='email' />
        <br />
        <Input type='password' {...password} placeholder='password' />
        <br />
        <Button type='submit' text='Sign In' />
      </form>
      {error && <p style={{ color: 'white' }}>{error.message}</p>}
    </Fragment>
  );
};

export default SignIn;
