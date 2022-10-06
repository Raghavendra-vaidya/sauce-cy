# sauce-cy
Test automation of saucedemo site using Cypress.io and javascript  

---



Stack:

1. cypress: *`9.x.x`*
2. javascript
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



Sample reports:

e2e sample report is attached below. Same can be found on ci artifacts location:

<img width="1440" alt="image" src="https://user-images.githubusercontent.com/30006440/185979665-a07e6e3a-485e-4994-8c14-5a6cadd16bbd.png">

---

IT sample report is attached below. Same can be found on ci artifacts location:

<img width="1440" alt="image" src="https://user-images.githubusercontent.com/30006440/185980026-0806ae52-2afa-4443-8567-dd955f8b83cd.png">

