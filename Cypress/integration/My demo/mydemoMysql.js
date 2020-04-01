const pageObj = require('../PageObject/PageObject');

describe('redirect on site', function() {

    it('mysql connection',()=>{

        cy.log("data")
        cy.task('queryTestDb',{query:"SELECT * FROM `tbl_demo` WHERE username = ? ",params:"macmax"}).then(results => {
            expect(results).to.have.lengthOf(2)
          })
        cy.wait(3000)


    })
    
    
    it('direct sql select query shortcut',()=>{
        pageObj.selectQuery('tbl_city','1 ', '1').then(res =>{
            expect(res[0].city_name).to.equal('surat');
        })
    })


    // for video tutorials
    // it('Verify title of the page - positive', function() {

    //     cy.visit('https://demo.nopcommerce.com/')
    //     cy.title().should('eq','nopCommerce demo store');
    // })

    // it('Verify title of the page - negative', function() {

    //     cy.visit('https://demo.nopcommerce.com/')
    //     cy.title().should('eq','nopCommerce demo store ygyegsfgsd');
    // })


})
