# Grails-tastic Development with React & Okta

Based on Matt Raible's tutorial/presentation: https://developer.okta.com/blog/2017/12/06/bootiful-development-with-spring-boot-and-react

## Instructions
 - Replace `{clientId}` and `{yourOktaDomain}` placeholders with your own application crednentials from developer.okta.com, in the following files:
   - `server/grails-app/conf/application.yml`
   - `client/src/App.js`
 - Run server: `./gradlew server:bootRun` (runs on `http://localhost:8080`)
 - Run client: `cd client; npm install; npm start` (runs on `http://localhost:3000`)
 - Access client app, click "Login", login using Okta developer credentials.
 
## Key points:

 - Uses the React profile for Grails: https://grails-profiles.github.io/react/latest/guide/index.html
 - Uses a Grails `RestfulController` subclass: http://docs.grails.org/latest/guide/REST.html#extendingRestfulController
 - Uses Spring Boot/Okta starters as is - nothing Grails specific
 - Uses Grails' native CORS support - no filters or extra config needed! :)

## Differences

- Typescript not used in the client project
