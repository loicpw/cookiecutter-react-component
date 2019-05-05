Personal `cookiecutter`_ package for React components 
=====================================================================

This is my simple `cookiecutter`_ for creating a React component:

Assuming the following Component's dependencies:

+ `styled-components`_
+ `styled-theming`_

given the name of the component is "<component name>", and the package
name is "<package name>", this will create the following structure:

+ component structure ::

    wd
    └── <package name>
        ├── __tests__
        │   └── <package name>-test.js
        ├── <package name>.js
        ├── <package name>.css
        └── package.json

+ package.json ::

    {
        "main": "[package name].js"
        "author": "[author name] <[author email]> ([author github])",
        "version": "1.0.0",
        "name": "[component name]",
        "description": "[component description]"
    }

  .. note:: this allows to import the component with **import X from './components/X'**

+ component skeleton in <package name>.js (overview)

  .. code-block:: javascript

    import React, { Component } from 'react';
    import './<PACKAGE NAME>.css';
    import PropTypes from 'prop-types';
    import styled from 'styled-components';
    import theme from 'styled-theming';

    [...]
    
    class _<COMPONENT NAME> extends Component {
      constructor(props) {
        super(props);
      }

      render() {
        return (
          <div className={this.props.className}>
            {this.props.children}
          </div>
        );
      }
    }
    
    _<COMPONENT NAME>.propTypes = {
    };
    
    _<COMPONENT NAME>.defaultProps = {
    };

    const <COMPONENT NAME> = styled(_<COMPONENT NAME>)`
    `;
    
    export default <COMPONENT NAME>;

Usage
-----

.. code-block:: bash 

    $ pip install cookiecutter
    $ cookiecutter https://github.com/loicpw/cookiecutter-react-component.git

.. _cookiecutter: https://cookiecutter.readthedocs.io
.. _styled-components: https://www.styled-components.com/
.. _styled-theming: https://github.com/styled-components/styled-theming
