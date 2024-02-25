describe("Edit Vacancy Test", () =>{
    it('Verify the " Edit Vacancy" fields with valid data', () => {
        cy.on('uncaught:exception', (err, runnable) => {
  
            return false
        })
        cy.viewport(1666, 800)
        cy.visit('https://orangenhom4-trials711.orangehrmlive.com/', { failOnStatusCode: false })
        cy.get('#txtUsername').type('admin')
        cy.get('#txtPassword').type('admin123')
        cy.get("button[type='submit']").click()
  
        cy.get('#menu_item_193').click();
        cy.get('[href="#/recruitment/vacancies"]').click()
        cy.wait(10000);
        cy.get('[class="oxd-table-card"]').eq(0).within(() =>{
            cy.get('[class="oxd-table-cell oxd-padding-cell"]').eq(2).within(() => {cy.get('div > a').click()})
        });
        cy.get('.oxd-select-info-button-container',{timeout:100000}).click()

        cy.get('[id="noncoreIframe"]',{timeout:100000})
            .should('be.visible')
            .then(($iframe) => {
            const $body = $iframe.contents().find('body')
   
            cy.wrap($body)
            .find("input[id='addJobVacancy_name']").clear()
            .type('Vacancy of Art Director - UK')

            cy.wrap($body).find("[id='jobTitleSelection']").click()
            cy.wrap($body).find('[competancy-id="17"]').click()
            
             cy.wrap($body)
             .find('[class="mdi-navigation-cancel remove-employee material-icons small-icon-font"]').eq(0).click()
             cy.wrap($body)
            .find('[data-id="addJobVacancy_hiringManagers"]').click()
            .find('[id="textarea_addJobVacancy_hiringManagers"]').click({force: true}).type('Ali')
            cy.wrap($body).find("[class='search-row searchListEmployeeName']").eq(2).click()
            
            cy.wait(5000)
            cy.wrap($body)
            .find('[id="addJobVacancy_noOfPositions"]').clear().type('3')
            cy.wait(1000)
            cy.wrap($body)
            .find('[id="saveVacancy"]').click()
            cy.wait(5000)
            
        })
    })
    //Edit Vacancy fields with max data
    xit('Verify the " Edit Vacancy" fields with max data', () => {
        cy.on('uncaught:exception', (err, runnable) => {
  
            return false
        })
        cy.viewport(1666, 800)
        cy.visit('https://orangenhom4-trials711.orangehrmlive.com/', { failOnStatusCode: false })
        cy.get('#txtUsername').type('admin')
        cy.get('#txtPassword').type('admin123')
        cy.get("button[type='submit']").click()
  
        cy.get('#menu_item_193').click();
        cy.get('[href="#/recruitment/vacancies"]').click()
        cy.wait(10000);
        cy.get('[class="oxd-table-card"]').eq(0).within(() =>{
            cy.get('[class="oxd-table-cell oxd-padding-cell"]').eq(2).within(() => {cy.get('div > a').click()})
        });
        cy.get('.oxd-select-info-button-container',{timeout:100000}).click()

        cy.get('[id="noncoreIframe"]',{timeout:100000})
            .should('be.visible')
            .then(($iframe) => {
            const $body = $iframe.contents().find('body')
   
            cy.wrap($body)
            .find("input[id='addJobVacancy_name']").clear()
            .type('Vacancyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy')

            cy.wrap($body)
            .find('[id="addJobVacancy_noOfPositions"]').clear().type('11111111111111')
            cy.wait(1000)
            cy.wrap($body)
            .find('[id="saveVacancy"]').click()
            cy.wait(5000)
                                 
        })
    })  
    xit('Verify the " Edit Vacancy" fields with empty data', () => {
        cy.on('uncaught:exception', (err, runnable) => {
  
            return false
        })
        cy.viewport(1666, 800)
        cy.visit('https://orangenhom4-trials711.orangehrmlive.com/', { failOnStatusCode: false })
        cy.get('#txtUsername').type('admin')
        cy.get('#txtPassword').type('admin123')
        cy.get("button[type='submit']").click()
  
        cy.get('#menu_item_193').click();
        cy.get('[href="#/recruitment/vacancies"]').click()
        cy.wait(10000);
        cy.get('[class="oxd-table-card"]').eq(0).within(() =>{
            cy.get('[class="oxd-table-cell oxd-padding-cell"]').eq(2).within(() => {cy.get('div > a').click()})
        });
        cy.get('.oxd-select-info-button-container',{timeout:100000}).click()

        cy.get('[id="noncoreIframe"]',{timeout:100000})
            .should('be.visible')
            .then(($iframe) => {
            const $body = $iframe.contents().find('body')
   
            cy.wrap($body)
            .find("input[id='addJobVacancy_name']").clear()

            cy.wrap($body)
            .find('[id="addJobVacancy_noOfPositions"]').clear()
            cy.wait(1000)
            cy.wrap($body)
            .find('[id="saveVacancy"]').click()
            cy.wait(5000)
                                 
        })
    }) 
    xit('Verify the " Edit Vacancy" fields with exits data', () => {
        cy.on('uncaught:exception', (err, runnable) => {
  
            return false
        })
        cy.viewport(1666, 800)
        cy.visit('https://orangenhom4-trials711.orangehrmlive.com/', { failOnStatusCode: false })
        cy.get('#txtUsername').type('admin')
        cy.get('#txtPassword').type('admin123')
        cy.get("button[type='submit']").click()
  
        cy.get('#menu_item_193').click();
        cy.get('[href="#/recruitment/vacancies"]').click()
        cy.wait(10000);
        cy.get('[class="oxd-table-card"]').eq(0).within(() =>{
            cy.get('[class="oxd-table-cell oxd-padding-cell"]').eq(2).within(() => {cy.get('div > a').click()})
        });
        cy.get('.oxd-select-info-button-container',{timeout:100000}).click()

        cy.get('[id="noncoreIframe"]',{timeout:100000})
            .should('be.visible')
            .then(($iframe) => {
            const $body = $iframe.contents().find('body')
   
            cy.wrap($body)
            .find("input[id='addJobVacancy_name']").clear()
            .type('Vacancy of Art Director - UK')

            cy.wrap($body)
            .find('[id="saveVacancy"]').click()
            cy.wait(5000)
            
        })
    })
})