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
        "main": "<package name>.js"
    }


Usage
-----

.. code-block:: bash 

    $ pip install cookiecutter
    $ cookiecutter https://github.com/loicpw/cookiecutter-react-component.git

.. _cookiecutter: https://cookiecutter.readthedocs.io
.. _styled-components: https://www.styled-components.com/
.. _styled-theming: https://github.com/styled-components/styled-theming
