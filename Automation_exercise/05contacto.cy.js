describe('sauce', () => {

    it('pagina contacto', () => {
        cy.visit('https://automationexercise.com/')
        cy.get('.shop-menu > .nav > :nth-child(8) > a').click()
        cy.get('[data-qa="name"]').type('Manu')
        cy.get('[data-qa="email"]').type('manu@fmail.ma')
        cy.get('[data-qa="message"]').type('Hola, estoy probando')
        cy.get(':nth-child(6) > .form-control').should('be.visible').click()
        cy.get('[data-qa="submit-button"]').should('be.visible').click()
        cy.get('span').click()
    })
})
