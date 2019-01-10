import React, { useState, Fragment } from 'react';
import { auth } from '../../../firebase';
import { useFormInput } from '../function';
import { Input } from '../../';
import Button from '../../../components/Button';
const PasswordChange = () => {
  const [ error, setError ] = useState(null);
  const passwordOne = useFormInput('');
  const passwordTwo = useFormInput('');

  const onSubmit = e => {
    auth
      .doPasswordUpdate(passwordOne.value)
      .then(res => console.log(res))
      .catch(error => setError(error));

    e.preventDefault();
  };
  return (
    <Fragment>
      <form onSubmit={e => onSubmit(e)}>
        <h3>Password Change</h3>
        <Input {...passwordOne} type='password' />
        <Input {...passwordTwo} type='password' />
        <Button type='submit' text='Password Change' />
      </form>
      {error && error.message}
    </Fragment>
  );
};

export default PasswordChange;
