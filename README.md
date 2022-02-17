# Hey There, Redirect!

#### This repo is going to combine with the original project, new contributions can branch and work off of [trunk/re-build](https://github.com/OpenMaine/rent-calculator/tree/trunk/re-build) :)

.
.
.
.


## Documentation
<!-- TOC -->

- [Documentation](#documentation)
    - [Create React App](#create-react-app)
    
- [Contributing](#contributing)
    - [Getting Started](#getting-started)
    - [Testing](#testing)

- [Sources and Links](#sources-and-links)
    - [Contributors ✨](#contributors-)

<!-- /TOC -->
*Needs to be updated with project documentation.*

*From the template:*

We've included a `docs` folder with a template [Tech Spec](/docs/Tech_Spec.md) and [Best Practices](/docs/Best_Practices.md) document, though using Github's Wiki capabilities is also a good idea. This will get you started with documenting your project.  Other documents and relevant information that has no other place can live in the `docs` folder.  Replace this paragraph with a brief breakdown of what you've included in your `docs` folder.

## Create React App
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Click on the link above for more information and the docs, or see the guide to [Getting Started with Create React App](/docs/Create_React_App.md) here.


# Contributing

Contributors to this and all OpenMaine projects must do so while abiding by our [Code of Conduct](https://openmaine.org/CodeofConduct/index.html).

`Workflow`

All contributing work should be done on a `feature-named-branch` or from a `fork` of this repo.


If a feature-branch answers an open issue/task, the branch should be named using the following convention:

    task-<#num>-summed-up-title

`Peer Review`

Each pull request requires at least one review by a member who does not have a commit on the PR before merging.

`Linting and Formatting`

This project uses [ESLint](https://eslint.org/docs/user-guide/getting-started) and [Prettier](https://prettier.io/docs/en/install.html) to aid continuity, as well as [Husky](https://typicode.github.io/husky/#/) pre-commit hooks which run the linting and formatting automatically before each local commit. See the links above for more information and guides for installation.


## Getting Started

`Running the Project Locally`

To run the project locally, fork or clone this repo here on GitHub, or locally using the command line.

*To clone this repository locally using the command line:*

    git clone https://github.com/OpenMaine/ptld-rent-calc-react.git

`Installing Yarn`

This project is set up as a monorepo and uses Yarn to manage separate dependencies in the client and server directories.

Before you start using Yarn, you'll first need to install it on your system. For more details about installing Yarn see  the [guide to installing Yarn](/docs/Installing_Yarn.md).

`Not Sure if Yarn is Already Installed?`

You can check that Yarn is installed by running the following command

    yarn --version


`Install Project Dependencies`

Inside the **root** directory (PTLD-RENT-CALC-REACT), install all project dependencies and create a local yarn.lock file by running the yarn install command:

    yarn install

*The yarn install command should be re-run periodically after pulling from main to update your local yarn.lock and install any dependencies that were changed or added in recent changes to main.*


`Available Scripts`

In the project root directory, you can run the following scripts:

    yarn client

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

*The following scripts are not relevant until server side files are added:* 

*yarn build*

~~Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.~~

*yarn server*

~~Runs the server in the development mode.\
Open [http://localhost:5000](http://localhost:5000) to view it in the browser.~~

*yarn dev*

~~Runs the `client` and `server` scripts to run in parallel.~~

## Testing
*From the template, should be updated once testing has been developed: What does someone need to do to test their work? Have you included a specific testing framework or guideline (hint: you should)? Any information about testing should be added here.*

# Sources and Links
- [Bootstrap 5](https://getbootstrap.com/docs/5.0/getting-started/introduction/)
- [npm Lint-Staged](https://www.npmjs.com/package/lint-staged)
- [esLint-config-prettier](https://github.com/prettier/eslint-config-prettier#installation)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
