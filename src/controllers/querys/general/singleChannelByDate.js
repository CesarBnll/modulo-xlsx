const db = require('../../../config/dbConnection');

const get = async (req, res) => {
    let channel = req.query.channel;
    let initDate = req.query.initDate;
    let endDate = req.query.endDate;
    try {
        const store = `
        SET @channel = ?;
        SET @initDate = ?;
        SET @endDate = ?;
        CALL singleChannelByDate(@channel, @initDate, @endDate)
        `; 
        const doQuery = (query) => {
            return new Promise((resolve, reject) => {
                db.query(store, [channel, initDate, endDate], (error, results, fields) => {
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