import { articlePage } from "../PageObjects/ArticlePage";
import { loginPage } from "../PageObjects/loginPage"


describe('Login Spec', () => {
  let loginPg, articlePg;

  before(() => {
    loginPg = new loginPage()
    articlePg = new articlePage()
  })

  it('Navigate to Editor Page', () => {
    cy.visit('http://localhost:4202/login')
    loginPg.email().clear().type("cvtrtest1@convertr.io")
    loginPg.password().clear().type("Password!23")
    loginPg.submit().click()
    articlePg.newArticle().should('be.visible')
    articlePg.newArticle().click()
    cy.wait(5000)
  })

  // it('Validate Required Fields', () => {
  //   articlePg.button().click()
  // })

  it('Validate Create Article', () => {
    articlePg.articleTitle().type("This is Title")
    articlePg.articleAbout().type("This is About")
    articlePg.articleDesc().type("This is Description")
    articlePg.articleTags().type("This is Tags")
    articlePg.button().click()
  })

  it('Validate Delete of Other Articles ', () => {
    articlePg.home().click()
    articlePg.globalFeed().click()
    articlePg.articleOther().click()
    articlePg.delete().should('not.be.visible')
  })

})