describe('Cadastro usuário',()=>{

  it('Cadastro com sucesso',() =>{

    cy.visit('https://walkdog.vercel.app/')
    cy.contains('Quero ser Dog Walker').click()
    cy.location('pathname').should('equal','/signup')
    cy.get('input[name="name"]').type('João Aurélio da Silva Paranhos')
    cy.get('input[name="email"]').type('joaoaurelio0911@gmail.com')
    cy.get('input[name="cpf"]').type('159.480.080-45')
    cy.get('input[name="cep"]').type('02674000')
    cy.get('input[value="Buscar CEP"]').click()
    cy.get('input[name="addressStreet"]').should('have.value','Rua Ministro Lins de Barros')
    cy.get('input[name="addressNumber"]').type(583)
    cy.get('input[name="addressDetails"]').type('Próxim ao final do 1743')
    cy.get('input[name="addressDistrict"]').should('have.value','Jardim Santa Cruz (Zona Norte)')
    cy.get('input[name="addressCityUf"]').should('have.value','São Paulo/SP')
    cy.get('img[alt="Cuidar"]').click()


  })


})