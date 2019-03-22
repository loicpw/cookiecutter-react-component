/* ---------------------------------------------------------------------
 === "{{cookiecutter.component_name}}" ===

 author:       {{cookiecutter.author_name}}
 email:        {{cookiecutter.author_email}}
 github:       {{cookiecutter.author_github}}

 component:    {{cookiecutter.component_name}}
 description:  {{cookiecutter.component_description}}
----------------------------------------------------------------------*/
import React, { Component } from 'react';
import './{{cookiecutter.package_name}}.css';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from 'styled-theming';


/* ---------------------------------------------------------------------
 — example: background color theme —
 
 uses 'styled-theming' and 'styled-components'.
----------------------------------------------------------------------*/
/*
const backgroundColor = theme.variants('mode', 'variant', {
    default: {
        default: props => props.theme.grey,
        //light: props => props.theme.,
        //dark: props => props.theme.
    },
    primary: {
        default: props => props.theme.primary,
        //light: props => props.theme.,
        //dark: props => props.theme.
    },
    success: {
        default: props => props.theme.green,
        //light: props => props.theme.,
        //dark: props => props.theme.
    },
    warning: {
        default: props => props.theme.orange,
        //light: props => props.theme.,
        //dark: props => props.theme.
    }
});


const Button = styled.button`
  background-color: ${backgroundColor};
`;

Button.propTypes = {
  variant: PropTypes.oneOf(['default', 'primary', 'success', 'warning'])
};

Button.defaultProps = {
  variant: 'default',
};


// usage:
//        <Button>default</Button>
//        <Button variant="primary">primary</Button>
//        <Button variant="success">success</Button>
//        <Button variant="warning">warning</Button>
*/


/* ---------------------------------------------------------------------
 — "{{cookiecutter.component_name}}" —
 
 TODO
----------------------------------------------------------------------*/
class _{{cookiecutter.component_name}} extends Component {
    render() {
        return (
            <div className={this.props.className}>
                {this.props.children}
            </div>
        );
    }
}


const {{cookiecutter.component_name}} = styled(_{{cookiecutter.component_name}})`
    background-color: #A0A0A0;
`;

export default {{cookiecutter.component_name}};
