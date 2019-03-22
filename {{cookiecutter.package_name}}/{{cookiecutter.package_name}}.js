/*
* === "{{cookiecutter.component_name}}" ===
*
* author:       {{cookiecutter.author_name}}
* email:        {{cookiecutter.author_email}}
* github:       {{cookiecutter.author_github}}
*
* component:    {{cookiecutter.component_name}}
* description:  {{cookiecutter.component_description}}
*
*/
import React, { Component } from 'react';
import './{{cookiecutter.package_name}}.css';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from 'styled-theming';


/*
* — example: background color theme —
* 
* uses 'styled-theming' and 'styled-components'.
*
*/
//const backgroundColor = theme.variants('mode', 'variant', {
//    default: {
//        default: props => props.theme.grey,
//        //light: props => props.theme.,
//        //dark: props => props.theme.
//    },
//    primary: {
//        default: props => props.theme.primary,
//        //light: props => props.theme.,
//        //dark: props => props.theme.
//    },
//    success: {
//        default: props => props.theme.green,
//        //light: props => props.theme.,
//        //dark: props => props.theme.
//    },
//    warning: {
//        default: props => props.theme.orange,
//        //light: props => props.theme.,
//        //dark: props => props.theme.
//    }
//});
//
//
//const Button = styled.button`
//  background-color: ${backgroundColor};
//`;
//
//Button.propTypes = {
//  variant: PropTypes.oneOf(['default', 'primary', 'success', 'warning'])
//};
//
//Button.defaultProps = {
//  variant: 'default',
//};



/*
* — "{{cookiecutter.component_name}}" declaration —
* 
* TODO
*
*/
class {{cookiecutter.component_name}} extends Component {
  render() {
    return (
      <div className="{{cookiecutter.component_name}}">
//        <Button>default</Button>
//        <Button variant="primary">primary</Button>
//        <Button variant="success">success</Button>
//        <Button variant="warning">warning</Button>
      </div>
    );
  }
}


export default {{cookiecutter.component_name}};
