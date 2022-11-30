export class loginPage {
    email() {
        return cy.xpath("//input[@placeholder='Email']")
    }

    password() {
        return cy.xpath("//input[@placeholder='Password']")
    }

    submit() {
        return cy.xpath("//button")
    }

    error() {
        return cy.xpath("//li[contains(text(),'invalid')]")
    }

    newArticle() {
        return cy.xpath("//a[contains(text(),'New Article')]")
    }

}