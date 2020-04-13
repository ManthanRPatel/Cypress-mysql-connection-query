# Cypress-mysql-query-and-localstorage-jwt
cypress mysql connection , mysql perform query ,, select query with examples,,,

available at issuse in link = https://github.com/cypress-io/cypress/issues/3689#issuecomment-558689250

1) add env { } in cypress.json

2)... add function in plugin > index.js
===> 
const mysql = require('mysql');

on('task', {
    // deconstruct the individual properties
    queryTestDb({query,params}) {
      const connection = mysql.createConnection(config.env.db)
      connection.connect()
      return new Promise((resolve, reject) => {
        connection.query(query,[params], (error, results) => {
          if (error) reject(error)
          else {
            connection.end()
            return resolve(results)
          }
        })
      })
    }
    })
    
    
    3) make file for testing like mydemoMysql.js in integration folder
    
    make function in describe
   
    ==>
    it('mysql connection',()=>{
        cy.log("data")
        cy.task('queryTestDb',{query:"SELECT * FROM `tbl_demo` WHERE username = ? ",params:"macmax"}).then(results => {
            expect(results).to.have.lengthOf(2)
          })
        cy.wait(3000);
    })
 
 4) database info::
 database name: manthan_demo
 table name : tbl_demo
 columns : demo_id,title,username,password
 ------------------------------------------------------------------
 
note::: performing query can take some times... so always put cy.wait(2000) in query performing lines.....
    
    

## Cypress -localstorage-jwt 

1) first put code in cypress/support/commands.js
===>

    let LOCAL_STORAGE_MEMORY = {};

    Cypress.Commands.add("saveLocalStorageCache", () => {
      Object.keys(localStorage).forEach(key => {
        LOCAL_STORAGE_MEMORY[key] = localStorage[key];
      });
    });

    Cypress.Commands.add("restoreLocalStorageCache", () => {
      Object.keys(LOCAL_STORAGE_MEMORY).forEach(key => {
        localStorage.setItem(key, LOCAL_STORAGE_MEMORY[key]);
      });
    });

    Cypress.Commands.add("clearLocalStorageCache", () => {
        localStorage.clear();
        LOCAL_STORAGE_MEMORY = {};
    });



2) then call it on your file like
===>

    beforeEach(() => {
        cy.restoreLocalStorageCache();
    });
    
    afterEach(() => {
        cy.saveLocalStorageCache();
    });
    
    after(function() {
        cy.clearLocalStorageCache();
    });
    
    
    
   # conclusion : doing this will prvent cypress clearing localstorage and jwt token after your all tests...



