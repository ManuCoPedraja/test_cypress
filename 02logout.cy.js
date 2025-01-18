describe('sauce', () => {
    
    it('Prueba logout', () => {
      cy.visit('https://automationexercise.com/')
      cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
      cy.get('[data-qa="login-email"]').should('be.visible').type('maegua@gneil.com')
      cy.get('[data-qa="login-password"]').should('be.visible').type('contrasena')
      cy.get('[data-qa="login-button"]').click()
      cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
    })
})
