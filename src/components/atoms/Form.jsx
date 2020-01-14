import React from 'react';
import { observer } from 'mobx-react';
import '../../style.css';

const Form = ({ onSubmit = e => e.preventDefault(), children }) => (
  <form onSubmit={onSubmit} noValidate>
    {children}
  </form>
);

export default observer(Form);
