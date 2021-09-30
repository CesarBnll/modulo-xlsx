const db = require('../config/dbConnection');

const get = async (req, res) => {
    try {
        const store = `
        CALL employeesThisYear
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
        res.json(queryResult);
    } catch (error) {
        throw error;
    }
    return;
}

module.exports = { get };