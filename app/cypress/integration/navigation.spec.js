import navigation from '../fixtures/navigation.json'

describe("App renders", () => {
    it("displays navigation links", () => {
        cy.visit("http://localhost:3000/")

        navigation.forEach((link) => {
            cy.get(`[data-testid="${link}"]`).contains(link)
        })
    })
})
