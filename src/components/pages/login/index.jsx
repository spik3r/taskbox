import React from 'react';
import { observer } from 'mobx-react';

import LogIn from '../../organism/Login';
import Logo from '../../atoms/Logo';
import Icon from '../../atoms/Icon';
import '../../../style.css';

const LogInPage = ({ store }) => (
  <div className="page">
    <Logo />
    <LogIn form={store.form} onSubmit={store.onSubmit} />

    <p className="icons">
      <Icon facebook />
      <Icon google />
    </p>

    <p className="footer">
      Don't have account? <br />
      <a href="">Sign Up</a>
    </p>
  </div>
);

export default observer(LogInPage);
