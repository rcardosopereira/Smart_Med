[![Cypress.io](https://img.shields.io/badge/tested%20with-Cypress-04C38E.svg)](https://www.cypress.io/)

# SmartMed World with Cypress framework
This repository contains a technical automation challenge involving JavaScript language, Cypress framework, FakerJS framework.
Site: https://www.smartmed.world/

## Tools:
### Suggested IDEs by [Cypress documentation](https://docs.cypress.io/guides/tooling/IDE-integration.html#Extensions-amp-Plugins):

- [Visual Studio Code](https://code.visualstudio.com/) (Best option to work with Cypress and it's free). 
- [Intellij](https://www.jetbrains.com/idea/?var=1) (Alternative solution, also free)

### [Node.js](https://nodejs.org/en/)
-Node.js® is a free, open-source, cross-platform JavaScript runtime environment that lets developers create servers, web apps, command line tools and scripts.

## Dependencies
### Official cypress framework:
- Cypress is a real game changer in e2e testing. It runs inside 2 containers on our stack. The setup was almost easy and its adoption by the team was immediate. *__Make sure you have Node.js installed and that you have already run "npm init" or have a "node_modules" folder or "package.json" file in the root of your project__* to ensure cypress is installed in the correct directory.
- [Cypress website](https://www.cypress.io/).
- The API documentation is available [here](https://docs.cypress.io/api/api/table-of-contents.html).

Java Script:
> ```bash
>  npm install cypress --save-dev
> ```


### FakerJS framework:
- Appearance. Faker. Generate massive amounts of fake (but realistic) data for testing and development purposes.
- [Faker website](https://fakerjs.dev/guide/).
> ```bash
>  npm install @faker-js/faker --save-dev
> ```
---

### Download the project
Check if your current version is the same or if you have a more updated version.<br> 
__The version of this project is:__<br>
-__*NPM Version 10.2.3*__<br>
-__*NODE Version v21.2.0*__<br>
<br>
Download the zip file and then unzip the file to a folder.<br>
Inside the "\Cypress\SmartMedChallenge" folder, run the following commands below:

### Running the tests
### Cypress run
Cypress give us the ability to run all tests without a test runner interface. Note that after executing the command, it will show a report on the screen with the tests that are passing and the tests that failed, if any. Furthermore, a new 'videos' folder will be created with their recordings.<br> 
To look, just go to the videos folder and access the files. (cypress/videos)<br>
To do this, just run the following command:<br>
> ```bash
> npm run test
> ```
or
> ```bash
> npm test
> ```
or
> ```bash
> yarn test
> ```

### Cypress test runner interface:
To open the Cypress and run the tests separately, run:
> ```bash
> npm run cy:open 
> ```
or
> ```bash
> npx cypress open
> ```

<br>
This will start the Cypress Test Runner with its interactive GUI where you can select which spec click on E2E Testing.

If you want to run the tests in another one, just add browser and the name of the browser in the command. More info in [here](https://docs.cypress.io/guides/guides/launching-browsers#Browsers).

### Project structure

__cypress/e2e/:__ Folder to store Cypress test files.<br>
-*TestPOM.cy.js:* Test file created using page object model and working with the files inside the pages folder.<br>
__cypress/pages/:__ Folder to store the page classes that represent each page of the application.<br>
__support/:__ Folder for support files such as custom commands.<br>
__node_modules:__ This is a directory that stores all the project's dependencies, including the libraries and tools that are necessary for Cypress and other packages installed in the project to work. When you install a Node.js package using npm (Node Package Manager) or yarn, the dependencies are downloaded and installed in the node_modules folder.<br>
__cypress.config.js:__ is used to configure global options for Cypress. It allows you to configure settings such as the target directory for tests, plugin settings, reporting options, and more. This file is optional and can be used to customize Cypress behavior for a specific project.<br>
__package-lock.json:__ is automatically generated by npm and serves to lock specific versions of all project dependencies.<br>
__package.json:__ is a manifest file for your Node.js project. It contains project metadata such as name, version, description, and information about project dependencies. Additionally, package.json can include custom scripts, which can be used to automate common tasks such as running tests, starting the local server, and more.<br>

####################################################################################
### Support🚀
Please, if you have some questions, feel free to contact me. My e-mail is rcardosopereira@gmail.com.
I am available to help you.
Thank you very much ;-)
####################################################################################
