export class articlePage {

    newArticle() {
        return cy.xpath("//a[contains(text(),'New Article')]")
    }

    articleTitle() {
        return cy.xpath("//input[@placeholder='Article Title']")
    }

    articleAbout() {
        return cy.xpath("//input[contains(@placeholder, 'about')]")
    }

    articleDesc() {
        return cy.xpath("//textarea[@placeholder='Write your article (in markdown)']")
    }

    articleTags() {
        return cy.xpath("//input[@placeholder='Enter tags']")
    }

    button() {
        return cy.xpath("//button[contains(text(),'Publish')]")
    }

    home() {
        return cy.xpath("//a[contains(text(),'Home')]")
    }

    globalFeed() {
        return cy.xpath("//a[contains(text(),'Global Feed')]")
    }

    articleOther() {
        return cy.xpath("(//a[contains(text(),' Magda Parry ')])[1]/../../../..")
    }

    delete() {
        return cy.xpath("(//button[contains(text(),'Delete')])[1]")
    }

}