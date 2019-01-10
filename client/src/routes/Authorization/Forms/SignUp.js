import React, { useState, Fragment } from 'react';
import { useFormInput } from '../function';
import { auth, db } from '../../../firebase';
import { Input } from '../../';
import Button from '../../../components/Button';

const SignUp = () => {
  const [ error, setError ] = useState(null);
  const [ isShow, setShow ] = useState(false);

  const email = useFormInput('');
  const passwordOne = useFormInput('');
  const passwordTwo = useFormInput('');
  const username = useFormInput('');

  const onClick = () => setShow(!isShow);
  const onSubmit = e => {
    e.preventDefault();

    auth
      .doCreateUserWithEmailAndPassword(email.value, passwordOne.value)
      .then(authUser => {
        db
          .doCreateUser(authUser.user.uid, username.value, email.value)
          .then(res => console.log(res))
          .catch(error => setError(error));
      })
      .then(res => console.log(res))
      .catch(error => setError(error));
  };
  return (
    <Fragment>
      <form onSubmit={e => onSubmit(e)}>
        <h3>Sign Up</h3>
        <Input {...username} placeholder='username' />
        <br />
        <Input {...email} type='email' placeholder='email' />
        <br />
        <Input {...passwordOne} placeholder='password' type='password' />
        <br />
        <Input
          {...passwordTwo}
          placeholder='confirmation password'
          type='password'
        />
        <br />
        <Button type='submit' text='Sign Up' />
        <br />
        {!isShow && <Button onClick={onClick} text='Sign Up' />}
      </form>
      {error && <p>{error.message}</p>}
    </Fragment>
  );
};

export default SignUp;
