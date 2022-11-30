import { articlePage } from "../PageObjects/ArticlePage";
import { loginPage } from "../PageObjects/loginPage"


describe('Login Spec', () => {
  let loginPg, articlePg;

  before(() => {
    loginPg = new loginPage()
    articlePg = new articlePage()
  })

  it('Navigate to Login Page', () => {
    cy.visit('')
  })

  it('Validate Invalid Username & Password', () => {
    loginPg.email().type("invalidEmail")
    loginPg.password().type("invalidPassword")
    loginPg.submit().click()
    loginPg.error().should('be.visible')
    loginPg.error().should('have.text', ' email or password is invalid ')
  })

  it('Validate Valid Username & Password', () => {
    loginPg.email().clear().type("cvtrtest1@convertr.io")
    loginPg.password().clear().type("Password!23")
    loginPg.submit().click()
    articlePg.newArticle().should('be.visible')
  })
  

})