import React, { useState, Fragment } from 'react';
import { auth } from '../../../firebase';
import { useFormInput } from '../function';
import { Input } from '../../';
import PasswordChange from './PasswordChange';
import Button from '../../../components/Button';
const PasswordForget = () => {
  const [ isShow, setShow ] = useState(false);
  const [ error, setError ] = useState(null);
  const [ newPass, setnewPass ] = useState(null);
  const email = useFormInput('');

  const onClick = () => setShow(!isShow);

  const onSubmit = e => {
    e.preventDefault();
    auth
      .doPasswordReset(email.value)
      .then(res => console.log(res))
      .catch(error => setError(error));
    setnewPass(true);
  };
  return (
    <Fragment>
      {
        newPass ? <PasswordChange /> :
        !isShow ? <button onClick={onClick}>Password Forget</button> :
        <form onSubmit={e => onSubmit(e)}>
          <h3>Password Forget</h3>
          <Input {...email} type='email' placeholder='email' />
          <Button type='submit' text='Password Forget' />
        </form>}
      {error && error.message}
    </Fragment>
  );
};

export default PasswordForget;
