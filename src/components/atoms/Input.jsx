import React from 'react';
import '../../style.css';

const Input = ({ type = 'text', ...props }) => <input type={type} {...props} />;

export default Input;
