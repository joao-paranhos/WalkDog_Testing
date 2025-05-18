
import dados_cliente from '../fixtures/dados_clientes.json'


describe('Cadastro usuário',()=>{


function lista_seletores(){
  
  const seletores = {
    campo_nome: 'input[name="name"]',
    campo_email:'input[name="email"]',
    campo_cpf: 'input[name="cpf"]',
    campo_cep: 'input[name="cep"]',
    botao_buscar_cep: 'input[value="Buscar CEP"]',
    campo_endereço: 'input[name="addressStreet"]',
    campo_numero_endereco: 'input[name="addressNumber"]',
    campo_complemento: 'input[name="addressDetails"]',
    campo_bairro: 'input[name="addressDistrict"]',
    campo_cidade: 'input[name="addressCityUf"]',
    campo_ativadades_extra_cuidar: 'img[alt="Cuidar"]',
    campo_upload_image: 'input[accept="image/*"]',
    botao_cadastro:".button-register"





    
  }
return seletores
}



  it('Cadastro com sucesso',() =>{

    cy.visit('https://walkdog.vercel.app/')
    cy.contains('Quero ser Dog Walker').click()
    cy.location('pathname').should('equal','/signup')
    cy.get(lista_seletores().campo_nome).type(dados_cliente.dados_cadastrais.nome)
    cy.get(lista_seletores().campo_email).type(dados_cliente.dados_cadastrais.email)
    cy.get(lista_seletores().campo_cpf).type(dados_cliente.dados_cadastrais.cpf)
    cy.get(lista_seletores().campo_cep).type(dados_cliente.dados_endereco.cep)
    cy.get(lista_seletores().botao_buscar_cep).click()
    cy.get(lista_seletores().campo_endereço).should('have.value',dados_cliente.dados_endereco.endereco)
    cy.get(lista_seletores().campo_numero_endereco).type(dados_cliente.dados_endereco.numero)
    cy.get(lista_seletores().campo_complemento).type(dados_cliente.dados_endereco.complemento)
    cy.get(lista_seletores().campo_bairro).should('have.value',dados_cliente.dados_endereco.bairro)
    cy.get(lista_seletores().campo_cidade).should('have.value',dados_cliente.dados_endereco.cidade)
    cy.get(lista_seletores().campo_ativadades_extra_cuidar).click()
    cy.get(lista_seletores().campo_upload_image).selectFile('documento.png',{force:true})
    cy.get(lista_seletores().botao_cadastro).click()
    cy.contains('Recebemos o seu cadastro e em breve retornaremos o contato.').should('be.visible')



  })


})