# xrm-examples
XRM / Dynamics CRM Example Code Repo

## Contains the following examples
* Examples 1. and 2. using [Webpack](http://webpack.github.io/docs/) and [TypeScript](http://www.typescriptlang.org) for Form Library development.
  * Example 1. Shows how you can combine entity form and ribbon scripts (per entity) into one file (with all dependencies included) by using Webpack as build tool.
  * Example 2. Shows how you can combine all entity form scripts into one file and all entity ribbon scripts into one file (with all dependencies included) by using Webpack as build tool.
* more to come ...

## Prerequisites

- install [node](https://nodejs.org) with [npm](https://www.npmjs.com) included.
- run `npm install` from the root folder to install all npm dependencies (i.e. Webpack, TypeScript, etc.).


## Example 1:

- Shows how you can combine entity form and ribbon scripts (per entity) into one file (with all dependencies included) by using Webpack as build tool.
- run `npm run example_1` from the root folder to build. The build output can be found in the `dist\example_1` folder.

  **Example output:**
  * mdocter.account.js
  * mdocter.contact.js

  **Usage example on the Account form:**
  - Add the build output *.js files as JavaScript web resources to some solution;
  - Open the Account Main/Primary form in the CRM Form Editor;
  - Open the 'Form Properties' by clicking the button in the ribbon;
  - Add the `mdocter.account.js` file as a form library to the form;
  - In the 'Event Handlers' section, add an `OnLoad` event by clicking the plus-button above the event handlers subgrid;
  - Select the `mdocter.account.js` library and add `mdocter.formjs.account.onLoad` as Function name.

## Example 2:

- Shows how you can combine all entity form scripts into one file and all entity ribbon scripts into one file (with all dependencies included) by using Webpack as build tool.
- run `npm run example_2` from the root folder to build. The build output can be found in the `dist\example_2` folder.

  **Example output:**
  * mdocter.form.js
  * mdocter.ribbon.js

  **Usage example on the Account form:**
  - Add the build output *.js files as JavaScript web resources to some solution;
  - Open the Account Main/Primary form in the CRM Form Editor;
  - Open the 'Form Properties' by clicking the button in the ribbon;
  - Add the `mdocter.form.js` file as a form library to the form;
  - In the 'Event Handlers' section, add an `OnLoad` event by clicking the plus-button above the event handlers subgrid;
  - Select the `mdocter.form.js` library and add `mdocter.formjs.account.onLoad` as Function name.


Author: Maarten Docter ([@mdocter](https://twitter.com/mdocter))
