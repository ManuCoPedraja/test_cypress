describe('sauce', () => {

    it('test cases', () => {
        cy.visit('https://automationexercise.com/')
        cy.get('.shop-menu > .nav > :nth-child(5) > a').click()
    })
})
