describe('empty spec', () => {
  it('passes', () => {
    cy.visit('https://www.amazon.co.uk/')
    //cy.setCookie('session-token', 'F1tFcKS+t5HDrhk2ssMsBfqv6qex5RriJbn+pQ6RdIasI7VJx0N8ZJ+Gg6B3mNbTp3Tl+0RCfAVBT38qVIbxeLAMfbPxLIs7U1oZLSSzCExak9pwYKSkdgo5rsoBZNPIlAXz6TZdFwXH9k7unujf312cEvIrKFJ3b5Ll9LoRwjnYiwkf4gzQ2iYBKxFfOyk1PHphmX9mjrz3IX19Lgi3kw==') Fechar a barra de cookies sem click
    cy.get('#sp-cc-accept').click()
    cy.get('.hm-icon').click()
    cy.get(':nth-child(19) > .hmenu-item > div').scrollIntoView().click()
    //cy.get('.hmenu-visible > :nth-child(10) > .hmenu-item').click()
    cy.get('#hmenu-content > ul.hmenu.hmenu-visible.hmenu-translateX >').eq(9).click()
    cy.get(':nth-child(7) > .a-list-item > .a-color-base > span').click()
    cy.get(':nth-child(3) > .a-list-item > .a-color-base > span').click() 
    cy.get('[data-asin="B081QX9V2Y"] > :nth-child(1) > .s-widget-container > .s-card-container > :nth-child(1) > :nth-child(1) > .sg-col-8-of-16 > :nth-child(1) > .a-spacing-small > .puis-padding-right-small > .a-size-mini > .a-link-normal > .a-size-medium').click()
    cy.get('#add-to-cart-button').click()
    cy.go('back')
    cy.go('back')
    cy.get('[data-asin="B07RMBB4HM"] > :nth-child(1) > .s-widget-container > .s-card-container > :nth-child(1) > :nth-child(1) > .sg-col-8-of-16 > :nth-child(1) > .a-spacing-small > .puis-padding-right-small > .a-size-mini > .a-link-normal > .a-size-medium').click()
    cy.get('#add-to-cart-button').click()
    cy.get('#sc-buy-box-ptc-button > .a-button-inner > .a-button-input').click()
    
  })
})