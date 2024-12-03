describe('ejercicio login', () => {

  beforeEach(() =>{
      cy.visit('https://the-internet.herokuapp.com/login')
  })
        it('Loguearse con credenciales correctas',  () => {
          cy.get('#username').type('tomsmith')
          cy.get('#password').type('SuperSecretPassword!')
          cy.get('.fa').click()
        })

        it('Loguearse con nombre de usuario incorrecto',  () => {
          cy.get('#username').type('omsmith')
          cy.get('#password').type('SuperSecretPassword!')
          cy.get('.fa').click()
        })

        it('Loguearse con contraseña incorrecta',  () => {
          cy.get('#username').type('tomsmith')
          cy.get('#password').type('SuperecretPassword!')
          cy.get('.fa').click()
        }) 
})