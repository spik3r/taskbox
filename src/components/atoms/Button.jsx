import React from 'react';
import '../../style.css';

const Button = ({ children, ...props }) => (
  <button {...props}>{children}</button>
);

export default Button;
