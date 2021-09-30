const db = require('../../config/dbConnection');

const get = async (req, res) => {
    let channel = req.query.channel;
    try {
        const store = `
        SET @channel = ?;
        CALL singleChannelWeek(@channel)
        `; 
        const doQuery = (query) => {
            return new Promise((resolve, reject) => {
                db.query(store, [channel], (error, results, fields) => {
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
}

module.exports = { get };