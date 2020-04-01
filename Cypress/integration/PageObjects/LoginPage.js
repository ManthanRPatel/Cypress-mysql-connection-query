export function selectQuery( tbl_name, condit , queryParams ){
    return new Promise((resolve , reject)=>{
        var sqlQuery = " SELECT * FROM "+ tbl_name + " WHERE "+condit ;
        cy.task('queryTestDb',{ query: sqlQuery ,params: queryParams }).then(results => {
            resolve(results);
        })
        
    })
    // var sqlQuery = " SELECT * FROM "+ tbl_name + " WHERE "+condit ;
    //     var queryParams = queryParams;
    //     cy.task('queryTestDb',{ query: sqlQuery ,params: queryParams }).then(results => {
    //         return(results);
    //     })
}
