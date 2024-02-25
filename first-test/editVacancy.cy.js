// const VACANCY_ElEMENT='#addJobVacancy_name';
// class editVacancyElm{
//     get txtVacancyName(){
//         return cy.get(VACANCY_ElEMENT)

//     }
// }
// module. exports = editVacancyElm

describe("Edit Vacancy Test", () =>{
    it('Verify the " Edit Vacancy" fields with valid data', () => {
        cy.on('uncaught:exception', (err, runnable) => {
  
            return false
        })
        
        cy.visit('https://orangenhom4-trials711.orangehrmlive.com/', { failOnStatusCode: false })
        cy.get('#txtUsername').type('admin')
        cy.get('#txtPassword').type('admin123')
        cy.get("button[type='submit']").click()
  
        cy.viewport(1666, 800)
        cy.contains('Recruitment').click()
        cy.contains('Vacancies').click()
        cy.wait(1000)
        cy.get('.oxd-table-card-cell').eq(1).click()
        cy.get('.oxd-select-info-button-container',{timeout: 10000}).click()

        //cy.get('[label="Vacancy"]').click()
        //cy.get('[class="row"]',{timeout:20000}).eq(1).within(() => {cy.get('[class="input-field col l6"]').eq(1)})
        //cy.get('input[type="text"]').eq(2).click()
        //cy.get(':nth-child(2) > .row > :nth-child(2) > .input-field').click()
        //cy.get("#addJobVacancy_name",{timeout: 100000}).click()
        cy.get('.valid',{timeout: 100000}).click()

        // cy.get("button[tooltip='Settings']").eq(0).click()
        // cy.wait(60000)
        // cy.contains('Vancancy Info', {timeout: 500000}).click()
        //cy.visit('https://orangenhom4-trials711.orangehrmlive.com/client/#/noncore/recruitment/addJobVacancy/vacancyId/7/template/')
    })
})