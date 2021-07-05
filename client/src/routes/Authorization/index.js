import React, { useState, useEffect } from 'react';
import { auth, firebase } from '../../firebase';
import PasswordForget from './Forms/PasswordForget';
import SignIn from './Forms/SignIn';
import SignUp from './Forms/SignUp';
import { Layout, ContainerPage, Typed } from '../';
import backgroundForm from './img/backgroundForm.jpg';
const App = () => {
  const [ authUser, setAuthUser ] = useState(null);
  useEffect(
    () => {
      firebase.auth.onAuthStateChanged(authUser => {
        setAuthUser(authUser);
        localStorage.setItem('authUser', JSON.stringify(authUser));
      });
    },
    [ authUser ],
  );
  return (
    <Layout backgroundImage={backgroundForm}>
      <ContainerPage>
        <Typed />
        {
          authUser ? <div>
            <h1>{authUser.email}</h1>
            <button onClick={auth.doSignOut}>SignOut</button>

            <hr />
            <PasswordForget />
          </div> :
          <div>
            <SignUp />

            <SignIn />
          </div>}
      </ContainerPage>
    </Layout>
  );
};

export default App;
