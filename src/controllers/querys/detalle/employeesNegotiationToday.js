const db = require('../../../config/dbConnection');

const get = async (req, res) => {
    try {
        const store = `
        CALL employeesNegotiationToday
        `; 
        const doQuery = (query) => {
            return new Promise((resolve, reject) => {
                db.query(store, (error, results, fields) => {
                    if(error) return reject(error);
                    return resolve(results);
                });
            }); 
        }    
        const queryResult = await doQuery();
        let index = queryResult.length - 2;
        res.json(queryResult[index]);
    } catch (error) {
        throw error;
    }
}

module.exports = { get };