import React from 'react';
import '../../style.css';

const Label = ({ children, ...props }) => <label {...props}>{children}</label>;

export default Label;
