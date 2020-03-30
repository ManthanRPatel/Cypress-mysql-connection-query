/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */


const mysql = require('mysql');


module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config


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

}
