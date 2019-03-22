import React from 'react';
import ReactDOM from 'react-dom';
import {{cookiecutter.component_name}} from '../{{cookiecutter.package_name}}';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<{{cookiecutter.component_name}} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
