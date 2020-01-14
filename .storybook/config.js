import { configure } from '@storybook/react';
import requireContext from 'require-context.macro';
// import '../src/index.css';
import '../src/style.css';

const req = requireContext('../src/components', true, /\.stories\.js$/);

configure(req, module);