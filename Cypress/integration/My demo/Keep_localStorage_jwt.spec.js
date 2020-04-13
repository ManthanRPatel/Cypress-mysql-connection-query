const pageObj = require('./PageObject/PageObject');

describe('Localstorage Testing', function() {

    ///// first it will call from commands.js 
    ////function- restoreLocalStorageCache,saveLocalStorageCache,clearLocalStorageCache
    //// first restore is called ,, after each block save is called ,after test clear storage is called


    beforeEach(() => {
        cy.restoreLocalStorageCache();
    });
    
    afterEach(() => {
        cy.saveLocalStorageCache();
    });
    
    after(function() {
        cy.clearLocalStorageCache();
    });


    it('First Block',()=>{
        pageObj.LoginWebSite();
        cy.wait(3000).log('First Exexcution');
    })

    it('second Block',()=>{
        cy.wait(3000).log('second Exexcution');
    })

    it('Third Block',()=>{
        cy.wait(3000).log('Third Exexcution');
    })

    it('Fourth Block',()=>{
        cy.wait(3000).log('Fourth Exexcution');
    })


})
