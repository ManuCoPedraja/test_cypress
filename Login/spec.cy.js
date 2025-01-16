describe('test spotify', () => {
  
  it('iniciar', () => {
    cy.visit('https://open.spotify.com/intl-es')
  })

  it('eleminar cookies', () => {
    cy.get('button[data-testid="onetrust-reject-all-handler"]').should('be.visible').click()
  })

  it('clic en permitir cookies', () => {
    cy.get('#onetrust-accept-btn-handler').click({force: true}) 
  })

  it('login', () => {
    cy.get('[data-testid="login-button"] > .ButtonInner-sc-14ud5tc-0').click()
  })
})