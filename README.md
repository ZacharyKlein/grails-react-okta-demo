# Grails, React & Okta Demo

Based on Matt Raible's tutorial/presentation: https://developer.okta.com/blog/2017/12/06/bootiful-development-with-spring-boot-and-react

## Key points:

 - Uses the React profile for Grails: https://grails-profiles.github.io/react/latest/guide/index.html
 - Uses a Grails `RestfulController` subclass: http://docs.grails.org/latest/guide/REST.html#extendingRestfulController
 - Uses Spring Boot/Okta starters as is - nothing Grails specific
 - Uses Grails' native CORS support - no filters or extra config needed! :)

## Differences

- Typescript not used in the client project
