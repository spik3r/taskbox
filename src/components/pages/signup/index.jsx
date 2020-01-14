import React from 'react';
import { observer } from 'mobx-react';

import SignUp from '../../organism/SignUp';
import Logo from '../../atoms/Logo';
import Icon from '../../atoms/Icon';
import '../../../style.css';

const Signup = ({ store }) => {
  return (
    <div className="page">
      <Logo />
      <SignUp form={store.form} onSubmit={store.onSubmit} />

      <p className="icons">
        <Icon facebook />
        <Icon google />
      </p>

      <p className="footer">
        Have an account? <br />
        <a href="">Log In</a>
      </p>
    </div>
  );
};

export default observer(Signup);
