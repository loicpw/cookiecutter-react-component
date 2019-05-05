/**
 * {{cookiecutter.component_name}}
 *
 * component:    {{cookiecutter.component_name}}
 * description:  {{cookiecutter.component_description}}
 *
 * @exports {{cookiecutter.component_name}}
 */
import React, { Component } from 'react';
import './{{cookiecutter.package_name}}.css';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from 'styled-theming';

// XXX
// ---------------------------------------------------------------------
// if using react-store:
// ---------------------------------------------------------------------
// import { withStore } from '@spyna/react-store';
// export default withStore(MyComponent);
// usage inside the component:
//  const store = this.props.store;
//  const someState = store.get('key', default);
//  store.set('key', value);
// ---------------------------------------------------------------------

// XXX
// ---------------------------------------------------------------------
// if using theme:
// ---------------------------------------------------------------------
// =>> if mode only
//const BG_COLOR = theme('mode', {                                               
//    default: props => props.theme.colors.primary,
//    light: props => props.theme.colors.primary,
//});
//
// =>> if mode and variant
//const BG_COLOR = theme.variants('mode', 'variant', {
//    default: {
//        default: props => props.theme.colors.primary,
//        light: props => props.theme.colors.primary,
//    },
//    success: {
//        default: props => props.theme.colors.primary,
//        light: props => props.theme.colors.primary,
//    },
//    warning: {
//        default: props => props.theme.colors.primary,
//        light: props => props.theme.colors.primary,
//    }
//});
//Button.propTypes = {
//  variant: PropTypes.oneOf(['default', 'success', 'warning'])
//};
//Button.defaultProps = {
//  variant: 'default',
//};
//<Button>default button</Button>
//<Button variant="success">success button</Button>
// ---------------------------------------------------------------------


/**
 * {{cookiecutter.component_name}}
 *  
 * @todo not implemented
 *
 * +--------------------------------+
 * |            child 1             |
 * +--------------------------------+
 * |            child 2             |
 * +--------------------------------+
 * |            ...                 |
 * +--------------------------------+
 * |            child N             |
 * +--------------------------------+
 * 
 * @param {type}   var           Description.
 * @param {type}   [var]         Description of optional variable.
 * @param {type}   [var=default] Description of optional variable with default variable.
 * @param {Object} objectVar     Description.
 * @param {type}   objectVar.key Description of a key in the objectVar parameter.
 *
 * @example
 * <body>
 *   <{{cookiecutter.component_name}}>
 *     <p>child 1</p>
 *     <p>child 2</p>
 *   </{{cookiecutter.component_name}}>
 * </body>
 */
class _{{cookiecutter.component_name}} extends Component {
    /**
     * @constructs {{cookiecutter.component_name}}
     */
    constructor() {
        super(props);
    }

    /*
     * render {{cookiecutter.component_name}}
     */
    render() {
        return (
            <div className={this.props.className}>
                {this.props.children}
            </div>
        );
    }
}


// prop types
_{{cookiecutter.component_name}}.propTypes = {
  //variant: PropTypes.oneOf(['default', 'success', 'warning'])
};


// default props
_{{cookiecutter.component_name}}.defaultProps = {
//  variant: 'default',
};


/**
 * styled {{cookiecutter.component_name}} 
 * 
 * @todo not implemented
 *
 */
const {{cookiecutter.component_name}} = styled(_{{cookiecutter.component_name}})`
    background-color: #A0A0A0;
    /* theming:
    background-color: ${BG_COLOR};
    */
`;


export default {{cookiecutter.component_name}};
