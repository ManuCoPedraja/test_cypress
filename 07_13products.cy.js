describe('sauce', () => {
    beforeEach( () => {
        cy.visit('https://automationexercise.com/')
    })

    it('products', () => {
        cy.get('.shop-menu > .nav > :nth-child(2) > a').click()
        cy.get(':nth-child(3) > .product-image-wrapper > .choose > .nav > li > a > .fa').click()
    })

    it('buscar productos', () => {
        cy.get('.shop-menu > .nav > :nth-child(2) > a').click()
        cy.get('#search_product').type('white')
        cy.get('#submit_search > .fa').click()
    })

    it('suscription', () => {
        cy.get('#susbscribe_email').type('manu@fhg.com')
        cy.get('#subscribe > .fa').click()
    })

    it('sub_cart', () => {
        cy.get(':nth-child(3) > a > .fa').click()
        cy.get('#susbscribe_email').type('manu@nail.com')
        cy.get('#subscribe > .fa').click()
    })

    it('add_to_cart', () => {
        cy.get('a > .material-icons').click()
        cy.get(':nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn').click()
        cy.get('.modal-footer > .btn').click()
        cy.get(':nth-child(4) > .product-image-wrapper > .single-products > .productinfo > img').trigger('mouseover')
        cy.get(':nth-child(4) > .product-image-wrapper > .single-products > .productinfo > .btn > .fa').click()
        cy.get('.modal-footer > .btn').click()
        cy.get(':nth-child(3) > a > .fa').click()
    })

    it('add_4_cart', () => {
        cy.get(':nth-child(8) > .product-image-wrapper > .choose > .nav > li > a').click() 
        cy.get('#quantity').should('be.visible').then(($input) => {
            $input.val('4')
        })
        cy.get(':nth-child(5) > .btn').click()
        cy.get('u').click()
    })
})
