describe('empty spec', () => {
  it('passes', () => {
    cy.visit('https://www.google.com/maps')
    cy.get('.VtwTSb > [jsaction="JIbuQc:ldDdv(b3VHJd)"] > .lssxud > .VfPpkd-dgl2Hf-ppHlrf-sM5MNb > .VfPpkd-LgbsSe > .VfPpkd-vQzf8d').click()
    cy.get('#searchboxinput').type('India{enter}')
    cy.get('.pChizd > button.S9kvJb').click()
    cy.type('Londres{enter}')
    cy.get('[jstcache="1130"] > .LE0rHc').click()

  })
})