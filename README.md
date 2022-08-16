# sauce-cy
Test automation of saucedemo site using Cypress.io and javascript

---

The Approach(WIP):

---


Stack:

1. cypress: *`9.7.0`*
2. js
3. mochawesome reports
4. CI: circleCI
5. Image: *`cypress/browsers:latest`*
---

Steps to run:

1. from root run *`npm install`*
2. to open cypress: *`npm run cypress:open`*  Or *`node_modules/.bin/cypress open`*
3. to run integ specs: *`node_modules/.bin/cypress run --browser chrome --spec 'cypress/integration/integ/*.spec.js'`*
4. to run e2e specs: *`node_modules/.bin/cypress run --browser chrome --spec 'cypress/integration/e2e/*.spec.js'`*
5. to run all tests: *`npm run cypress:test`*

---

CI run:
Overall workflow:

<img width="1170" alt="image" src="https://user-images.githubusercontent.com/30006440/182022006-ae8b3e79-2baf-49db-96af-82148f6e2cf4.png">

---

CI Jobs:

<img width="1154" alt="image" src="https://user-images.githubusercontent.com/30006440/182022033-e5f0803c-17a4-4b79-b185-76ed15b40d3d.png">


Sample reports(WIP):

