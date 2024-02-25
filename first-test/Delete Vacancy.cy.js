describe("Delete Vacancy Test", () =>{
    it('Verify "Delete Vacancy" with a any record', () => {
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
  
        cy.wait(6000)
        cy.get('input[type="checkbox"]').eq(1).click({force: true})
        cy.contains('Delete Selected').click()
        //cy.contains('Yes, Delete').click()
  
    })
    it('Verify "Delete Vacancy" with all record', () => {
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
  
        cy.wait(6000)
        //cy.get(':nth-child(2) > .oxd-table-row--with-border').click()
        cy.get('input[type="checkbox"]').eq(0).click({force: true})
        //cy.get('input[type="checkbox"]').eq(2).click({force: true})
        cy.contains('Delete Selected').click()
        cy.contains('No, Cancel').click()
  
    })
})