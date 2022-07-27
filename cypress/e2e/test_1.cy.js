describe('empty spec', () => {
  it('passes', () => {
    cy.visit('https://www.amazon.co.uk/')
    //cy.setCookie('session-token', 'F1tFcKS+t5HDrhk2ssMsBfqv6qex5RriJbn+pQ6RdIasI7VJx0N8ZJ+Gg6B3mNbTp3Tl+0RCfAVBT38qVIbxeLAMfbPxLIs7U1oZLSSzCExak9pwYKSkdgo5rsoBZNPIlAXz6TZdFwXH9k7unujf312cEvIrKFJ3b5Ll9LoRwjnYiwkf4gzQ2iYBKxFfOyk1PHphmX9mjrz3IX19Lgi3kw==') Fechar a barra de cookies sem click
    cy.get('#sp-cc-accept').click()
    cy.get('#nav-link-accountList').click()
    cy.get('#createAccountSubmit').click()
    cy.get('#ap_customer_name').type('Tarom Giovane')
    cy.get('#ap_email').type('tarom42119@agrolivana.com')
    cy.get('#ap_password').type('Teste"123')
    cy.get('#ap_password_check').type('Teste"123')
    cy.get('#continue').click()
    cy.wait(14000)
    
    
  })
})