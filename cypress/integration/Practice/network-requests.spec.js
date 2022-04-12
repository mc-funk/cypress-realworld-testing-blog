/*
  It is very helpful to use console.log() to log out the response data
  in order to see the data you are working with.
  
  You can also click on the request in the Cypress Command Log for an even
  better experience.

  Reference: https://learn.cypress.io/advanced-cypress-concepts/intercepting-network-requests
*/
describe("Network Requests", () => {
  beforeEach(() => {
    cy.intercept("GET", "http://localhost:3000/api/posts", (req) => {
      // this is to disable browser caching
      // https://glebbahmutov.com/blog/cypress-intercept-problems/
      delete req.headers["if-none-match"];
    }).as("posts");

    cy.visit("http://localhost:3000/network");
  });

  it("/api/posts returns a status code of 200", () => {
    // Write an assertion that the route '/api/posts'
    // returns a status code of 200
    // Hint: You will need to use cy.request()
    // https://docs.cypress.io/api/commands/request
  });

  it("/api/posts returns the correct number of posts", () => {
    // Write an assertion that the route '/api/posts'
    // returns the correct number of posts.
  });

  it("the posts.json fixture returns the correct number of posts", () => {
    // Write an assertion that the route '/api/posts'
    // returns the correct number of posts.
    // There are 25 total posts in the fixture
    // Hint: You will need to use cy.fixture()
    // https://docs.cypress.io/api/commands/fixture
  });

  it("intercepts /api/posts and returns the correct number of posts", () => {
    // Wait upon the @posts intercept that happens in the beforeEach()
    // and assert that the response contains the correct number of posts
    // Hint: you will need to cy.wait() to wait upon the @posts alias.
    // https://docs.cypress.io/api/commands/wait
  });
});
